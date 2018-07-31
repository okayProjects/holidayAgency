$(function(){
  console.log('DOM loaded');
  
});


$(window).scroll(function() {
  $("nav").addClass('navbar-scroll');
});

$(window).scroll(function() {
  $("footer-bottom").addClass('las');
});


$('.wierusz-inner').mouseenter(function() {
	$('.wierusz-center').fadeIn(3000);
});

$('.wierusz-inner').mouseleave(function() {
	$('.wierusz-center').fadeOut();
});

$('.tomaszewski-inner').mouseenter(function() {
	$('.priest-carousel-container .tomaszewski-center').fadeIn(3000);
});

$('.tomaszewski-inner').mouseleave(function() {
	$('.priest-carousel-container .tomaszewski-center').fadeOut();
});
