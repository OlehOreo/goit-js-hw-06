const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

input.addEventListener("input", handlerName);

function handlerName(evt) {
  const name = evt.currentTarget.value.trim() || "Anonymous";
  span.textContent = name;
}
