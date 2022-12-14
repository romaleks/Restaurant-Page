function loadNavBar() {
   const body = document.querySelector('body');
   const content = document.querySelector('#content')
   const navBarElement = document.createElement('div');
   navBarElement.classList.add('nav-bar');

   body.insertBefore(navBarElement, content);

   const listElement = document.createElement('ul');

   navBarElement.appendChild(listElement);
   listElement.appendChild(createNavItem('Home'));
   listElement.appendChild(createNavItem('Menu'));
   listElement.appendChild(createNavItem('Contact'));
}

function createNavItem(text) {
   const listItemElement = document.createElement('li');
   listItemElement.classList.add('link')
   listItemElement.setAttribute('id', text);
   listItemElement.textContent = text;
   if (text === 'Home') listItemElement.classList.add('active');
   return listItemElement;
}

export default loadNavBar;