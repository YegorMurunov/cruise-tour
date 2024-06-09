'use strict';
import {
	isWebp,
	isMobileCheck,
	setHeight,
	dom,
	removeClass,
	checkPhoneNumberUa,
	bodyLock,
	bodyUnlock
} from './modules/functions.js';
import { fixedHeader } from './modules/header-fixed.js';
import './modules/animateOnScroll.js';
// dynamic_adapt
import './modules/dynamic-adapt.js';
// anchor scroll
import './modules/anchor-scroll.js';
// anim numbers
import './modules/anim-numbers.js';
// swiper js
import './modules/swiper.js';

document.addEventListener('DOMContentLoaded', e => {
	e.preventDefault();

	isWebp();
	isMobileCheck();
	setHeight();
	window.addEventListener('resize', setHeight);

	// header

	// burger
	dom.burgerBtn.addEventListener('click', () => {
		dom.burgerBtn.classList.toggle('active');
		dom.header.classList.toggle('open');
		dom.body.classList.toggle('lock');
	});

	document.addEventListener('scroll', fixedHeader);
	fixedHeader();

	// tabs
	const tabs = document.querySelectorAll('[data-tabs]');
	if (tabs.length > 0) {
		tabs.forEach(item => {
			let links = item.querySelectorAll('[data-tab-link]');
			let contents = item.querySelectorAll('[data-tab-content]');
			const setTab = id => {
				removeClass(links, 'active');
				removeClass(contents, 'active');
				links[id - 1].classList.add('active');
				contents[id - 1].classList.add('active');
				if (window.innerWidth <= 620) {
					let topOffset =
						document
							.querySelector('.route-tabs__content')
							.getBoundingClientRect().top +
						scrollY -
						dom.header.offsetHeight; // Если шапка фиксированная ( - dom.header.offsetHeight )

					window.scrollTo({
						top: topOffset,
						behavior: 'smooth'
					});
				}
			};
			links.forEach(link => {
				link.onclick = () => {
					setTab(parseInt(link.getAttribute('data-tab-link')));
				};
			});
		});
	}
	// btn download
	const input = document.getElementById('phoneInput'),
		btn = document.getElementById('btnForPhone');

	input.addEventListener('input', e => {
		if (input.value.length <= 2) {
			input.value = '+38';
		}
		if (
			input.value[0] != '+' ||
			input.value[1] != '3' ||
			input.value[2] != '8'
		) {
			input.value = '+38';
		}
		if (checkPhoneNumberUa(input.value)) {
			btn.classList.remove('disabled');
		} else {
			btn.classList.add('disabled');
		}
	});
	input.addEventListener('focus', () => {
		if (input.value[0] != '+') {
			input.value = `+38${input.value}`;
		}
	});
	input.addEventListener('blur', () => {
		if (input.value.length <= 3) input.value = '';
	});
	input.addEventListener('keypress', e => {
		// Отменяем ввод не цифр
		if (!/\d/.test(e.key)) e.preventDefault();
	});
	btn.addEventListener('click', e => {
		if (btn.classList.contains('disabled')) {
			e.preventDefault();
		}
	});

	const lazyVideos = document.querySelectorAll('.lazy-video');
	lazyVideos.forEach(lazyVideo => {
		lazyVideo.addEventListener('click', () => {
			let url = lazyVideo.getAttribute('data-src');
			let parent = lazyVideo.parentNode;

			let iframe = `<iframe src="${url}" ?autoplay=1" style="border:none;" frameborder="0" allowfullscreen sandbox="allow-scripts allow-presentation allow-same-origin" allow="autoplay; fullscreen; picture-in-picture; xr-spatial-tracking; clipboard-write"></iframe>`;

			parent.classList.add('load');
			// parent.innerHTML = iframe;
			parent.innerHTML = '<iframe src="'.concat(
				url,
				'?autoplay=1" style="border:none;" frameborder="0" allowfullscreen sandbox="allow-scripts allow-presentation allow-same-origin" allow="autoplay; fullscreen; picture-in-picture; xr-spatial-tracking; clipboard-write"></iframe>'
			);
		});
	});
});
