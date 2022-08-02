import loadFooter from "./footer";

function loadContact() {
   const content = document.querySelector('#content');
   const contactElement = document.createElement('div');
   contactElement.classList.add('contact');

   content.appendChild(contactElement);

   const titleElement = document.createElement('h1');
   titleElement.textContent = 'Contact Us';
   const phonesRowElement = document.createElement('div');
   phonesRowElement.classList.add('phones');
   const locationElement = document.createElement('div');
   locationElement.classList.add('location')
   locationElement.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17959.231144879705!2d37.566739750375845!3d55.76017170232214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54bb6bc67d60d%3A0x8dfda46e88778604!2sWhite%20Rabbit!5e0!3m2!1sen!2sru!4v1659459907532!5m2!1sen!2sru" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';

   contactElement.appendChild(titleElement);
   contactElement.appendChild(phonesRowElement);
   contactElement.appendChild(locationElement);

   phonesRowElement.appendChild(createPhoneItem('+7 (915) 435 127 2334', 'First phone number'));
   phonesRowElement.appendChild(createPhoneItem('1 (877) 832-9309', 'Second phone number'));
   phonesRowElement.appendChild(createPhoneItem('1 (571) 237-7395', 'Third phone number'));

   loadFooter();
}

function createPhoneItem(phone, text) {
   const phoneElement = document.createElement('div');
   phoneElement.classList.add('phone');
   const phoneNumberElement = document.createElement('h3');
   const phoneTextElement = document.createElement('p');
   phoneNumberElement.textContent = phone;
   phoneTextElement.textContent = text;

   phoneElement.appendChild(phoneNumberElement);
   phoneElement.appendChild( phoneTextElement);

   return phoneElement;
}

export default loadContact;