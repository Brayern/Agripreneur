// main.js placeholder - merged JavaScript content should go here
/* -----------------------------------
   Part 1: Event Handling Basics
----------------------------------- */

// Click event → toggle highlight on hero section
document.querySelector(".hero-text button").addEventListener("click", () => {
  document.querySelector(".hero-text").classList.toggle("highlight");
});

// Mouseover event → log message when hovering over logo
document.querySelector(".logo").addEventListener("mouseover", () => {
  console.log("🌱 Welcome to Agribros!");
});

// Keyboard event → detect typing in the contact form
document.getElementById("name").addEventListener("keyup", (e) => {
  console.log(`Typing: ${e.target.value}`);
});

/* -----------------------------------
   Part 1b: Variables & Conditionals
----------------------------------- */
let stockFertilizer = 10;
let stockSeeds = 0;

if (stockFertilizer > 0) {
  console.log("Fertilizer is available ✅");
} else {
  console.log("Fertilizer is out of stock ❌");
}

if (stockSeeds > 0) {
  console.log("Seeds are available ✅");
} else {
  console.log("Seeds are out of stock ❌");
}

/* -----------------------------------
   Part 2: Interactive Elements
----------------------------------- */

// Light/Dark Mode Toggle
const toggleBtn = document.createElement("button");
toggleBtn.textContent = "🌙 Toggle Dark Mode";
toggleBtn.className = "toggle-btn";
document.querySelector(".navbar").appendChild(toggleBtn);

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Collapsible FAQ Section
document.querySelectorAll(".faq-item h3").forEach(question => {
  question.addEventListener("click", () => {
    question.nextElementSibling.classList.toggle("show");
  });
});

/* -----------------------------------
   Part 2: Form Validation
----------------------------------- */
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMsg = document.getElementById("formMsg");

  if (name === "" || email === "" || message === "") {
    formMsg.textContent = "⚠️ All fields are required!";
    formMsg.style.color = "red";
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;
  if (!email.match(emailPattern)) {
    formMsg.textContent = "⚠️ Invalid email format!";
    formMsg.style.color = "red";
    return;
  }

  if (message.length < 10) {
    formMsg.textContent = "⚠️ Message must be at least 10 characters.";
    formMsg.style.color = "red";
    return;
  }

  formMsg.textContent = "✅ Your message has been sent!";
  formMsg.style.color = "green";
  this.reset();
});

/* -----------------------------------
   Part 2b: Functions — Scope, Parameters & Return Values
----------------------------------- */
let globalDiscountRate = 10;

function calculateDiscount(price, discountPercent) {
  let discount = (price * discountPercent) / 100; // local variable
  return price - discount;
}

function applyGlobalDiscount(price) {
  return calculateDiscount(price, globalDiscountRate);
}

function updateMessage(newText) {
  let msgElement = document.getElementById("message");
  msgElement.innerText = newText;
  return msgElement.innerText;
}

function triggerAnimation(elementId, animationClass) {
  let element = document.getElementById(elementId);
  element.classList.add(animationClass);
  element.addEventListener("animationend", () => {
    element.classList.remove(animationClass);
  });
}

console.log("Price after 10% discount:", calculateDiscount(1000, 10));
console.log("Price after global discount:", applyGlobalDiscount(2000));

updateMessage("Agribros Special Discounts Available! 🌱");

/* -----------------------------------
   Part 3: Loops
----------------------------------- */
let products = ["Organic Fertilizer", "Irrigation Kit", "Hybrid Seeds"];
for (let i = 0; i < products.length; i++) {
  console.log("Product:", products[i]);
}

let deliveryDays = 3;
while (deliveryDays > 0) {
  console.log(`Delivery in ${deliveryDays} days...`);
  deliveryDays--;
}

/* -----------------------------------
   Part 3b: Combining CSS Animations with JS
----------------------------------- */
function toggleClass(elementId, className) {
  let el = document.getElementById(elementId);
  el.classList.toggle(className);
}

function addClass(elementId, className) {
  let el = document.getElementById(elementId);
  el.classList.add(className);
}

function removeClass(elementId, className) {
  let el = document.getElementById(elementId);
  el.classList.remove(className);
}

// Card flip
document.getElementById("flipCardBtn").addEventListener("click", function() {
  toggleClass("promoCard", "flip");
});

// Loader
document.getElementById("showLoaderBtn").addEventListener("click", function() {
  addClass("loaderBox", "spin");
  updateMessage("Loading... ⏳");
});

document.getElementById("hideLoaderBtn").addEventListener("click", function() {
  removeClass("loaderBox", "spin");
  updateMessage("Done Loading ✅");
});

// Buy button triggers flash animation
document.getElementById("buyBtn").addEventListener("click", function() {
  updateMessage("Processing your order... 🛒");
  triggerAnimation("message", "flash");
});

/* -----------------------------------
   Part 4: Modal with Slide-in & Fade-out
----------------------------------- */
let modalOverlay = document.getElementById("modalOverlay");
let showModalBtn = document.getElementById("showModalBtn");
let closeModalBtn = document.getElementById("closeModalBtn");

showModalBtn.addEventListener("click", function() {
  modalOverlay.classList.add("active");
  updateMessage("Special Offer Opened 🎉");
});

closeModalBtn.addEventListener("click", function() {
  modalOverlay.classList.remove("active");
  modalOverlay.classList.add("fadeOut");

  modalOverlay.addEventListener("animationend", () => {
    modalOverlay.classList.remove("fadeOut");
    modalOverlay.style.display = "none";
  }, { once: true });

  updateMessage("Offer Closed ❌");
});
