var button = document.querySelector('.menu-button');
var menuButton = document.querySelector('.sandwich');
var menu = document.querySelector('.main-menu');
var links = menu.querySelectorAll('li a');
function menuToggle() {
  menuButton.classList.toggle('active');
  menu.classList.toggle('is-active');
}

button.addEventListener('click', menuToggle);

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', menuToggle);
}
