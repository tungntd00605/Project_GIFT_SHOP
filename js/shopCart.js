var quantityProduct = $(".quantity-product").val();
var minus = $(".minus-product").val();
$(".minus-product").click(function(){	
	var  quantity = quantityProduct - minus;
	$(".quantity-product").attr("value", quantity);
});

$(".plus-product").click(function(){
	var  quantity = quantityProduct + minus;
	$(".quantity-product").attr("value", quantity);
});

// $("#btn-buying").click(function(){
// 	$("body,html").animate({
// 		scrollTop:"#buying"
// 	},800);
// 	return false
// })


// bên trong ajax  là chỗ sử lý với api
$('#loading-example-btn').click(function () {
	var btn = $(this)
	btn.button('loading')
	$.ajax(...).always(function () {
		btn.button('reset')
	});
});
