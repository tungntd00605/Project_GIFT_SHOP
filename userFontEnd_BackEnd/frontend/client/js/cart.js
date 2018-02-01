
function addToCart(productId, productCode, productName, productPrice, quantity){
	var cart = localStorage.getItem('cart');	
	if (cart == null){
		// Nếu chưa thì tạo mới giỏ hàng với products là danh sách các sản phẩm
		// kèm số lượng.
		if(quantity > 0){
			cart = {
				'products': [
					{
						'id': productId,
						'code': productCode,
						'name': productName,
						'price': productPrice,
						'quantity': quantity
					}
				]
			}	
		}						
	} else{
		// Nếu đã tồn tại sản phẩm.
		// Parse thông tin giỏ hàng về json object.
		cart = JSON.parse(cart);
		// Kiểm tra sự tồn tại của trường products trong giỏ hàng.
		if(cart.products != undefined && cart.products != null){
			// Kiểm tra sự tồn tại của sản phầm trong giỏ hàng.
			var existsItem = false;
			for (var i = 0; i < cart.products.length; i++) {
				// Nếu tồn tại sản phẩm.
				if(cart.products[i].id == productId){
					existsItem = true;
					// tăng số lượng sản phẩm trong giỏ hàng lên 1.
					cart.products[i].quantity += quantity;
					quantity = cart.products[i].quantity;
					if(quantity <= 0){
						// Xoá bỏ sản phẩm khỏi giỏ hàng trong trường hợp số lượng nhỏ hơn 0.
						cart.products.splice(i, 1);
					}
					break;
				}
			}
			// Nếu không tồn tại sản phẩm trong giỏ hàng.
			if(!existsItem){
				// Thêm mới sản phẩm với quantity default là 1.
				cart.products.push({
					'id': productId,
					'quantity': quantity,
					'code': productCode,
					'name': productName,
					'price': productPrice
				});
			}					
		}								
	}
	alert('Thêm sản phẩm ' + productName + ' vào giỏ hàng thành công. Số lượng ' + quantity);
	// Lưu lại thông tin giỏ hàng vào localStorage.
	localStorage.setItem('cart', JSON.stringify(cart));
}


function loadCart(){
	var cart = localStorage.getItem('cart');
	// Kiểm tra sự tồn tại của giỏ hàng.			
	if (cart == null){
		alert('Hiện tại chưa có sản phẩm trong giỏ hàng.');
		return;
	}
	// Parse thông tin giỏ hàng.
	cart = JSON.parse(cart);
	// Kiểm tra thông tin sản phẩm trong giỏ hàng.
	if(cart.products == undefined || cart.products == null){
		alert('Hiện tại chưa có sản phẩm trong giỏ hàng.');
		return;
	}

	var cartContent = '';
	var totalPrice = 0;
	// Đến đây, đảm bảo giỏ hàng tồn tại và có sản phẩm.
	for (var i = 0; i < cart.products.length; i++) {
		cartContent += '<div>';
		cartContent += '<span class="product-id" style="display:none">' + cart.products[i].id + '</span> ';
		cartContent += '<span class="product-name">' + cart.products[i].name + '</span> ';
		cartContent += '<span class="product-code">' + cart.products[i].code + '</span> ';
		cartContent += '<span class="product-price">' + cart.products[i].price + '</span> ';
		cartContent += '<span class="product-quantity">' + cart.products[i].quantity + '</span> ';
		cartContent += '<span class="add-to-card plus"><button>+</button></span> ';
		cartContent += '<span class="add-to-card minus"><button>-</button></span> ';
		var totalItemPrice = cart.products[i].quantity * cart.products[i].price;
		cartContent += '<span>' + totalItemPrice + '</span> ';
		
		cartContent += '</div>';
		totalPrice += totalItemPrice;
	}
	cartContent += '<hr>';
	cartContent += '<div> Total price: ' + totalPrice + '</div>';
	$('#cart').html(cartContent);
}

function submitCart(){
	var cart = localStorage.getItem('cart');
	cart = JSON.parse(cart);
	
	var arrayProducts = [];
	for (var i = 0; i < cart.products.length; i++) {
		var product = {
			'id': cart.products[i].id,
			'quantity':	cart.products[i].quantity					
		};
		arrayProducts.push(product);
	}
	var data = {
		'products': JSON.stringify(arrayProducts)
	}	
	var api_url = "http://localhost:3000/_api/v1/shopping-cart";
	var method = 'POST';

	$.ajax({
		url: api_url,
		type: method,
		data: data,
		success: function(response){										
			alert("Success");
			// localStorage.removeItem('cart');
		},
		error: function(response, message){
			alert('Có lỗi xảy ra. ' + message);
		}
	});		
}
