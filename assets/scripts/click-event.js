//automatic slide after 3.5s
var timerId = setInterval(() => {
	carousel.automaticSlide();
}, 3500);

//on click stops automatic slides and slides right .Resumes automatic slide after 6 sec
nextButton.addEventListener("click", () => {
	clearInterval(timerId);
	carousel.slideRight();

	setTimeout(() => {
		timerId = setInterval(() => {
			carousel.automaticSlide();
		}, 3500);
	}, 6000);
});

//on click stops automatic slides and slides left .Resumes automatic slide after 6 sec
prevButton.addEventListener("click", () => {
	clearInterval(timerId);
	carousel.slideLeft();

	setTimeout(() => {
		timerId = setInterval(() => {
			carousel.automaticSlide();
		}, 3500);
	}, 6000);
});
