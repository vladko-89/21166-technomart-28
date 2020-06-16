var feedback = document.querySelector(".write-us");
var modalFeedback = document.querySelector(".popup-feedback");
var close = document.querySelector(".button-close");
var nameFeedback = document.querySelector("[name=name]");

var mapPopup = document.querySelector(".map");
var modalMap = document.querySelector(".popup-map");
var closeMap = document.querySelector(".button-close1");

var productCard = document.querySelector(".product-cart");
var opacityButtons = document.querySelector(".product-card-button");
var productImage = document.querySelector(".product-cart img");

productCard.addEventListener("mouseover", function (evt) {
	evt.preventDefault();
	opacityButtons.classList.remove("visually-hidden");
	productImage.classList.add("visually-hidden");
});

productCard.addEventListener("mouseout", function (evt) {
	evt.preventDefault();
	opacityButtons.classList.add("visually-hidden");
	productImage.classList.remove("visually-hidden");
});

feedback.addEventListener("click", function (evt) {
	evt.preventDefault();
	modalFeedback.classList.add("popup-show");
	nameFeedback.focus();
});

close.addEventListener("click", function (evt) {
	evt.preventDefault();
	modalFeedback.classList.remove("popup-show");
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (modalFeedback.classList.contains("popup-show")) {
			modalFeedback.classList.remove("popup-show");
			}
		}
});

mapPopup.addEventListener("click", function (evt) {
	evt.preventDefault();
	modalMap.classList.add("popup-show");
});

closeMap.addEventListener("click", function (evt) {
	evt.preventDefault();
	modalMap.classList.remove("popup-show");
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (modalMap.classList.contains("popup-show")) {
			modalMap.classList.remove("popup-show");
			}
		}
});