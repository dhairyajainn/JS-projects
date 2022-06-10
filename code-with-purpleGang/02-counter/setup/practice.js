const people = [
  { name: "bob", age: 20, position: "developer" },
  { name: "anna", age: 25, position: "designer" },
  { name: "susy", age: 30, position: "boss" },
  { name: "john", age: 23, position: "intern" },
];

const peoples = people
  .map((people) => {
    return `<h1>${people.name}</h1> <h2>${people.age}</h2>`;
  })
  .join(" ");

const practice = document.querySelector(".practice");
// practice.innerHTML = peoples;

const menu = [
  { name: "pancakes", category: "breakfast" },
  { name: "burger", category: "lunch" },
  { name: "steak", category: "dinner" },
  { name: "bacon", category: "breakfast" },
  { name: "eggs", category: "breakfast" },
  { name: "rice", category: "lunch" },
  { name: "biryani", category: "dinner" },
  { name: "cake", category: "dinner" },
  { name: "tea", category: "breakfast" },
  { name: "pizza", category: "lunch" },
];
const categories = ["all", ...new Set(menu.map((item) => item.category))];
// console.log(categories);
practice.innerHTML = categories
  .map((item) => {
    return `<button>${item}</button>`;
  })
  .join(" ");
