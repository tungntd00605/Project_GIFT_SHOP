GIFT_SHOP_API_URL = "http://localhost:3000/giftshop_api/v1/products";

$(document).ready(function(){	
	var page = Number(getUrlParameter('page'));
	var limit = Number(getUrlParameter('limit'));
	load();
	// $('body').on('click', '.delete-link', function(event){
	// 		alert(JSON.stringify(event.target));
	// 		return false;
	// });
});


function load(){
	$.ajax({
		url: GIFT_SHOP_API_URL,
		type: 'GET',
		success: function(response){
			// var totalPage = response.totalPage;			
			var listProduct = response.list;
			var content = '';
			for (var i = 0; i < listProduct.length; i++) {
				var id = listProduct[i]._id;
				var content= '';
				content += '<div class="item">';
				content +=		'<a href="">';
				content +=			'<img src="'+ listProduct[i].imagesUrl +'">';
				content +=			'<span>' + listProduct[i].name +'</span>';
				content +=		'</a>';
				content +=	'</div>';
			}
			$('#test').html(content);
			loadTrend();
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