const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const elemIngredients = document.querySelector('#ingredients');


const newBlock = ingredients.map((itm, num) => {
  const navItEl = document.createElement('li');
navItEl.textContent = ingredients[num];
navItEl.classList.add('item');

return navItEl;
});

elemIngredients.append(...newBlock);


