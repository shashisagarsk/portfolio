// screept.js
const menuIcon = document.getElementById('menu-icon');
const navbar = document.getElementById('navbar');

menuIcon.onclick = () => {
    navbar.classList.toggle('show');
};
