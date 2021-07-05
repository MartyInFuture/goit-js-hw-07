const input = document.querySelector('input#validation-input');
const dataLength = input.getAttribute('data-length');

input.addEventListener('focusout', (e) => {
  if (e.target.value.length < dataLength) {
    input.classList.add('invalid');
    input.classList.remove('valid');
  } else {
    input.classList.add('valid');
    input.classList.remove('invalid');
  }
});
