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

  const addToCartButtons = document.querySelectorAll('.btnWrapper button');
  for (let i = 0; i < addToCartButtons.length; i++) {
    const button = addToCartButtons[i];
    button.addEventListener('click', addToCartClicked);
  }

  document.querySelector('#purchaseBtn').addEventListener('click', purchaseClicked);
}


function purchaseClicked() {
  alert('Dziękujemy za zakupy!!');
  const cartProducts = document.querySelector('.cartProductsContainer');
  console.log(cartProducts)
  while (cartProducts.hasChildNodes()) {
    cartProducts.removeChild(cartProducts.firstChild)
  }

  updateCartTotal();
}

function removeCartItem(event) {
  const buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.parentElement.remove();
  updateCartTotal();
}

function quantityChanged(event) {
  const input = event.target;

  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateCartTotal();
}

function addToCartClicked(event) {
  const button = event.target;
  const productBox = button.parentElement.parentElement;
  const title = productBox.querySelector('.productTitle').innerText;
  const imgSrc = productBox.querySelector('img').src;
  const price = productBox.querySelector('.productPrice').innerText;
  addItemToCart(title, imgSrc, price);
  updateCartTotal();
}

function addItemToCart(title, imgSrc, price) {
  const cartProducts = document.createElement('div');
  cartProducts.classList.add('cartProductRow');
  const cartProductRow = document.querySelector('.cartProductsContainer');
  const cartProductNames = cartProductRow.querySelectorAll('.cartRowName p');

  for (let i = 0; i < cartProductNames.length; i++) {

    if (cartProductNames[i].innerText == title) {
      alert('Ten produkt znajduje się już w koszyku');
      return
    }
  }

  const cartProductContents = `
    <div class="cartRowName">
      <img src="${imgSrc}" alt="img3">
      <p>${title}</p>
    </div>
    <div class="cartRowPrice">${price}</div>
    <div class="cartRowQuantity">
      <input type="number" value="1">
      <button class="removeBtn"><i class="fas fa-trash-alt"></i></button>
    </div>
  `
  cartProducts.innerHTML = cartProductContents;
  cartProductRow.append(cartProducts);
  cartProductRow.querySelectorAll('.removeBtn').forEach(element => {
    element.addEventListener('click', removeCartItem);
  });

  cartProductRow.querySelectorAll('input').forEach(element => {
    element.addEventListener('change', quantityChanged);
  });
}

function updateCartTotal() {

  const cartContainer = document.querySelector('.cartProductsContainer');
  const cartProductRows = cartContainer.getElementsByClassName('cartProductRow');

  let total = 0;

  for (let i = 0; i < cartProductRows.length; i++) {
    const cartProductRow = cartProductRows[i];
    const priceEl = cartProductRow.querySelector('.cartRowPrice');
    const quantityEl = cartProductRow.querySelector('.cartRowQuantity input');
    const price = parseFloat(priceEl.innerText.replace(' zł', ''));
    const quantity = parseInt(quantityEl.value);
    total = total + (price * quantity);
  }

  total = Math.round(total * 100) / 100;
  document.querySelector('.totalPrice').innerText = `${total} zł`;
}

// to top button
const toTopButton = document.querySelector("#toTopButton");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200) {
    toTopButton.classList.add('appear')
  } else {
    toTopButton.classList.remove('appear')
  }
}

toTopButton.addEventListener('click', topFunction);
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// scale img
const images = document.querySelectorAll('.productsContainer img');
images.forEach(img => {
  
  img.addEventListener('click', () => {
    img.classList.toggle('scale');
  })
});