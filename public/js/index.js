import { renderPortfolio, getRender } from './views/portfolioView';
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
//  GLOBAL APP CONTROL  //
//////////////////////////

const state = {};
window.state = state;

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
const clickCount = 0;

if (clickCount === 0) {
	elements.workDisplay.addEventListener('click', e => {
		// 1. Add animation
		if (e.target.matches('.work__choice-opt')) {
			for (let i = 0; i < 2; i++) {
				elements.animationRight[i].classList.add('fadeOutRight');
				elements.animationLeft[i].classList.add('fadeOutLeft');
			}
		} 
	
		// 2. Clear previous block
		clearWork();
	
		// 3. Display new block
		getRender(e);
	});
} else if (clickCount === 1) {
	elements.workDisplay.addEventListener('click', e => {
		// 1. Add animation
		if (e.target.matches('.work__choice-opt')) {
			for (let i = 0; i < 2; i++) {
				elements.animationRight[i].classList.add('fadeOutRight');
				elements.animationLeft[i].classList.add('fadeOutLeft');
			}
		} 
	
		// 2. Clear previous block
		clearWork();
	
		// 3. Display new block
		getRender(e);
	});
}



