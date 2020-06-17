console.log('start js');

const removeCartItemButtons = document.querySelectorAll('.cartProductRow .removeBtn');

for (let i = 0; i < removeCartItemButtons.length; i++) {
  const removeButton = removeCartItemButtons[i];

  removeButton.addEventListener('click', (event) => {
    const buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.parentElement.remove();

    updateCartTotal();
  });
}


function updateCartTotal() {

  const cartContainer = document.querySelector('.cartProductsContainer');
  const cartProductRows = cartContainer.querySelectorAll('.cartProductRow');

  let total = 0;

  for (let i = 0; i < cartProductRows.length; i++) {
    const cartProductRow = cartProductRows[i];
    const priceEl = cartProductRow.querySelector('.cartRowPrice');
    const quantityEl = cartProductRow.querySelector('.cartRowQuantity input');
    const price = parseFloat(priceEl.innerText.replace(' $', ''));
    const quantity = parseInt(quantityEl.value);
    total = total + (price * quantity);
  }

  document.querySelector('.totalPrice').innerText = total + '$';
}

// updateCartTotal()