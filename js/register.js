$(document).ready(function(){
	var isValidLastname=false;
	var isValidFirstname=false;
	var isValidEmail=false;
	var isValidPassword=false;
	var isValidRePassword=false;
	var isValidPhone=false;
	var isValidBirthday=false;
	var isVaLidCheckbox=false;

	function checkIsValidLastname(){
		if($("[name='lastname']").val().length < 7){		
			isValidLastname=false;
			$("[name='lastname']").next().addClass("text-danger");
			$("[name='lastname']").next().text("Tài khoản phải lớn hơn 7 kí tự");
		}else{
			// spanMsg.classList="success-msg";
			$("[name='lastname']").next().text("");
			isValidLastname=true;
		}
	}

	function checkIsValidFirstname(){
		if($("[name='firstname']").val().length < 7){		
			isValidFirstname=false;
			$("[name='firstname']").next().addClass("text-danger");
			$("[name='firstname']").next().text("Tài khoản phải lớn hơn 7 kí tự");
		}else{
			// spanMsg.classList="success-msg";
			$("[name='firstname']").next().text("");
			isValidFirstname=true;
		}
	}

	function checkIsValidEmail(){
		if($("[name='email']").val().length==0){		
			isValidEmail=false;
			$("#checkErrorRegister").html("Mục này bắt buộc phải nhập.");
			$("#checkErrorRegister").show();
		}else{
			$("[name='email']").next().text("");
			isValidEmail=true;
		}
	}

	function checkIsValidPassword(){
		if($("[name='password']").val().length < 7){		
			isValidPassword=false;
			$("#checkErrorRegister").html("Mục này bắt buộc phải nhập.");
			$("#checkErrorRegister").show();
		}else{
			$("[name='password']").text("");
			isValidPassword=true;
		}
	}

	function checkIsValidRePassword(){
		if($("[name='re-password']").val() != $("[name='password']").val() || $("[name='re-password']").val().length==0){		
			isValidRePassword=false;
			$("[name='re-password']").next().addClass("text-danger");
			$("[name='re-password']").next().text("Mật khẩu không trùng khớp");
		}else{
			$("[name='re-password']").next().text("");
			isValidRePassword=true;
		}
	}

	function checkIsPhoneNumber(){
		if($("[name='phone']").val().length==0){		
			isValidPhone=false;
			$("#checkErrorRegister").html("Mục này bắt buộc phải nhập.");
			$("#checkErrorRegister").show();
		}else{
			$("[name='phone']").next().text("");
			isValidPhone=true;
		}
	}

	$("[name='checkbox']").click(function(){
		if(!this.checked){
			isVaLidCheckbox=false;
		}
		else{
			isVaLidCheckbox=true;
		}
	});

	$("[name='lastname']").keydown(function(event){
		if(event.keyCode==9){
			checkIsValidLastname();
		}
	});

	$("[name='firstname']").keydown(function(event){
		if(event.keyCode==9){
			checkIsValidFirstname();
		}
	});

	$("[name='email']").keydown(function(event){
		if(event.keyCode==9){
			checkIsValidEmail();
		}
	});

	$("[name='password']").keydown(function(event){
		if(event.keyCode==9){
			checkIsValidPassword();
		}
	});

	$("[name='re-password']").keydown(function(event){
		if(event.keyCode==9){
			checkIsValidRePassword();
		}	
	});


	$("[name='phone']").keydown(function(event){
		if(event.keyCode==9){
			checkIsPhoneNumber();
		}
	});
	var AUTHENTICATION_URL="https://youtube-api-challenger.appspot.com/members";
	$("[name='create-video']").click(function(){
		register();
	});

	$("[name='reset-video']").click(function(){
		$("input").val("");
		$("span").text("");
	});
	//=======================Đăng kí tài khoản=======================//
	function register(){
		var x = new Date($("[name='birthday']").val());
		var miliseconBirthday = x.getTime();
		var data = {
			"data":{
				"type":"Member",
				"attributes":{
					"username":$("[name='username']").val(),
					"password": $("[name='password']").val(),
					"fullName":$("[name='fullname']").val(),
					"email":$("[name='email']").val(),
					"birthDay":miliseconBirthday,
					"gender":$("[name='select']").val()
				}
			}
		}
		if(isValidFullname && isValidEmail && isValidPassword && isValidRePassword && isValidUsername && isVaLidCheckbox){
			$.ajax({
				url:AUTHENTICATION_URL,
				type:"POST",
				data:JSON.stringify(data),
				success:function(response){
					localStorage.setItem("username", response.data.attributes.username);
					$("#checkErrorRegister").addClass("text-primary");
					$("#checkErrorRegister").text("Đăng kí tài khoản thành công");
				},
				error: function(response){
					$("#checkErrorRegister").addClass("text-danger");
					$("#checkErrorRegister").text("Lỗi"); 
				}
			});
		}
		else{
			checkIsValidUsername();
			checkIsValidPassword();
			checkIsValidRePassword();
			checkIsFullname();
			checkIsValidEmail();
		}
	}
});