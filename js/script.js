if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready);
} else {
  ready();
}


function ready() {

  const removeCartItemButtons = document.querySelectorAll('.cartProductRow .removeBtn');

  for (let i = 0; i < removeCartItemButtons.length; i++) {
    const removeButton = removeCartItemButtons[i];

    removeButton.addEventListener('click', removeCartItem);
  }

  const quantityInputs = document.querySelectorAll('.cartRowQuantity input');

  for (let i = 0; i < quantityInputs.length; i++) {
    const input = quantityInputs[i];
    input.addEventListener('change', quantityChanged);
  }
}

function quantityChanged(event) {
  const input = event.target;

  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateCartTotal();
}

function removeCartItem(event) {
  const buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.parentElement.remove();
  updateCartTotal();
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
  total = Math.round(total * 100) / 100;
  document.querySelector('.totalPrice').innerText = total + '$';
}

// updateCartTotal()