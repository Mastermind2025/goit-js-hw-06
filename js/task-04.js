// incBtn.addEventListener('click', () => {
//     counterValue += Number(incBtn.textContent);
//     span.textContent = String(counterValue);
// });
// decBtn.addEventListener('click', () => {
//     counterValue += Number(decBtn.textContent);
//     span.textContent = String(counterValue);
// });


// let valueEl = Number(document.querySelector('#value').textContent);

// let counterValue = document.querySelector('#value');

// const decrementBtn = document.querySelector('#counter').firstElementChild;
// const incrementBtn = document.querySelector('#counter').lastElementChild;

// incrementBtn.addEventListener('click', (event) => {
//   valueEl += 1;

//   counterValue.innerText = valueEl;
// });

// decrementBtn.addEventListener('click', (event) => {
//   valueEl -= 1;

//   counterValue.innerText = valueEl;
// });



let numberTo = Number(document.querySelector('span#value').innerText);
let numInWin = document.querySelector('span#value');


// console.log(numberTo.innerText);//Text from span
// console.log(typeof(numberTo.innerText));//This is string
// console.log(typeof(Number(numberTo.innerText)));//String to number
// const numThird = Number(numberTo.innerText) + 3;
// console.log(numThird);// number 3

const firstButton = document.querySelector('div#counter').firstElementChild;
const lastButton = document.querySelector('div#counter').lastElementChild;
// console.log(firstButton);
// console.log(lastButton);

firstButton.addEventListener('click', (event) => {
    numberTo = numberTo - 1;
    numInWin.innerText = numberTo;
})

lastButton.addEventListener('click', (event) => {
    numberTo = numberTo + 1;
    numInWin.innerText = numberTo;
})

