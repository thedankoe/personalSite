import { renderPortfolio } from './views/portfolioView';
import { elements, clearWork } from './views/base';

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
//     FORM CONTROL     //
//////////////////////////
// Listen for form submit
elements.formDisplay.addEventListener('submit', submitForm);

// Submit form
const submitForm = () => {
	// Show alert
	elements.formSuccess.style.display = 'inline-block';

	// Hide alert after 3 seconds
	setTimeout(function() {
		elements.formSuccess.style.display = 'none';
	}, 3000);
}

//////////////////////////
//  PORTFOLIO CONTROL  //
//////////////////////////
elements.workDisplay.addEventListener('click', e => {
	// 1. Clear previous block
	clearWork();

	// 2. Display new block
	if (e.target.matches('.work__choice-opt--1')) {
		renderPortfolio(workClient);
	} else if (e.target.matches('.work__choice-opt--2')) {
		renderPortfolio(workFullstack);
	} else if (e.target.matches('.work__choice-opt--3')) {
		renderPortfolio(workJavascript);
	}
});
