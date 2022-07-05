import Slider from "./Slider";
import MobileMenu from "./MobileMenu";

window.addEventListener("DOMContentLoaded", (event) => {
	// Select DOM elements needed to initialize the slider
	const sliderButtons = document.querySelectorAll(".slider-buttons button");
	const sliderElement = document.querySelector(".slider");
	const testimonials = document.querySelectorAll(".slider article");

	const slider = Slider(sliderElement, testimonials, sliderButtons);
	const testimonialsIntervalID = slider.autoSlideTestimonials();

	// Listen for click events on all slider inticators (sliderButtons)
	Array.from(sliderButtons).forEach((button, index) => {
		button.addEventListener("click", function (e) {
			slider.viewTestimonial(e.target, index, testimonialsIntervalID);
		});
	});

	const mobileMenuToggler = document.querySelector("button.toggle-mobile-menu");
	mobileMenuToggler.addEventListener("click", () => {
		const mobileMenu = MobileMenu("nav");
		mobileMenu.toggleMenu();
	});
});
