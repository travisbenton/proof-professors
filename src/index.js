// JS Goes here - ES6 supported

import "./css/main.css";

const menuBtnEl = document.getElementById('menu-btn')
const menuEl = document.getElementById('menu')

menuBtnEl.onclick = () => menuEl.classList.toggle('nav-mobile')