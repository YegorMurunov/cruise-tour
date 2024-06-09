import { dom } from './functions.js';

// popups
const popupLinks = document.querySelectorAll('.popup-link');
const lockPadding = document.querySelectorAll('.lock-padding'); // для абсолютных элементов (шапка ...)
let unlock = true; // чтобы не было 2-ных нажатий
const timeout = 800; // 0.8 сукунды

if (popupLinks.length > 0) {
	for (let i = 0; i < popupLinks.length; i++) {
		popupLinks[i].addEventListener('click', e => {
			e.preventDefault();

			const popupName = e.target.getAttribute('href').substring(1);
			const currentPopup = document.getElementById(popupName);

			popupOpen(currentPopup);
		});
	}
}

function popupOpen(currentPopup) {
	if (currentPopup && unlock) {
		const popupActive = document.querySelector('.popup.open');
		if (popupActive) {
			popupClose(currentPopup, false);
		} else {
			bodyLock();
		}
		currentPopup.classList.add('open');

		currentPopup.addEventListener('click', function (e) {
			if (!e.target.closest('.popup__content')) {
				console.log(e.target.closest('.popup'));
				popupClose(e.target.closest('.popup'));
			}
		});
		let closeIcon = currentPopup.querySelector('.popup__close');
		closeIcon.addEventListener('click', () => {
			popupClose(currentPopup);
		});
	}
}

// close the popup by pressing the esc key
document.addEventListener('keydown', e => {
	if (e.which === 27) {
		const popupActive = document.querySelector('.popup.open');
		popupActive ? popupClose(popupActive) : '';
	}
});

function popupClose(popupActive, doUnlock = true) {
	if (unlock) {
		popupActive.classList.remove('open');
		if (doUnlock) {
			bodyUnlock();
		}
	}
}

function bodyLock() {
	const lockPaddingValue =
		window.innerWidth - document.querySelector('#wrapper').offsetWidth + 'px';

	if (lockPadding.length > 0) {
		for (let i = 0; i < lockPadding.length; i++) {
			const el = lockPadding[i];
			el.style.paddingRight = lockPaddingValue;
		}
	}
	dom.body.style.paddingRight = lockPaddingValue;
	dom.body.classList.add('lock');

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

function bodyUnlock() {
	setTimeout(function () {
		if (lockPadding.length > 0) {
			for (let i = 0; i < lockPadding.length; i++) {
				const el = lockPadding[i];
				el.style.paddingRight = '0px';
			}
		}

		dom.body.style.paddingRight = '0px';
		dom.body.classList.remove('lock');
	}, timeout);

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

// функция для открытия popup по хешу в url
/*let hash = window.location.hash;
if ( hash !== '' ) {
	let id = hash.substring(1);
	let el = document.getElementById(id);
	if ( el ) {
		if ( el.classList.contains('popup') ) {
			el.classList.add('open');
		}
	}
}*/
