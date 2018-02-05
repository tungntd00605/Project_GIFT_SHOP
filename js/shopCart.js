$(document).ready(function (){
	$('.row-product').each(function (){
		var $this = $(this);
		var count_price = $('.price-pay').length;
		// Decrement function
		$this.on('click', '.minus-product', function (){
			if($this.find('.quantity-product').val() > 1){
				$this.find('.quantity-product').val(parseInt($this.find('.quantity-product').val())-1);
				$this.find('.item-total-price').html($this.find('.quantity-product').val() * $this.find('.item-unit-price').html());
				$('.quantity-pay').html($this.find('.quantity-product').val());
				$('.content-pay').find('.all-price-pay').html(count_price);
			}
		});
		// Increment function
		$this.on('click', '.plus-product', function (){
			$this.find('.quantity-product').val(parseInt($this.find('.quantity-product').val())+1);
			$('.quantity-pay').html($this.find('.quantity-product').val());
			$this.find('.item-total-price').html($this.find('.quantity-product').val() * $this.find('.item-unit-price').html());
			$('.content-pay').find('.all-price-pay').html(count_price);
		});
	});
	$('.content-pay').each(function(){
		var $this = $(this);
		$('.row-product').on('click', '.minus-product', function (){
			$this.find('.price-pay').html($('.row-product').find('.quantity-product').val() * $('.row-product').find('.item-unit-price').html());
			
		});
		$('.row-product').on('click', '.plus-product', function (){
			$this.find('.price-pay').html($('.row-product').find('.quantity-product').val() * $('.row-product').find('.item-unit-price').html());
		});
	})
})