'use strict';
function headSVG() { 
	let speed = 500;

	let pathLine = anime.path("#head-svg .line-3")
		// Create a timeline with default parameters
	let set = {
		easing: 'easeInOutSine',
		duration: speed,
		// loop: true,
		// direction: 'alternate',
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
		let tl4 = anime.timeline({
			...set ,
			direction: 'normal',
		});
	
		let tl5 = anime.timeline({
			duration: speed  * 2,
			loop: true,
			easing: 'easeInOutExpo',
			// delay: function(el, i, l) {
			// 	return i * 2;
			// },
			// endDelay: function(el, i, l) {
			// 	return (l - i) * 2;
			// }
		});
		let tl6 = anime.timeline({
			...set,
			duration: speed * 2 ,
			// direction: 'normal',
		});
		let tl7 = anime.timeline({
			...set
		});
		let tl8 = anime.timeline({
			...set
		});
		let tl9 = anime.timeline({
			...set
		});
		let tl10 = anime.timeline({
			...set,
			loop: true,
		direction: 'normal',
		});
	
		// Add children
	tl
		.add({
			targets: '#belaz-1',
			translateX: [50, 0],
			translateY: [-50, 0],
			// direction: 'alternate',
			opacity: 1
		})
		
		// .add({
		// 	targets: '.st928', 
		// 	opacity: [.2, .8]
		// })
		.add({
			targets: '.st929', 
			opacity: [0,.8]
		})
		// .add({
		// 	targets: '.st928', 
		// 	opacity: [.8, 0]
		// }, `+=${speed} `)
		.add({
			targets: '.st929', 
			opacity: [.8, 0]
		}) 
		.add({
			targets: '#circle-2_3_', 
			opacity: [0, 1],
			translateX: [0, -20],
			translateY: [0, 13],
		}, `-=${speed / 2} `)

		.add({
			targets: '.st0-3',
			opacity: [0, 1],
		}, `-=${speed * .8} `)
		
		.add({
			targets: '#circle-2_3_',
			// opacity: [0, 1],
			translateX: [-20, 75],
			translateY: [15, 54],
			skewX: -35,
			// delay: -200
		})
		
		.add({
			targets: '#circle-2_3_',
			// opacity: [0, 1],
			skewX: 0,
			translateX: [75, -10],
			translateY: [54, 88],
			// delay: -200
		})
		.add({
			targets: '#circle-2_3_',
			// opacity: [0, 1],
			translateX: [-10, 47],
			translateY: [88, 100],
			skewX: -35,
		})
	
		.add({
			targets: '#circle-2_3_1',
			opacity: [1, 0],
			translateX: [58, -16],
			translateY: [34, -10],
		});
	
		// .add({
		// 	targets: '#circle-2_3_1',
		// 	opacity: [, 0], 
		// });
	
	
	
	
	anime({
		...set,
		duration: speed * 3,
		easing: 'easeInOutQuad',
			targets: '#monitor-4, #monitor-4-1, #monitor-4-2',
			opacity: [1, 0],
			translateY: [0, 6]
	});
	anime({
		...set,
		duration: speed * 3,
		easing: 'easeInOutQuad',
			targets: '#helicopter', 
			translateY: [0, 50],
			// translateX: [1150, 1150],
	});
	
	tl2
			.add({
				targets: '#hand-4--left',
				translateY: [0, -3],
			})
			.add({
				targets: '#hand-4--right',
				translateY: [0, -2],
			});
		
		let circle51 = {
			targets: '#circle-5--1',
			opacity: [0, 1],
			translateX: [0,39],
			translateY: [0, 26],
			// delay: -200
		};
			
		let circle52 = {
			targets: '#circle-5--2',
			opacity: [0, 1],
			translateX: [35,0],
			translateY: [21, 0],
		};
		let circle53 = {
			targets: '#circle-5--3',
			opacity: [0, 1],
			translateX: [0,35],
			translateY: [0, 21],
			// delay: -200
		};
		
		let circle54 = {
			targets: '#circle-5--4',
			opacity: [0, 1],
			translateX: [-27, 0],
			translateY: [18, 0],
			// delay: -200
		};
		let box6 = {
			opacity: [0,1],
			translateX: [-34,0],
			translateY: [-21,0], 
		}
	
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
		.add({
			targets: '#box-6--1', 
			...box6 
			// delay: -200
		})
		.add({
			targets: '#box-6--2', 
			...box6 
			// delay: -200
		})
		
		.add({
			targets: '#box-6--3', 
			...box6 
			// delay: -200
		})
		.add({
			targets: '#box-6--4', 
			...box6 
		})
		.add({
			targets: '#screen-7--left', 
			opacity: 1,
			translateY: [20,0], 
		})
		.add({
			targets: '#screen-7--right', 
			opacity: 1,
			// translateX: -34,
			translateY: [20,0], 
		}, `-=${speed * .8} `)
		.add({
			targets: '#circle-5--1, #circle-5--2, #circle-5--3, #circle-5--4',
			opacity: 0
		}) 
		.add(circle51) 
		.add(circle52)
		.add(circle53)
		.add(circle54)

		.add({
			targets: '#box-6--1', 
			...box6hide
		})
		.add({
			targets: '#box-6--2', 
			...box6hide
		})
		
		.add({
			targets: '#box-6--3', 
			...box6hide
		})
		
		.add({
			targets: '#box-6--4', 
			...box6hide
		})
	let circleDown =function (el) {
		return {
			targets: `#circle-7--${el}`, 
			opacity: [1, 0],
			translateX: -70,
			translateY: 39, 
		}
	}
	
	let circleUp = function(el) {
		return {
			targets: `#circle-7--${el}`,
			opacity: [0,1],
			translateX: [-70,0],
			translateY: [39, 0], 
		}
	}

	tl4

		// .add({
		// 	targets: `.excavator-8`, 
		// 	translateX: 10,
		// 	translateY: 10, 
		// })
		
		.add({
			targets: `#excavator-8`,
			translateX: -		12,
			translateY: -6,
		})
		
		.add({
			targets: `#circle-7--1, #circle-7--3`,
			opacity: 1,
		})
		
		.add({ ...circleDown(1) })
		.add({ ...circleUp(4) })
		.add({ ...circleDown(3) })
		.add({ ...circleUp(2) })
		.add({
			targets: `#excavator-8`,
			translateX: 0,
			translateY: 0,
		})
		.add({
			targets: `#circle-7--1, #circle-7--3`,
			opacity: 0,
		});
	
	tl5
		.add({
			targets: '#granuly, #granuly_1_, #granuly_2_,  #granuly_3_',
			opacity: [0, 1],
			// translateY: [10, 0],
			// translateY: [0, -20],
		})
			
		.add({
			targets: '#granuly, #granuly_1_, #granuly_2_,  #granuly_3_',
			opacity: 0,
			translateY: [0, -40],
		}, `-=${speed * .8} `);
	let handDown = 
		{
			targets: "#hand-11",
			duration: 0,
			rotate:0,
			translateX: 0,
			translateY: 0,
	} 
	
	let handUp = 
		{
			targets: "#hand-11",
			duration: 0,
			rotate:-84,
			translateX: 384,
			translateY: -4,
	} 

	
	tl6
		.add(handDown)
		.add(handUp)
		.add({
			targets: '#circle-10--2',
			translateX: -10,
			translateY: 8,
			opacity: 0
		})
	
		.add({
			targets: '#circle-10--1',
			translateX: 24,
			translateY: 14,
			opacity: 0
		})
	
	
		let hand12Down = 
		{
			targets: "#hand-12",
			duration: 0,
			rotate:0,
			translateX: 0,
			translateY: 0,
	} 
	
	let hand12Up = 
		{
			targets: "#hand-12",
			duration: 0,
			rotate:-41,
			translateX: -187,
			translateY: 186,
	} 
		
	tl7
	.add(hand12Up)
	.add({
		targets: '#screen-12--1, #screen-12--2',
		// translateX: 54,
		// translateY: 14,
		opacity: 0
	}, `+=${speed} `)
	.add({
		targets: '#screen-12--3',
		// translateX: 54,
		translateY: 14,
		opacity: 0
	})
	
	
	.add({
		targets: '#circle-11--1',
		translateX: 54,
		translateY: 34,
		opacity: 0
	})
	.add({
		targets: '[id^="circle-12"]',
		translateX: -30,
		translateY: 18,
		opacity: [1, 0]
	})
	.add(hand12Down)
	.add({
		targets: '#circle-11--2',
		translateX: 54,
		translateY: 34,
		opacity: [1, 0]
	})
	.add({
		targets: '#hand-13',
		// translateX: -30,
		translateY: -1,
		// opacity: [1, 0]
	})
	.add({
		targets: '#circle-11--3',
		translateX: 54,
		translateY: 34,
		opacity: 0
	})
	.add({
		targets: '#hand-14',
		translateX: 1,
		translateY: 2,
		// opacity: [1, 0]
	})
	
	.add({
		targets: '#circle-11--4',
		translateX: 54,
		translateY: 34,
		opacity: [1, 0]
	})
	


	let circleDown15 =function (el) {
		return {
			targets: `#circle-15--${el}`, 
			opacity: [1, 0],
			translateX: [20, -29],
			translateY: [-16, 17], 
		}
	}
	
	let circleUp15 = function(el) {
		return {
			targets: `#circle-15--${el}`,
			opacity: [0,1],
			translateX: 12,
			translateY: -8, 
		}
	}

	
	tl8
		.add({
			targets: `#circle-15--2`, skewX: -31,
		})
		.add({
			targets: `#circle-15--2`,
			opacity: 1,
			// skewX: -31,
			translateX: [35, 9],
			translateY: [45, 34],
		})
		// .add({ targets: '#circle-15--1', opacity: [1, 0]})
		.add({
			targets: `#circle-15--2`,
			skewX: 0,
			translateX: [9, 7],
			translateY: [34, -5],
		})
		.add({
			targets: `#circle-15--1`,
			opacity: [0, 1],
			translateX: [-34, 5],
			translateY: [22, -4],
		}, `-=${speed} `)
		.add({
			targets: `#circle-15--1`,
			opacity: [0, 1],
			translateX: [-34, 5],
			translateY: [22, -4],
		}, `-=${speed} `)
		.add({
			targets: `#circle-15--4`,
			opacity: [0, 1],
			translateX: [34, -18],
			translateY: [-21, 10],
		})
	
		.add({
			targets: `#circle-15--3`,
			opacity: [0, 1],
			translateX: [9, -26],
			translateY: [-5, 16],
		}, `-=${speed} `)
		.add({
			targets: `#circle-15--1, #circle-15--2`, opacity: 0
		}, `-=${speed * .4} `)
		// tl9
		.add({
			targets: `#circle-15--5`,
			opacity: [0, 1],
			translateX: [30, -24],
			translateY: [-18, 14],
		}, `-=${speed} `)
		.add({
			targets: `#circle-15--6`,
			opacity: [0, 1],
			translateX: [44, -57],
			translateY: [-26, 32],
		}, `-=${speed} `)
		.add({
			targets: `#circle-15--6`,
			// opacity: [1, 0],
			translateX: [-57, 35],
			translateY: [32, 64],
			skewX: -31,
		})
		.add({
			targets: `#circle-15--5`,
			opacity: [1, 0],
			skewX: 0,
			translateX: 19,
			translateY: 49,
		}, `-=${speed} `)
		
		.add({
			targets: `#circle-15--7, #circle-15--8`,
			opacity: [0, 1],
			skewX: 0,
			translateX: [-90, -45],
			translateY: [-35, -62],
		}, `-=${speed} `)
		
		.add({
			targets: `#circle-15--7, #circle-15--8`,
			opacity: 0
		}, `-=${speed * .5} `);
	
		tl9
		.add({
			targets: `#hand-16-2`,
			translateY: -3,
		})
		.add({
			targets: `#hand-16-1`,
			translateX: 3,
		})
		.add({
			targets: `#hand-16-2`,
			translateY: 3,
		})
		.add({
			targets: `#hand-16-1`,
			translateX: -3,
		})
	tl10
		.add({
			targets: `#circle-16--1`,
		skewX: 31,
		})
		
		.add({
			targets: `#circle-16--1`,
			opacity: 1,
			// skewX: 31, 
			translateX: [-85, -59],
			translateY: [65, 48],
		})
		// .add({
		// 	targets: `#circle-16--1`,
		// }) 
		.add({
			targets: `#circle-16--1`, 
			skewX: 0,
			opacity: 0,
			
			translateX:  [-59,0],
			translateY: [48, 0],
		})
		.add({
			targets: `#imprint`,  
			opacity: [1, .5]
		})
		.add({
			targets: `#circle-16--2, #circle-16--3`,  
			opacity: 0,
			translateX:  32,
			translateY: 22,
		})
		.add({
			targets: `#shield-18`,  
			opacity: [0,1],
		})
		
		.add({
			targets: `#dots-19`,  
			opacity: [0,1],
			translateX:  [-46,0],
			translateY: [23, 0],
		}, `-=${speed * .5} `)
		.add({
			targets: `#dots-19`,  
			opacity: [1,0],
			translateX:  [0,-10],
			translateY: [0, 5],
		})
		.add({
			targets: `#shield-18`,  
			opacity: 0,
		})
		
		.add({
			targets: `#el-17--1`,  
			opacity: [0,1],
		}, `-=${speed * 2} `)
		
		.add({
			targets: `#el-17--1`,  
			opacity: [1,0],
		})
		
		.add({
			targets: `#el-17--2`,  
			opacity: [0,1],
		})
		.add({
			targets: `#el-17--2`,  
			opacity: [1,0],
		})
	



	
	// .add({
		// 	targets: `#circle-15--2`,
		// 	opacity: 1,
		// 	// skewX: -31,
		// 	translateX: [9, 9],
		// 	translateY: [34,34],
		// })
		// .add(circleUp15(2), `-=${speed * .8} `)
		// .add({ targets: '#circle-15--2', opacity: [1, 0]})

		
		// .add(circleDown15(5))
		// .add(circleDown15(6))

		// .add({
		// 	targets: `#circle-15--7, #circle-15--8`,
		// 	translateX: -61,
		// 	translateY: -50, 
		// }, `-=${speed} `)
		
		// .add(circleUp15(3))
		// .add(circleUp15(4), `-=${speed * .8} `)
		
		// .add(circleDown15(7))
		// .add(circleDown15(8))
	
	
	
		// .add(handDown)
		// .add(handUp)
	
		// .add(handDown)
		// .add(handUp)
	
	
	
	
 }


 setTimeout(() => {
	 
	 headSVG();
	}, 1500);