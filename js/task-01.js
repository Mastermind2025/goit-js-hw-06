const elemTiy = document.querySelector('#categories');
console.log('');
console.log('Number of categories:', elemTiy.children.length);

// console.log(elemTiy.children.length);

const elemMisc = document.querySelectorAll('.item');
// const elemMisc = elemTiy.querySelectorAll('li');

// console.log(elemMisc);
// const allAm = elemMisc.firstElementChild;
// console.log(allAm);
// const mum = elemMisc.lastElementChild.children.length;
// console.log(num);

elemMisc.forEach(elem => {
    console.log('');
   
    console.log('Category:' + ' ' + elem.firstElementChild.textContent);
    console.log('Elements:' + ' ' + elem.lastElementChild.children.length);
});
// console.log(elemMisc.firstElementChild.textContent);