function loadMenu() {
   const content = document.querySelector('#content');
   const menuElement = document.createElement('div');
   menuElement.classList.add('menu');

   content.appendChild(menuElement);

   const titleElement = document.createElement('h1');
   titleElement.textContent = 'Restaurant Menu';
   const container = document.createElement('div');
   container.classList.add('container');

   menuElement.appendChild(titleElement);
   menuElement.appendChild(container);

   container.appendChild(createMenuItem('Pasta Pesto'));
   container.appendChild(createMenuItem('Pasta Carbonara'));
   container.appendChild(createMenuItem('Our Best Pizza'));
   container.appendChild(createMenuItem('Pizza Pepperoni'));
}

function createMenuItem(text) {
   const menuItemElement = document.createElement('div');
   menuItemElement.classList.add('dish');
   const itemImageElement = document.createElement('div');
   itemImageElement.classList.add('image');
   const itemtTextElement = document.createElement('div');
   itemtTextElement.classList.add('text');

   menuItemElement.appendChild(itemImageElement);
   menuItemElement.appendChild(itemtTextElement);

   const titleElement = document.createElement('h2');
   titleElement.textContent = text;
   const subtitleElement = document.createElement('p');
   subtitleElement.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quasi quod ex praesentium esse soluta.'

   itemtTextElement.appendChild(titleElement);
   itemtTextElement.appendChild(subtitleElement);

   return menuItemElement;
}

export default loadMenu;