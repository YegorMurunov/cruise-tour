export const dom = {
	header: document.querySelector('header.header'),
	body: document.body,
	burgerBtn: document.querySelector('.header__menu-btn'),
	wrapper: document.getElementById('wrapper')
};
export function headerToggle() {
	dom.burgerBtn.classList.toggle('active');
	dom.header.classList.toggle('open');
	dom.body.classList.toggle('lock');
}

export function isMobileCheck() {
	const isMobile = {
		Android: function () {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function () {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function () {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function () {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function () {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function () {
			return (
				isMobile.Android() ||
				isMobile.BlackBerry() ||
				isMobile.iOS() ||
				isMobile.Opera() ||
				isMobile.Windows()
			);
		}
	};
	if (isMobile.any()) {
		document.body.classList.add('touch');
		return true;
	} else {
		document.body.classList.add('pc');
		return false;
	}
}

export function isWebp() {
	function testWebP(callback) {
		var webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src =
			'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
	}
	testWebP(function (support) {
		let className = support === true ? 'webp' : 'no-webp';
		document.body.classList.add(className);
	});
}

export function randomInt(min, max) {
	let rand = min - 0.5 + Math.random() * (max - min + 1);
	return Math.round(rand);
}

export function removeClass(arr, className = '_active') {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].classList.contains(className)) {
			arr[i].classList.remove(className);
		}
	}
}

// height: 100vh
export function setHeight() {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
}
// setHeight();
// window.addEventListener('resize', setHeight);

// viber links
export function viberMobLinks() {
	const viberLinks = document.querySelectorAll('a.viber');
	viberLinks.forEach(viberLink => {
		viberLink.setAttribute('href', 'viber://add?number=380956954921');
	});
}
export function viberPcLinks() {
	const viberLinks = document.querySelectorAll('a.viber');
	viberLinks.forEach(viberLink => {
		viberLink.setAttribute('href', 'viber://chat?number=+380956954921');
	});
}

export function checkPhoneNumberUa(string) {
	// украинского номера
	if (/^\+380\d{3}\d{2}\d{2}\d{2}$/.test(string)) return true;
	return false;
}
