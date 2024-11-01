"use strict";

import { data1 } from "./data.js";

// Utility function to get element by ID
const getEl = (id) => document.getElementById(id);

// DOM elements
const btnContents = document.querySelectorAll(".timeLine-item");
const timeLineTextC = document.querySelector(".timeLine_textC");
const timeLineContainer = document.querySelector(".timeLineContainer");

let isDown = false;
let startX;
let scrollLeft;

// Add event listeners to timeline items
btnContents.forEach((btn, index) => {
  btn.addEventListener("click", function () {
    this.classList.toggle("active");
    btnContents.forEach((item) => {
      if (item !== this) item.classList.remove("active");
    });
    timeLineTextC.innerHTML = `
      <h3>${data1[index].title}</h3>
      <p>${data1[index].desc}</p>
    `;
  });
});

// Add event listeners for timeline container drag functionality
timeLineContainer.addEventListener("mousedown", (e) => {
  isDown = true;
  timeLineContainer.classList.add("active");
  startX = e.pageX - timeLineContainer.offsetLeft;
  scrollLeft = timeLineContainer.scrollLeft;
});

timeLineContainer.addEventListener("mouseleave", () => {
  isDown = false;
  timeLineContainer.classList.remove("active");
});

timeLineContainer.addEventListener("mouseup", () => {
  isDown = false;
  timeLineContainer.classList.remove("active");
});

timeLineContainer.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - timeLineContainer.offsetLeft;
  const walk = (x - startX) * 1.5; // Number of pixels to scroll
  timeLineContainer.scrollLeft = scrollLeft - walk;
});
