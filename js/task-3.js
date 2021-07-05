const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

for (const image of images) {
  const item = document.createElement('li');
  item.setAttribute('class', 'item');

  const imageItem = document.createElement('img');
  // imageItem.style.maxWidth = '100px';

  imageItem.setAttribute('class', 'image');
  imageItem.setAttribute('src', image.url);
  imageItem.setAttribute('alt', image.alt);
  document.querySelector('ul#gallery').appendChild(item).appendChild(imageItem);
}

// styles
const container = document.querySelector('div#task-3');
container.style.maxWidth = '1200px';

const gallery = document.querySelector('ul#gallery');
gallery.style.listStyle = 'none';
gallery.style.display = 'flex';
