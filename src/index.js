import loadNavBar from "./nav";
import loadFooter from "./footer";
import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

loadNavBar();
loadFooter();
loadHome();

const content = document.querySelector('#content');
const footer = document.querySelector('.footer');
const navBarLinks = document.querySelectorAll('.link');
navBarLinks.forEach(link => link.addEventListener('click', () => {
   navBarLinks.forEach(link => link.classList.remove('active'));
   link.classList.add('active');
   content.innerHTML = '';
   footer.style.display = 'block';
   if (link.getAttribute('id') === 'Home') {
      loadHome();
      footer.style.display = 'none';
   }
   else if (link.getAttribute('id') === 'Menu') loadMenu();
   else loadContact();
}));

export default function btnLoadMenu() {
   const homeLink = document.querySelector('.nav-bar .link');
   const menuLink = document.querySelector('.nav-bar .link:nth-child(2)');
   homeLink.classList.remove('active');
   content.innerHTML = '';
   footer.style.display = 'block';
   loadMenu();
   menuLink.classList.add('active');
}

footer.style.display = 'none';