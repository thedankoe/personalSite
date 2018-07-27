$(document).ready(function() {
	//NAV SCROLL ANIM
	$(window).on("scroll", function() {
		if($(document).scrollTop() > 550) {
			$("nav").addClass("navBlack");
		} else {
			$("nav").removeClass("navBlack");
		}
	});

	//ABOUT ME SCROLL ANIM
	$("a[href^='#']").on("click", function(event) {
		event.preventDefault();

		var target = this.hash;
		var $target = $(target);

		//SCROLL AND SHOW HASH
		$("html, body").animate( {
			"scrollTop": $target.offset().top
		}, 700, "swing", function() {
			window.location.hash = target;
		});
	});
});

//////////////////////////
//       PARALLAX       //
//////////////////////////
$(window).scroll(function () {
	parallax();
});

function parallax() {
	var wScroll = $(window).scrollTop();

	$('.parallax--bg').css('background-position', 'center ' + (wScroll*0.7) + 'px');

	//$('.parallax--services').css('background-position', 'center ' +(wScroll*0.2) + 'px');
}


//////////////////////////
//     FORM CONTROL     //
//////////////////////////
// Listen for form submit
document.querySelector('#contact-form').addEventListener('submit', submitForm);

// Submit form
function submitForm() {
	// Show alert
	document.querySelector('.alert').style.display = 'inline-block';

	// Hide alert after 3 seconds
	setTimeout(function() {
		document.querySelector('.alert').style.display = 'none';
	}, 3000);
}

//////////////////////////
//     SCROLLREVEAL     //
//////////////////////////

var sr = ScrollReveal();
if(window.innerWidth > 600) {
	sr.reveal('.sr-default', { delay: 200 });
	sr.reveal('.sr-about-box', { delay: 200 }, 200);
	sr.reveal('.sr-services-box', { delay: 200 }, 200);
} else {
	sr.reveal('.sr-default', { delay: 300 });
	sr.reveal('.sr-about-box', { delay: 300 }, 200);
	sr.reveal('.sr-services-box', { delay: 300 }, 200);
}

