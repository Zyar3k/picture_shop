// console.log('about start');


const boxTitles = document.querySelectorAll('.boxTitle');
boxTitles.forEach(boxTitle => {
  boxTitle.addEventListener('click', () => {
    boxTitle.parentElement.classList.add('grow')
  })
});

const closeBtns = document.querySelectorAll('.closeBtn');
closeBtns.forEach(closeBtn => {
  closeBtn.addEventListener('click', () => {
    closeBtn.parentElement.classList.remove('grow')
  })
});

const showMoreBtns = document.querySelectorAll('.showMoreBtn');

showMoreBtns.forEach(showMoreBtn => {
  
  showMoreBtn.addEventListener('click', () => {
    const id = (showMoreBtn.href).slice(33)


    const aboutDetails = document.querySelectorAll('.aboutDetails');

    aboutDetails.forEach(aboutDetail => {

      
      if (id === aboutDetail.id) {
        console.log(id)      
        console.log(aboutDetail.id)
        aboutDetail.classList.add('show')
      }
    });

    console.log(id)

  })
});

// const boxes = document.querySelectorAll('.aboutBoxIntro');

// // console.log(boxes)

// boxes.forEach(box => {
//   console.log(box)
  
//   box.addEventListener('click', () => {

//     // box = event.target;
//     box.classList.add('grow');
//     console.log(box)

//     const closeBtn = box.querySelector('.closeBtn');
//     console.log(closeBtn)

//     closeBtn.addEventListener('click', () => {
//       // console.log('dupa')
//       const tst = box;
//       console.log(tst)
//       tst.classList.remove('grow');
//     })
  
//   })
  
  
// });
// closeBtn.addEventListener('click', () => {
//   // box.classList.remove('grow');
// })


// showMoreBtns.forEach(button => {
  
  // showMoreBtn.addEventListener('click', () => {
  //   // button = event.target;
  // })
// });