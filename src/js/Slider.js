const Slider = function (slider, testimonials, sliderButtons) {
	/**
	 * Scrolls the slider to show the element specified by its index.
	 */
	function scrollToTestimonial(index) {
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
	}

	/**
	 * Remove the indicator from its previous location.
	 */
	function clearSliderIndicator() {
		Array.from(sliderButtons).forEach((indicator) => {
			indicator.classList.remove("current-slider");
		});
	}

	/**
	 * Makes the slider scroll on its own in intervals.
	 */
	function autoSlideTestimonials() {
		let i = 0;
		const intervalID = setInterval(() => {
			scrollToTestimonial(i);
			clearSliderIndicator();

			Array.from(sliderButtons)[i].classList.toggle("current-slider");

			if (i === testimonials.length - 1) {
				i = 0;
			} else {
				i++;
			}
		}, 1500);
		return intervalID;
	}

	return {
		testimonialsIntervalID: autoSlideTestimonials,
		/**
		 * Displays the testimonial selected by clicking it's button (orange indicator).
		 * @param {HTMLElement} clickedTestimonial
		 * @param {number} index
		 * @param {number} testimonialsIntervalID
		 */
		viewTestimonial: function (
			clickedTestimonial,
			index,
			testimonialsIntervalID
		) {
			// stop sliding automatically
			clearInterval(testimonialsIntervalID);
			// remove the indicator
			clearSliderIndicator();

			// display the indicator on the clicked button (an orange dot instead of a circle)
			clickedTestimonial.classList.add("current-slider");

			// scroll to put the testimonial as much on the left as possible
			scrollToTestimonial(index);
		},
		autoSlideTestimonials,
	};
};

// Prevent reassignment to Slider's properties values such as Slider.value = "test";
Object.freeze(Slider);
console.log(Slider);

export default Slider;
