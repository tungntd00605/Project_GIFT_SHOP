$( document ).ready(function() {
	if ($(window).width() > 960) {
		$('ul.nav li.dropdown').hover(function() {
			$(this).find('.content-dropdown').stop(true, true).delay(100).fadeIn(500);
		}, function() {
			$(this).find('.content-dropdown').stop(true, true).delay(100).fadeOut(500);
		});
	} else {
		$('ul.nav li.dropdown').click(function() {
			$(this).find('.content-dropdown').slideToggle("slow");
		});
	}
	
	window.onscroll = function() {myFunction()};

	var navbar = document.getElementById("sticky-menu-bar");
	var sticky = navbar.offsetTop;

	function myFunction() {
		if (window.pageYOffset >= sticky) {
			navbar.classList.add("sticky");
			if($("#user-name").html() != "Username"){
				$("#user-name").removeClass("hidden");
				$("#user-name").addClass("show");
			}
		} else {
			navbar.classList.remove("sticky");
			$("#user-name").removeClass("show");
			$("#user-name").addClass("hidden");
		}
	}
});	