const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const navEl = document.createElement('ul');
navEl.classList.add('site-nav');
// console.log(navEl);

const newBlock = ingredients.map((itm, num) => {
  const navItEl = document.createElement('li');
navItEl.textContent = ingredients[num];
navItEl.classList.add('item');

return navItEl;
});

navEl.append(...newBlock);
console.log(navEl);

