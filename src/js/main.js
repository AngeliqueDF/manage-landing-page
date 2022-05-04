window.addEventListener("DOMContentLoaded", (event) => {
	const slider = document.querySelector(".slider");
	const testimonials = document.querySelectorAll(".slider article");
	const sliderIndicators = document.querySelectorAll(".slider-buttons button");

	/**
	 * Scrolls the slider to show the element specified by its index
	 */
	const scrollToTestimonial = (index) => {
		const bodyFontSize = parseFloat(
			window
				.getComputedStyle(document.querySelector("body"))
				.getPropertyValue("font-size")
		);

		slider.scroll({
			top: 0,
			left: testimonials[index].offsetWidth * index + bodyFontSize * index,
			behavior: "smooth",
		});
	};

	/**
	 * Remove the cursor from its previous location
	 */
	const clearSliderIndicator = () => {
		Array.from(sliderIndicators).forEach((indicator) => {
			indicator.classList.remove("current-slider");
		});
	};

	const changeImg = () => {
		let i = 0;
		const intervalID = setInterval(() => {
			scrollToTestimonial(i);
			clearSliderIndicator();

			Array.from(sliderIndicators)[i].classList.toggle("current-slider");

			if (i === testimonials.length - 1) {
				i = 0;
			} else {
				i++;
			}
		}, 2500);
		return intervalID;
	};

	const intervalID = changeImg();

	const sliderButtons = document.querySelectorAll(".slider-buttons button");
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
