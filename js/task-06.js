const input = document.querySelector("#validation-input");
input.addEventListener("blur", handlerCheck);
console.dir(input.dataset);
function handlerCheck(evt) {
  if (evt.currentTarget.value.length === Number(evt.currentTarget.getAttribute("data-length"))) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}
