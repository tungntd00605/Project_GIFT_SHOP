$(document).ready(function(){
	categoryFilter();
	brandFilter();
	selectFilter();
	$('#filter-select-box').change(function(){
		selectFilter();
	});
	$('#clear-filter-btn').on('click', function(){
		clearFilter()
	});
})

function categoryFilter(){
	$("#cat-filter-list :checkbox").change(function() {
		if(categoryCheckboxStatus()){
			$(".product-item").hide();
			$("#cat-filter-list :checkbox:checked").each(function() {
				$("." + $(this).val()).show();
			});
		}
	});	
}

function brandFilter(){
	$("#brand-filter-list :checkbox").change(function() {
		if(brandCheckboxStatus()){
			$(".product-item").hide();
			$("#brand-filter-list :checkbox:checked").each(function() {
				$("." + $(this).val()).show();
			});
		}
	});	
}

function categoryCheckboxStatus(){
	if(!$('.category-filter:checkbox:checked').length > 0){
		$(".product-item").show();
		return false;
	}
	else{
		return true;
	}
}

function brandCheckboxStatus(){
	if(!$('.brand-filter:checkbox:checked').length > 0){
		$(".product-item").show();
		return false;
	}
	else{
		return true;
	}
}

function selectFilter(){
	if($('[value="category-filter"]').is(':selected')){
		$('.filter-list').hide();
		$('#category-filter-box').show();
	}
	if($('[value="brand-filter"]').is(':selected')){
		$('.filter-list').hide();
		$('#brand-filter-box').show();
	}
}

function clearFilter() {
	$(".filter-list :checkbox:visible").each(function(){
		$(this).prop( "checked", false );
	});
	$(".product-item").show();
}
