//Decelaring items
const cart = document.querySelector(".cart-icon");
const cartContain = document.querySelector(".cart-item");
const addToCartBtn = document.querySelector('.add-to-cart');
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
const nosOfItem = document.querySelector(".nos-of-item");
const total = document.querySelector(".total");
const cartDetails = document.querySelector(".cart-details");
const cartMsg = document.querySelector(".cart-msg");
const productImgContainer = document.querySelector(".product-image");
const thumblineImg = document.querySelectorAll(
  "#product-images .img-container"
);
const overlayContainer = document.querySelector(".overlay-container");
const overlayClsBtn = document.querySelector(".overlay-cls-btn");
const overlayPrevBtn = overlayContainer.querySelector(".prev");
const overlayNextBtn = overlayContainer.querySelector(".next");
const overlayMainImg = overlayContainer.querySelector(".product-image img");
const overlayThumbnails = overlayContainer.querySelectorAll(".img-container");

console.log(overlayMainImg);
let count = 1;
let number = 0;

// Toggle Function
cart.addEventListener("click", function () {
  cartContain.classList.toggle("hidden");
});

menuBtn.addEventListener("click", function () {
  menuOverlay.classList.add("show");
});

closeBtn.addEventListener("click", function () {
  menuOverlay.classList.remove("show");
});

function next(a) {
  if (count == 4) {
    count = 1;
  } else {
    count++;
  }
  a.setAttribute("src", `./images/image-product-${count}.jpg`);
}

function prev(path) {
  if (count == 1) {
    count = 4;
  } else {
    count--;
  }
  path.setAttribute("src", `./images/image-product-${count}.jpg`);
}

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

overlayPrevBtn.addEventListener("click", function () {
  next(overlayMainImg);
});

overlayNextBtn.addEventListener("click", function () {
  prev(overlayMainImg);
});

// Number of Item Added to cart

increaseBtn.addEventListener("click", function () {
  number++;
  itemNumber.textContent = number;
  addToCartBtn.addEventListener('click', function(){
    if (number > 0) {
      cartNumber.classList.remove("hidden");
      cartNumber.textContent = number;
      nosOfItem.textContent = number;
      let price = 125;
      price *= number;
      total.textContent = ` $${price}`;
      cartMsg.classList.add("hidden");
      cartDetails.classList.remove("hidden");
    } else {
      cartMsg.classList.remove("hidden");
      cartDetails.classList.add("hidden");
    }
  })
  
});

decreaseBtn.addEventListener("click", function () {
  if (number > 0) {
    number--;
    itemNumber.textContent = number;
    cartNumber.textContent = number;
    nosOfItem.textContent = number;
    let price = 125;
    console.log(number, price);
    price *= number;
    total.textContent = ` $${price}`;
  }
  if (number == 0) {
    cartNumber.classList.add("hidden");
    cartMsg.classList.remove("hidden");
    cartDetails.classList.add("hidden");
  }
});
// I used dataset to get the number of the image
thumblineImg.forEach(function (el) {
  el.addEventListener("click", function () {
    thumblineImg.forEach(function (item) {
      item.classList.remove("active");
    });
    this.classList.add("active");
    let currentImage = this.querySelector("img").dataset.number;
    productImg.setAttribute(
      "src",
      `./images/image-product-${currentImage}.jpg`
    );
  });
});

// I used index property of an array
overlayThumbnails.forEach(function (el, id) {
  el.addEventListener("click", function () {
    overlayThumbnails.forEach(function (item) {
      item.classList.remove("active");
    });
    this.classList.add("active");
    console.log(id);
    let currentImage = this.querySelector("img");
    overlayMainImg.setAttribute("src", `./images/image-product-${id + 1}.jpg`);
  });
});

productImgContainer.addEventListener("click", function () {
  if (window.innerWidth > 768) {
    overlayContainer.classList.remove("hidden");
  } else {
    overlayContainer.classList.add("hidden");
  }
});

overlayClsBtn.addEventListener("click", function () {
  overlayContainer.classList.add("hidden");
});
