increment = document.querySelector("#increment");
decrement = document.querySelector("#decrement");
reset = document.querySelector("#reset");
counterValue = document.querySelector("#counterValue");

counter = 0;

increment.addEventListener("click", () => {
  counter++;
  counterValue.innerText = counter;
});
decrement.addEventListener("click", () => {
  counter--;
  counterValue.innerText = counter;
});
reset.addEventListener("click", () => {
  counter = 0;
  counterValue.innerText = counter;
});
