$(document).ready(function (){
	// init check discount function
	$('#discount-detail').hide();
	$('#discount-code').change(function(){
		calculateTotal();
	});
	// init calculate and printInvoice function
	calculateTotal();
	printToInvoice();

	$('.row-product').each(function (){
		var $this = $(this);
		var count_price = $('.price-pay').length;
		// Decrement function
		$this.on('click', '.minus-product', function (){
			if($this.find('.quantity-product').val() > 1){
				var oldQuantity = $this.find('.quantity-product').val();
				var newQuantity = parseFloat(oldQuantity) - 1;
				var unitPrice = parseFloat($this.find('.item-unit-price').html());
				$this.find('.quantity-product').val(newQuantity);
				$this.find('.item-total-price').html(newQuantity * unitPrice);
				calculateTotal();
				printToInvoice();
			}
		});
		// Increment function
		$this.on('click', '.plus-product', function (){
			var oldQuantity = $this.find('.quantity-product').val();
			var newQuantity = parseFloat(oldQuantity) + 1;
			var unitPrice = parseFloat($this.find('.item-unit-price').html());
			$this.find('.quantity-product').val(newQuantity);
			$this.find('.item-total-price').html(newQuantity * unitPrice);
			calculateTotal();
			printToInvoice();
		});
	});
})

function calculateTotal(){
	var total = 0;
	var tempTotal = 0;
	var discount = 0;
	// calculate tempTotal
	$('.item-total-price').each(function (){
		tempTotal += parseFloat($(this).html());
	});
	$('#order-temp-price').html(tempTotal);

	// calculate discount
	calculateDiscount(discount, tempTotal);
	discount = parseFloat($('.discount-price').html());
	// calculate total price customer has to pay
	total = tempTotal - discount;
	$('#order-total-price').html(total);
	$('#all-price-pay').html(total);
}

function printToInvoice(){
	var content = '';
	$('.row-product').each(function (){
		content +=	'<div class="content-pay">'
		content +=		'<span class="quantity-pay">' + $(this).find('.quantity-product').val() + '</span> x <span class="name-pay">' + $(this).find('.name-product').html() + '</span>'
		content +=		'<span class="currency pull-right">$</span>'
		content +=		'<span class="price-pay pull-right">' + $(this).find('.item-total-price').html() + '</span>'
		content +=	'</div>'	
	});
	$('#pay-detail').html(content);
}

function calculateDiscount(discount, tempTotal){
	if($('#discount-code').val() != ''){
		if($('#discount-code').val() == "T1708E"){
			if($('#discount-detail').is(':hidden')){
				alert('Chúc mừng bạn đã sử dụng mã giảm giá thành công :D')
			}
			discount = parseFloat(tempTotal/10);
			$('.discount-price').html(discount);
			$('#discount-detail').show();
			$('#discount-code').addClass('alert alert-success');
			$('#discount-code').removeClass('alert alert-danger');
		}
		else{
			alert('Bạn đã nhập sai mã :( Vui lòng kiểm tra lại');
			$('.discount-price').html(0);
			$('#discount-code').val('');
			$('#discount-detail').hide();
			$('#discount-code').addClass('alert alert-danger');
			$('#discount-code').removeClass('alert alert-success');
		}
	}
}

