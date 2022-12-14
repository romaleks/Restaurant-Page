import btnLoadMenu from ".";
function loadHome() {
   const content = document.querySelector('#content');
   const homeElement = document.createElement('div');

   homeElement.classList.add('home');
   content.appendChild(homeElement);

   const titleElement = document.createElement('h1');
   const subtitleElement = document.createElement('p');
   const buttonElement = document.createElement('button');
   buttonElement.setAttribute('id', 'menuBtn');
   buttonElement.onclick = btnLoadMenu;

   titleElement.textContent = 'IDDna Restaurant';
   subtitleElement.textContent = 'A pinch of passion in every dish';
   buttonElement.textContent = 'see menu';

   homeElement.appendChild(titleElement);
   homeElement.appendChild(subtitleElement);
   homeElement.appendChild(buttonElement);
}

export default loadHome;