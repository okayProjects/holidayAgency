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
			$(' .current-updates-three button').text($(this).text() == 'Full screen' ? 'Back to the page' : 'Full screen');
			break;
	}
}

openNoticeButtons.forEach(openNoticeButton => openNoticeButton.addEventListener('click', showNotice));
// const updateButtonOne = document.querySelector('.buttonOpenOne');

// function displayCardOne() {
// 	const buttonOne = document.querySelector('.buttonOpenOne');
// 	const updateHeading = document.querySelector('.updates-board h3');
// 	const cardOne = document.querySelector('.current-updates-one');
// 	const cardTwo = document.querySelector('.current-updates-two');
// 	const pin = document.querySelector('.hover-style i');

// 	cardOne.classList.toggle('hover-style');
// 	cardTwo.classList.toggle('hide');
// 	updateHeading.classList.toggle('hide');
// 	buttonOne.classList.toggle('hide');
// 	pin.classList.add('hide');
// 	// updateButtonOne.classList.toggle('afterClickButton');
// }
// updateButtonOne.addEventListener('click', displayCardOne);


// const closeUpdateButtonOne = document.querySelector('.hover-style button:nth-of-type(2)');

// function showCardOne() {
// 	const buttonOne = document.querySelector('.buttonOpenOne');
// 	const updateHeading = document.querySelector('.updates-board h3');
// 	const cardOne = document.querySelector('.current-updates-one');
// 	const cardTwo = document.querySelector('.current-updates-two');
// 	const pin = document.querySelector('.current-updates-one i');
// 	cardOne.classList.toggle('hover-style');
// 	cardTwo.classList.toggle('hide');
// 	updateHeading.classList.toggle('hide');
// 	buttonOne.classList.toggle('hide');
// 	pin.classList.remove('hide');
// }
// closeUpdateButtonOne.addEventListener('click', showCardOne);


// const updateButtonTwo = document.querySelector('.buttonOpenTwo');

// function displayCardTwo() {
// 	const buttonTwo = document.querySelector('.buttonOpenTwo');
// 	const updateHeading = document.querySelector('.updates-board h3');
// 	const cardOne = document.querySelector('.current-updates-one');
// 	const cardTwo = document.querySelector('.current-updates-two');
// 	const pin = document.querySelector('.current-updates-two i');
// 	buttonTwo.classList.toggle('hide');
// 	cardOne.classList.toggle('hide');
// 	cardTwo.classList.toggle('hover-style');
// 	updateHeading.classList.toggle('hide');
// 	pin.classList.toggle('hide');
// }
// updateButtonTwo.addEventListener('click', displayCardTwo);


// const closeUpdateButtonTwo = document.querySelector('.buttonCloseTwo');

// function showCardTwo() {
// 	const buttonTwo = document.querySelector('.buttonOpenTwo');
// 	const updateHeading = document.querySelector('.updates-board h3');
// 	const cardOne = document.querySelector('.current-updates-one');
// 	const cardTwo = document.querySelector('.current-updates-two');
// 	const pin = document.querySelector('.current-updates-two i');
// 	buttonTwo.classList.toggle('hide');
// 	cardOne.classList.toggle('hide');
// 	cardTwo.classList.toggle('hover-style');
// 	updateHeading.classList.toggle('hide');
// 	pin.classList.toggle('hide');
// }
// closeUpdateButtonTwo.addEventListener('click', showCardTwo)


$('.wierusz-inner').hover(function () {
	$('.wierusz-center').fadeIn(1500);
}, function () {
	$('.wierusz-center').fadeOut(500);
});


$('.tomaszewski-inner').hover(function () {
	$('.tomaszewski-center').fadeIn(1500);
}, function () {
	$('.tomaszewski-center').fadeOut(500);
});


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