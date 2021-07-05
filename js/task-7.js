const range = document.querySelector('input#font-size-control');
const text = document.querySelector('span#text');
text.style.fontSize = `${range.value}px`;

range.addEventListener('input', (e) => {
  text.style.fontSize = `${e.target.value}px`;
});
