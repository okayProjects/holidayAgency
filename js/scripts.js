$(function () {
	console.log('DOM loaded');
});


//intencje//


$('.nunery').mouseover(function () {
	$('.table-image-container img:first-child, .table-image-container img:nth-child(3)').css('display', 'none');
	$('.table-image-container img:nth-child(2)').css('display', 'block');
});

$('.nunery').mouseleave(function () {
	$('.table-image-container img:first-child').css('display', 'block');
	$('.table-image-container img:nth-child(2), .table-image-container img:nth-child(3)').css('display', 'none');
});

$('.fara').mouseover(function () {
	$('.table-image-container img:first-child, .table-image-container img:nth-child(2)').css('display', 'none');
	$('.table-image-container img:nth-child(3)').css('display', 'block');
});

$('.fara').mouseleave(function () {
	$('.table-image-container img:first-child').css('display', 'block');
	$('.table-image-container img:nth-child(2), .table-image-container img:nth-child(3)').css('display', 'none');
});

//sakramenty//

$(window).on('scroll', function () {
	$("nav").addClass('navbar-scroll');
});

$('.scrollspy-example').on('scroll', function () {
	$(this).css('backgroundColor', '#274747');
	$(this).mouseleave(function () {
		$(this).css('backgroundColor', '#125558');
	})
});

$(window).on('scroll', function () {
	if ($(document).scrollTop() > 600) {
		$("#to-the-top").css('display', 'block');
	} else {
		$("#to-the-top").css('display', 'none');
	}
});



const openNoticeButtons = [...document.querySelectorAll('.openNoticeButton')];

const showNotice = function () {

	switch (true) {
		case $(this).hasClass('buttonOpenOne'):
			$('.current-updates-one').toggleClass('hover-style');
			$('.current-updates-two, .current-updates-three, .current-updates-one i').toggle();
			$(' .current-updates-one button').text($(this).text() == 'Full screen' ? 'Back to the page' : 'Full screen');
			break;
		case $(this).hasClass('buttonOpenTwo'):
			$('.current-updates-two').toggleClass('hover-style');
			$('.current-updates-one, .current-updates-three, .current-updates-two i').toggle();
			$(' .current-updates-two button').text($(this).text() == 'Full screen' ? 'Back to the page' : 'Full screen');
			break;
		case $(this).hasClass('buttonOpenThree'):
			$('.current-updates-three').toggleClass('hover-style');
			$('.current-updates-one, .current-updates-two, .current-updates-three i').toggle();
			$('.current-updates-three button').text($(this).text() == 'Full screen' ? 'Back to the page' : 'Full screen');
			break;
	}
}

openNoticeButtons.forEach(openNoticeButton => openNoticeButton.addEventListener('click', showNotice));


$('.left-inner').hover(() => {
	$('.left-center').fadeIn(1500);
}, () => {
	$('.left-center').fadeOut(500);
});


$('.right-inner').hover(() => {
	$('.right-center').fadeIn(1500);
}, () => {
	$('.right-center').fadeOut(500);
});

const optionalNumber = 100;
let currentNumberElement = [...$('.number h5')];


// $(function () {
// 	var step = 1;
// 	var timeInterval = 10;

// 	function count(numberContainer) {
// 		var optionalNumber = 100;
// 		var currentNumberElement = numberContainer.find('h5');
// 		var finalNumber = Number(numberContainer.data('final-number') || optionalNumber);

// 		function incrementNumber() {
// 			var currentNumberValue = Number(currentNumberElement.text());
// 			var newNumber = currentNumberValue + step;
// 			currentNumberElement.text(newNumber);
// 			if (newNumber < finalNumber) {
// 				setTimeout(function () {
// 					incrementNumber();
// 				}, timeInterval);
// 			} else {
// 				//currentNumberElement.css('color', 'red');
// 			}
// 		}
// 		setTimeout(incrementNumber, timeInterval)
// 	}
// 	$(window).scroll(function () {
// 		if ($(document).scrollTop() > 1800) {
// 			var numbers = $('.number');
// 			numbers.each(function (index, element) {
// 				count($(element));
// 				$(window).off('scroll');
// 			});
// 		}
// 	})
// })

$('.about-us .modal button').click(function () {
	$(this).css('text-decoration', 'none');
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