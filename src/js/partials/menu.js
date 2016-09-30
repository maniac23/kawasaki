var button = $('.menu-button');
var menuButton = $('.sandwich');
var menu = $('.main-menu');

$('.menu-button, .main-menu li a').click(function() {
  menuButton.toggleClass('active');
  if(menu.is(':visible')) {
    menu.fadeOut(600);
  } else {
    menu.fadeIn(600).css('display', 'flex');
	                                        }
});
