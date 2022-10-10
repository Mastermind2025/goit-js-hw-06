const txIn = document.querySelector('#validation-input');

txIn.addEventListener('blur', (event) => {
    if (event.target.value.length == txIn.getAttribute('data-length')) {
        txIn.classList.add('valid');
   
        if (txIn.classList.contains('invalid')) {
            txIn.classList.remove('invalid');
        }
    }
    else {
        if (txIn.classList.contains('valid')) {
            txIn.classList.remove('valid');
        }
        txIn.classList.add('invalid');
    }


});