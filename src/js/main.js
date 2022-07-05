import Slider from "./Slider";
import InputValidator from "./InputValidator";
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

	const emailFormSelector = ".newsletter-form form";
	const emailInputSelector = '.newsletter-form input[type="text"]';
	const validationFeedbackElementSelector = ".validation-feedback";

	const inputValidator = InputValidator(
		emailFormSelector,
		emailInputSelector,
		validationFeedbackElementSelector
	);

	document.querySelector(emailFormSelector).addEventListener("submit", (e) => {
		e.preventDefault();
		inputValidator.validateEmail(emailFormSelector);
	});

	document
		.querySelector(emailInputSelector)
		.addEventListener("keydown", (e) => {
			inputValidator.removeFeedback();
		});
});
