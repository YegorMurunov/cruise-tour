import { dom, headerToggle, isMobileCheck } from './functions.js';

const anchorLinks = document.querySelectorAll('.anchor-link');

if (anchorLinks.length > 0) {
	anchorLinks.forEach(anchorLink => {
		anchorLink.addEventListener('click', function (e) {
			e.preventDefault();

			const id = this.getAttribute('href').substring(1);
			let scrollTarget = document.getElementById(id);

			scrollToSection(scrollTarget);
		});
	});
}

function scrollToSection(el) {
	let topOffset = el.getBoundingClientRect().top + scrollY;
	if (isMobileCheck()) {
		topOffset -= dom.header.offsetHeight; // Если шапка фиксированная ( - dom.header.offsetHeight )
	}

	window.scrollTo({
		top: topOffset,
		behavior: 'smooth'
	});

	if (dom.html.classList.contains('menu-open')) {
		headerToggle();
	}
}
