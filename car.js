const menu = document.querySelector('.bx-menu');
const navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

menu.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}
