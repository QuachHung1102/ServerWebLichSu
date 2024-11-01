"use strict";

import { dataForHome } from "./data.js";

// Render modal content
function renderToDo() {
  return dataForHome.reduceRight((tdContent, item, index) => {
    tdContent += `
      <div id="modal${index}" class="customModal hidden">
        <button id="close-modal${index}" class="close-modal">&times;</button>
        <h1>${item.title}</h1>
        <img src="./images/${item.id}.png" alt="logo">
        <p>${item.desc}</p>
      </div>
    `;
    return tdContent;
  }, "");
}

document.querySelector("body").innerHTML += renderToDo();

// Utility function to get element by ID
const getEl = (id) => document.getElementById(id);

// DOM elements
const modals = document.querySelectorAll(".customModal");
const btnCloseModal = document.querySelectorAll(".close-modal");
const milestones = document.querySelectorAll(".milestone");
const overlay = document.querySelector(".overlay");

// Close modal function
const closeModal = () => {
  modals.forEach((modal) => modal.classList.add("hidden"));
  overlay.classList.add("hidden");
};

// Add event listeners to close buttons
btnCloseModal.forEach((btn) => btn.addEventListener("click", closeModal));

// Add event listeners to milestones
milestones.forEach((milestone, index) => {
  milestone.addEventListener("click", () => {
    getEl(`modal${index}`).classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
});

// Add event listener to overlay
overlay.addEventListener("click", closeModal);

// Add event listener for escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});