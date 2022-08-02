function loadNavBar() {
   const body = document.querySelector('body');
   const navBarElement = document.createElement('div');
   navBarElement.classList.add('nav-bar');

   body.appendChild(navBarElement);

   const listElement = document.createElement('ul');

   navBarElement.appendChild(listElement);
   listElement.appendChild(createNavItem('Home'));
   listElement.appendChild(createNavItem('Menu'));
   listElement.appendChild(createNavItem('Contact'));
}

function createNavItem(text) {
   const listItemElement = document.createElement('li');
   listItemElement.textContent = text;
   return listItemElement;
}

export default loadNavBar;