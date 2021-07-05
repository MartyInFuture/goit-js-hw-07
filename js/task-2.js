const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

for (const ingredient of ingredients) {
  const ingredientItem = document.createElement('li');
  ingredientItem.textContent = ingredient;
  document.querySelector('ul#ingredients').appendChild(ingredientItem);
}
