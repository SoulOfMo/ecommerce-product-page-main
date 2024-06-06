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
const cart = document.querySelector(".cart-icon");
const cartContain = document.querySelector(".cart-item");
const menuOverlay = document.querySelector(".menu-overlay");
const menuBtn = document.querySelector(".menu");
const closeBtn = document.querySelector(".close-btn");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const productImg = document.querySelector(".main-image");
let count = 1;
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

