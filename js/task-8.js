// elements
const container = document.querySelector('.task-8 .container');
const input = document.querySelector('.task-8 .input');
const button = document.querySelector('.task-8 .input__button');
// random rgb Arr
const randomRgb = () => parseInt(Math.random() * 255);

button.addEventListener('click', () => {
  if (container.childNodes.length > 0) {
    container.innerHTML = '';
  }

  // newItem.remove();
  if (input.value > 0) {
    for (let i = 0; i < input.value; i++) {
      const item = document.createElement('div');
      item.style.width = `${30 + i * 10}px`;
      item.style.height = `${30 + i * 10}px`;
      item.style.backgroundColor = `rgb(${randomRgb()}, ${randomRgb()}, ${randomRgb()})`;

      container.appendChild(item);
    }
  }
});
