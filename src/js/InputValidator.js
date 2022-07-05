const InputValidator = function (
	emailFormSelector,
	emailInputSelector,
	validationFeedbackElementSelector
) {
	const emailForm = document.querySelector(emailFormSelector);
	const emailInput = emailForm.querySelector(emailInputSelector);
	const validationFeedbackElement = emailForm.querySelector(
		validationFeedbackElementSelector
	);

	return {
		validateEmail: function () {
			const validEmailRegex =
				/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

			// Make the feedback element visible
			validationFeedbackElement.style.display = "unset";

			if (emailInput.value.match(validEmailRegex)) {
				validationFeedbackElement.textContent = "This e-mail is valid!";
			} else {
				emailForm.classList.add("invalid-input");
				validationFeedbackElement.textContent = "Please insert a valid email";

				emailInput.focus();
			}
		},
		removeFeedback: function () {
			emailForm.classList.remove("invalid-input");
			validationFeedbackElement.style.display = "none";
		},
	};
};

Object.freeze(InputValidator);

export default InputValidator;
