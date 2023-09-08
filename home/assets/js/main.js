const swiper = new Swiper('.swiper1', {
	pagination: {
		el: '.swiper-pagination1',
	},
	slidesPerGroup: 1,
	slidesPerView: 3,

});
const swiper2 = new Swiper('.swiper2', {
	pagination: {
		dynamicBullets: true,
		dynamicMainBullets: 1,
		el: '.swiper-pagination2',
	},
	slidesPerGroup: 1,
	slidesPerView: 3,
	breakpoints: {
		// when window width is >= 320px
		320: {
			navigation: {
				enabled: false,
			},
			slidesPerView: 1,
			spaceBetween: 20
		},
		900: {
			navigation: {
				enabled: false,
			},
			slidesPerView: 2,
			spaceBetween: 20
		},
		// when window width is >= 480px
		1200: {
			navigation: {
				enabled: true,
			},
			slidesPerView: 3,
			spaceBetween: 0
		},
		// when window width is >= 640px
	},
	// Navigation arrows
	allowSlidePrev: true,
	allowSlideNext: true,
	navigation: {
		enabled: true,
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

const swiper3 = new Swiper('.swiper3', {
	pagination: {
		dynamicBullets: true,
		dynamicMainBullets: 1,
		el: '.swiper-pagination3',
	},
	slidesPerGroup: 1,
	slidesPerView: 3,
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 1,
			spaceBetween: 0
		},
		900: {
			slidesPerView: 2,
			spaceBetween: 0
		},
		// when window width is >= 480px
		1200: {
			slidesPerView: 3,
			spaceBetween: 0
		},
		// when window width is >= 640px
	},
});
function closeSideBar() {
	document.getElementById("side-bar").classList.remove("tab-left-show");
	document.getElementById("side-bar").classList.add("tab-left-close");
	document.getElementById("side-bar-container").classList.add("hide-side");
}
function openSideBar() {
	document.getElementById("side-bar-container").classList.remove("invisible");
	document.getElementById("side-bar-container").classList.remove("hide-side");
	document.getElementById("side-bar").classList.remove("tab-left-close");
	document.getElementById("side-bar").classList.add("tab-left-show");
}