const input = document.querySelector('input#name-input');
const greeting = document.querySelector('span#name-output');

input.addEventListener('input', (e) => {
  if (e.target.value.length !== 0) {
    greeting.innerHTML = e.target.value;
  } else {
    greeting.innerHTML = 'незнакомец';
  }
});
