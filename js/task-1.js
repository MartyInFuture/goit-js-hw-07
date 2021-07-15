console.log('TASK 1:');
const categories = document.getElementById('categories').children;
console.log(categories.length, 'categories in list.');

for (const category of categories) {
  console.log(
    `Категория:${
      category.querySelector('h2').innerHTML
    } \n Количесво элементов: ${category.querySelectorAll('li').length}`
  );
}
