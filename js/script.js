console.log('start js');

const removeCartItemButtons = document.querySelectorAll('.cartProductRow .removeBtn');

for (let i = 0; i < removeCartItemButtons.length; i++) {
  const removeButton = removeCartItemButtons[i];

  removeButton.addEventListener('click', (event) => {
    const buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.parentElement.remove();
  });
}
