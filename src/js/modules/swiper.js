// import Swiper JS
import Swiper from 'swiper';
import { Pagination, Scrollbar } from 'swiper/modules';

// import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {
	modules: [Pagination, Scrollbar],
	spaceBetween: 40,
	speed: 1000,
	autoplay: true,
	grabCursor: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	},
	slidesPerView: 3,
	breakpoints: {
		300: {
			slidesPerView: 1
		},
		700: {
			slidesPerView: 2
		},
		1080: {
			slidesPerView: 3
		}
	}
});
