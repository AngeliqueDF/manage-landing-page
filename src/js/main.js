import Slider from "./Slider";

window.addEventListener("DOMContentLoaded", (event) => {
	// Select DOM elements needed to initialize the slider
	const sliderButtons = document.querySelectorAll(".slider-buttons button");
	const sliderElement = document.querySelector(".slider");
	const testimonials = document.querySelectorAll(".slider article");

	const slider = Slider(sliderElement, testimonials, sliderButtons);
	const testimonialsIntervalID = slider.autoSlideTestimonials();

	Array.from(sliderButtons).forEach((button, index) => {
		button.addEventListener("click", function (e) {
			clearInterval(intervalID);
			clearSliderIndicator();

			this.classList.add("current-slider");

			scrollToTestimonial(index);
		});
	});

	const mobileMenuToggler = document.querySelector("button.toggle-mobile-menu");
	const headerNav = document.querySelector("nav");
	const body = document.querySelector("body");
	mobileMenuToggler.addEventListener("click", () => {
		headerNav.classList.toggle("mobile-menu-open");
		body.classList.toggle("mobile-menu-open");
	});
});
