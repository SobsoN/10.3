$(document).ready(function () {

	// DECLARING ANCHORS AND VARIABLES
	const carouselInside = $("#carousel__inside"),
		slides = carouselInside.find('.slide');

	// DEFINING NEW ATRIBUTE FOR SLIDE SO I CAN EASLY IDENTIFY
	for (let i = 1; i <= slides.length; i++) {
		const addition = slides[i];
		$(addition).attr('whichOne', i);
	}

	for (let i = 1; i <= slides.length; i++) {
		$('.slider__dots').append('<li><a href="#" whichOne="' + i + '"></a></li>');
	}

	//TIMER FUNCTION
	function timer() {
		const interval = setInterval(slideRight, 3000);	
	}

	function stopTimer() {
		clearInterval(interval);
	}
	
	//CHANGING SLIDES
	function slideRight() {
			carouselInside.animate({'marginLeft':-500}, 1000, moveFirstSlide);
	}

	//DECLARING WHAT HAPPENS AFTER LAST SLIDE POPS
	function moveFirstSlide() {
		const firstItem = carouselInside.find("div:first"),
		lastItem = carouselInside.find("div:last");
		lastItem.after(firstItem);
		carouselInside.css({'marginLeft':0});
	}



	//timer();
});



