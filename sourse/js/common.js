"use strict";



const convertImages = (query, callback) => {
	const images = document.querySelectorAll(query);

	images.forEach(image => {
		fetch(image.src)
			.then(res => res.text())
			.then(data => {
				const parser = new DOMParser();
				const svg = parser.parseFromString(data, 'image/svg+xml').querySelector('svg');

				if (image.id) svg.id = image.id;
				if (image.className) svg.classList = image.classList;

				image.parentNode.replaceChild(svg, image);
			})
			.then(callback)
			.catch(error => console.error(error))
	});
}
const JSCCommon = {
	modalCall() {
		const link = '[data-fancybox="modal"], .link-modal-js';

		Fancybox.bind(link, {
			arrows: false,
			// infobar: false,
			touch: false,
			trapFocus: false,
			placeFocusBack: false,
			infinite: false,
			dragToClose: false,
			type: 'inline',
			autoFocus: false,
			groupAll: false,
			groupAttr: false,
			l10n: {
				Escape: "Закрыть",
				NEXT: "Вперед",
				PREV: "Назад",
			},
		});
		document.querySelectorAll(".modal-close-js").forEach(el => {
			el.addEventListener("click", () => {
				Fancybox.close();
			})
		})
		Fancybox.bind('[data-fancybox]', {
			placeFocusBack: false,
		});
		const linkModal = document.querySelectorAll(link);
		function addData() {
			linkModal.forEach(element => {
				element.addEventListener('click', () => {
					let modal = document.querySelector(element.getAttribute("href"));
					const data = element.dataset;

					function setValue(val, elem) {
						if (elem && val) {
							const el = modal.querySelector(elem)
							el.tagName == "INPUT"
								? el.value = val
								: el.innerHTML = val;
							// console.log(modal.querySelector(elem).tagName)
						}
					}
					setValue(data.title, '.ttu');
					setValue(data.text, '.after-headline');
					setValue(data.btn, '.btn');
					setValue(data.order, '.order');
				})
			})
		}
		if (linkModal) addData();
	},
	// /modalCall
	toggleMenu() {
		document.addEventListener("click", function (event) {
			const toggle = document.querySelectorAll(".toggle-menu-mobile--js");
			const menu = document.querySelector(".menu-mobile--js");
			const toggleEv = event.target.closest(".toggle-menu-mobile--js");
			if (!toggleEv) return;
			toggle.forEach(el => el.classList.toggle("on"));
			menu.classList.toggle("active");
			[document.body, document.querySelector('html')].forEach(el => el.classList.toggle("fixed"));
		}, { passive: true });
	},
	closeMenu() {
		const toggle = document.querySelectorAll(".toggle-menu-mobile--js");
		const menu = document.querySelector(".menu-mobile--js");
		if (!menu) return;
		if (menu.classList.contains("active")) {
			toggle.forEach(element => element.classList.remove("on"));
			menu.classList.remove("active");
			[document.body, document.querySelector('html')].forEach(el => el.classList.remove("fixed"));
		}

	},
	mobileMenu() {
		const menu = document.querySelector(".menu-mobile--js");
		if (!menu) return;
		this.toggleMenu();
		document.addEventListener('mouseup', (event) => {
			let container = event.target.closest(".menu-mobile--js.active"); // (1)
			let link = event.target.closest(".menu-mobile .menu a"); // (1)
			let toggle = event.target.closest('.toggle-menu-mobile--js.on'); // (1)
			if (!container && !toggle) this.closeMenu();
		}, { passive: true });

		window.addEventListener('resize', () => {
			if (window.matchMedia("(min-width: 992px)").matches) this.closeMenu();
		}, { passive: true });
	},

	// tabs  .
	tabscostume(tab) { 
		function setData(el) {
			if (el) {
				
				let title = el.dataset.title;
				let text = el.dataset.text;
				let link = el.dataset.link;
				if (title && text && link) {
					
					document.querySelector(".sCooperation__center-title").innerText = title;
					document.querySelector(".sCooperation__center-caption").innerText = text;
					document.querySelector(".sCooperation__center-caption").setAttribute("href",link);
				}
			}
		}
		setData(document.querySelector('.' + tab + '__btn.sCooperation__icon.active'))
		$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
			$(this)
				.addClass('active').siblings().removeClass('active')
				.closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active')
				.eq($(this).index()).fadeIn().addClass('active');

				setData(this)
		});

	},
	// /tabs

	inputMask() {
		// mask for input
		let InputTel = [].slice.call(document.querySelectorAll('input[type="tel"]'));
		InputTel.forEach(element => element.setAttribute("pattern", "[+][0-9]{1}[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}"));
		Inputmask("+9(999)999-99-99").mask(InputTel);
	},
	// /inputMask
	ifie() {
		var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
		if (isIE11) {
			document.body.insertAdjacentHTML("beforeend", '<div class="browsehappy">	<p class=" container">К сожалению, вы используете устаревший браузер. Пожалуйста, <a href="http://browsehappy.com/" target="_blank">обновите ваш браузер</a>, чтобы улучшить производительность, качество отображаемого материала и повысить безопасность.</p></div>');
		}
	}, 
	heightwindow() {
		// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
		let vh = window.innerHeight * 0.01;
		// Then we set the value in the --vh custom property to the root of the document
		document.documentElement.style.setProperty('--vh', `${vh}px`);

		// We listen to the resize event
		window.addEventListener('resize', () => {
			// We execute the same script as before
			let vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty('--vh', `${vh}px`);
		}, { passive: true });
	},
	animateScroll() {
		$(document).on('click', " .scroll-link", function () {
			const elementClick = $(this).attr("href");
			if (!document.querySelector(elementClick)) {
				$(this).attr("href", '/' + elementClick)
			}
			else {
				let destination = $(elementClick).offset().top;
				$('html, body').animate({ scrollTop: destination - 70 }, 400);
				return false;
			}
		});
	},
	getCurrentYear(el) {
		let now = new Date();
		let currentYear = document.querySelector(el);
		if (currentYear) currentYear.innerText = now.getFullYear();
	},
	toggleShow(toggle, drop) {

		let catalogDrop = drop;
		let catalogToggle = toggle;

		$(document).on('click', catalogToggle, function () {
			$(this).toggleClass('active').next().fadeToggle('fast', function () {
				$(this).toggleClass("active")
			});
		})

		document.addEventListener('mouseup', (event) => {
			let container = event.target.closest(catalogDrop + ".active"); // (1)
			let link = event.target.closest(catalogToggle); // (1)
			if (!container || !catalogToggle) {
				$(catalogDrop).removeClass('active').fadeOut();
				$(catalogToggle).removeClass('active');
			};
		}, { passive: true });
	},
	makeDDGroup() {
		let parents = document.querySelectorAll('.dd-group-js');
		for (let parent of parents) {
			if (parent) {
				// childHeads, kind of funny))
				let ChildHeads = parent.querySelectorAll('.dd-head-js:not(.disabled)');
				$(ChildHeads).click(function () {
					let clickedHead = this;

					$(ChildHeads).each(function () {
						if (this === clickedHead) {
							//parent element gain toggle class, style head change via parent
							$(this.parentElement).toggleClass('active');
							$(this.parentElement).find('.dd-content-js').slideToggle(function () {
								$(this).toggleClass('active');
							});
						}
						else {
							$(this.parentElement).removeClass('active');
							$(this.parentElement).find('.dd-content-js').slideUp(function () {
								$(this).removeClass('active');
							});
						}
					});

				});
			}
		}
	},
};
const $ = jQuery;

function eventHandler() {
	// JSCCommon.ifie();
	JSCCommon.modalCall();
	JSCCommon.tabscostume('tabs');
	JSCCommon.mobileMenu();
	JSCCommon.inputMask();
	// JSCCommon.sendForm();
	JSCCommon.heightwindow();
	JSCCommon.makeDDGroup();
	// JSCCommon.toggleShow(".catalog-block__toggle--desctop", '.catalog-block__dropdown');
	JSCCommon.animateScroll();

	// JSCCommon.CustomInputFile(); 
	var x = window.location.host;
	let screenName;
	screenName = document.body.dataset.bg;
	if (screenName && x.includes("localhost:30")) {
		document.body.insertAdjacentHTML("beforeend", `<div class="pixel-perfect" style="background-image: url(screen/${screenName});"></div>`);
	}


	function setFixedNav() {
		let topNav = document.querySelector('.top-nav');
		if (!topNav) return;
		window.scrollY > 0
			? topNav.classList.add('fixed')
			: topNav.classList.remove('fixed');
	}

	function whenResize() {
		setFixedNav();
	}

	window.addEventListener('scroll', () => {
		setFixedNav();

	}, { passive: true })
	window.addEventListener('resize', () => {
		whenResize();
	}, { passive: true });

	whenResize();

	$(`.solution-content__show-text`).click(function () {
		$(this).parent().toggleClass(`active`);
		$(this).toggleClass(`active`);
	});
	$(`.vacancy-item__toggle-main`).click(function () {
		$(this).toggleClass(`active`);
		$(this).parent().next().slideToggle();
	});
	$(`.vacancy-item__info-title`).click(function () {
		$(this).toggleClass(`active`);
		$(this).next().slideToggle();
	});

	$('.tabs-wrap__btn').click(function () {
		let items = Array.from($(".tabs-wrap__btn"));
		if ($(this).hasClass(`active`)) {

		}
		else {
			for (let i = 0; i < items.length; i++) {
				if ($(items[i]).hasClass(`active`)) {
					$(items[i]).removeClass(`active`);
				}
			}
			$(this).addClass(`active`);
		}
	});
	$(".top-nav__search-btn").click(function () {
		$(this).parents('.top-nav__search').toggleClass("active")
			.find('.block-search-wrap').toggleClass("active")
	})
	$(".btn-show-popup").click(function () {
		$(this).next().toggleClass("active");
	})//для демонстрации
	$(".after-search__close").click(function () {
		$(this).parent().toggleClass("active");
	})//для демонстрации

	document.addEventListener('mouseup', (event) => {
		let container2 = event.target.closest(" .top-nav__search.active");
		if (!container2) {
			$(' .top-nav__search.active').removeClass('active').find('.block-search-wrap').removeClass('active');
		};
	}, { passive: true });
	let defaultSl = {
		spaceBetween: 0,
		lazy: {
			loadPrevNext: true,
		},
		watchOverflow: true,
		spaceBetween: 0,
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: ' .swiper-pagination',
			type: 'bullets',
			clickable: true,
			// renderBullet: function (index, className) {
			// 	return '<span class="' + className + '">' + (index + 1) + '</span>';
			// }
		},
	}

	const linksSlider = new Swiper('.links-wrap-slider', {
		slidesPerView: 'auto',
		watchOverflow: true,
	});
	const tabsSlider = new Swiper('.tabs-wrap-slider', {
		slidesPerView: 'auto',
		watchOverflow: true,
		spaceBetween: 4,
	});
	const solutionSlider = new Swiper('.sOneSolution__projects-slider', {
		slidesPerView: 'auto',
		navigation: {
			prevEl: ".swiper-button-hand-prev",
			nextEl: ".swiper-button-hand-next",
		}
	});
	const contentSlider = new Swiper('.sContent__slider--js', {
		slidesPerView: '1',
		spaceBetween: 0,
		navigation: {
			prevEl: ".swiper-button-hand-prev",
			nextEl: ".swiper-button-hand-next",
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			1280: {
				spaceBetween: 40
			}
		}
	});
	const indexSlider = new Swiper('.index-slider--js', {
		slidesPerView: `auto`,
		spaceBetween: 8,
		navigation: {
			prevEl: ".swiper-button-hand-prev",
			nextEl: ".swiper-button-hand-next",
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			992: {
				slidesPerView: '4',
			}
		}
	});
	const contenProjectSlider = new Swiper('.sContentSlider__slider--js', {
		slidesPerView: 1,
		loop:true,
		navigation: {
			prevEl: ".swiper-button-hand-prev",
			nextEl: ".swiper-button-hand-next",
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			576: {
				slidesPerView: 'auto',
			}
		}
	});
	const infoTeamSlider = new Swiper('.info-team-slider', {
		slidesPerView: 1,
		spaceBetween: 8,
		loop: true,
		navigation: {
			prevEl: ".swiper-button-hand-prev",
			nextEl: ".swiper-button-hand-next",
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			1280: {
				spaceBetween: 104,
			}
		},
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
	});
	const solutionIndustriesSlider = new Swiper('.solution-content__projects-slider', {
		slidesPerView: 'auto',
		spaceBetween: 0,
		navigation: {
			prevEl: ".swiper-button-hand-prev",
			nextEl: ".swiper-button-hand-next",
		},
		breakpoints: {
			992: {
				slidesPerView: '1',
				spaceBetween: 1,
			}
		}
	});
	const sRatingsSlider = new Swiper('.sRating__slider--js', {
		slidesPerView: '1',
		spaceBetween: 0,
		navigation: {
			prevEl: ".swiper-button-hand-prev",
			nextEl: ".swiper-button-hand-next",
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
	});
	const IndexPartnersSlider = new Swiper('.sInfoNews__partners-wrap-slider', {
		slidesPerView: 'auto',
		spaceBetween: 8,
		rewind: true,
		navigation: {
			prevEl: ".swiper-button-hand-prev",
			nextEl: ".swiper-button-hand-next",
		}, 
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			992: {
				slidesPerView: 4,
				grid: {
					rows: 2,
				},
				spaceBetween: 30,
			}
		}
	});
	const sInfoNewsIndexSlider = new Swiper('.sInfoNewsIndex-slider', {
		slidesPerView: '1',
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
	});
	const industriesSlider = new Swiper('.industries-slider, .sInfoNews__slider-mob--js', {
		slidesPerView: 'auto',
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
	});
	const swiper4 = new Swiper('.sBanners__slider--js', {
		// slidesPerView: 5,
		...defaultSl,
		slidesPerView: 'auto',
		freeMode: true,
		loopFillGroupWithBlank: true,
		touchRatio: 0.2,
		slideToClickedSlide: true,
		freeModeMomentum: true,

	});
	// $('.page-head__row--fix').hcSticky({
	// 	stickTo: $('.sticky-wrapper'),
	// 	top: 128,
	// 	innerTop: 64,
	// 	// bottomEnd: 100,
	// 	responsive: {
	// 		992: {
	// 			top: 96,
	// 			innerTop: 48,
	// 			// disable: true,
	// 		}
	// 	}
	// });
	// modal window
	FilePond.registerPlugin(
		// encodes the file as base64 data
		FilePondPluginFileEncode,

		// validates the size of the file
		FilePondPluginFileValidateSize,

		// corrects mobile image orientation
		FilePondPluginImageExifOrientation,

		// previews dropped images
		FilePondPluginImagePreview
	);

	// Select the file input and use 
	// create() to turn it into a pond
	FilePond.create(
		document.querySelector('.filepond'),
		{
			// labelIdle: `Drag & Drop your picture or <span class="filepond--label-action">Browse</span>`,
			labelIdle: `Нажмите или перетащите  файлы в эту область. .rar .zip .doc .docx .pdf .jpg не более 10 мб`,
		}
	);



	var wow = new WOW(
		{
			animateClass: 'animate__animated', // animation css class (default is animated)
			mobile: false       // trigger animations on mobile devices (default is true)
		}
	);
	wow.init();

	
	ScrollTrigger.defaults({
		toggleActions: "restart pause resume pause"
	});

	let speed3 = .5


	let triggerSet = {
		start: '-10% bottom',
		end: '80% ',
		// scrub: true, 
		
	}
	let triggerSet2 = {
		start: '10% bottom',
		end: '120% top',
		// scrub: true, 
		toggleActions: "play none none none"
		
	}
	let setEl = {
		duration: speed3 * 3,
		repeat: -1,
		yoyo: true,
		ease: 'none'
	}
	let setEl2 = {
		duration: speed3 * 2, 
		// scrub: true, 
		ease: "circ.out"
	}

	let scroller = document.body;
	


	if (document.querySelector(".sBars")) {
	
		var bart2 = gsap.timeline({ 
			scrollTrigger: { 
				trigger: ".sBars",  
				...triggerSet2
			}, 
		})
		bart2
		// .from(".bar-item__svg-wrap", {rotate: -270, opacity:0, ...setEl2 }) 
		.from(".progress-bar__progress", { strokeDashoffset: 100, opacity:0,...setEl2, duration: speed3 * 5,  } )  
		.from(".bar-item__title--border", { scaleX: 0,...setEl2 },'-=.5') 
		.from(":is(.sBars__col:nth-child(2), .sBars__col:nth-child(4)) :is(.bar-item__title--border span, .bar-item__text--sm)", { x: '-100%',...setEl2 }) 
		.from(":is(.sBars__col:nth-child(3), .sBars__col:nth-child(5)) :is(.bar-item__title--border span, .bar-item__text--sm)", { x: '100%',...setEl2 },'-=1') 
		.from(".bar-item__title--border span, .bar-item__text--sm", {opacity:0,...setEl2 },'-=1') 
		;
	}
		function animateRating() {
		
		var t2 = gsap.timeline({ 
			scrollTrigger: { 
				trigger: ".sRating__ratings-caption",  
				...triggerSet
			}, 
		})
		t2
			.to("#r-1", { y: 10,...setEl })
			.to("#r-2", { y: -10,...setEl },'>-1') 
			.to("#r-3", { y: -10,...setEl },'>- 1')
			;
	}
	function industryanimate() {
		
		// gsap.utils.toArray(".project-industry-slider-item").forEach((trigger, index) => {
		// var t2 = gsap.timeline({ 
		// 	scrollTrigger: { 
		// 		trigger, 
		// 		endTrigger: trigger[index + 1],
		// 		// markers: true,
		// 		...triggerSet,
		// 		start: '10% bottom',
		// 		end: '60% ',
		// 	}, 
		// })
		// t2
		// 	.to(trigger.querySelectorAll(".down"), { y: 20,...setEl })
		// 	.to(trigger.querySelectorAll(".up"), { y: -20,...setEl },'-=1') 
		// 	// .to("#r-3", { y: -10,...setEl },'>- 1')
		// 		;
		// 	})
		}
		var t3 = gsap.timeline({ 
			scrollTrigger: { 
				trigger: '.sCooperation',  
				// markers: true,
				...triggerSet,
				start: 'top bottom',
				end: '100% ',
			}, 
		})
		t3
			.fromTo(".to-left", { x: 30,...setEl } , {x: -30,...setEl })
			.fromTo(".to-right", { x: -30,...setEl }, { x: 30,...setEl },'-=1') 
			// .to("#r-3", { y: -10,...setEl },'>- 1')
				; 

	convertImages('.sRating__bg img', animateRating);
	convertImages('.project-industry-slider-item__bg img', industryanimate);
	convertImages(':is(.index-slider-item__img, .tabs-wrap__btn) img');


};
if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}

// window.onload = function () {
// 	document.body.classList.add('loaded_hiding');
// 	window.setTimeout(function () {
// 		document.body.classList.add('loaded');
// 		document.body.classList.remove('loaded_hiding');
// 	}, 500);
// }
if (document.querySelector('.sContact__map--office')) {
	ymaps.ready(function () {
		var myMap = new ymaps.Map('map-office', {
			center: [55.743684, 37.555148],
			zoom: 17,
			controls: [`zoomControl`]
		}, {
			searchControlProvider: 'yandex#search'
		}),

			myPlacemark = new ymaps.Placemark(myMap.getCenter(), {

			}, {
				// Опции.
				// Необходимо указать данный тип макета.
				iconLayout: 'default#image',
				// Своё изображение иконки метки.
				iconImageHref: '',
				// Размеры метки.
				iconImageSize: [53, 80],
				// Смещение левого верхнего угла иконки относительно
				// её "ножки" (точки привязки).
				iconImageOffset: [0, -48]
			});
		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
			//... отключаем перетаскивание карты
			myMap.behaviors.disable('drag');
			myMap.zoom = 17;
		}
		myMap.geoObjects
			.add(myPlacemark)
	});

}
if (document.querySelector('.sContact__map--warehouse')) {
	ymaps.ready(function () {
		var myMap = new ymaps.Map('map-warehouse', {
			center: [55.566074, 37.751538],
			zoom: 16,
			controls: [`zoomControl`]
		}, {
			searchControlProvider: 'yandex#search'
		}),

			myPlacemark = new ymaps.Placemark(myMap.getCenter(), {

			}, {
				// Опции.
				// Необходимо указать данный тип макета.
				iconLayout: 'default#image',
				// Своё изображение иконки метки.
				iconImageHref: '',
				// Размеры метки.
				iconImageSize: [53, 80],
				// Смещение левого верхнего угла иконки относительно
				// её "ножки" (точки привязки).
				iconImageOffset: [0, -48]
			});

		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
			//... отключаем перетаскивание карты
			myMap.behaviors.disable('drag');
			myMap.zoom = 17;
		}
		myMap.geoObjects
			.add(myPlacemark)
	});
}