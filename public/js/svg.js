'use strict';


let speed = 1000;
let speed2 = .5;
function headSVG() { 



	// gsap.registerPlugin( InertiaPlugin);
		// Create a timeline with default parameters
	let set = {
		easing: 'easeInOutSine',
		duration: speed,
		loop: true,
		direction: 'alternate',
	}
	let setg = {
		ease: 'easeInOutSine',
		transformOrigin:"center  center",
		
		// repeat: -1,
		duration: speed2, 
		
    // // bounds: window,
		// stagger: 1.5
		// direction: 'alternate',
	}

	let tl = gsap.timeline({repeat: -1,
		yoyo: true,  defaults: setg});
	
	let tl2 = gsap.timeline({ repeat: -1, yoyo: true, defaults: { ...setg, duration: speed2 * .5 } });
	
	let tl3 = gsap.timeline({ repeat: -1, repeatDelay:1, yoyo: true,defaults: { ...setg} });
	let tl4 = gsap.timeline({ repeat: -1, repeatDelay:1,  yoyo: true, defaults: { ...setg} });
	let tl5 = gsap.timeline({ repeat: -1, repeatDelay:1,    defaults: { ...setg, duration: speed2 * 4 } });
	let tl6 = gsap.timeline({ repeat: -1, repeatDelay: 1, yoyo: true,  defaults: { ...setg, duration: speed2 * 2 } });
	let tl7 = gsap.timeline({repeat: -1, repeatDelay:1,   defaults: setg});
	let tl8 = gsap.timeline({repeat: -1, repeatDelay:1,   defaults: setg});
	let tl9 = gsap.timeline({repeat: -1, yoyo: true,    defaults: setg});
	let tl10 = gsap.timeline({repeat: -1,  repeatDelay:1,   defaults: setg});
	let tl20 = gsap.timeline({repeat: -1,  yoyo: true,  defaults: setg}); 
	let tl21 = gsap.timeline({repeat: -1,   defaults: setg});  
	
		tl
			.fromTo('#belaz-1',
				{ x: 150, y: -150, opacity: 0 },
				{ x: 0, y: 0, opacity: 1 })
			.fromTo('.st929', { opacity: 0 }, { opacity: .8 })
			.fromTo('#circle-2_3_', { opacity: 0, x: 0, y: 0 }, { opacity: 1, x: -20, y: 13 })
			.fromTo('.st0-3', { opacity: 0 }, { opacity: 1 	}, `-=${.2} `)
			.to('#circle-2_3_', { x: 35, y: 52, skewX: -35, transformOrigin: "center  center" })
			.to('#circle-2_3_', { skewX: 0, x: -10, y: 88, transformOrigin: "center  center" })
			.to('#circle-2_3_', { x: 7, y: 100, skewX: -35, transformOrigin: "center  center" })
			.fromTo('#circle-2_3_1', { opacity: 1, x: 58, y: 34, transformOrigin: "center  center" }, { opacity: 0, x: -16, y: -10, transformOrigin: "center  center" })
			gsap.fromTo('#monitor-4, #monitor-4-1, #monitor-4-2', { opacity:1, y:0}, {opacity:0, y:6, ...setg, duration: speed2 * 4,repeat: -1,yoyo: true});
			gsap.fromTo('#helicopter', {  y:0,x:1150}, { y:50,x:1150, ...setg, duration: speed2 * 4,repeat: -1,yoyo: true}); 
			// gsap.to('[clip-path="url(#clip0_2794_72656)"]', { rotateY: 360, ...setg, duration: speed2 * 4,repeat: -1, transformOrigin: "center  center" }); 
	
	tl2
		.fromTo('#hand-4--left', { y: 0 }, { y: -2 })
		.fromTo('#hand-4--right', { y: 0 }, { y: -3 })
	
		let circle51 = tl3.fromTo( '#circle-5--1', {opacity:0, x:0,y:0},{opacity:1, x:39,y:26});
		let circle52 = tl3.fromTo( '#circle-5--2', {opacity:0, x:35,y:32},{opacity:1, x:0,y:0});
		let circle53 = tl3.fromTo( '#circle-5--3', {opacity:0, x:0,y:0},{opacity:1, x:35,y:21});
		let circle54 = tl3.fromTo('#circle-5--4', { opacity: 0, x: -27, y: 18 }, { opacity: 1, x: 0, y: 0 });
	
	let box6 = [{opacity:0, x:-34, y: -21}, {opacity:1, x:0, y: 0}]
	
		let box6hide = {
			opacity: 0,
			translateX: -34,
			translateY: -21, 
		}
	

	tl3
		.add(circle51)
		.add(circle52)
		.add(circle53)
		.add(circle54)
		.fromTo('#box-6--1', ...box6 )
		.fromTo('#box-6--2', ...box6 )
		.fromTo('#box-6--3', ...box6 )
		.fromTo('#box-6--4', ...box6)
		.fromTo('#screen-7--left', {opacity: 0,y: 20}, {opacity: 1,y: 0})
		.fromTo('#screen-7--right', {opacity: 0,y: 20}, {opacity: 1,y: 0}, `-=${.2} `)

	let circleDown = el => tl4.to(`#circle-7--${el}`, { opacity: 0, x: -70, y: 39 });
	let circleUp = el => tl4.fromTo(`#circle-7--${el}`, { opacity: 0, x: -70, y: 39 }, { opacity: 1, x: 0, y: 0 });


	tl4 
		
		.to( `#excavator-8`,{ x: -12,y: -6})
		.fromTo( `#circle-7--1, #circle-7--3`,{ opacity: 0},{ opacity: 1})
		.add(circleDown(1))
		.add(circleUp(4))
		.add(circleDown(3))
		.add(circleUp(2))
		.to( `#excavator-8`,{ x: 0,y: 0})
		.to( `#circle-7--1, #circle-7--3`,{  opacity: 0})
	
	tl5
		.fromTo('#granuly, #granuly_1_, #granuly_2_,  #granuly_3_', {opacity:0}, {opacity:1})
		.to('#granuly, #granuly_1_, #granuly_2_,  #granuly_3_', { opacity: 0, y: -40 }, `-=${.4} `);
	
	
	let handDown = tl6.to( "#hand-11", {rotate:0,  x: 0, y: 0,   transformOrigin: "right bottom"});
	let handUp = tl6.to("#hand-11", { rotate: -84, x: 5, y: -4,   transformOrigin: "right bottom" }); 
	
	tl6
		.add(handDown)
		.add(handUp)
		.to('#circle-10--2',{ opacity: 0, x: -10, y: 8 })
		.to('#circle-10--1', { opacity: 0, x: 24, y: 14 })
		
		let hand12Down = tl7.to( "#hand-12", {rotate:0,  transformOrigin: "right bottom"   }); 
		let hand12Up = tl7.to( "#hand-12", {rotate:-36,x: -5, y: -4,  transformOrigin: "center bottom"  });  
		
		tl7
			.add(hand12Up)
			.fromTo( '#screen-12--1, #screen-12--2', {opacity: 1}, {opacity: 0}, `+=${1} `)
			.fromTo( '#screen-12--3', {opacity: 1}, {opacity: 0, y: 14})
			.fromTo('#circle-11--1', {opacity:1}, { opacity: 0, x: 54, y: 34 }) 
			.fromTo('#circle-12', { opacity: 0, x: 0, y: 0 }, { opacity: 1, x: -56, y: 40 }) 
			.fromTo('#circle-12', {  x: -56, y: 40 }, { skewX: -31, x: -140, y: -13 })
			.fromTo('#circle-12-1', { opacity:0, x: -98, y: 15 }, {  opacity:1, x: -140, y: 41} ) 
			.to('#circle-12, #circle-12-1', { opacity: 0} )
			.fromTo('#monitor-20', { opacity: 1}, { opacity: 0})
			.to('[d="M161.1,250.5l35.3,20.4l59.8-35.8 M161.1,250.5l-57,35.2 M161.1,250.5l-60.6-36.4"]', { stroke: '#0CD1FF'})
			.to('#circle-12 .st130, #circle-12-1 .st130', { fill: '#0CD1FF'}) 
			.to('#circle-12, #circle-12-1', { opacity: 1} )
			.to('#circle-12-1', { opacity: 1, x:-98, y: 15} )  
			.to('#circle-12-1', { opacity: 0} , `-=${.5} `)  
			.to('#circle-12', { skewX: 0, x: -56, y: 40} , `-=${.5} `)  
			.to('#circle-12', { opacity: 0, x: 0, y: 0} )  
			.to('[d="M161.1,250.5l35.3,20.4l59.8-35.8 M161.1,250.5l-57,35.2 M161.1,250.5l-60.6-36.4"]', { stroke: '#3998FF'})
			.to('#circle-12 .st130, #circle-12-1 .st130', { fill: '#3998FF'}) 

			.add(hand12Down)
			.to('#circle-11--2',   { x: 54, y: 40, opacity:1}) 
			.to( '#hand-13', { y: -1}) 
			.fromTo('#circle-11--3',   { x: 54, y: 40, opacity:0}, {opacity:1}) 
			.to( '#hand-14', {x:1, y: 2}) 
			.fromTo('#circle-11--4',   { x: 54, y: 40, opacity:0}, {opacity:1}) 
 


			let circleDown15 = el => tl4.fromTo(`#circle-15--${el}`, { opacity: 1, x: 20, y: -16}, { opacity: 0, x: -29, y: 17 });
			// let circleDown15 =function (el) {
			// 	return {
			// 		targets: `#circle-15--${el}`, 
			// 		opacity: [1, 0],
			// 		translateX: [20, -29],
			// 		translateY: [-16, 17], 
			// 	}
			// }
			let circleUp15 = el => tl4.fromTo(`#circle-15--${el}`, { opacity: 0}, { opacity: 1, x: 12, y: -8 });
	
	// let circleUp15 = function(el) {
	// 	return {
	// 		targets: `#circle-15--${el}`,
	// 		opacity: [0,1],
	// 		translateX: 12,
	// 		translateY: -8, 
	// 	}
	// }

	
	tl8
		.to( `#circle-15--2`, {skewX: -31, x: -35, y: 50})
		.fromTo( `#circle-15--2`, {opacity: 0}, {opacity: 1,  x: -55, y: 37})
		.to( `#circle-15--2`,  {skewX: 0, x: 15, y: -10 })
		.fromTo( `#circle-15--1`, {opacity: 0, x: -34, y: 22, }, {opacity: 1,x: 5, y: -4},">-0.5") 
		.fromTo( `#circle-15--4`, {opacity: 0, x: 34, y: -21, }, {opacity: 1,x: -18, y: 10})
		.fromTo( `#circle-15--3`, {opacity: 0, x: 9, y: -5, }, {opacity: 1,x: -26, y: 16},">-0.5")
		.to( `#circle-15--1, #circle-15--2`, {opacity: 0},">-0.5")
		.fromTo( `#circle-15--5`, {opacity: 0, x: 30, y: -18, }, {opacity: 1,x: -24, y: 14},">-0.5")
		.fromTo( `#circle-15--6`, {opacity: 0, x: 44, y: -26, }, {opacity: 1,x: -57, y: 32},">-0.5")
		.to( `#circle-15--6`,  {x: -5, y: 70, skewX: -31 })
		.to( `#circle-15--5`, {skewX: 0, opacity: 1,x: 19, y: 49},">-0.5")
		.fromTo( `#circle-15--7, #circle-15--8`,{opacity: 0, x: -90, y: -35,}, { opacity: 1,x: -45, y: -62, transformOrigin: "center  center"},">-0.5")
		.to( `#circle-15--7, #circle-15--8`,{opacity: 0},">-0.5");
	
		tl9
		.to( `#hand-16-2`,{y: -3, })
		.to( `#hand-16-1`,{x: 3})
		.to( `#hand-16-2`,{y: 3, })
		.add( `#hand-16-1`,{ x: -3, })
	tl10
	.set(`#el-17--1, #el-17--2`, { opacity: 0 },">-0.5") 
		.fromTo( `#circle-16--1`, {skewX: 31,  x: 63, y: 65 }, {x:93,y:50})
		
		.to(`#circle-16--1`, { skewX: 0, opacity: 0 , x:0,y:0})  
		.to(`#imprint`, {  opacity: .5 })  
		.to( `#circle-16--2, #circle-16--3`,   {opacity: 0,x:  32,y: 22})
		.fromTo( `#circle-16--4`, { opacity: 0 ,x:  -27 , y: 12} , { opacity:1,x: 16,y: -12})
		.fromTo( `#shield-18`, { opacity: 0 } , { opacity:1 }) 
		.fromTo( `#dots-19`, { opacity: 0 ,x:  -46 , y: 23} , { opacity:1,x: 16,y: -12},">-0.5") 
		.fromTo( `#dots-19`, { opacity: 1 ,x:  0 , y: 0} , { opacity:0,x: -10,y: 5})
		.to( `#shield-18`, { opacity:0})
		.fromTo(`#el-17--1`, { opacity: 0 }, {opacity: 1 },">-0.5") 
		.fromTo(`#el-17--1`, { opacity: 1 }, {opacity: 0 }) 
		// .to(`#el-17--1`,  {opacity: 0 })
		.fromTo(`#el-17--2`, { opacity: 0 }, { opacity: 1 })
		.fromTo(`#el-17--2`, { opacity: 1 }, { opacity: 0 })
	
		function randomValues() {
		anime({
			targets: '.st863, .st863',
			// endDelay: 1000,
			duration: speed * 16,
			// easing: 'easeInOutQuad',
			direction: 'alternate',
			fill: '#A1ADFF',
			loop: true,
			easing: function(el, i, total) {
				return function(t) {
					return Math.pow(Math.sin(t * (i + 4)),  total);
				}
			},
			complete: randomValues,
			delay: anime.stagger(500, {direction: 'reverse'})
		});
	}

	randomValues();


	tl20 
		// .fromTo('#text-18', {opacity:0}, {opacity: 1})
		.fromTo('#text-18', {opacity:1}, {opacity: 0}) 
		.fromTo('#line-19',{opacity:0 }, {opacity: 1 },">-0.5")  
		.from('#line-19',{ attr:{strokeDashoffset:0}, duration: speed2 * 2,repeatDelay: speed2 * 2})  
		// .from( '#line-19', speed2 * 10, {attr:{"stroke-dashoffset":0}})

	tl21
	 .to( '#mouse-21',{x:  -13,y:  -19, }) 
	 .fromTo('#screen-20',{opacity:0},{opacity:1}) 
	 .to( '#mouse-21',{x:  -5,y:  10, })  
	 .fromTo('#screen-20',{opacity:1},{opacity:0}) 
	 .to( '#mouse-21',{x:  16,y:  -7 }) 
	 .fromTo('#screen-20',{opacity:0},{opacity:1}) 
	 .to( '#mouse-21',{x:  -5,y:  10, }) 
	 .fromTo('#screen-20',{opacity:1},{opacity:0}) 
 }


//  setTimeout(() => {
	 
// 	 headSVG();
// 	}, 500);




// convertImages('.head-svg', headSVG);