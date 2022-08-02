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

footer.style.display = 'none';