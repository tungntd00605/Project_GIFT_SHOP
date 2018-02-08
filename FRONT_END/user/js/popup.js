$(document).ready(function() {
   $(".in-develope").click(function(event){
   		event.preventDefault();
		var x = document.getElementById("snackbar")
		x.className = "show-popup";
		setTimeout(function(){ x.className = x.className.replace("show-popup", ""); }, 3000);
	})
});
	
