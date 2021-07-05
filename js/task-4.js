const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const counter = document.querySelector('span#value');
let count = Number(counter.textContent);

incrementBtn.addEventListener('click', () => {
  counter.innerHTML = count += 1;
});

decrementBtn.addEventListener('click', () => {
  counter.innerHTML = count -= 1;
});
