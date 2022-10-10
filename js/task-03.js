const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
    width: 200,
    height: 150,
    
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    width: 200,
    height: 150,
    
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
    width: 200,
    height: 150,
   
  },
];

const list = document.querySelector('.gallery');

let markup = '';
images.forEach(img => {
    markup = images
          .map(
            img =>
            `<li class='gallery__item' ><img class='gallery__img' src='${img.url}' alt='${img.alt}'
                 width='${img.width}' height='${img.height}' ></li>`
        )
         .join('');
});
list.insertAdjacentHTML('afterbegin', markup);