//Decelaring items
const cart = document.querySelector(".cart-icon");
const cartContain = document.querySelector(".cart-item");
const menuOverlay = document.querySelector(".menu-overlay");
const menuBtn = document.querySelector(".menu");
const closeBtn = document.querySelector(".close-btn");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const productImg = document.querySelector(".main-image");
const decreaseBtn = document.querySelector(".decrease");
const increaseBtn = document.querySelector(".increase");
const itemNumber = document.querySelector(".count");
const cartNumber = document.querySelector(".cart-number");
const nosOfItem = document.querySelector('.nos-of-item')
const total = document.querySelector('.total')
const cartDetails = document.querySelector(".cart-details");
const cartMsg = document.querySelector(".cart-msg");
let count = 1;
let number = 0;
console.log(productImg);

cart.addEventListener("click", function () {
  cartContain.classList.toggle("hidden");
});

menuBtn.addEventListener("click", function () {
  menuOverlay.classList.add("show");
});

closeBtn.addEventListener("click", function () {
  menuOverlay.classList.remove("show");
});

nextBtn.addEventListener("click", function () {
  if (count == 4) {
    count = 1;
  } else {
    count++;
  }

  productImg.setAttribute("src", `./images/image-product-${count}.jpg`);
});

prevBtn.addEventListener("click", function () {
  if (count == 1) {
    count = 4;
  } else {
    count--;
  }

  productImg.setAttribute("src", `./images/image-product-${count}.jpg`);
});

// Number of Item Added to cart

increaseBtn.addEventListener("click", function () {
  number++;
  itemNumber.textContent = number;
  if (number > 0) {
    cartNumber.classList.remove("hidden");
    cartNumber.textContent = number;
    nosOfItem.textContent = number
    let price = 125
    price *= number;
    total.textContent = ` $${price}`;
    cartMsg.classList.add('hidden')
    cartDetails.classList.remove('hidden')
  } else {
     cartMsg.classList.remove("hidden");
     cartDetails.classList.add("hidden");
  }
  console.log(number);
});

decreaseBtn.addEventListener("click", function () {
  if (number > 0) {
    number--;
    itemNumber.textContent = number;
    cartNumber.textContent = number;
    nosOfItem.textContent = number;
    let price = 125
    console.log(number, price);
    price *= number;
    total.textContent = ` $${price}`
  } 
  if (number == 0) {
    cartNumber.classList.add("hidden");
    cartMsg.classList.remove("hidden");
    cartDetails.classList.add("hidden");
  } 
  console.log(number);
});




const mainImg = document.querySelectorAll(".product-image img");
const thumblineImg = document.querySelectorAll(
  ".product-thumbnails .img-container"
);

thumblineImg.forEach(function (item) {
  item.addEventListener("click", function (e) {
    const currentImage = e.currentTarget.classList;
    console.log(currentImage);
    if (!currentImage.contains("active")) {
      currentImage.add("active");
    } else {
      currentImage.remove("active");
    }
  });
});

console.log(mainImg);
// document.addEventListener("DOMContentLoaded", () => {
//   const itemCount = document.getElementById("itemCount");
//   const increaseButton = document.getElementById("increase");
//   const decreaseButton = document.getElementById("decrease");

//   let count = 0;

//   increaseButton.addEventListener("click", () => {
//     count++;
//     updateCount();
//   });

//   decreaseButton.addEventListener("click", () => {
//     if (count > 0) {
//       count--;
//       updateCount();
//     }
//   });

//   function updateCount() {
//     itemCount.textContent = count;
//   }
// });

// Cart