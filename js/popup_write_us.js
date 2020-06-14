var feedback = document.querySelector(".write-us");
var modalFeedback = document.querySelector(".popup-feedback");
var close = document.querySelector(".button-close");
var nameFeedback = document.querySelector("[name=name]");
var mapPopup = document.querySelector(".map");
var modalMap = document.querySelector(".popup-map");
var closeMap = document.querySelector(".button-close");

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
		if (modalFeedback.classList.contains("modal-show")) {
			modalFeedback.classList.remove("modal-show");
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
		if (modalMap.classList.contains("modal-show")) {
			modalMap.classList.remove("modal-show");
			}
		}
});