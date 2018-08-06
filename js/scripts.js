$(function(){
  console.log('DOM loaded');
});

$(window).scroll(function() {
  $("nav").addClass('navbar-scroll');
});


$('.wierusz-inner').hover(function() {
	$('.wierusz-center').fadeIn();
	}, function() {
	$('.wierusz-center').fadeOut();
});


$('.tomaszewski-inner').hover(function() {
	$('.tomaszewski-center').fadeIn();
    }, function() {
    	$('.tomaszewski-center').fadeOut();
});


$('.current-updates-one').hover(function() {
	$(this).removeClass('hover-style');
	$('.current-updates-two').css('display', 'none');
	$('.current-updates-three').css('display', 'none');
	$('.current-updates-one i').css('display', 'none');
	}, function() {
		$(this).addClass('hover-style');
		$('.current-updates-two').fadeIn(1500);
		$('.current-updates-three').fadeIn(2000);
		$(".current-updates-one i").css('display', 'block');
})

$('.current-updates-two').hover(function() {
	$(this).removeClass('hover-style');
	$('.current-updates-one').css('display', 'none');
	$('.current-updates-three').css('display', 'none');
	$('.current-updates-two i').css('display', 'none');
	}, function() {
		$(this).addClass('hover-style');
		$('.current-updates-one').fadeIn(1500);
		$('.current-updates-three').fadeIn(2000);
		$('.current-updates-two i').css('display', 'block');
})

$('.current-updates-three').hover(function() {
	$(this).removeClass('hover-style');
	$('.current-updates-one').css('display', 'none');
	$('.current-updates-two').css('display', 'none');
	$('.current-updates-three i').css('display', 'none');
	}, function() {
		$(this).addClass('hover-style');
		$('.current-updates-one').fadeIn(1500);
		$('.current-updates-two').fadeIn(2000);
		$('.current-updates-three i').css('display', 'block');
})

$(window).scroll(function() {
    if ($(document).scrollTop() > 600) {
      $("#to-the-top").css('display', 'block');
    } else {
      $("#to-the-top").css('display', 'none');
    }
  });




$(function(){
  var step = 1;
  var timeInterval = 10;
  function count(numberContainer){
    var optionalNumber = 100;
    var currentNumberElement = numberContainer.find('h5');
    var finalNumber = Number( numberContainer.data('final-number') || optionalNumber);
    function incrementNumber(){
       var currentNumberValue = Number(currentNumberElement.text());
       var newNumber = currentNumberValue + step;
       currentNumberElement.text(newNumber);
       if(newNumber < finalNumber){
          setTimeout(function(){
            incrementNumber();
          }, timeInterval);
       }else{
         console.log('koniec liczenia');
         //currentNumberElement.css('color', 'red');
       }
    } 
    setTimeout(incrementNumber, timeInterval)
  } 
  var numbers = $('.number');
  numbers.each(function(index, element){
    count( $(element) );
  }); 
})


/*

$(function() { 
    $(window).scroll(function() {
        $(".footer-bottom").addClass('bottom-fixed');
        clearTimeout( $.data( this ) );
        $.data( this, setTimeout(function() {
            $(".footer-bottom").removeClass('bottom-fixed');
        }, 250) );
    });
});
*/
//intencje//


$('.nunery').mouseover(function() {
	$('.table-image-container img:first-child').css('display', 'none');
	$('.table-image-container img:nth-child(3)').css('display', 'none');
	$('.table-image-container img:nth-child(2)').css('display', 'block');
});

$('.nunery').mouseleave(function() {
	$('.table-image-container img:first-child').css('display', 'block');
	$('.table-image-container img:nth-child(2)').css('display', 'none');
	$('.table-image-container img:nth-child(3)').css('display', 'none');
});

$('.fara').mouseover(function() {
	$('.table-image-container img:first-child').css('display', 'none');
	$('.table-image-container img:nth-child(2)').css('display', 'none');
	$('.table-image-container img:nth-child(3)').css('display', 'block');	
});

$('.fara').mouseleave(function() {
	$('.table-image-container img:first-child').css('display', 'block');
	$('.table-image-container img:nth-child(2)').css('display', 'none');
	$('.table-image-container img:nth-child(3)').css('display', 'none');	
});

//sakramenty//

$(window).scroll(function() {
  $("nav").addClass('navbar-scroll');
});

$('.scrollspy-example').scroll(function() {
  $(this).css('backgroundColor', '#274747');
  $(this).mouseleave(function() {
  $(this).css('backgroundColor', '#125558');
  })
});
