//slide the target image to display position
const moveToSlide = (track, currentSlide, targetSlide) => {
	track.style.transform = "translateX(-" + targetSlide.style.left + ")";
	currentSlide.classList.remove("current__slide");
	targetSlide.classList.add("current__slide");
};

//updates dots position
const updateDots = (currentDot, targetDot) => {
	currentDot.classList.remove("current__slide");

	targetDot.classList.add("current__slide");
};
