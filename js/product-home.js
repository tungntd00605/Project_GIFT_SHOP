$(document).ready(function(){
	$('[name="btn-more"]').click(function(){
		moreProduct();
	})
})
$(document).ready(function() {
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

function moreProduct(){
	var content = '';
	content +='<div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">'
	content +=	'<div class="item prodItem">'
	content +=		'<div class="thumb"><a href="product-detail.html"><img src="img/hoa-hong-sap-11-bong-1.jpg"></a></div>'
	content += 		'<div class="badge">Yêu thích</div>'
	content +=		'<div class="info">'
	content +=			'<h2><a href="">Hoa Hồng Sáp</a></h2>'
	content +=			'<div class="price">'
	content +=				'<div class="pull-left">7</span> $</div>'
	content +=				'<div class="pull-right">'
	content +=					'<button type="button" class="btn btn-default " data-toggle="tooltip" data-placement="bottom" title="Thêm vào giỏ hàng"><span class="glyphicon glyphicon-shopping-cart"></span></button>'
	content +=				'</div>'
	content +=				'<div class="clearfix"></div>'
	content +=			'</div>'
	content +=			'<div class="prodItem-bt">'
	content +=				'<div class="pull-left"><span class="Msp-product">Msp.01083</span></div>'
	content +=				'<div class="pull-right">'
	content +=					'<a href="product-detail.html"><button type="button" class="btn btn-info">Chi Tiết</button></a>'
	content +=				'</div>'
	content +=				'<div class="clearfix"></div>'
	content +=			'</div>'
	content += 		'</div>'
	content +=	'</div>'
	content +='</div>'

	content +='<div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">'
	content +=	'<div class="item prodItem">'
	content +=		'<div class="thumb"><a href="product-detail.html"><img src="img/Moc khoa tho Cony.jpg"></a></div>'
	content += 		'<div class="badge">Yêu thích</div>'
	content +=		'<div class="info">'
	content +=			'<h2><a href="">Móc Khóa Thỏ Cony</a></h2>'
	content +=			'<div class="price">'
	content +=				'<div class="pull-left">4</span> $</div>'
	content +=				'<div class="pull-right">'
	content +=					'<button type="button" class="btn btn-default " data-toggle="tooltip" data-placement="bottom" title="Thêm vào giỏ hàng"><span class="glyphicon glyphicon-shopping-cart"></span></button>'
	content +=				'</div>'
	content +=				'<div class="clearfix"></div>'
	content +=			'</div>'
	content +=			'<div class="prodItem-bt">'
	content +=				'<div class="pull-left"><span class="Msp-product">Msp.01427</span></div>'
	content +=				'<div class="pull-right">'
	content +=					'<a href="product-detail.html"><button type="button" class="btn btn-info">Chi Tiết</button></a>'
	content +=				'</div>'
	content +=				'<div class="clearfix"></div>'
	content +=			'</div>'
	content += 		'</div>'
	content +=	'</div>'
	content +='</div>'

	content +='<div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">'
	content +=	'<div class="item prodItem">'
	content +=		'<div class="thumb"><a href="product-detail.html"><img src="img/mo hinh thap eiffel .jpg"></a></div>'
	content += 		'<div class="badge">Yêu thích</div>'
	content +=		'<div class="info">'
	content +=			'<h2><a href="">Mô Hình Tháp Eiffel</a></h2>'
	content +=			'<div class="price">'
	content +=				'<div class="pull-left">12</span> $</div>'
	content +=				'<div class="pull-right">'
	content +=					'<button type="button" class="btn btn-default " data-toggle="tooltip" data-placement="bottom" title="Thêm vào giỏ hàng"><span class="glyphicon glyphicon-shopping-cart"></span></button>'
	content +=				'</div>'
	content +=				'<div class="clearfix"></div>'
	content +=			'</div>'
	content +=			'<div class="prodItem-bt">'
	content +=				'<div class="pull-left"><span class="Msp-product">Msp.0273</span></div>'
	content +=				'<div class="pull-right">'
	content +=					'<a href="product-detail.html"><button type="button" class="btn btn-info">Chi Tiết</button></a>'
	content +=				'</div>'
	content +=				'<div class="clearfix"></div>'
	content +=			'</div>'
	content += 		'</div>'
	content +=	'</div>'
	content +='</div>'

	content +='<div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">'
	content +=	'<div class="item prodItem">'
	content +=		'<div class="thumb"><a href="product-detail.html"><img src="img/Den-nam-avatar.jpg"></a></div>'
	content += 		'<div class="badge">Yêu thích</div>'
	content +=		'<div class="info">'
	content +=			'<h2><a href="">Đèn Nấm</a></h2>'
	content +=			'<div class="price">'
	content +=				'<div class="pull-left">8</span> $</div>'
	content +=				'<div class="pull-right">'
	content +=					'<button type="button" class="btn btn-default " data-toggle="tooltip" data-placement="bottom" title="Thêm vào giỏ hàng"><span class="glyphicon glyphicon-shopping-cart"></span></button>'
	content +=				'</div>'
	content +=				'<div class="clearfix"></div>'
	content +=			'</div>'
	content +=			'<div class="prodItem-bt">'
	content +=				'<div class="pull-left"><span class="Msp-product">Msp.0683</span></div>'
	content +=				'<div class="pull-right">'
	content +=					'<a href="product-detail.html"><button type="button" class="btn btn-info">Chi Tiết</button></a>'
	content +=				'</div>'
	content +=				'<div class="clearfix"></div>'
	content +=			'</div>'
	content += 		'</div>'
	content +=	'</div>'
	content +='</div>'
	$('#more').append(content);
}