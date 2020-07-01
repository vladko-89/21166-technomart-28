// Модальное окно Напишите нам

var feedback = document.querySelector(".write-us");
var modalFeedback = document.querySelector(".popup-feedback");
var close = document.querySelector(".close-feedback");
var nameFeedback = document.querySelector("[name=name]");

if (feedback) {
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
}

// Модальное окно Карта

var mapPopup = document.querySelector(".map");
var modalMap = document.querySelector(".popup-map");
var closeMap = document.querySelector(".close-map");

if (mapPopup) {
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
}


// Карточки товаров

var buttonsBookmark = document.querySelectorAll(".button-bookmark"), buttonBook, index;
var buttonsBuy = document.querySelectorAll(".button-buy"), buttonBuy, index;
var bookmark = document.querySelector(".bookmarks");
var inCart = document.querySelector(".product-card-button.button-buy");
var cart = document.querySelector(".cart");
var modalCart = document.querySelector(".popup-cart");
var closeCart = document.querySelector(".close-cart");
var buttonContinue = document.querySelector(".button-continue");


if (modalCart) {

	inCart.addEventListener("click", function (evt) {
		evt.preventDefault();
		modalCart.classList.add("popup-show");
		});


	closeCart.addEventListener("click", function (evt) {
		evt.preventDefault();
		modalCart.classList.remove("popup-show");
	});

	buttonContinue.addEventListener("click", function (evt) {
		evt.preventDefault();
		modalCart.classList.remove("popup-show");
	});

	window.addEventListener("keydown", function (evt) {
		if (evt.keyCode === 27) {
			evt.preventDefault();
			if (modalCart.classList.contains("popup-show")) {
				modalCart.classList.remove("popup-show");
				}
			}
	});
}

for (index = 0; index < buttonsBookmark.length; index++) {
	buttonBook = buttonsBookmark[index];
	buttonBook.addEventListener("click", function (evt) {
		evt.preventDefault();
		bookmark.classList.add("red-background");
});
}

for (index = 0; index < buttonsBuy.length; index++) {
	buttonBuy = buttonsBuy[index];
	buttonBuy.addEventListener("click", function (evt) {
		evt.preventDefault();
		cart.classList.add("red-background");
});
}

// Слайдер в блоке Сервис

var serviceItems = document.querySelectorAll(".service-item");
var serviceButtons = document.querySelectorAll(".service-button");
var serviceCurrent = 0;

if (serviceButtons) {

	for (let i = 0; i < serviceButtons.length; i++) {
		serviceButtons[i].addEventListener("click", function (evt) {
			evt.preventDefault();
			ServiceSlideShow(i);
		});
	};

	if (serviceItems.length !==0) {
		function ServiceSlideShow(i) {
			serviceItems[serviceCurrent].classList.remove("slide-current");
			serviceButtons[serviceCurrent].classList.remove("service-button-current");
			serviceItems[i].classList.add("slide-current");
			serviceButtons[i].classList.add("service-button-current");
			serviceCurrent = i;
		};
	};
}



