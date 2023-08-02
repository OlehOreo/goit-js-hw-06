const input = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");
input.addEventListener("input", handlerFontSize);
console.log(input.value);

function handlerFontSize(evt) {
  spanText.style.fontSize = evt.currentTarget.value + "px";
}
