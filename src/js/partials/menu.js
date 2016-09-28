var button = document.querySelector('.menu-button');
var menuButton = document.querySelector('.sandwich');
function menuToggle() {
  menuButton.classList.toggle('active');
}

button.addEventListener('click', menuToggle);
