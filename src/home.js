function loadPage() {
   const content = document.querySelector('#content');
   const homeElement = document.createElement('div');

   homeElement.classList.add('home');
   content.appendChild(homeElement);

   const titleElement = document.createElement('h1')
   const subtitleElement = document.createElement('p')
   const buttonElement = document.createElement('button')

   titleElement.textContent = 'IDDna';
   subtitleElement.textContent = 'A pinch of passion in every dish';
   buttonElement.textContent = 'see menu';

   homeElement.appendChild(titleElement);
   homeElement.appendChild(subtitleElement);
   homeElement.appendChild(buttonElement);
}

export default loadPage;