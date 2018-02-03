var GIFT_SHOP_API_URL = "http://localhost:3000/giftshop_api/v1/products";

$(document).ready(function(){	
	var page = Number(getUrlParameter('page'));
	var limit = Number(getUrlParameter('limit'));
	loadMain();
	
	// loadListProduct();
	// $('body').on('click', '.delete-link', function(event){
	// 		alert(JSON.stringify(event.target));
	// 		return false;
	// });
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
});


function loadMain(){
	$.ajax({
		url: GIFT_SHOP_API_URL,
		type: 'GET',
		success: function(response){
			// var totalPage = response.totalPage;			
			var listProduct = response.list;
			var content = '';
			for (var i = 0; i < listProduct.length; i++) {
				var id = listProduct[i]._id;
				content += '<div class="item">';
				content +=		'<a href="">';
				content +=			'<img src="'+ listProduct[i].imagesUrl +'">';
				content +=			'<span>' + listProduct[i].name +'</span>';
				content +=		'</a>';
				content +=	'</div>';
			}
			$('#test').html(content);
			loadTrend();
			var bigContent = '';
			for (var i = 0; i < listProduct.length; i++) {
				var id = listProduct[i]._id;
				bigContent+= '<div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">';
				bigContent+=		'<div class="item prodItem">';
				bigContent+=			'<div class="thumb"><a href="product-detail.html"><img src="' + listProduct[i].imagesUrl + '"></a></div>';
				bigContent+=			'<div class="promotion">Giảm <strong>25%</strong></div>';
				bigContent+=			'<div class="badge">Yêu thích</div>';
				bigContent+=			'<div class="info">';
				bigContent+=				'<h2><a href="">' + listProduct[i].name +'</a></h2>';
				bigContent+=				'<div class="price">';
				bigContent+=					'<div class="pull-left">' + listProduct[i].unitPrice + '</span> $</div>';
				bigContent+=					'<div class="pull-right"><span class="glyphicon glyphicon-shopping-cart"></span></div>';
				bigContent+=					'<div class="clearfix"></div>';
				bigContent+=				'</div>';
				bigContent+=				'<div class="clearfix"></div>';
				bigContent+=			'</div>';
				bigContent+=		'</div>';
				bigContent+=	'</div>';
				bigContent+='</div>';
			}
			$('#listProduct').html(bigContent);
		},
		error: function(response, message){
			alert('Có lỗi xảy ra. ' + message);
		}
	});
}

// Lấy tham số truyền lên trong url theo tên.
function getUrlParameter(sParam) {
	var sPageURL = decodeURIComponent(window.location.search.substring(1)),
	sURLVariables = sPageURL.split('&'),
	sParameterName,
	i;

	for (i = 0; i < sURLVariables.length; i++) {
		sParameterName = sURLVariables[i].split('=');

		if (sParameterName[0] === sParam) {
			return sParameterName[1] === undefined ? true : sParameterName[1];
		}
	}
};




function loadTrend(){
	$('.owl-carousel-trend').owlCarousel({
		loop: true,
		margin: 10,
		responsiveClass: true,
		responsive: {
			0: {
				items: 4,
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
				margin: 10,
			}
		}
	})
}

