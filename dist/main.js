(()=>{"use strict";function e(e){const t=document.createElement("li");return t.classList.add("link"),t.setAttribute("id",e),t.textContent=e,"Home"===e&&t.classList.add("active"),t}const t=function(){const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("home"),e.appendChild(t);const n=document.createElement("h1"),d=document.createElement("p"),c=document.createElement("button");n.textContent="IDDna Restaurant",d.textContent="A pinch of passion in every dish",c.textContent="see menu",t.appendChild(n),t.appendChild(d),t.appendChild(c)};function n(e){const t=document.createElement("div");t.classList.add("dish");const n=document.createElement("div");n.classList.add("image");const d=document.createElement("div");d.classList.add("text"),t.appendChild(n),t.appendChild(d);const c=document.createElement("h2");c.textContent=e;const o=document.createElement("p");return o.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quasi quod ex praesentium esse soluta.",d.appendChild(c),d.appendChild(o),t}function d(e,t){const n=document.createElement("div");n.classList.add("phone");const d=document.createElement("h3"),c=document.createElement("p");return d.textContent=e,c.textContent=t,n.appendChild(d),n.appendChild(c),n}(function(){const t=document.querySelector("body"),n=document.querySelector("#content"),d=document.createElement("div");d.classList.add("nav-bar"),t.insertBefore(d,n);const c=document.createElement("ul");d.appendChild(c),c.appendChild(e("Home")),c.appendChild(e("Menu")),c.appendChild(e("Contact"))})(),function(){const e=document.querySelector("body"),t=document.createElement("div");t.classList.add("footer"),t.textContent="Copyright © 2022 romaleks";const n=document.createElement("a");n.href="https://github.com/romaleks",n.target="_blank",n.innerHTML='<img src="./images/github.svg"></img>',t.appendChild(n),e.appendChild(t)}(),t();const c=document.querySelector("#content"),o=document.querySelector(".footer"),a=document.querySelectorAll(".link");a.forEach((e=>e.addEventListener("click",(()=>{a.forEach((e=>e.classList.remove("active"))),e.classList.add("active"),c.innerHTML="",o.style.display="block","Home"===e.getAttribute("id")?(t(),o.style.display="none"):"Menu"===e.getAttribute("id")?function(){const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("menu"),e.appendChild(t);const d=document.createElement("h1");d.textContent="Restaurant Menu";const c=document.createElement("div");c.classList.add("container"),t.appendChild(d),t.appendChild(c),c.appendChild(n("Pasta Pesto")),c.appendChild(n("Pasta Carbonara")),c.appendChild(n("Our Best Pizza")),c.appendChild(n("Pizza Pepperoni"))}():function(){const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("contact"),e.appendChild(t);const n=document.createElement("h1");n.textContent="Contact Us";const c=document.createElement("div");c.classList.add("phones");const o=document.createElement("div");o.classList.add("location"),o.innerHTML='<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17959.231144879705!2d37.566739750375845!3d55.76017170232214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54bb6bc67d60d%3A0x8dfda46e88778604!2sWhite%20Rabbit!5e0!3m2!1sen!2sru!4v1659459907532!5m2!1sen!2sru" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',t.appendChild(n),t.appendChild(c),t.appendChild(o),c.appendChild(d("+7 (915) 435 127 2334","First phone number")),c.appendChild(d("1 (877) 832-9309","Second phone number")),c.appendChild(d("1 (571) 237-7395","Third phone number"))}()})))),o.style.display="none"})();