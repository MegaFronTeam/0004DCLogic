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
		
		let tl3 = anime.timeline({
			...set,
			direction: 'normal',
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
	});
	
tl2
		.add({
			targets: '.hand-4--left',
			translateY: [0, -3],
		})
		.add({
			targets: '.hand-4--right',
			translateY: [0, -2],
		});
	
	let circle51 = {
		targets: '.circle-5--1',
		opacity: [0, 1],
		translateX: [0,39],
		translateY: [0, 26],
		// delay: -200
	};
		
	let circle52 = {
		targets: '.circle-5--2',
		opacity: [0, 1],
	};
	let circle53 = {
		targets: '.circle-5--3',
		opacity: [0, 1],
		translateX: [0,35],
		translateY: [0, 21],
		// delay: -200
	};
	


tl3
	.add(circle51) 
	.add(circle52)
	.add(circle53)
	.add({
		targets: '.box-6--1', 
		opacity: [0,1],
		translateX: [-34,0],
		translateY: [-21,0], 
		// delay: -200
	})
	.add({
		targets: '.box-6--2', 
		opacity: [0,1],
		translateX: [-34,0],
		translateY: [-21,0], 
		// delay: -200
	})
	
	.add({
		targets: '.box-6--3', 
		opacity: [0,1],
		translateX: [-34,0],
		translateY: [-21,0], 
		// delay: -200
	})
	.add({
		targets: '.box-6--4', 
		opacity: [0,1],
		translateX: [-34,0],
		translateY: [-21,0], 
		// delay: -200
	})
	.add({
		targets: '.circle-5',
		opacity: 0
	}) 
	.add(circle51) 
	.add(circle52)
	.add(circle53)

	.add({
		targets: '.box-6--1', 
		opacity: 0,
		translateX: -34,
		translateY: -21, 
		// delay: -200
	})
	.add({
		targets: '.box-6--2', 
		opacity: 0,
		translateX: -34,
		translateY: -21, 
		// delay: -200
	})
	
	.add({
		targets: '.box-6--3', 
		opacity: 0,
		translateX: -34,
		translateY: -21, 
	})
	
	.add({
		targets: '.box-6--4', 
		opacity: 0,
		translateX: -34,
		translateY: -21, 
	})



	
	
	
 }


 setTimeout(() => {
	 
	 headSVG();
	}, 1500);