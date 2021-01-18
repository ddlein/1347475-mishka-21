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

let popup = document.querySelector('.popup');
let popupButton = document.querySelector('.popup__button');
let popupOpen = document.querySelectorAll('.popup-open');



popupOpen.forEach ((element => {
  element.addEventListener('click', () => {
    popup.classList.add('popup--show')
  })
}))

// basketButton.addEventListener('click', () => {
//   popup.classList.add('popup--show')
// })

popup.addEventListener('click', (evt) => {
  if (evt.target.closest('.popup__wrapper') === null) {
    popup.classList.remove('popup--show')
  }
})

popupButton.addEventListener('click', () => {
  popup.classList.remove('popup--show')
})
