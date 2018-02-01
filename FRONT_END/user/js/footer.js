function initMap() {
	var GIFT_SHOP = {lat: 21.028505, lng: 105.783287};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 14,
		center: GIFT_SHOP
	});

	var contentString = '<div id="content" style="padding:5px;">'+
	'<div id="siteNotice">'+
	'</div>'+
	'<h1 id="firstHeading" class="firstHeading" style="color:red;">GIFT SHOP</h1>'+
	'<div id="bodyContent">'+
	'<p><b>GIFT SHOP</b>,</p> <br> <img src="https://terrapinbeer.com/wp-content/uploads/2011/02/Gift-Shop_Header-with-Text-1500x425.png" height="100px;">' +
	'<br> Shop bán đồ lưu niệm lớn nhất Việt Nam <br> 08 Tôn Thất Thuyết, Mỹ Đình, Hà Nội - 01649555602, 0962127341'+
	'</div>'+
	'</div>';

	var infowindow = new google.maps.InfoWindow({
		content: contentString
	});

	var marker = new google.maps.Marker({
		position: GIFT_SHOP,
		map: map,
		title: 'Gift Shop'
	});
	marker.addListener('click', function() {
		infowindow.open(map, marker);
	});
}

initMap();