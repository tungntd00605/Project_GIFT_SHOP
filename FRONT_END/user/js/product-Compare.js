$(document).ready(function(){
	$(".compare-thumbnail").click(function(){
        // $("#proCompare").css("display", "none");
        $("#proCompare-info").html('<div class="form-control " style="clear: both;">' +
        	'<label for="" class="col-xs-6 col-md-6">'  +
        	'<i class="fa fa-heart"></i>'+
        	'&nbsp;Giá Sản Phẩm:'+
        	'</label>'+
        	'<div class="col-xs-6 col-md-6">'+
        	'<div class="proV-price">'+
        	'<p class="price">240.000 $</p>'+
        	'</div>'+
        	'</div>'+
        	'</div>'+
        	'<div class="form-control " style="clear: both;">'+
        	'<label for="" class="col-xs-6 col-md-6">'+
        	'<i class="fa fa-heart"></i>'+
        	'&nbsp;Trạng thái :'+
        	'</label>'+
        	'<div class="col-md-6 col-xs-6">'+
        	'<div class="text">'+
        	'Còn hàng'+
        	'</div>'+
        	'</div>'+
        	'</div>'+
        	'<div class="form-control " style="clear: both;">'+
        	'<label for="" class="col-xs-6 col-md-6">'+
        	'<i class="fa fa-heart"></i>'+
        	'&nbsp;Kích Thước :'+
        	'</label>'+
        	'<div class="col-xs-6 col-md-6">'+
        	'<div class="text">'+
        	'50 x 30 x 20cm'+
        	'</div>'+
        	'</div>'+
        	'</div>'+
        	'<div class="form-control " style="clear: both;">'+
        	'<label for="" class="col-xs-6 col-md-6">'+
        	'<i class="fa fa-heart"></i>'+
        	'&nbsp;Hãng :'+
        	'</label>'+
        	'<div class="col-xs-6 col-md-6">'+
        	'<div class="text">'+
        	'Burberry'+
        	'</div>'+
        	'</div>'+
        	'</div>'
        	);
        $("#title-proCompare").html('<h3 class="panel-title" id="title-proCompare" style="font-size: 25px;">Gấu Bông Nâu Cute</h3>');
        $('#addPro2Info').html('<div class="Additional-information " style="clear: both;"> Thông tin sản phẩm 2 </div>');
        $(".compare-big-img").removeClass("hidden");
        $(".compare-big-img").addClass("show");
        $("#compare-img-list").addClass("hidden");
        $("#compare-img-list").removeClass("show");
    });
});
$("#btnReCompare").click(function(){
		$(".compare-big-img").addClass("hidden");
        $(".compare-big-img").removeClass("show");
        $("#compare-img-list").removeClass("hidden");
        $("#compare-img-list").addClass("show");
        $("#title-proCompare").html('<h3 class="panel-title" id="title-proCompare" style="font-size: 25px;">Vui lòng chọn sản phẩm bạn muốn so sánh</h3>');
	});
