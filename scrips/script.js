const menuIcon = document.getElementById('menuIcon');
const navWrapper = document.getElementById('navbar_wrapper');
const closeMenu = document.getElementById('closeMenu');

menuIcon.addEventListener('click', () => {
    navWrapper.classList.toggle('navbar_wrapper--open');
});

closeMenu.addEventListener('click', () => {
    navWrapper.classList.remove('navbar_wrapper--open');
});