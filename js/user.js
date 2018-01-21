var LOGIN_API = "https://youtube-api-challenger.appspot.com/authentication";
var MEMBER_API = "https://youtube-api-challenger.appspot.com/members";
var email = document.forms["login-form"]["email"];
var password = document.forms["login-form"]["password"];
var btnSubmit = document.getElementById("btnSubmit");
var isValid = true;
if(btnSubmit != null){
	btnSubmit.onclick = function(){
		ValidateForm();
		if(isValid){
			loginHandle();	
		}
	}
}

// ============================Bắt đầu validate form đăng nhập.=======================================
// function ValidateForm(){
// 	if(email.value.length == 0){
// 		isValid = false;
// 		email.nextElementSibling.classList = "error-msg";
// 		email.nextElementSibling.innerHTML = "Không được để trống mục này.";
// 	}
// 	if (email.value.length < 8){
// 		isValid = false;
// 		email.nextElementSibling.classList = "error-msg";
// 		email.nextElementSibling.innerHTML = "Email đăng nhập phải lớn hơn 8 ký tự.";
// 	} 
// 	if(password.value.length == 0){
// 		isValid = false;
// 		password.nextElementSibling.classList = "error-msg";
// 		password.nextElementSibling.innerHTML = "Không được để trống mục này.";
// 	}
// 	if(password.value.length < 8){
// 		isValid = false;
// 		password.nextElementSibling.classList = "error-msg";
// 		password.nextElementSibling.innerHTML = "Mật khẩu phải lớn hơn 8 ký tự.";
// 	}
// }
// ============================Kết thúc validate form đăng nhập.=======================================


//==================================Bắt đầu xử lý validate login==============================================//
$(document).ready(function(){
//Nút đăng nhập.
$("#loginSubmit").click(function(){
	if(isValidForm()){
		Login();
	}
});
//Check thông tin đăng nhâp trước khi gửi lên server.
function isValidForm(){
	if($("[name='email-address']").val() == null
		||$("[name='email-address']") == null
		||$("[name='email-address']").val().length < 8
		||$("[name='password']").val().length < 8){
		$("#checkEmailLogin").html("Tài khoản phải lớn hơn 8 kí tự và không được để trống");
	$("#checkEmailLogin").show();
	$("#checkPwdLogin").html("Mật khẩu phải lớn hơn 8 kí tự và không được để trống");
	$("#checkPwdLogin").show();
	// return false;
}
};
// ============Kết thúc xử lý validate login===================

// ==============Bắt đầu xử lý nút 'Làm Lại'===================
$("#resetBtn").click(function(){
	resetBtn();
});

function resetBtn(){
	$("#checkEmailLogin").text("");
	$("#checkPwdLogin").text("");
	$(".modal-body div span").removeClass("error-msg");

	$("[name='email-address']").html("");
	$("[name='password']").html("");	
}
// ==============Kết thúc xử lý nút 'Làm Lại'===================








// =================================Bắt đầu form đăng nhập.============================================
// function logoutHandle(){	
// 	if(confirm("Bạn có chắc muốn đăng xuất không?")){
// 		localStorage.removeItem("secretToken");
// 		localStorage.removeItem("userId");
// 		alert("Logged out!");
// 		window.location.reload();
// 	}	
// }

// function loginHandle(){	
// 	var loginData = {
// 		"data": {
// 			"type": "MemberLogin",
// 			"attributes": {
// 				"username": username.value,
// 				"password": password.value
// 			}
// 		}
// 	}

// 	var xhr = new XMLHttpRequest();
// 	xhr.open("POST", LOGIN_API, true);		
// 	xhr.onreadystatechange = function() {		
// 		if(this.readyState === XMLHttpRequest.DONE) {
// 			var responseObject = JSON.parse(this.responseText);
// 			if(this.status === 200){
// 				// Xử lý thành công.
// 				localStorage.setItem("secretToken", responseObject.data.attributes.secretToken);
// 				localStorage.setItem("userId", responseObject.data.attributes.userId);
// 				alert("Đăng nhập thành công!");
// 				window.location.href = "index1.html";
// 			}else {
// 				// Xử lý lỗi.				
// 				document.getElementById("total-msg").classList = "error-msg";
// 				document.getElementById("total-msg").innerHTML = responseObject.errors[0].title + " " + responseObject.errors[0].detail;
// 			}									
// 		} 	  
// 	};
// 	xhr.send(JSON.stringify(loginData));
// }
// =================================Kết thúc form đăng nhập.============================================


// Mục validate form đăng ký chưa thực hiện xong. tạm thời comment
// ============================Bắt đầu validate form đăng ký.=======================================
// $(document).ready(function(){
	var checkIsValidLastname=false;
	var checkIsValidFisrtname=false;
	var isValidEmail=false;
	var isValidPassword=false;
	var isValidRePassword=false;
	var checkIsPhoneNumber=false;
	var isValidBirthday=false;
	var isVaLidCheckbox=false;

	function checkIsValidLastname(){
		if($("[name='lastName']").val().length < null){		
			isValidUsername=false;
			$("[name='lastName']").next().addClass("text-danger");
			$("[name='lastName']").next().text("Vui lòng nhập họ của bạn.");
		}else{
			// spanMsg.classList="success-msg";
			$("[name='lastName']").next().text("");
			isValidUsername=true;
		}
	}

	function checkIsValidFisrtname(){
		if($("[name='lastName']").val().length < null){		
			isValidUsername=false;
			$("[name='firstName']").next().addClass("text-danger");
			$("[name='firstName']").next().text("Vui lòng nhập tên của bạn.");
		}else{
			// spanMsg.classList="success-msg";
			$("[name='firstName']").next().text("");
			isValidUsername=true;
		}
	}

	function checkIsValidEmail(){
		if($("[name='email']").val().length==0){		
			isValidEmail=false;
			$("[name='email']").next().addClass("text-danger");
			$("[name='email']").next().text("Vui lòng nhập địa chỉ Email.");
		}else{
			$("[name='email']").next().text("");
			isValidEmail=true;
		}
	}

	function checkIsValidPassword(){
		if($("[name='password']").val().length < 8){		
			isValidPassword=false;
			$("[name='password']").next().addClass("text-danger")
			$("[name='password']").next().text("Mật khẩu phải lớn hơn 8 kí tự.");
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
		if($("[name='phoneNumber']").val().length==0){		
			isValidFullname=false;
			$("[name='phoneNumber']").next().addClass("text-danger");
			$("[name='phoneNumber']").next().text("Vui lòng nhập số điện thoại của bạn.");
		}else{
			$("[name='phoneNumber']").next().text("");
			isValidFullname=true;
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

	$("[name='lastName']").keydown(function(event){
		if(event.keyCode==9){
			checkIsValidLastname();
		}
	});

	$("[name='firstName']").keydown(function(event){
		if(event.keyCode==9){
			checkIsValidFisrtname();
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


	$("[name='phoneNumber']").keydown(function(event){
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
					"lastName":$("[name='lastName']").val(),
					"firstName":$("[name='firstName']").val(),
					"email":$("[name='email']").val(),
					"password": $("[name='password']").val(),
					"phoneNumber":$("[name='phoneNumber']").val(),
					"birthDay":miliseconBirthday,
					"gender":$("[name='select']").val()
				}
			}
		}
		if(checkIsValidLastname && checkIsValidFisrtname && isValidEmail && isValidPassword && isValidRePassword && checkIsPhoneNumber && isVaLidCheckbox){
			$.ajax({
				url:AUTHENTICATION_URL,
				type:"POST",
				data:JSON.stringify(data),
				success:function(response){
					localStorage.setItem("email", response.data.attributes.email);
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

// ============================Kết thúc validate form đăng ký.=======================================