// hamburger
const burger = document.querySelector('.hamburger');
burger.addEventListener('click', () => {
  const ul = document.querySelector('header#main ul')
  ul.classList.toggle('active');

  if(ul.classList.contains('active')) {
    document.querySelector('.fa-bars').classList.remove('act');
    document.querySelector('.fa-times').classList.add('act');
    
  } else {
    document.querySelector('.fa-times').classList.remove('act');
    document.querySelector('.fa-bars').classList.add('act');
  }
});