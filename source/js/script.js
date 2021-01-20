let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--no-js');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

// Popup

// let popup = document.querySelector('.popup');
// let popupWrapper = document.querySelector('.popup__wrapper')
// let popupButton = document.querySelector('.popup__button');
// let popupOpen = document.querySelectorAll('.popup-open');

// popupOpen.forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.preventDefault();
//     popup.classList.remove("visually-hidden");
//     popup.classList.add("popup--show");
//     popupWrapper.classList.add("popup--open");
//     document.body.style.overflow = "hidden";


//     if (popupWrapper.classList.contains("popup--open")) {
//       window.addEventListener("click", function (e) {
//         if (e.target === popup) {
//           document.body.style.overflow = "visible";
//           popup.classList.remove("popup--show");
//           popupWrapper.classList.remove("popup--open");
//         }
//       });
//       window.addEventListener("keydown", function (evt) {
//         if (evt.keyCode === 27) {
//           document.body.style.overflow = "visible";
//           popup.classList.remove("popup--show");
//           popupWrapper.classList.remove("popup--open");
//         }
//       });

//     }
//   });
// });

let buttons = document.querySelectorAll('.popup-open');
let popup = document.querySelector('.popup');
let popupWrap = document.querySelector('.popup__wrapper');
let popupOverlay = document.querySelector('.popup__overlay');
let popupButton = document.querySelector('.popup__button');

buttons.forEach((element) => {
  element.addEventListener('click', () => {
    popup.classList.add('popup--open');
    document.body.style.overflow = 'hidden';
  })
})

window.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('popup__overlay')) {
    popup.classList.remove('popup--open');
    document.body.style.overflow = 'visible';
  }
})

popupButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  popup.classList.remove('popup--open');
  document.body.style.overflow = 'visible';
})
