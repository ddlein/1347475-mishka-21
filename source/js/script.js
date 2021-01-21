let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');
let navClosed = document.querySelector('.main-nav--closed');

navMain.classList.remove('main-nav--no-js');
navMain.classList.add('main-nav--closed');

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
if (popup != null) {
  let buttons = document.querySelectorAll('.popup-open');
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

  window.addEventListener('keydown', (evt) => {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      popup.classList.remove('popup--open');
      document.body.style.overflow = 'visible';
    }
  })
}
