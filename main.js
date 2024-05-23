document.addEventListener("DOMContentLoaded", () => {
  const itemCount = document.getElementById("itemCount");
  const increaseButton = document.getElementById("increase");
  const decreaseButton = document.getElementById("decrease");

  let count = 0;

  increaseButton.addEventListener("click", () => {
    count++;
    updateCount();
  });

  decreaseButton.addEventListener("click", () => {
    if (count > 0) {
      count--;
      updateCount();
    }
  });

  function updateCount() {
    itemCount.textContent = count;
  }
});
