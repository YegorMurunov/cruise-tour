import { visible } from './visible.js';

const animElements = document.querySelectorAll('.animWrapper');
document.addEventListener('scroll', () => {
	animElements.forEach(element => {
		if (visible(element) && !element.classList.contains('anim')) {
			element.classList.add('anim');
		}
	});
});

document.addEventListener('DOMContentLoaded', () => {
	animElements.forEach(element => {
		let delay = element.getAttribute('data-delay');
		if (delay) {
			element.querySelector('.circleInside').style.transitionDelay =
				delay + 'ms';
		}
		if (visible(element) && !element.classList.contains('anim')) {
			element.classList.add('anim');
		}
	});
});
