// const categoriesList = document.querySelector("#categories");
const categoryItems = document.querySelectorAll(".item");

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach((list) => {
  console.log(`Category: ${list.firstElementChild.textContent}`);
  console.log(`Elements: ${list.lastElementChild.children.length}`);
});
