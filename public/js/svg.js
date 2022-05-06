'use strict';


let speed = 1000;
let speed2 = .5 * 3;
function headSVG() {



	// gsap.registerPlugin( InertiaPlugin);
	// Create a timeline with default parameters
	let set = {
		ease: Linear.easeNone,
		duration: speed,
		loop: true,
		direction: 'alternate',
	}
	let setg = {
		ease: "none",
		transformOrigin: "center  center",

		// repeat: -1,
		duration: speed2,

		// // bounds: window,
		// stagger: 1.5
		// direction: 'alternate',
	}

	let tl0 = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: .5, defaults: { ...setg, duration: speed2 * .5 } });
	let tl = gsap.timeline({ repeat: -1, defaults: setg });

	let tl2 = gsap.timeline({ repeat: -1, defaults: { ...setg, duration: speed2 * .5 } });

	let tl3 = gsap.timeline({ repeat: -1, defaults: { ...setg, duration: speed2 * .5  } });
	let tl4 = gsap.timeline({ repeat: -1, repeatDelay: 1,   defaults: { ...setg } });
	let tl42 = gsap.timeline({ repeat: -1, repeatDelay: 1,   defaults: { ...setg } });
	let tl5 = gsap.timeline({ repeat: -1, repeatDelay: 1, defaults: { ...setg, duration: speed2 } });
	let tl6 = gsap.timeline({ repeat: -1, repeatDelay: 1, defaults: { ...setg, duration: speed2 } });
	let tl7 = gsap.timeline({ repeat: -1, repeatDelay: 1, defaults: setg });
	let tl8 = gsap.timeline({ repeat: -1, repeatDelay: 1, defaults: setg });
	let tl9 = gsap.timeline({ repeat: -1, yoyo: true, defaults: setg });
	let tl10 = gsap.timeline({ repeat: -1, repeatDelay: 1, defaults: setg });
	let tl101 = gsap.timeline({ repeat: -1, repeatDelay: 5, defaults: setg });
	let tl20 = gsap.timeline({ repeat: -1, yoyo: true, defaults: setg });
	let tl201 = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 1, defaults: setg });
	let tl21 = gsap.timeline({ repeat: -1, defaults: setg });
	let tl22 = gsap.timeline({ repeat: -1, defaults: { ...setg, duration: speed2 * .05, ease: "none" } });
	let tl23 = gsap.timeline({ repeat: -1,yoyo: true,   defaults: { ...setg, duration: speed2 * .5, } });
	let tl24 = gsap.timeline({ repeat: -1, yoyo: true,repeatDelay: 5, defaults: { ...setg, duration: speed2 * .5, } });
	let tl25 = gsap.timeline({ repeat: -1, defaults: { ...setg, duration: speed2 * .5, } });
	let tl26 = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 2, defaults: { ...setg, duration: speed2 * .5, } });
	let tl27 = gsap.timeline({ repeat: -1, repeatDelay: 1, defaults: { ...setg, duration: speed2 * .5, } });


	let cat = gsap.timeline({ repeat: -1,yoyo: true, repeatDelay: 2,   defaults: { ...setg, duration: speed2 * .5 } });
	let lists = gsap.timeline({ repeat: -1,yoyo: true, repeatDelay: 1,   defaults: { ...setg, duration: speed2 * .5 } });
	// let cat = gsap.timeline({    defaults: { ...setg, duration: speed2 * .5 } });

	tl0
		.fromTo('#dark-l', { opacity: 0 }, { opacity: 1 })
		.fromTo('#darkl-2', { opacity: 0 }, { opacity: 1 });
	tl
		.fromTo('#belaz-1',
			{ x: 150, y: -150, opacity: 0 },
			{ x: 0, y: 0, opacity: 1 })
		.fromTo('#circle-2_3_', { opacity: 0, x: 0, y: 0 }, { opacity: 1, x: -20, y: 17 })

		.to('#circle-2_3_', { x: 35, y: 54, skewX: -35 })
		.to('#circle-2_3_', { skewX: 0, x: -10, y: 88, transformOrigin: "center  center" })
		.to('#circle-2_3_', { x: 7, y: 100, skewX: -35, transformOrigin: "center  center" })
		.fromTo('#circle-2_3_1', { opacity: 1, x: 58, y: 34, transformOrigin: "center  center" }, { opacity: 0, x: -16, y: -10, transformOrigin: "center  center" })

		.to('#color1, #color2', { stroke: '#0CD1FF' }, ">-.5")
		.to(':is(#circle-2_3_1, #circle-2_3_) :is(.st7, .st8)', { fill: '#0CD1FF' }, ">-1")
		.to('#circle-2_3_1', { opacity: 1, x: 58, y: 34, transformOrigin: "center  center" }, ">-1")
		.to('#circle-2_3_', { x: -10, y: 88, skewX: -35, transformOrigin: "center  center" })
		.to('#circle-2_3_', { x: 35, y: 54, skewX: 0, transformOrigin: "center  center" })
		.to('#circle-2_3_', { x: -20, y: 17, skewX: -35, })
		.to('#circle-2_3_', { opacity: 0, x: 0, y: 0, skewX: 0 })
		.to('#belaz-1',
			{ x: 150, y: -150, opacity: 0 })

	gsap.fromTo('#monitor-4, #monitor-4-1, #monitor-4-2', { opacity: 1, y: 0 }, { opacity: 0, y: 6, ...setg, duration: speed2 * 4, repeat: -1, yoyo: true });
	gsap.fromTo('#helicopter', { y: 0, x: 1150 }, { y: 50, x: 1150, ...setg, duration: speed2 * 4, repeat: -1, yoyo: true });

			// cat 
	// cat.to('#cat-tail', { rotate: 23, "transformOrigin":"39.8% 91.3%" })
	// .to('#cat-head', { rotate: 35,x:1, y:-1, "transformOrigin":"41.1% 89.1%" });
	cat.to('#cat-tail', { rotate: 10, "transformOrigin":"0 1%" })
	.to('#cat-head', { rotate: 35,x:1, y:-1 });
	
	// gsap.to('#cat-head', { y: 3, x:-1, rotate:2, ...setg, duration: speed2 * .5, repeat: -1, repeatDelay: 2, yoyo: true });
	gsap.to('#Signal', { opacity: 1, ...setg, duration: speed2 * .5, repeat: -1, repeatDelay: 2, yoyo: true });
	tl24
		.to('#Group_71', { opacity:0})
		.to('#Group_72', { opacity:0})

		.to('#Chart_3', { skewX: -8, scaleX: 0.66, transformOrigin: "left bottom", delay: 5 })
		.to('#Chart_8', { opacity: 0, delay: 5 })
		.from('#Chart_7', { opacity: 0 }, `>-${1} `)
		.to('#Chart_5', { skewY: -10, scaleY: 0.66, transformOrigin: "bottom"})
		.to('#Group_5_ #Line_2', { strokeDashoffset: 100, duration: speed2 * 4 , delay: 5})
		.from('#Group_5_ #Line_1', { strokeDashoffset: 100, duration: speed2 * 4 })
		.to('#Chart_2', { skewY: -10, scaleY: 0.66, y: -2, transformOrigin: "bottom" })

		;

	tl25
		.from('#Linediagramm', { strokeDashoffset: -70, duration: speed2 * 2 })
		.to('#Circlechart_2', { opacity: 1 })
		.to('#Circlechart_1', { opacity: 0 })
		.to('#dashboard-front', { opacity: 0, delay: speed2 * 1.5 })
		.to('#dashboard', { opacity: 1 }, `>-${.5} `)
		.to('#dashboard', { opacity: 0, delay: speed2 * 1.5 })
		.to('#dashboard-front', { opacity: 0 }, `>-${.5} `)

	tl26
		.to('#sheme1', { opacity: 0, delay: speed2 })
	let text19 = document.querySelectorAll("#text1 .st19")
	text19.forEach((el, index) => {

		tl26
			.to(el, { opacity: 1, duration: speed2 * .02, delay: speed2 * .01 * index })
	})

	let dDown = { opacity: 0, y: 5 }
	let dUp = { opacity: 1, y: 0 }
	tl27
		.set('#diagram3', { opacity: 1, y: 0 })
		.to('#diagram3', { ...dDown , delay: speed2})
		.fromTo('#diagram2', dDown, dUp, `>-${.1} `)
		.to('#diagram2', { ...dDown, delay: speed2})
		.fromTo('#diagram1', dDown, dUp, `>-${.1} `)
		.to('#diagram1', { ...dDown, delay: speed2})
		.to('#diagram3', dUp)

	tl22
		// .set('#helicopter :is(.step-2, .step-3, .step-4)', { opacity: 0 })

		// .to('#helicopter .step-1', { opacity: 0 })
		.to('#helicopter .step-1', { opacity: 1 })
		.to('#helicopter .step-1', { opacity: 0 })
		
		
		.to('#helicopter .step-2', { opacity: 1 })
		.to('#helicopter .step-2', { opacity: 0 })
		
		
		.to('#helicopter .step-3', { opacity: 1 })
		.to('#helicopter .step-3', { opacity: 0 })
		
		.to('#helicopter .step-4', { opacity: 1 })
		.to('#helicopter .step-4', { opacity: 0 })
		
		
	tl2
		.fromTo('#hand-4--left', { y: 0 }, { y: -2 })
		.fromTo('#hand-4--right', { y: 0 }, { y: -3 })

	// let circle51 = tl3.fromTo('#circle-5--1', { opacity: 0, x: 0, y: 0 }, { opacity: 1, x: 39, y: 26 });
	// let circle52 = tl3.fromTo('#circle-5--2', { opacity: 0, x: 35, y: 32 }, { opacity: 1, x: 0, y: 0 }, `>-.5`);
	// let circle53 = tl3.fromTo('#circle-5--3', { opacity: 0, x: 0, y: 0 }, { opacity: 1, x: 35, y: 21 }, `>-.5`);
	// let circle54 = tl3.fromTo('#circle-5--4', { opacity: 0, x: -27, y: 18 }, { opacity: 1, x: 0, y: 0 }, `>-.5`);



	let box6 = [{ opacity: 0, x: -34, y: -21 }, { opacity: 1, x: 0, y: 0 }]
	let box6Hide = { opacity: 0, x: -34, y: -21}

	let box6hide = {
		opacity: 0,
		translateX: -34,
		translateY: -21,
	}

	let strokel3 = `[d="M782,512.4l65.8,40.3"], [d="M845.3,476l54.2,33"]`;
	tl3
		// .add(circle51)
		// .add(circle52)
		// .add(circle53)
		// .add(circle54)
		
		.fromTo('#circle-5--1', { opacity: 0, x: 0, y: 0 }, { opacity: 1, x: 39, y: 26 })
		.fromTo('#circle-5--2', { opacity: 0, x: 35, y: 32 }, { opacity: 1, x: 0, y: 0 }, `>-.5`)
		
		.fromTo('#circle-5--3', { opacity: 0, x: 0, y: 0 }, { opacity: 1, x: 35, y: 21 }, `>-.5`)
		.to(':is(#circle-5--1,   #circle-5--3)  :is(.st7,  .st8) ', { fill: '#0CD1FF' })
		.to(strokel3, { stroke: '#0CD1FF' } )
		.fromTo('#circle-5--4', { opacity: 0, x: -27, y: 18 }, { opacity: 1, x: 0, y: 0 }, `>-.5`)
		.to('#circle-5--1', { opacity: 1, x: 0, y: 0 }, `>-1`) 
		.to('#circle-5--3', { opacity: 1, x: 0, y: 0 }, `>-.5`) 
		.fromTo('#box-6--1', ...box6)
		.fromTo('#box-6--2', ...box6)
		.fromTo('#box-6--3', ...box6)
		.fromTo('#screen-7--left', { opacity: 0, y: 20 }, { opacity: 1, y: 0 }, `>-1`)
		.fromTo('#screen-7--right', { opacity: 0, y: 20 }, { opacity: 1, y: 0 }, `>-.2`)
		.fromTo('#box-6--4', ...box6, '>-1')

		.to('#screen-7--right', { opacity: 0, y: 20 , delay:1})
		.to('#screen-7--left', { opacity: 0, y: 20 }, `>-.2`)
		.to('#box-6--4', box6Hide)
		.to('#box-6--3', box6Hide)
		.to('#box-6--2', box6Hide)
		.to('#box-6--1', box6Hide)
		// .to('#circle-5--1', { opacity: 0, x: 0, y: 0 }, `>-1`)
		// .to('#circle-5--2', { opacity: 0, x: 35, y: 32 })
		// .to('#circle-5--3', { opacity: 0, x: 0, y: 0 })
		// .to('#circle-5--4', { opacity: 0, x: -27, y: 18 })

	let circleDown = el => tl4.to(`#circle-7--${el}`, { opacity: 0, x: -70, y: 39 },`>-1`);
	let circleUp = el => tl4.fromTo(`#circle-7--${el}`, { opacity: 0, x: -70, y: 39 }, { opacity: 1, x: 0, y: 0 },`>-1`);


	let strokel4 = `[d="M797,278.2V269c0-1.1,0.6-2.1,1.5-2.6l73.2-42.7"], [d="M770.6,262.5v-9.3c0-1.1,0.6-2.1,1.5-2.6l73.2-42.7"]`;
	tl4

		.to(`#excavator-8`, { x: -12, y: -6 })
		
		// .add(circleUp(1))
		// .add(circleUp(3))
		.to(`#circle-7--2, #circle-7--4, #circle-7--1, #circle-7--3`,   { opacity: 1}, ">-1")
		.to(':is(#circle-7--1, #circle-7--3) :is(.st7, .st8)', { fill: '#0CD1FF' }, ">-1")
		.to(strokel4, { stroke: '#0CD1FF' }, ">-1")
		// .fromTo(`#circle-7--1, #circle-7--3`, { opacity: 0 }, { opacity: 1 },`>-1`)
		.fromTo(`#circle-7--1, #circle-7--3`, { opacity: 1, x: 0, y: 0 }, { opacity: 0, x: -70, y: 39 }, ">-1")
		.to(':is(#circle-7--1, #circle-7--3) :is(.st7, .st8)', { fill: '#017AFF'} , ">-1")
		.to(strokel4, { stroke: '#3998FF' }, ">-1")
		.to(`#circle-7--1, #circle-7--3`,   { opacity: 1, x: 0, y: 0  }, ">-1")
		.fromTo(`#circle-7--2, #circle-7--4`, {opacity:1},  { opacity: 0, x: -70, y: 39 }, ">-1")
		.to(`#excavator-8`, { x: 0, y: 0 })
		.to(`#circle-7--2, #circle-7--4`, { opacity: 0 }, ">-1") 
		
		
		.to(`#excavator-8`, { x: -12, y: -6 })
		
		// .add(circleUp(1))
		// .add(circleUp(3))
		.to(`#circle-7--2, #circle-7--4, #circle-7--1, #circle-7--3`,   { opacity: 1}, ">-1")
		.to(':is(#circle-7--1, #circle-7--3) :is(.st7, .st8)', { fill: '#0CD1FF' }, ">-1")
		.to(strokel4, { stroke: '#0CD1FF' }, ">-1")
		// .fromTo(`#circle-7--1, #circle-7--3`, { opacity: 0 }, { opacity: 1 },`>-1`)
		.fromTo(`#circle-7--1, #circle-7--3`, { opacity: 1, x: 0, y: 0 }, { opacity: 0, x: -70, y: 39 }, ">-1")
		.to(':is(#circle-7--1, #circle-7--3) :is(.st7, .st8)', { fill: '#017AFF'} , ">-1")
		.to(strokel4, { stroke: '#3998FF' }, ">-1")
		.to(`#circle-7--1, #circle-7--3`,   { opacity: 1, x: 0, y: 0  }, ">-1")
		.fromTo(`#circle-7--2, #circle-7--4`, {opacity:1},  { opacity: 0, x: -70, y: 39 }, ">-1")
		.to(`#excavator-8`, { x: 0, y: 0 })
		.to(`#circle-7--2, #circle-7--4`, { opacity: 0 }, ">-1") 
	
	let stroketl42 = `[d="M923,159l103.5-58.7c2.5-1.4,5.6-1.4,8,0.1l37.5,22.1"]`;
	tl42
		.to(`#g-1`,  { opacity: 1, x: 180, y: -110 })
		.to(`#g-1`, { skewX: -31, x: 220, y: -90, opacity: 0 })
		.to(':is(#g-1) :is(.st7, .st8)', { fill: '#0CD1FF' }, ">-1")
		.to(stroketl42, { stroke: '#0CD1FF' }, ">-1")
		.to(`#g-1`,  { opacity: 1, x: 180, y: -110,skewX: 0 })
		.to(`#g-1`,  { opacity: 0, x: 0, y: 0})
		.to(':is(#g-1) :is(.st7, .st8)', { fill: '#017AFF' }, ">-1")
		.to(stroketl42, { stroke: '#3998FF' }, ">-1") 
		
		
		tl5
		.fromTo('#granuly, #granuly_1_, #granuly_2_,  #granuly_3_', { opacity: 0, y: 10  }, { opacity: 1, y: 0  })
		.to('#granuly, #granuly_1_, #granuly_2_,  #granuly_3_', { opacity: 0, y: -40, delay: 1});
	// let handDown = tl6.to( "#hand-11", {rotate:0,  x: 0, y: 0,   transformOrigin: "right bottom"});
	// let handUp = tl6.to("#hand-11", { rotate: -84, x: 5, y: -4,   transformOrigin: "right bottom" }); 

	tl6
		.to("#hand-11-2", { rotate: 5, x: 1, y:-2, transformOrigin: "100% 0" })
		.to("#hand-11-2", { rotate: 0, x: 0, y: 0, transformOrigin: "right bottom" })
		.to("#hand-11", { rotate: -84, x: 5, y: -4, transformOrigin: "right bottom" })
		.to("#hand-11", { rotate: 0, x: 0, y: 0, transformOrigin: "right bottom" })
		// // .add(handUp)
		.to('#circle-10--2', { opacity: 0, x: -10, y: 6 })
		.to('#circle-10--1', { opacity: 0, x: 24, y: 14 })
		.to('#circle-10--2', { opacity: 1, x: 0, y: 0 })
		.to('#circle-10--1', { opacity: 1, x: 0, y: 0 })
	.to('#circle-10--1, #circle-10--2', { opacity: 0 })

	let hand12Down = tl7.to( "#hand-12", {rotate:0,  transformOrigin: "right bottom"   }); 
	let hand12Up = tl7.to( "#hand-12", {rotate:-6,x: -1, y: -1,  transformOrigin: "center bottom"  });  

	tl7
		.add(hand12Down)
		.fromTo('#screen-12--1, #screen-12--2', { opacity: 1 }, { opacity: 0 }, `+=${1} `)
		.fromTo('#screen-12--3', { opacity: 1 }, { opacity: 0, y: 14 })
		.fromTo('#circle-11--1', { opacity: 1 }, { opacity: 0, x: 54, y: 34 })
		.fromTo('#circle-12', { opacity: 0, x: 0, y: 0 }, { opacity: 1, x: -56, y: 40 })
		.fromTo('#circle-12', { x: -56, y: 40 }, { skewX: -31, x: -140, y: -13 })
		.fromTo('#circle-12-1', { opacity: 0, x: -98, y: 15 }, { opacity: 1, x: -140, y: 41 })
		.to('#circle-12, #circle-12-1', { opacity: 0 })
		.fromTo('#monitor-20', { opacity: 1 }, { opacity: 0 })
		.to('[d="M161.1,250.5l35.3,20.4l59.8-35.8 M161.1,250.5l-57,35.2 M161.1,250.5l-60.6-36.4"]', { stroke: '#0CD1FF' }, ">-.5")
		.to('#circle-12 :is(.st7, .st8), #circle-12-1 :is(.st7, .st8)', { fill: '#0CD1FF' }, ">-1")
		.to('#circle-12, #circle-12-1', { opacity: 1 }, ">-1")
		.to('#circle-12-1', { opacity: 1, x: -98, y: 15 }, ">-.5")
		.to('#circle-12-1', { opacity: 0 }, ">-.5")
		.to('#circle-12', { skewX: 0, x: -56, y: 40 }, ">-1")
		.to('#circle-12', { opacity: 0, x: 0, y: 0 })
		.to('[d="M161.1,250.5l35.3,20.4l59.8-35.8 M161.1,250.5l-57,35.2 M161.1,250.5l-60.6-36.4"]', { stroke: '#3998FF' })
		.from('#circle-12 :is(.st7, .st8), #circle-12-1 :is(.st7, .st8)', { fill: '#017AFF' })

		.add(hand12Up)
		.to('#circle-11--2', { x: 54, y: 30, opacity: 1 })
		.to('#circle-11--2', {  opacity: 0 })
		.to('#hand-13', { y: -1 })
		.fromTo('#circle-11--3', { x: 54, y: 40, opacity: 0 }, { opacity: 1 })
		.to('#hand-14', { x: 1, y: 2 })
		.fromTo('#circle-11--4', { x: 54, y: 40, opacity: 0 }, { opacity: 1 })
		.add(hand12Down)



	let circleDown15 = el => tl4.fromTo(`#circle-15--${el}`, { opacity: 1, x: 20, y: -16 }, { opacity: 0, x: -29, y: 17 });
	// let circleDown15 =function (el) {
	// 	return {
	// 		targets: `#circle-15--${el}`, 
	// 		opacity: [1, 0],
	// 		translateX: [20, -29],
	// 		translateY: [-16, 17], 
	// 	}
	// }
	let circleUp15 = el => tl4.fromTo(`#circle-15--${el}`, { opacity: 0 }, { opacity: 1, x: 12, y: -8 });

	// let circleUp15 = function(el) {
	// 	return {
	// 		targets: `#circle-15--${el}`,
	// 		opacity: [0,1],
	// 		translateX: 12,
	// 		translateY: -8, 
	// 	}
	// }
	let stroketl8 = `[d="M543,361v-7.6c0-0.8-0.8-1.3-1.5-0.9L438,414.3"],
										[d="M445.3,422.8c0-0.6,74.6,42.4,111.9,64"], 
										[d="M566,374v-6.5c0-0.8-0.8-1.3-1.5-0.9l-57,33.9l47.7,27.7"]
										`
	let stroketl82 = `[d="M492.5,331.8v-6.5c0-0.8-0.8-1.3-1.5-0.9l-57,33.9"],
										[d="M 468.077 316.774 L 468.077 310.274 C 468.077 309.474 467.277 308.974 466.577 309.374 L 409.577 343.274"] 
										`

	tl8
		.to(`#circle-15--2`, { skewX: -31, x: -35, y: 50 })
		.fromTo(`#circle-15--2`, { opacity: 0 }, { opacity: 1, x: -55, y: 37 })
		.to(`#circle-15--2`, { skewX: 0, x: 15, y: -10 })
		.fromTo(`#circle-15--1`, { opacity: 0, x: -34, y: 22, }, { opacity: 1, x: 5, y: -4 }, ">-1")
		.fromTo(`#circle-15--4`, { opacity: 0, x: 34, y: -21, }, { opacity: 1, x: -18, y: 10 })
		.fromTo(`#circle-15--3`, { opacity: 0, x: 9, y: -5, }, { opacity: 1, x: -26, y: 16 }, ">-1")
		.to(`#circle-15--1, #circle-15--2`, { opacity: 0 }, ">-0.5")
		
		.fromTo(`#circle-15--5`, { opacity: 0, x: 30, y: -18, }, { opacity: 1, x: -24, y: 14 }, ">-1")
		.fromTo(`#circle-15--6`, { opacity: 0, x: 44, y: -26, }, { opacity: 1, x: -57, y: 32 }, ">-0.5")
		.to(`#circle-15--6`, { x: -5, y: 70, skewX: -31 })
		.to(`#circle-15--5`, { skewX: 0, opacity: 1, x: 19, y: 49 }, ">-0.5")
		.to(':is(#circle-15--5, #circle-15--6) :is(.st5, .st6)', { fill: '#0CD1FF' })
		.to(stroketl8, { stroke: '#0CD1FF'  }, ">-1")
		.to(`#circle-15--6`,   { opacity: 1, x: -57, y: 32, skewX: -31}, ">-0.5")
		.to(`#circle-15--5`,   { opacity: 1, x: -24, y: 14, skewX: -31}, ">-0.5")
		
		.to(`#circle-15--6`, { opacity: 0, x: 44, y: -26,  skewX: 0}, ">-0.5")
		.to(`#circle-15--5`, { opacity: 0, x: 30, y: -18,  skewX: 0}, ">-0.5")
		.to(stroketl8, { stroke: '#3998FF'  }, ">-1")
		

		.fromTo(`#circle-15--7, #circle-15--8`, { opacity: 0, x: -45, y: -62, transformOrigin: "center  center" }, { opacity: 1, x: -90, y: -35, }, ">-1")
		.to(':is(#circle-15--7, #circle-15--8) :is(.st5, .st6)', { fill: '#0CD1FF' })
		.to(stroketl82, { stroke: '#0CD1FF'  }, ">-1")
		.fromTo(`#circle-15--7, #circle-15--8`, { opacity: 0, x: -90, y: -35, }, { opacity: 1, x: -38, y: -67, transformOrigin: "center  center" }, ">-0.5")
		.to(`#circle-15--7, #circle-15--8`, { opacity: 0 }, ">-0.5")
		.to(stroketl82, { stroke: '#3998FF'  }, ">-1")

	tl9
		.to(`#hand-16-2`, { y: -3, })
		.to(`#hand-16-1`, { x: 3 })
		.to(`#hand-16-2`, { y: 3, })
		.add(`#hand-16-1`, { x: -3, })
	tl101
		.set(`#shield-18`, { opacity: 0 })
		.fromTo(`#shield-18`, { opacity: 0 }, { opacity: 1 })
		.fromTo(`#dots-19`, { opacity: 0, x: -46, y: 23 }, { opacity: 1, x: 0, y: 0 }, ">-0.5")
		.to(`#dots-19`, { opacity: 0, x: -46, y: 23 })
		.to(`#shield-18`, { opacity: 0 })
	tl10
		// .to(`#circle-16--2, #circle-16--3`, { opacity: 0 })
		.set(`#el-17--1, #el-17--2, #circle-16--2, #circle-16--3`, { opacity: 0 })
		.fromTo(`#circle-16--1`, { skewX: 31, x: 63, y: 65 }, { opacity: 1, x: 93, y: 50 })

		.to(`#circle-16--1`, { skewX: 0, opacity: 0, x: 0, y: 0 })
		.fromTo(`#el-17--1`, { opacity: 0 }, { opacity: 1 })
		.fromTo(`#el-17--1`, { opacity: 1 }, { opacity: 0 })
		.to(`#imprint`, { opacity: .5 }, ">-0.5")
		.to(`#circle-16--2, #circle-16--3`, { opacity: 1 })
		.to(`#circle-16--2, #circle-16--3`, { opacity: 0, x: 32, y: 22 })
		.fromTo(`#el-17--2`, { opacity: 0 }, { opacity: 1 })
		.fromTo(`#el-17--2`, { opacity: 1 }, { opacity: 0 })
		.fromTo(`#circle-16--4`, { opacity: 0, x: -40, y: 10 }, { opacity: 1, x: 8, y: -10 })
		.to(`#circle-16--4`, { opacity: 0 }, ">-.5")
	// .fromTo( `#dots-19`, { opacity: 1 ,x:  0 , y: 0} , { opacity:0,x: -10,y: 5})
	// .to(`#el-17--1`,  {opacity: 0 })

	function randomValues() {
		anime({
			targets: '.st826, .st863',
			// endDelay: 1000,
			duration: speed * 16,
			// easing: 'easeInOutQuad',
			direction: 'alternate',
			fill: '#A1ADFF',
			loop: true,
			easing: function (el, i, total) {
				return function (t) {
					return Math.pow(Math.sin(t * (i + 4)), total);
				}
			},
			complete: randomValues,
			delay: anime.stagger(500, { direction: 'reverse' })
		});
	}

	randomValues();

	let text232 = document.querySelectorAll("#monitor-25 .st8")

	tl23
	// .fromTo('#mess .st38', { duration: speed2, opacity: 0 }, { opacity: 1 })
		.fromTo('monitor-25-2', { opacity: 1 }, { opacity: 0 }) 
		// .to('#monitor-25', { opacity: 0 })
		.to('#hand-25-1', { x:2, y:2 , delay:1 })
		.to('#hand-25-1', { x:0, y:0})
		.to('#hand-25', { x:2, y:1}, ">-1")
		.to('#hand-25', { x:0, y:0})
		.fromTo('#monitor-25-2', { opacity: 0, }, { opacity: 1 })
		.to('#hand-25-1', { x:2, y:2 , delay:1 })
		.to('#hand-25-1', { x:0, y:0})
		.to('#hand-25', { x:2, y:1}, ">-1")
		.to('#hand-25', { x:0, y:0})
		.to('#monitor-25-2', { opacity: 0, delay:1 })
		.fromTo('#monitor-25-3', { opacity: 0 }, { opacity: 1 })
		.to('#hand-25-1', { x:2, y:2 , delay:1 })
		.to('#hand-25-1', { x:0, y:0})
		.to('#hand-25', { x:2, y:1}, ">-1")
		.to('#hand-25', { x:0, y:0})
		.to('#monitor-25-3', { opacity: 0, delay:1 })
		text232.forEach((el, index) => { 
			tl23
			.to(el, { opacity: 1, duration: speed2 * .02, delay: speed2 * .01 * index })
		})
		// tl23 
		// .fromTo('#monitor-25-2', { opacity: 0, delay:1 }, { opacity: 1 })
		// .to('#monitor-25-3', { opacity: 0 })
	// 	.fromTo('#monitor-25', { opacity: 0 }, { opacity: 1 })
	
	tl201
	.fromTo('#mess', { opacity: 0 }, { opacity: 1 })
	let text23 = document.querySelectorAll("#mess .st43")
	text23.forEach((el, index) => { 
		tl201
		.to(el, { opacity: 1, duration: speed2 * .2, delay: speed2 * .02 * index })
	})
	// .to('#mess', {opacity:0})
	tl20
	// .fromTo('#mess', {opacity:0}, {opacity: 1})
	// .to('#line-19', {opacity: 1 },">-1")  
	// .from('#line-19',{  strokeDashoffset:100, opacity:0, duration: speed2 * .5})    
	.to('#line-19', { strokeDashoffset: 100, opacity: 0 })
	.to('#text-18', { opacity: 1 })
	.to('#hand-24', { y: -2, rotate: 1 })
	.from('#hand-24', { y: -2, rotate: 1 })
	// .to('#text-18', {opacity:1}) 
	// .from( '#line-19', speed2 * 10, {attr:{"stroke-dashoffset":0}})
	// let click = .to('#click',{opacity:1, duration: .5}).to('#click',{opacity:0, duration: .5	}) 
	tl21
		.set('#basket-1, #basket-2', { opacity: 0, duration: 0 })
		.to('#mouse-wrap', { x: -13, y: -19 }, 0)
		.to('#click', { opacity: 1, duration: .5 }).to('#click', { opacity: 0, duration: .5 })
		.to('#screen-modal-1', { opacity: 1 })
		.to('#mouse-wrap', { x: -5, y: 10, })
		.to('#click', { opacity: 1, duration: .5 }).to('#click', { opacity: 0, duration: .5 })
		.to('#screen-modal-1', { opacity: 0 })
		.to('#basket-1', { opacity: 1, duration: 0.5 }, '>-1')
		.to('#mouse-wrap', { x: 16, y: -7 })
		.to('#click', { opacity: 1, duration: .5 }).to('#click', { opacity: 0, duration: .5 })
		.to('#screen-modal-2', { opacity: 1 })
		.to('#mouse-wrap', { x: -5, y: 10, })
		.to('#click', { opacity: 1, duration: .5 }).to('#click', { opacity: 0, duration: .5 })
		.to('#screen-modal-2', { opacity: 0 })
		.to('#basket-1', { opacity: 0, duration: 0 })
		.to('#basket-2', { opacity: 1, duration: 0 }, '>-1')
		.to('#basket-2', { opacity: 0, delay: speed2 })
		.to('#mouse-wrap', { x: 0, y: 0, });


	
		lists
		.to('#list-1', { rotate: 15, transformOrigin: "left bottom" },0)
		.to('#list-4', { rotate: 15, transformOrigin: "right bottom" },0)
		.to('#list-5', { rotate: 15, transformOrigin: "right bottom" },0)
		.to('#list-2', { rotate: 10, transformOrigin: "right bottom" },0)
		.to('#list-3', { rotate: 10, transformOrigin: "left bottom" },0)
		// .to('#cat-head', { rotate: 35,x:1, y:-1 });
}


//  setTimeout(() => {

// 	 headSVG();
// 	}, 500);




convertImages('.head-svg', headSVG);