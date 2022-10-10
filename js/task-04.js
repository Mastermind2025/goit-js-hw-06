// incBtn.addEventListener('click', () => {
//     counterValue += Number(incBtn.textContent);
//     span.textContent = String(counterValue);
// });
// decBtn.addEventListener('click', () => {
//     counterValue += Number(decBtn.textContent);
//     span.textContent = String(counterValue);
// });


let valueEl = Number(document.querySelector('#value').textContent);

let counterValue = document.querySelector('#value');

const decrementBtn = document.querySelector('#counter').firstElementChild;
const incrementBtn = document.querySelector('#counter').lastElementChild;

incrementBtn.addEventListener('click', (event) => {
  valueEl += 1;

  counterValue.innerText = valueEl;
});

decrementBtn.addEventListener('click', (event) => {
  valueEl -= 1;

  counterValue.innerText = valueEl;
});