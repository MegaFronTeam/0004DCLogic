'use strict';
function headSVG() { 
	let speed = 500;

	let pathLine = anime.path("#head-svg .line-3")
		// Create a timeline with default parameters
	let set = {
		easing: 'easeInOutSine',
		duration: speed,
		loop: true,
		direction: 'alternate',
	}
		let tl = anime.timeline({
			...set
		});
		let tl2 = anime.timeline({
			...set,
			duration: speed * 1.5,
			easing: 'easeInOutQuad',
		});
		
		// Add children
	tl
		.add({
			targets: '.belaz-1',
			translateX: [50, 0],
			translateY: [-50, 0],
			// direction: 'alternate',
			opacity: 1
		})
		.add({
			targets: '.circle-2--1',
			translateX: [0, -20],
			translateY: [0, 13],
			opacity: [0, 1],
		}, `-=${speed / 2} `)
		.add({
			targets: '.circle-2--2',
			opacity: [0, 1],
			translateX: [-20, 75],
			translateY: [15, 54],
			skewX: -35,
			// delay: -200
		})

		.add({
			targets: '.line-3',
			opacity: [0, 1],
		}, `-=${speed * .8} `)

		.add({
			targets: '.circle-2--3',
			opacity: [0, 1],
			translateX: [37, -10],
			translateY: [56, 85],
			// delay: -200
		})
		.add({
			targets: '.circle-2--4',
			opacity: [0, 1],
			translateX: [-10, 47],
			translateY: [88, 100],
			skewX: -35,
		});
	
	anime({
		...set,
		duration: speed * 3,
		easing: 'easeInOutQuad',
			targets: '.monitor-4',
			opacity: [1, 0],
			translateY: [0, 6]
		})
		tl2
		.add({
			targets: '.hand-4--left', 
			translateY: [0, -3],
		})
	
		// .add({
		// 	targets: '.hand-4--left', 
		// 	translateY: [-2, 0],
		// })
	
		.add({
			targets: '.hand-4--right', 
			translateY: [0, -2],
		})
		// .add({
		// 	targets: '.hand-4--right', 
		// 	translateY: [3, 0],
		// })
	
	
 }


 setTimeout(() => {
	 
	 headSVG();
	}, 1500);