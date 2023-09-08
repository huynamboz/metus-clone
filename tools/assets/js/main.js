function openPopupSetting(cls) {
	let popup = document.getElementById(`popup-${cls}`);
	let popupChild = document.getElementById(`popup-${cls}-child`);
	popup.classList.remove("invisible");
	popup.classList.remove("hide-settings");
	popupChild.classList.add("show-settings");
}
function closePopupSetting(e, cls) {
	e.stopPropagation();
	let popup = document.getElementById(`popup-${cls}`);
	let popupChild = document.getElementById(`popup-${cls}-child`);
	popup.classList.remove("show-settings");
	popup.classList.add("hide-settings");
	popupChild.classList.remove("show-settings");
}
function closeSideBarMobile() {
	document.getElementById("side-bar-mobile").classList.remove("tab-left-show");
	document.getElementById("side-bar-mobile").classList.add("tab-left-close");
	document.getElementById("side-bar-container").classList.add("hide-side");
}
function openSideBarMobile() {
	document.getElementById("side-bar-container").classList.remove("invisible");
	document.getElementById("side-bar-container").classList.remove("hide-side");
	document.getElementById("side-bar-mobile").classList.remove("tab-left-close");
	document.getElementById("side-bar-mobile").classList.add("tab-left-show");
}