export default function loadFooter() {
   const body = document.querySelector('body');
   const footerElement = document.createElement('div');
   footerElement.classList.add('footer');
   footerElement.textContent = 'Copyright © 2022 romaleks';
   body.appendChild(footerElement);
}