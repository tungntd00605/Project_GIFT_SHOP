$(function(){$(window).scroll
	(function(){
		if($(this).scrollTop()!=0){
			$("#noop-top").fadeIn()
		}else{
			$("#noop-top").fadeOut()
		}
	});
	$("#noop-top").click(function(){
		$("body,html").animate({scrollTop:0},800);
		return false
	})
});