
$(document).ready(function() {
 //  $('.owl-carousel-trend').owlCarousel({
	// loop: true,
	// margin: 10,
	// responsiveClass: true,
	// responsive: {
	//   0: {
	// 	items: 4,
	// 	nav: true
	//   },
	//   768: {
	// 	items: 6,
	// 	nav: true
	//   },
	//   1000: {
	// 	items: 10,
	// 	nav: true,
	// 	loop: true,
	// 	margin: 10,
	//   }
	// }
 //  })
})
$(document).ready(function() {
  $('.owl-carousel-category').owlCarousel({
	loop: true,
	margin: 10,
	responsiveClass: true,
	responsive: {
	  0: {
		items: 2,
		nav: true
	  },
	  768: {
		items: 6,
		nav: true
	  },
	  1000: {
		items: 10,
		nav: true,
		loop: true,
		margin: 1,
	  }
	}
  })
})
$(document).ready(function() {
  $('.owl-carousel-popular').owlCarousel({
	loop: true,
	margin: 10,
	responsiveClass: true,
	responsive: {
	  0: {
		items: 2,
		nav: true
	  },
	  768: {
		items: 3,
		nav: true
	  },
	  1000: {
		items: 6,
		nav: true,
		loop: true,
		margin: 10,
	  }
	}
  })
})
