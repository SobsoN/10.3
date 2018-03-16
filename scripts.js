$(document).ready(function () {

	// DECLARING ANCHORS AND VARIABLES
	const carouselInside = $("#carousel__inside"),
		slides = carouselInside.find('.slide');
	let interval = "";

	
	//SLIDE FUNCTIONS

	//DECLARING WHAT HAPPENS AFTER LAST SLIDE POPS
	function moveRight() {
		const firstItem = carouselInside.find("div:first"),
		lastItem = carouselInside.find("div:last");
		lastItem.after(firstItem);
		carouselInside.css({'marginLeft':0});
	}

	//DECLARING WHAT HAPPENS AFTER FIRST SLIDE POPS AND LEFT ARROW IS CLICKED
	function moveLeft() {
		const firstItem = carouselInside.find("div:first"),
		lastItem = carouselInside.find("div:last");
		firstItem.before(lastItem);
		carouselInside.css({'marginLeft':-500});
	}


	//CHANGING SLIDES RIGHT
	function slideRight() {
		carouselInside.stop().animate({'marginLeft':-500}, 1000, moveRight);
	}

	//CHANGING SLIDERS LEFT
	function slideLeft() {
		moveLeft();
		carouselInside.stop().animate({'marginLeft':0}, 1000);
	}


	//TIMER FUNCTIONS
	function timer() {
		interval = setInterval(slideRight, 3000);	
	}

	function stopTimer() {
		clearInterval(interval);
	}
	

	//DOTS FUNCTIONS



	//ACTIONS OVERALL



	$('.arrow__right').on('click', function() {
		slideRight();
		stopTimer();
		timer();
	})

	$('.arrow__left').on('click', function() {
		slideLeft();
		stopTimer();
		timer();
	})


	timer();
});



