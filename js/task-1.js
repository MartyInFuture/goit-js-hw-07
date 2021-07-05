console.log('TASK 1:');
const categories = document.getElementById('categories').children;
const categoriesLength = categories.length;
console.log(categoriesLength, 'categories in list.');

for (const category of categories) {
  console.log(
    `Категория:${
      category.querySelector('h2').innerHTML
    } \n Количесво элементов: ${category.querySelectorAll('li').length}`
  );
}
