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
