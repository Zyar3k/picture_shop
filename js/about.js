// console.log('about start');


const boxes = document.querySelectorAll('#about .mainBox');

console.log(boxes)

boxes.forEach(box => {
  
  box.addEventListener('click', () => {
  
    box.classList.add('grow')
  
  })
});
