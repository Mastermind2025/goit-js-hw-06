const ellInput = document.querySelector('#font-size-control');
const ellSpanText = document.querySelector('#text');


ellInput.addEventListener('change', (elem) => {
    // console.log(ellSpanText.style.fontSize);
    ellSpanText.style.fontSize = elem.target.value+'px';
})


// ellInput.addEventListener('input', onValueInput);
// function onValueInput(event) {
//     console.log(event.currentTarget.value);//здесь получаем значение value
// }


