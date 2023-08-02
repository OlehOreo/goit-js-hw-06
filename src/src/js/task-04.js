const elements = {
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
  counter: document.querySelector("#value"),
};
let counterValue = 0;

elements.decrementBtn.addEventListener("click", handlerDecrement);
elements.incrementBtn.addEventListener("click", handlerIncrement);

function handlerDecrement() {
  elements.counter.textContent = counterValue -= 1;
}
function handlerIncrement() {
  elements.counter.textContent = counterValue += 1;
}
