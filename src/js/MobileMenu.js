const MobileMenu = function (headerNavSelector) {
	return {
		toggleMenu: function () {
			const headerNav = document.querySelector(headerNavSelector);
			const body = document.querySelector("body");
			headerNav.classList.toggle("mobile-menu-open");
			body.classList.toggle("mobile-menu-open");
		},
	};
};

Object.freeze(MobileMenu);

export default MobileMenu;
