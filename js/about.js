const boxTitles = document.querySelectorAll('.boxTitle');
boxTitles.forEach(boxTitle => {
  boxTitle.addEventListener('click', () => {
    boxTitle.parentElement.classList.add('grow');
  });
});

const closeBtns = document.querySelectorAll('.closeBtn');
closeBtns.forEach(closeBtn => {
  closeBtn.addEventListener('click', () => {
    closeBtn.parentElement.classList.remove('grow');
  });
});

const showMoreBtns = document.querySelectorAll('.showMoreBtn');

showMoreBtns.forEach(showMoreBtn => {
  
  showMoreBtn.addEventListener('click', () => {

    const id = (showMoreBtn.href).split('#')[1];

    const aboutDetails = document.querySelectorAll('.aboutDetails');

    aboutDetails.forEach(aboutDetail => {

      if (id === aboutDetail.id) {
        aboutDetail.classList.add('show');
      }
    });
  });
});

// modals
const overlay = document.querySelector('.overlay');
const imagesGallery = document.querySelectorAll('.open');

imagesGallery.forEach(image => {

  image.addEventListener('click', () => {
    const src = image.querySelector('img').src;

    const modal = document.createElement('div');
    modal.classList.add('modal', 'open');
    const modalContent = `<img src="${src}" alt="">
    <img src="/images/closeBtn.png" class="close-modal" />`;
    modal.innerHTML = modalContent;
    overlay.append(modal);
    overlay.classList.add('open');

    const closeModal = document.querySelector('.close-modal');

    closeModal.addEventListener('click', () => {
      closeModal.parentElement.remove();
      overlay.classList.remove('open');
    });
  });
});