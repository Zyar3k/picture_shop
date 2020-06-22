const form = document.querySelector('#form');
const textarea = document.querySelector('#textarea');
const username = document.querySelector('#username');
const email = document.querySelector('#email');

form.addEventListener('submit', event => {
  event.preventDefault();

  checkInputs();
});

function checkInputs() {
  
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const textareaValue = textarea.value;

  if(usernameValue === '') {
		setErrorFor(username, 'Podaj swoje imię');
	} else {
		setSuccessFor(username);
  }

  if(textareaValue === '') {
		setErrorFor(textarea, 'Wpisz wiadomość');
	} else {
		setSuccessFor(textarea);
  }
  
  if(emailValue === '') {
		setErrorFor(email, 'Podaj adres e-mail');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Niepoprawny adres e-mail');
	} else {
		setSuccessFor(email);
	}
}

function setErrorFor(input, message) {

  const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'inputRow error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'inputRow success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}