$( document ).ready(function() {
	$(".li-hover1").hover(function(){
		$(this).append('<div class="div-append-navbar">'
			'<div>'
			'<a href="#">In hình và chữ lên đồ</a>'
			'</div>'
			'<div>'
			'<a href="#">Gói quà tặng</a>'
			'</div>'
			'</div>'
			);
	}, function(){
		$(this).find(".div-append-navbar").remove();
	});
});