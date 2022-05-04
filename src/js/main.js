window.addEventListener("DOMContentLoaded", (event) => {
	const mobileMenuToggler = document.querySelector("button.toggle-mobile-menu");
	const headerNav = document.querySelector("nav");
	const body = document.querySelector("body");
	mobileMenuToggler.addEventListener("click", () => {
		headerNav.classList.toggle("mobile-menu-open");
		body.classList.toggle("mobile-menu-open");
	});
});
