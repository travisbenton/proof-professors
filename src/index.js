// JS Goes here - ES6 supported

import "./css/main.css";

const menuBtnEl = document.getElementById('menu-btn')
const menuEl = document.getElementById('menu')
const navEl = document.getElementById('nav')

menuBtnEl.onclick = () => menuEl.classList.toggle('nav-mobile')