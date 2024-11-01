"use strict";
import { data1, data2 } from "./data.js";

// Utility functions
const getEleByClass = (className) => document.getElementsByClassName(className);
const getEleById = (id) => document.getElementById(id);
const querySelector = (selector) => document.querySelector(selector);
const querySelectorAll = (selector) => document.querySelectorAll(selector);

// DOM elements
const leftBtn = querySelector(".left-content");
const centerText = querySelector(".center-content");
const rightBtn = querySelector(".right-content");
const menu1 = getEleById("menu1");
const menu2 = getEleById("menu2");
const menu3 = getEleById("menu3");
const dauAnContent = querySelector("#dauAn-content");

// Decode URL parameter
const urlParams = new URLSearchParams(window.location.search);
const decodedTitle = decodeURIComponent(urlParams.get("title"));

// Render functions
const renderMenu = (data) => data.reduce((content, item) => content + `<div class="itemTitle menuItem">${item.title}</div>`, "");

const renderMenu3 = (key = decodedTitle, load = false) => {
  const listTime = data1.find((item) => item.title === key).content;
  return listTime.reduce((content, item, index) => content + `
    <li class="${index === 0 && load ? 'active ' : ''}menu3-item">
      <p>${item.title}</p>
      <span>(${item.time})</span>
    </li>
  `, "");
};

const renderDauAnContent = (key = decodedTitle, load = false, suKien) => {
  const listTime = data1.find((item) => item.title === key).content;
  return load ? listTime[0].text : listTime.find((item) => item.title === suKien).text;
};

const renderPaginationBar = (key = decodedTitle) => {
  let prev, next;
  data1.forEach((item, index) => {
    if (item.title === key) {
      prev = data1[index - 1];
      next = data1[index + 1];
      querySelector(".icon-prev").style.opacity = index === 0 ? "0" : "1";
      querySelector(".icon-next").style.opacity = index === data1.length - 1 ? "0" : "1";
    }
  });
  leftBtn.querySelector("p").textContent = prev ? prev.title : "";
  centerText.querySelector("p").textContent = key;
  rightBtn.querySelector("p").textContent = next ? next.title : "";
};

// Event listeners
const addClickEventForMenu3 = (key = decodedTitle) => {
  querySelectorAll(".menu3-item").forEach((item) => {
    item.addEventListener("click", function () {
      this.classList.toggle("active");
      const suKien = this.querySelector("p").textContent;
      dauAnContent.innerHTML = renderDauAnContent(key, false, suKien);
      querySelectorAll(".menu3-item").forEach((it) => {
        if (it !== this) it.classList.remove("active");
      });
    });
  });
};

if (leftBtn) {
  leftBtn.addEventListener("click", () => {
    const key = leftBtn.querySelector("p").textContent;
    renderPaginationBar(key);
    menu3.innerHTML = renderMenu3(key);
    addClickEventForMenu3(key);
    dauAnContent.innerHTML = renderDauAnContent(key, true);
  });
}

if (rightBtn) {
  rightBtn.addEventListener("click", () => {
    const key = rightBtn.querySelector("p").textContent;
    renderPaginationBar(key);
    menu3.innerHTML = renderMenu3(key);
    addClickEventForMenu3(key);
    dauAnContent.innerHTML = renderDauAnContent(key, true);
  });
}

// Initial render
if (menu1) menu1.innerHTML = renderMenu(data1);
if (menu2) menu2.innerHTML = renderMenu(data2);
if (menu3) {
  menu3.innerHTML = renderMenu3(decodedTitle, true);
  renderPaginationBar();
  addClickEventForMenu3();
}
if (dauAnContent) dauAnContent.innerHTML = renderDauAnContent(decodedTitle, true);

console.log(`menu.js`);
