nextButton = document.querySelector(".right-btn");
prevButton = document.querySelector(".left-btn");

class Carousel {
	constructor() {
		this.track = document.querySelector(".carousel__track");
		this.slides = Array.from(this.track.children);
		this.nextButton = document.querySelector(".right-btn");
		this.prevButton = document.querySelector(".left-btn");
		this.dotsNav = document.querySelector(".dotsNav");
		this.dots = Array.from(this.dotsNav.children);
		this.setSlidePosition(this.slides);
	}

	setSlidePosition(slides) {
		for (let i = 0; i < slides.length; i++) {
			slides[i].style.left = slides[i].getBoundingClientRect().width * i + "px";
		}
	}

	//keeps on sliding to next image
	automaticSlide() {
		const currentSlide = this.track.querySelector(".current__slide");
		const nextSlide =
			currentSlide.nextElementSibling == null
				? this.slides[0]
				: currentSlide.nextElementSibling;

		moveToSlide(this.track, currentSlide, nextSlide);
		const currentDot = this.dotsNav.querySelector(".current__slide");
		const nextDot =
			currentDot.nextElementSibling === null
				? this.dots[0]
				: currentDot.nextElementSibling;

		updateDots(currentDot, nextDot);
	}
	//slides right to next image
	slideRight = () => {
		const currentSlide = this.track.querySelector(".current__slide");
		const nextSlide =
			currentSlide.nextElementSibling == null
				? this.slides[0]
				: currentSlide.nextElementSibling;

		moveToSlide(this.track, currentSlide, nextSlide);
		const currentDot = this.dotsNav.querySelector(".current__slide");
		const nextDot =
			currentDot.nextElementSibling === null
				? this.dots[0]
				: currentDot.nextElementSibling;

		updateDots(currentDot, nextDot);
	};
	//slides left to next image
	slideLeft = () => {
		const currentSlide = this.track.querySelector(".current__slide");
		const prevSlide =
			currentSlide.previousElementSibling == null
				? this.slides[this.slides.length - 1]
				: currentSlide.previousElementSibling;

		moveToSlide(this.track, currentSlide, prevSlide);
		const currentDot = this.dotsNav.querySelector(".current__slide");
		const prevDot =
			currentDot.previousElementSibling === null
				? this.dots[this.dots.length - 1]
				: currentDot.previousElementSibling;
		updateDots(currentDot, prevDot);
	};
}

carousel = new Carousel();
