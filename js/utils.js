// utils.js
function toggleClass(elementId, className) {
  let el = document.getElementById(elementId);
  if (el) el.classList.toggle(className);
}

function addClass(elementId, className) {
  let el = document.getElementById(elementId);
  if (el) el.classList.add(className);
}

function removeClass(elementId, className) {
  let el = document.getElementById(elementId);
  if (el) el.classList.remove(className);
}
