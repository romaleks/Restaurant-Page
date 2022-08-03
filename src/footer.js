export default function loadFooter() {
   const body = document.querySelector('body');
   const footerElement = document.createElement('div');
   footerElement.classList.add('footer');
   footerElement.textContent = 'Copyright © 2022 romaleks';
   const iconElement = document.createElement('a');
   iconElement.href = 'https://github.com/romaleks';
   iconElement.target = '_blank'
   iconElement.innerHTML = '<img src="./images/github.svg"></img>';
   footerElement.appendChild(iconElement);
   body.appendChild(footerElement);
}