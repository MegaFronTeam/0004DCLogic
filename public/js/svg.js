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

	let blue = '#3998FF';
	let bluel = '#0DD1FF';
	let tl02 = gsap.timeline({ repeat: -1, repeatDelay: 2, defaults: { ...setg, duration: speed2 * 2 } });
	let tl0 = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: .5, defaults: { ...setg, duration: speed2 * .5 } });
	let tl = gsap.timeline({ repeat: -1, defaults: setg });

	let tl2 = gsap.timeline({ repeat: -1, defaults: { ...setg, duration: speed2} });
	// let tl2 = gsap.timeline({  defaults: { ...setg, duration: speed2 * .5 } });

	let tl3 = gsap.timeline({ repeat: -1, defaults: { ...setg, duration: speed2  } });
	let tl3_2 = gsap.timeline({ repeat: -1, repeatDelay: 2,  defaults: { ...setg, duration: speed2  } });
	let tl3_1 = gsap.timeline({ repeat: -1, defaults: { ...setg, duration: speed2 * .5  } });
	let tl4 = gsap.timeline({ repeat: -1,    defaults: { ...setg } });
	let tl42 = gsap.timeline({ repeat: -1, repeatDelay: 1,   defaults: { ...setg } });
	let tl5 = gsap.timeline({ repeat: -1, repeatDelay: 1, defaults: { ...setg, duration: speed2 } });
	let tl6 = gsap.timeline({ repeat: -1, repeatDelay: 1, defaults: { ...setg, duration: speed2 } });
	let tl61 = gsap.timeline({ repeat: -1, repeatDelay: 1, defaults: { ...setg, duration: speed2 } });
	let tl7 = gsap.timeline({ repeat: -1,  defaults: setg });
	let tl71 = gsap.timeline({ repeat: -1,  defaults: setg });
	let tl8 = gsap.timeline({ repeat: -1,    defaults: { ...setg, duration: speed2 } });
	let tl9 = gsap.timeline({ repeat: -1, yoyo: true,  repeatDelay: 10,defaults: setg });
	let tl10 = gsap.timeline({ repeat: -1, repeatDelay: 1, defaults: setg });
	let tl101 = gsap.timeline({ repeat: -1, repeatDelay: 5, defaults: setg });
	let tl20 = gsap.timeline({ repeat: -1,  defaults: setg });
	let tl201 = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 3, defaults: setg });
	let tl21 = gsap.timeline({ repeat: -1, defaults: setg });
	let tl22 = gsap.timeline({ repeat: -1, defaults: { ...setg, duration: speed2 * .05, ease: "none" } });
	let tl23 = gsap.timeline({ repeat: -1, repeatDelay: 3,  defaults: { ...setg, duration: speed2 * .5, } });
	let tl24 = gsap.timeline({ repeat: -1, yoyo: true,repeatDelay: 5, defaults: { ...setg, duration: speed2 * .5, } });
	let tl25 = gsap.timeline({ repeat: -1, defaults: { ...setg, duration: speed2 * .5, } });
	let tl26 = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 2, defaults: { ...setg, duration: speed2 * .5, } });
	let tl27 = gsap.timeline({ repeat: -1,   repeatDelay: 1, defaults: { ...setg, duration: speed2 * .5, } });
	let tl28 = gsap.timeline({ repeat: -1, repeatDelay: 2, defaults: { ...setg, duration: speed2  } });
	let tl29 = gsap.timeline({ repeat: -1, repeatDelay: 2, defaults: { ...setg, duration: speed2 * 3  } });
	let tl30 = gsap.timeline({ repeat: -1,  defaults: { ...setg, duration: speed2 * 3  } });


	let cat = gsap.timeline({ repeat: -1,yoyo: true, repeatDelay: 5,   defaults: { ...setg, duration: speed2 * .5 } });
	let lists = gsap.timeline({ repeat: -1,yoyo: true, repeatDelay: 0,   defaults: { ...setg, duration: speed2 * 2 } });
	// let cat = gsap.timeline({    defaults: { ...setg, duration: speed2 * .5 } });

	// .fromTo('#dark-l', { opacity: 0 }, { opacity: 1 })
	tl0
		.to('#darkl-2, #dark-l',  { opacity: 1, delay: 5  })
		.to('#darkl-2, #dark-l', { opacity: 0, delay: 2 })
		
		.to('#darkl-2, #dark-l',  { opacity: 1, delay:2 })
		.to('#darkl-2, #dark-l', { opacity: 0, delay:2 } )
		
		.to('#darkl-2, #dark-l', { opacity: 1, delay: 2 })
		.to('#darkl-2, #dark-l', { opacity: 0, delay:2 } )
		
		.to('#darkl-2, #dark-l', { opacity: 1, delay: 2 })
		.to('#darkl-2, #dark-l', { opacity: 0, delay:2 } )
		
		.to('#darkl-2, #dark-l', { opacity: 1, delay: 2 })
		.to('#darkl-2, #dark-l', { opacity: 0, delay:2 } )
	tl
		.fromTo('#belaz-1',
			{ x: 150, y: -150, opacity: 0 },
			{ x: 0, y: 0, opacity: 1 })
		.fromTo('#circle-2_3_', { opacity: 0, x: 0, y: 0 }, { opacity: 1, x: -22, y: 17 })

		.to('#circle-2_3_', { x: 42, y: 55, skewX: -35 })
		.to('#circle-2_3_', { skewX: 0, x: -12, y: 86, transformOrigin: "center  center" })
		.to('#circle-2_3_', { x: 7, y: 100, skewX: -35, transformOrigin: "center  center" })
		.fromTo('#circle-2_3_1', { opacity: 1, x: 58, y: 34, transformOrigin: "center  center" }, { opacity: 0, x: -16, y: -10, transformOrigin: "center  center" })

		.to(':is(#circle-2_3_1, #circle-2_3_) :is(.st7, .st8)', { fill: '#0CD1FF', duration: 0  })
		.to('#color1, #color2', { stroke: '#0CD1FF'}, ">-1")
		.to('#circle-2_3_1', { opacity: 1, x: 58, y: 34, transformOrigin: "center  center" })
		.to('#circle-2_3_', { x: -12, y: 86, skewX: -35, transformOrigin: "center  center" })
		.to('#circle-2_3_', { x: 42, y: 55, skewX: 0, transformOrigin: "center  center" })
		.to('#circle-2_3_', { x: -22, y: 17, skewX: -35, })
		.to('#circle-2_3_', { opacity: 0, x: 0, y: 0, skewX: 0 })
		.to('#belaz-1',
			{ x: 150, y: -150, opacity: 0 })

	gsap.fromTo('#monitor-4, #monitor-4-1, #monitor-4-2', { opacity: 1, y: 0 }, { opacity: 0, y: 6, ...setg, duration: speed2 * 4, repeat: -1, yoyo: true });
	gsap.fromTo('#helicopter', { y: 0, x: 1150 }, { y: 50, x: 1150, ...setg, duration: speed2 * 4, repeat: -1, yoyo: true });

			// cat 
	// cat.to('#cat-tail', { rotate: 23, "transformOrigin":"39.8% 91.3%" })
	// .to('#cat-head', { rotate: 35,x:1, y:-1, "transformOrigin":"41.1% 89.1%" });
	cat.to('#cat-tail', { rotate: 10, "transformOrigin":"0 1%"})
	.to('#cat-head', { rotate: 35,x:0, y:-1, "transformOrigin":"left center" });
	
	// gsap.to('#cat-head', { y: 3, x:-1, rotate:2, ...setg, duration: speed2 * .5, repeat: -1, repeatDelay: 2, yoyo: true });
	gsap.to('#Signal', { opacity: 1, ...setg, duration: speed2 * .5, repeat: -1, repeatDelay: 2, yoyo: true });
	
	let handUp2 = { rotate: 8, transformOrigin: "right  top" };
	let handDown2 = { rotate: 0, transformOrigin: "right  top" };
	tl24
		.to('#hand-4--left', handUp2)
		.to('#hand-4--left', handDown2)
		.to('#hand-4--right', handUp2)
		.to('#hand-4--right', handDown2)
		.to('#Chart_3', { skewX: -8, scaleX: 0.66, transformOrigin: "left bottom", delay: 5 })
		.to('#Group_5_ #Line_2', { strokeDashoffset: 100, duration: speed2 * 4})
		.from('#Group_5_ #Line_1', { strokeDashoffset: 100, duration: speed2 * 4 })
		.to('#Chart_2', { skewY: -10, scaleY: 0.66, y: -2, transformOrigin: "bottom" , delay: 5 })
		.to('#hand-4--left', handUp2)
		.to('#hand-4--left', handDown2)
		.to('#hand-4--right', handUp2)
		.to('#hand-4--right', handDown2)
		.to('#Chart_8', { opacity: 0, delay: 5 })
		.from('#Chart_7', { opacity: 0 }, `>-${1} `)
		.to('#Chart_5', { skewY: -10, scaleY: 0.66, transformOrigin: "bottom"})

		;

	tl25
		.from('#Linediagramm', { strokeDashoffset: -70, duration: speed2 * 2, delay: 3})
		.to('#Circlechart_2', { opacity: 1 })
		.to('#Circlechart_1', { opacity: 0 })
		.to('#dashboard-front', { opacity: 0, delay: speed2 * 8 })
		.to('#dashboard', { opacity: 1 }, `>-${.5} `)
		.to('#dashboard', { opacity: 0, delay: speed2 * 4 })
		.to('#dashboard-front', { opacity: 0 }, `>-${.5} `)

	tl26
		.to('#sheme1', { opacity: 0, delay: speed2 })
		.to(`#hand-16-2`, { rotate: 4, transformOrigin: "right  top" })
		.to(`#hand-16-2`, { rotate:-4,  transformOrigin:"right  top" })
		let text19 = document.querySelectorAll("#text1 .st19")
		text19.forEach((el, index) => {
			
			tl26
			.to(el, { opacity: 1, duration: speed2 * .02, delay: speed2 * .01 * index })
		})
		// tl26
			// .to(`#hand-16-2`, { rotate: 4, transformOrigin: "right  top" })
			// .to(`#hand-16-2`, { rotate:-4,  transformOrigin:"right  top" })

	let dDown = { opacity: 0, y: 5 }
	let dUp = { opacity: 1, y: 0, duration: speed2 * .2 }
	let handUp27 = { rotate: 8, transformOrigin: "left  top", duration: speed2 * .2 };
	let handDown27 = { rotate: 0, transformOrigin: "left  top", duration: speed2 * .2 };
	tl27
		.to(`#hand27-1`, handUp27)
		.to(`#hand27-1`, handDown27)
		.to(`#hand27`, handUp27)
		.to(`#hand27`, handDown27)
		
		.set('#diagram3', { opacity: 1, y: 0 }, `>-1 `)
		.to('#diagram3', { ...dDown , delay: 5})
		.to(`#hand27-1`, handUp27, `>-1 `)
		.to(`#hand27-1`, handDown27)
		.to(`#hand27`, handUp27)
		.to(`#hand27`, handDown27)
		.fromTo('#diagram2', dDown, dUp, `>-1 `)
		.to('#diagram2', { ...dDown, delay: 5})
		.to(`#hand27-1`, handUp27, `>-1 `)
		.to(`#hand27-1`, handDown27)
		.to(`#hand27`, handUp27)
		.to(`#hand27`, handDown27)
		.fromTo('#diagram1', dDown, dUp, `>-1 `)
		.to('#diagram1', { ...dDown, delay: 5})
		.to(`#hand27-1`, handUp27, `>-1 `)
		.to(`#hand27-1`, handDown27)
		.to(`#hand27`, handUp27)
		.to(`#hand27`, handDown27)
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
		

	// tl2
	// 	.to('#hand-4--left', handUp2)
	// 	.to('#hand-4--left', handDown2)
	// 	.to('#hand-4--right', handUp2)
	// 	.to('#hand-4--right', handDown2)

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

	tl3_2
		.to('#circle-5--2', { opacity: 0, x: 35, y: 21, duration: 0 })
		.to('#circle-5--4', { opacity: 0, x: -27, y: 18, duration: 0 })
		.to('#circle-5--2', { opacity: 1, x: 0, y: 0 })
		.to('#circle-5--2', { opacity:   0 }, `>-.5`)
		.to('#circle-5--4', { opacity: 1, x: 0, y: 0 })
		.to('#circle-5--4', { opacity: 0 }, `>-.5`) 
		.to('#g-6, #g-7', {  opacity:1 },'>-1')
		.to('#g-6, #g-7', { x: '-=98', y: '-=57' , duration: speed2 * 2},'>-1')
		.to('#g-6, #g-7', {  opacity:0 })
		.to('#g-6, #g-7', { x: '+=98', y: '+=57', duration:0 })
	tl3_1
		.fromTo('#box-6--1', ...box6)
		.fromTo('#box-6--2', ...box6)
		.fromTo('#box-6--3', ...box6)
		.fromTo('#screen-7--left', { opacity: 0, y: 20 }, { opacity: 1, y: 0 }, `>-1`)
		.fromTo('#screen-7--right', { opacity: 0, y: 20 }, { opacity: 1, y: 0 }, `>-.2`)
		.fromTo('#box-6--4', ...box6, '>-1')

		
		.to('#screen-7--right', { opacity: 0, y: 20, delay: 8 })
		.to('#screen-7--left', { opacity: 0, y: 20 }, `>-.2`)
		.to('#box-6--4', box6Hide)
		.to('#box-6--3', box6Hide)
		.to('#box-6--2', box6Hide)
		.to('#box-6--1', box6Hide);
	
		let strokel3 = `[d="M 781.821 512.615 L 847.621 552.915"], [d="M 845.121 476.215 L 899.321 509.215"], #line-29-1, #line-29-2`;
		tl3 
			.fromTo('#g-5, #g-4', { opacity:0,  x: '-=98', y: '-=57'},{x: '+=98', y: '+=57', opacity:1   })
			.to('#g-5, #g-4', {  opacity:0 },'>-.1')
			.to('#circle-5--1', { opacity: 1, x: 39, y: 26 }, `>-1`)
			.to('#circle-5--1', { opacity: 0 }, `>-1`)
			.to('#circle-5--3', { opacity: 1, x: 35, y: 21 }, `>-1`)
			.to('#circle-5--3', { opacity: 0}, `>-1`)
			.to(':is(#g-5, #g-4, #circle-5--3, #circle-5--1) :is(.st7, .st8)', { fill:bluel, duration:0 })
			.to(strokel3, { stroke: bluel })
			
			.to('#circle-5--1', { opacity: 1}, `>-1`)
			.to('#circle-5--1', { opacity: 0, x: 0, y: 0 }, `>-.5`)
			.to('#circle-5--3', { opacity: 1}, `>-1`)
			.to('#circle-5--3', { opacity: 0, x: 0, y: 0 }, `>-.5`)
			
			.to('#g-5, #g-4', { opacity:1 }, `>-1`)
			.to('#g-5, #g-4', { opacity:0,  x: '-=98', y: '-=57'})
			.to(':is(#g-5, #g-4, #circle-5--3, #circle-5--1) :is(.st7, .st8)', { fill:blue, duration:0 })
			.to(strokel3, { stroke: blue })
		// .to('#g-5, #g-4', {  opacity:0 },'>-.2')
		// .to('#g-6, #g-7', {  opacity:1 },'>-1')
			// .to('#g-6, #g-7', { x: '-=98', y: '-=57' },'>-1')
			// .to('#g-6, #g-7', {  opacity:0 })
			// .to('#g-6, #g-7', { x: '+=98', y: '+=57', duration:0 })
			
			// .to(':is(#g-5, #g-4) :is(.st7, .st8)', { fill:bluel, duration:0 })
			// .to('#line-29-1, #line-29-2', { stroke:bluel})
			// .to('#g-5, #g-4', {opacity:1 })
			// .to('#g-5, #g-4', { x: '-=98', y: '-=57'})
			// .to('#line-29-1, #line-29-2', { stroke:blue})
	// 	.to('#circle-5--1', { opacity: 0 }, `>-1`)
	// 	.fromTo('#circle-5--2', {x: 39, y: 26 }, {x: 0, y: 0, opacity:1},`>-.5`)
	// 	.to('#circle-5--2', { opacity: 0},`>-.5`)
		
	// 	.to('#circle-5--3', { opacity: 0},`>-.5`)
	// 	.fromTo('#circle-5--4', { opacity: 0, x: -27, y: 18 }, { opacity: 1, x: 0, y: 0 }, `>-.5`)
	// 	.to('#circle-5--4', { opacity: 0}, `>-.5`)
	// 	.to(':is(#circle-5--1,   #circle-5--3)  :is(.st7,  .st8) ', { fill: '#0CD1FF', duration:0 })
	// 	.to(strokel3, { stroke: '#0CD1FF' } )
	// 	.fromTo('#circle-5--1',{opacity:0}, { opacity: 1, x: 0, y: 0 }) 
	// 	.to('#circle-5--1',{opacity:0}) 
	// 	.fromTo('#circle-5--3',{opacity:0}, { opacity: 1, x: 0, y: 0 }, `>-1`) 
	// 	.to('#circle-5--3', { opacity: 0 }) 
	// 	.to(':is(#circle-5--1,   #circle-5--3)  :is(.st7,  .st8) ', { fill: blue, duration:0 })
	// 	.to(strokel3, { stroke: blue } )
	// 	.to('#circle-5--1', { opacity: 1}, `>-1`)
	// 	.to('#circle-5--1', { opacity: 0, x: 0, y: 0 }, `>-1`)
	// 	.to('#circle-5--2', { opacity: 1}, `>-1`)
	// 	.to('#circle-5--3', { opacity: 1}, `>-1`)
	// 	.to('#circle-5--3', { opacity: 0, x: 35, y: 21 })
	// 	.to('#circle-5--4', { opacity: 1}, `>-1`)
	// 	.to('#circle-5--2', { opacity: 0, x: 35, y: 21 })
	// 	.to('#circle-5--4', { opacity: 0, x: -27, y: 18 })

	let circleDown = el => tl4.to(`#circle-7--${el}`, { opacity: 0, x: -70, y: 39 },`>-1`);
	let circleUp = el => tl4.fromTo(`#circle-7--${el}`, { opacity: 0, x: -70, y: 39 }, { opacity: 1, x: 0, y: 0 },`>-1`);


	let strokel4 = `#line4-1, #line-4-2, #line-42`;
	let stroketl42 = `#line-42`;
	tl4

		.to(`#circle-7--2, #circle-7--4, #circle-7--1, #circle-7--3`, {opacity:0, duration:0 })
		
		// .add(circleUp(1))
		// .add(circleUp(3))
		.to(`#g-1`,  { opacity: 1, x: 185, y: -110 }, ">-1")
		.to(`#g-1`, { skewX: -31, x: 218, y: -90, opacity: 0 })
		.to(`#excavator-8`, { x: -12, y: -6 }, ">-1")
		
		.to(':is(#g-1) :is(.st7, .st8), :is(#circle-7--1, #circle-7--3) :is(.st7, .st8)', { fill: bluel, duration:0 })
		.to(strokel4, { stroke: bluel } ) 
		.to(`#g-1`,  { opacity: 1, x: 185, y: -110,skewX: 0 }, ">-1")
		.to(`#g-1`, { opacity: 0, x: 0, y: 0 })
		 
		.to(`#circle-7--1, #circle-7--3`, { opacity: 1, duration: speed2 * .4}, ">-1")
		.to(`#circle-7--1, #circle-7--3`,{ opacity: 0, x: -70, y: 41 }, ">-.1")
		
		.to(':is(#g-1) :is(.st7, .st8), :is(#circle-7--1, #circle-7--3) :is(.st7, .st8)', { fill: blue, duration:0 })
		.to(strokel4, { stroke: blue } )
		.to(`#circle-7--1, #circle-7--3`,   { opacity: 1}, ">-1")
		.to(`#circle-7--1, #circle-7--3`,   { opacity: 0, x: 0, y: 0  }, ">-.5")
		.to(`#circle-7--2, #circle-7--4`, {opacity:1}, ">-1")
		.to(`#circle-7--2, #circle-7--4`, { opacity: 0, x: -70, y: 41 }, ">-.5") 
		.to(`#excavator-8`, { x: 0, y: 0 }, ">-1")
		.set(`#circle-7--2, #circle-7--4`, {x: 0, y: 0, duration:0 }, ">-.5")
	

	// tl42
		// .to(':is(#g-1) :is(.st7, .st8)', { fill: '#017AFF' }, ">-1")
		// .to(stroketl42, { stroke: '#3998FF' }, ">-1") 
		
		
		tl5
		.fromTo('#granuly, #granuly_1_, #granuly_2_,  #granuly_3_', { opacity: 0, y: 10  }, { opacity: 1, y: 0  })
		.to('#granuly, #granuly_1_, #granuly_2_,  #granuly_3_', { opacity: 0, y: -40, delay: 1});
	// let handDown = tl6.to( "#hand-11", {rotate:0,  x: 0, y: 0,   transformOrigin: "right bottom"});
	// let handUp = tl6.to("#hand-11", { rotate: -84, x: 5, y: -4,   transformOrigin: "right bottom" }); 

	tl6
		.to("#hand-11-2", { rotate: 5,  transformOrigin: "right top ", delay:2 })
		.to("#hand-11-2", { rotate: 0,  transformOrigin: "right top " })
		.to("#hand-11", { rotate: -84,x: 5, y: -4 , transformOrigin: "right bottom" })
		.to("#hand-11", { rotate: 0,  x: 0, y: 0,  transformOrigin: "right bottom" })
		// // .add(handUp)
	tl61
	
		.from('#circle-10--1', { opacity: 1, x: 30, y: 16 })
		.to('#circle-10--2', { opacity: 1}, ">-.5") 
		.to('#circle-10--2', {  x: -10, y: 6, duration: speed2 * .5 }, ">-.5")
		.to('#circle-10--2', { opacity: 0}, ">-.5") 
		.to('#g-2', { opacity: 1 }, ">-.5") 
		.to('#g-2',  { opacity: 0, x: "-=58", y: '-=32' }, ">-.5") 
		.to(':is(#circle-10--2, #circle-10--1) :is(.st7, .st8), :is(#g-2) :is(.st7, .st8)', { fill: bluel, duration:0})
		.to('#line-6, #line-28', { stroke: bluel })
		
		.to('#g-2', { opacity: 1 }, ">-1")
		.to('#g-2', { opacity: 0, x: "+=58", y: '+=32' }, ">-.5")
		
		.to('#circle-10--2', { opacity: 1}, ">-.5") 
		.to('#circle-10--2', {  x: 0, y: 0, duration: speed2 * .5 }, ">-.5")
		.to('#circle-10--2', { opacity: 0}, ">-.5") 
		.to('#circle-10--1', { opacity: 1, x: 30, y: 16 })
		.to(':is(#circle-10--2, #circle-10--1) :is(.st7, .st8), :is(#g-2) :is(.st7, .st8)', { fill: blue, duration:0})
		.to('#line-6, #line-28', { stroke: blue }) 
	
	tl71
		.to( "#hand-12", {rotate:8,  transformOrigin:"left top" }) 
		.to('#circle-11--3, #circle-11--4',  { opacity: 1},'>-1')
		.to('#circle-11--3, #circle-11--4', {   x: 60, y: 30 },'>-1')
		.to('#circle-11--3, #circle-11--4', { opacity: 0 },'>-.5')
			.to('#circle-11--3, #circle-11--4', { x: 0, y: 0, duration: 0 })
			.to( "#hand-12", {rotate:0,  transformOrigin: "left top"   })
	tl7
		.fromTo('#circle-11--1, #circle-11--2',  { opacity:0, x: 60, y: 30, duration:0 }, { x: 0, y: 0, opacity:1 })
		.to('#circle-11--1, #circle-11--2',   {  opacity:0 }, ">-.5") 
		.fromTo('#circle-12', { opacity: 0, x: 0, y: 0 }, { opacity: 1, x: -58, y: 35 },">-1")
		.fromTo('#circle-12', { x: -58, y: 35 }, { skewX: -31, x: -140, y: -11 })
		.fromTo('#circle-12-1', { opacity: 0, x: -98, y: 15 }, { opacity: 1, x: -140, y: 44 },">-1")
		.to('#circle-12, #circle-12-1', { opacity: 0 },">-.5")
		.to(':is(#circle-11--1, #circle-11--2, #circle-12, #circle-12-1) :is(.st7, .st8)', { fill: bluel, duration:0})
		.to('#line-7-1, #line-7-2, #line-7', { stroke: bluel } )
		.to('#circle-12, #circle-12-1', { opacity: 1 }, ">-1")
		.to('#circle-12-1', { opacity: 1, x: -98, y: 15 }, ">-.5")
		.to('#circle-12-1', { opacity: 0 }, ">-.5")
		.to('#circle-12', { skewX: 0, x: -58, y: 35 }, ">-1")
		.to('#circle-12', { opacity: 0, x: 0, y: 0 })
		.to('#circle-11--1, #circle-11--2', { opacity: 1,  x: 60, y: 30 }, ">-.5") 
		.to('#circle-11--1, #circle-11--2', { opacity: 0 })
		.to(':is(#circle-11--1, #circle-11--2, #circle-12, #circle-12-1) :is(.st7, .st8)', { fill: blue, duration:0})
		.to('#line-7-1, #line-7-2, #line-7', { stroke: blue })
		.to('#circle-11--1, #circle-11--2',  { opacity:0, x: 0, y: 0, duration:0 }) 

 
 
	let stroketl8 = `#stroketl8-1, #stroketl8-2, [d="M543,361v-7.6c0-0.8-0.8-1.3-1.5-0.9L438,414.3"],
										[d="M445.3,422.8c0-0.6,74.6,42.4,111.9,64"], 
										[d="M566,374v-6.5c0-0.8-0.8-1.3-1.5-0.9l-57,33.9l47.7,27.7"]
										`
	let stroketl82 = `#stroketl82-1, #stroketl82-2, [d="M492.5,331.8v-6.5c0-0.8-0.8-1.3-1.5-0.9l-57,33.9"],
										[d="M 468.077 316.774 L 468.077 310.274 C 468.077 309.474 467.277 308.974 466.577 309.374 L 409.577 343.274"] 
										`

	tl8
		.to(`#circle-15--2`, { skewX: -31, x: -30, y: 45 })
		.fromTo(`#circle-15--2`, { opacity: 0 }, { opacity: 1, x: -55, y: 35 })
		.to(`#circle-15--2`, { skewX: 0, x: 10, y: -5 })
		.to(`#circle-15--2`, { opacity: 0 }, ">-0.5")
		.fromTo(`#circle-15--1`, { opacity: 0, x: -34, y: 22, }, { opacity: 1, x: 5, y: -4 }, ">-.5")
		.to(`#circle-15--1`, { opacity: 0 }, ">-0.5")
		.fromTo(`#circle-15--4`, { opacity: 0, x: -18, y: 10 }, { opacity: 1 , x: 34, y: -21,}, ">-1.5")
		.to(`#circle-15--4`, { opacity: 0}, ">-.5")
		.fromTo(`#circle-15--3`, { opacity: 0 , x: -26, y: 16 }, { opacity: 1, x: 9, y: -5,}, ">-1")
		.to(`#circle-15--3`, { opacity: 0}, ">-.5")
		
		.fromTo(`#circle-15--5`, { opacity: 0, x: 30, y: -18, }, { opacity: 1, x: -24, y: 14, duration: speed2 * 2 }, ">-.5")
		.fromTo(`#circle-15--6`, { opacity: 0, x: 44, y: -26, }, { opacity: 1, x: -59, y: 35 }, ">-.5")
		.to(`#circle-15--5`, { skewX: 0, opacity: 1, x: 19, y: 49, duration: speed2 * 2 }, ">-1")
		.to(`#circle-15--6`, { x: -10, y: 66, skewX: -31, duration: speed2 * .5 }, ">-1")
		.to(':is(#circle-15--5, #circle-15--6) :is(.st5, .st6)', { fill: bluel })
		.to(stroketl8, { stroke: bluel  })
		.to(`#circle-15--5`,   { opacity: 1, x: -24, y: 14, skewX: -31 , duration: speed2 * 2})
		.to(`#circle-15--6`,   { opacity: 1, x: -59, y: 35, skewX: -31, duration: speed2 * .5} , ">-1")
		
		.to(`#circle-15--5`, { opacity: 0, x: 30, y: -18,  skewX: 0})
		.to(`#circle-15--6`, { opacity: 0, x: 44, y: -26,  skewX: 0, duration: speed2 * .5} )
		.to(stroketl8, { stroke: '#3998FF'  }, ">-.5")
		
		.fromTo(`#circle-15--7 `, { opacity: 0, x: -42, y: -59, }, { opacity: 1, x: -88, y: -35, }, ">-.5")
		.fromTo(` #circle-15--8`, { opacity: 0, x: -36, y: -62, }, { opacity: 1, x: -90, y: -35, }, ">-1")
		.to(':is(#circle-15--7, #circle-15--8) :is(.st5, .st6)', { fill: '#0CD1FF', duration:0 })
		.to(stroketl82, { stroke: '#0CD1FF'  }, ">-.5")
		.fromTo(`#circle-15--7`, { opacity: 0, x: -88, y: -35, }, { opacity: 1, x: -42, y: -59 }, ">-0.5")
		.fromTo(` #circle-15--8`, { opacity: 0, x: -90, y: -35, }, { opacity: 1, x: -36, y: -67 }, ">-1")
		.to(`#circle-15--7, #circle-15--8`, { opacity: 0 }, ">-0.5")
		.to(':is(#circle-15--7, #circle-15--8) :is(.st5, .st6)', { fill: blue, duration:0 })
		.to(stroketl82, { stroke: '#3998FF' }, ">-.5")

	tl9
		
		.to(`#hand-16-1`, { rotate:-4,  transformOrigin:"right  top" })
		
		.to(`#hand-16-1`, { rotate:12,  transformOrigin:"right  top" })
		// .to(`#hand-16-2`, { y: 3, })
		// .to(`#hand-16-1`, { x: -3, })
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
		.to(`#imprint`, { opacity: .5, duration: speed2 * .5 }, ">-1")
		.to(`#circle-16--2, #circle-16--3`, { opacity: 1 , duration: speed2 * .5}, ">-.5")
		.to(`#circle-16--2, #circle-16--3`, { opacity: 0, x: 32, y: 22 })
		.fromTo(`#el-17--2`, { opacity: 0 }, { opacity: 1 })
		.fromTo(`#el-17--2`, { opacity: 1 }, { opacity: 0 })
		.fromTo(`#circle-16--4`, { opacity: 0, x: -40, y: 10 }, { opacity: 1, x: 8, y: -10 })
		.to(`#circle-16--4`, { opacity: 0 }, ">-.5")
	// .fromTo( `#dots-19`, { opacity: 1 ,x:  0 , y: 0} , { opacity:0,x: -10,y: 5})
	// .to(`#el-17--1`,  {opacity: 0 })
	function randowTower(el, ii) {
		
		function randomValues() {
			anime({
				targets: `${el} :is(.st826, .st863)`,
				// endDelay: 1000,
				duration: speed * 2 * ii * .5,
				// easing: 'easeInOutQuad',
				direction: 'alternate',
				fill: '#A1ADFF',
				loop: true,
				easing: function (el, i, total) {
					return function (t) {
						return Math.pow(Math.sin(t * (i  + 1  + +ii + .5)), total);
					}
				},
				complete: randomValues,
				delay: anime.stagger(500, { direction: 'reverse' })
			});
	}
	
	randomValues();
	}
	randowTower('#tower_01', 1); 
	randowTower('#tower_02', 2); 
	randowTower('#tower_03', 3); 
	randowTower('#tower_04', 4); 
	function randomDots(el) {

		function randomValues2() {
			anime({
				targets: `:is(${el}) :is(.st37, .st235, .st236)`,
				// endDelay: 1000,
				duration: speed * 16,
				// easing: 'easeInOutQuad',
				direction: 'alternate',
				fill: '#5FEFC0',
				loop: true,
				easing: function (el, i, total) {
					return function (t) {
						return Math.pow(Math.sin(t * (i + 4)), total);
					}
				},
				complete: randomValues2,
				delay: anime.stagger(500, { direction: 'reverse' })
			});
		}
		
		randomValues2();
	}
	randomDots(`#st-1, #stolb-12`);
	randomDots(` #stolb-2 ,#stolb-6, #stolb-11`);
	randomDots(`  #stolb-3 , #stolb-10`);
	randomDots(`  #stolb-4 #stolb-8`);
	randomDots(` #stolb-5,  #stolb-7 `);

	let text232 = document.querySelectorAll("#monitor-25 .st8")
	let handDown23 = { rotate: -25, delay: 1, transformOrigin: "right  top" };
	let handUp23 =  {rotate: 0, transformOrigin: "right  top" };
	tl23
	// .fromTo('#mess .st38', { duration: speed2, opacity: 0 }, { opacity: 1 })
	.to('#hand-25', {...handDown23, delay:2} )
	.to('#monitor-25-3',{ opacity: 0}) 
	.to('#monitor-25', { opacity: 1 })
	text232.forEach((el, index) => { 
		tl23
		.to(el, { opacity: 1, duration: speed2 * .02, delay: speed2 * .01 * index })
	})
	
	tl23
	.to('#monitor-25', { opacity: 0,delay: 3  })
	// text232.forEach((el, index) => { 
	// 	tl23
	// })
	// tl23
	.to("#monitor-25 .st8", { opacity: 0 })
	.to('#monitor-25-2', { opacity: 1 },">-1") 
	.to('#hand-25', {...handUp23, delay:3} )
	.to('#monitor-25-2', { opacity: 0 }) 
	.to('#monitor-25-3',{ opacity: 1}) 
	// // .to('#monitor-25', { opacity: 0 })
		// // .to('#hand-25-1', handDown23)
		// // .to('#hand-25-1', handUp23)
		// // .to('#hand-25', handUp23)
		// .fromTo('#monitor-25-2', { opacity: 0, }, { opacity: 1 })
		// // .to('#hand-25-1', handDown23)
		// // .to('#hand-25-1', handUp23)
		// // .to('#hand-25', handDown23, ">-.5")
		// .to('#monitor-25-2', { opacity: 0, delay:1 })
		// .fromTo('#monitor-25-3', { opacity: 0 }, { opacity: 1 })
		// .to('#hand-25', handUp23)
		// // .to('#hand-25-1', handDown23)
		// // .to('#hand-25-1', handUp23)
		// // .to('#hand-25', handDown23, ">-.5")
		// // .to('#hand-25', handUp23)
	
		// tl23 
		// .fromTo('#monitor-25-2', { opacity: 0, delay:1 }, { opacity: 1 })
		// .to('#monitor-25-3', { opacity: 0 })
	// 	.fromTo('#monitor-25', { opacity: 0 }, { opacity: 1 })
	
	tl201
	.fromTo('#mess', { opacity: 0 }, { opacity: 1, duration: speed2 * 2 })
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
		.to('#line-19', { strokeDashoffset: 0 })
		.to('#hand-24', { rotate:25,  transformOrigin: "left 50%", delay: speed2})
		.to('#line-19', { strokeDashoffset: 100 })
		.to('#text-18', { opacity: 1 },'>-.5')
		.to('#hand-24', { rotate:0,  transformOrigin: "left 50%", delay: speed2})
		.to('#text-18', { opacity: 0 },'>-.5')
	// .to('#hand-24', { rotate:0,  transformOrigin: "left top"})
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

		
		tl2
			.to('#g-3', {  opacity:1 })
			.to('#g-3', { x: '+=98', y: '+=57' })
			.to('#g-3', { y: '-=12', rotate: -90 })
			.to('#g-3', { opacity:0 },">-.5")
			.to('#g-3 :is(.st7, .st8)', {fill:bluel,duration:0})
			.to('#tobasket', {stroke:bluel })
			.to('#g-3', {  opacity:1 })
			.to('#g-3', { y: '+=12', rotate: 0},">-.5")
			.to('#g-3', { x: '-=98', y: '-=57' })
			.to('#g-3', { opacity:0  },">-.5")
			.to('#g-3 :is(.st7, .st8)', {fill:blue,duration:0 })
			.to('#tobasket', {stroke:blue })
			
			tl29
				// .to('#g-5, #g-4', { x: '-=98', y: '-=57', duration:0 })
				// .to('#g-5, #g-4', {  opacity:1 })
				// .to('#g-5, #g-4', { x: '+=98', y: '+=57' })
				// .to('#g-5, #g-4', {  opacity:0 },'>-1')
				
				// .to('#g-6, #g-7', {  opacity:1 },'>-1')
				// .to('#g-6, #g-7', { x: '-=98', y: '-=57' },'>-1')
				// .to('#g-6, #g-7', {  opacity:0 })
				// .to('#g-6, #g-7', { x: '+=98', y: '+=57', duration:0 })
				
				// .to(':is(#g-5, #g-4) :is(.st7, .st8)', { fill:bluel, duration:0 })
				// .to('#line-29-1, #line-29-2', { stroke:bluel})
				// .to('#g-5, #g-4', {opacity:1 })
				// .to('#g-5, #g-4', { x: '-=98', y: '-=57'})
				// .to('#line-29-1, #line-29-2', { stroke:blue})
				// .to('#g-5, #g-4', {opacity:0})
				tl30
					.to('#hand-13', { rotate:-10, transformOrigin: "left top", delay:10})
					.to('#hand-13', { rotate:0, transformOrigin: "left top", delay:10})
			}


//  setTimeout(() => {

// 	 headSVG();
// 	}, 500);




convertImages('.head-svg', headSVG);