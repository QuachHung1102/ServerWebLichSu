"use strict";
import { data1, data2 } from "./data.js";

const getEleByClass = (className) => {
  return document.getElementsByClassName(className);
};
const getEleById = (id) => {
  return document.getElementById(id);
};
const querySelector = (selector) => {
  return document.querySelector(selector);
};

const menu1 = getEleById("menu1");
const menu2 = getEleById("menu2");
const menu3 = getEleById("menu3");
const listThoiKy = querySelector(".list-thoiKy");

const renderMenu = (data) => {
  let content = "";
  content = data.reduce((tdContent, item, index) => {
    tdContent += `
      <div class="itemTitle menuItem">${item.title}</div>
    `;
    return tdContent;
  }, "");
  return content;
};

const renderMenu3 = (data) => {
  let content = "";
  content = data.reduce((tdContent, item, index) => {
    tdContent += `
      <li class="active">
        <p><a href="#">Nhà Trần thay ngôi Nhà Lý</a></p>
        <p>(1225)</p>
      </li>
    `;
    return tdContent;
  }, "");
  return content;
};

const renderListThoiKy = (data) => {
  let content = "";
  content = data.reduce((tdContent, item, index) => {
    tdContent += `
      <div class="thoiKy d-flex column-gap-3">
        <div class="thoiKy-img">
          <img src="../images/${item.id}.png" alt="Ảnh">
        </div>
        <div class="thoiKy-content d-flex flex-column justify-content-center py-2">
          <div class="d-flex justify-content-between align-items-center">
            <h4>
              <a href="/pages/dauAn.html">${item.title}</a>
            </h4>
            <p class="fw-bold text-black m-0">${item.time}</p>
          </div>
          <p class="thoiKy-content-text text-black limited-lines m-0">${item.desc}</p>
        </div>
      </div>
    `;
    return tdContent;
  }, "");
  return content;
};

menu1.innerHTML = renderMenu(data1);
menu2.innerHTML = renderMenu(data2);
listThoiKy.innerHTML = renderListThoiKy(data1);
