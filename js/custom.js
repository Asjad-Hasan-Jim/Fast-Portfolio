//slider for banner part
$('.banner-slider').slick({
	infinite: true,
	speed: 1000,
	fade: true,
	arrows: false,
	autoplay: true,
	dots: false,
	slidesToShow: 1,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				arrows: false,
				dots: false,
			}
    },
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				dots: false,
			}
    },
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				dots: false,
			}
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
//banner part end

//navigation fixed start
$navOffset = $('#navigation').offset().top;
$(window).scroll(function () {
	$scrolling = $(this).scrollTop();
	if ($scrolling > $navOffset) {
		$('#navigation').addClass('fixed');
	} else {
		$('#navigation').removeClass('fixed');
	}
});
//navigation fixed end

// smooth scroll end
$('#navigation nav a[href*="#"]')
	.not('[href="#"]')
	.not('[href="#0"]')
	.click(function (event) {
		if (
			location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
			location.hostname == this.hostname
		) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				event.preventDefault();
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000, function () {
					var $target = $(target);
					$target.focus();
					if ($target.is(":focus")) {
						return false;
					} else {
						$target.attr('tabindex', '-1');
						$target.focus();
					};
				});
			}
		}
	});
// smooth scroll end

//scrollSpy start
$('body').scrollspy({ target: '#navbarSupportedContent' });
//scrollSpy end

//barfiller start
$(function () {
	"use strict";
	var wind = $(window);

	wind.on("scroll", function () {

		var bodyScroll = wind.scrollTop()

		if (bodyScroll >= 500) {

			$('#bar1').barfiller({
				barColor: "#FF4E3D",
				duration: 2000
			});

			$('#bar2').barfiller({
				barColor: "#FF4E3D",
				duration: 2000
			});

			$('#bar3').barfiller({
				barColor: "#FF4E3D",
				duration: 2000
			});

			$('#bar4').barfiller({
				barColor: "#FF4E3D",
				duration: 2000
			});
			$('#bar5').barfiller({
				barColor: "#FF4E3D",
				duration: 2000
			});
			$('#bar6').barfiller({
				barColor: "#FF4E3D",
				duration: 2000
			});
		}

	});

});
//barfiller end

//counter start
$('.counter').counterUp({
	delay: 10,
	time: 1000
});
//counter end



//portfolio part start
var mixer = mixitup('.filter-img');
//portfolio part end

//team slider part
$('.testimonoals-slider').slick({
	infinite: true,
	speed: 1000,
	arrows: false,
	autoplay: true,
	dots: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			}
    },
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
				dots: false,
			}
    },
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: false,
			}
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
//team slider end


//scrolling start
$top_to_btm = 200;
$('.top_to i').click(function () {
	$('html,body').animate({
		scrollTop: 0
	}, 1500);
});

$(window).scroll(function () {
	$scrolling = $(this).scrollTop();
	if ($scrolling >= $top_to_btm) {
		$('.top_to i').fadeIn();
	} else {
		$('.top_to i').fadeOut();
	}
});
//scrolling end

//preloader part start
$(window).load(function () {
	$('#preloader').fadeOut('slow', function () {
		$(this).remove();
	});
});
//preloader part end
