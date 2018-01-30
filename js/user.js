var LOGIN_API = "https://youtube-api-challenger.appspot.com/authentication";
var MEMBER_API = "https://youtube-api-challenger.appspot.com/members";
// var email = document.forms["login-form"]["email"];
// var password = document.forms["login-form"]["password"];
var btnSubmit = document.getElementById("btnSubmit");
var registerBtn = document.getElementById("registerBtn");
var isValid = true;
// Gán sự kiện cho nút đăng nhập.
// if(btnSubmit != null){
// 	btnSubmit.onclick = function(){
// 		ValidateForm();
// 		if(isValid){
// 			loginHandle();	
// 		}
// 	}
// };

//=============================Bắt đầu xử lý validate login==================================//
$(document).ready(function(){
	//Xử lý nút đăng nhập.
	$("#loginSubmit").click(function(){
		if(Validate()){
			loginHandle();
		}
	});
	//Check thông tin đăng nhâp trước khi gửi lên server.
	

	function Validate(){
		if($("[name='email-address']").val() == null || $("[name='email-address']").val().length < 8) {
			$("#checkEmailLogin").html("Tài khoản phải lớn hơn 8 kí tự và không được để trống.");
			$("#checkEmailLogin").show();
			$("#loginForm #checkErrorLogin").addClass("has-error");
			$("#loginForm div span").addClass("form-control-feedback");
			// isValid = false;
		} else {
			$("#loginForm #checkErrorLogin").addClass("has-success has-feedback");
			$("#loginForm div span").addClass("form-control-feedback");
			// isValid = true;
		}
		if($("[name='password']").val() == null || $("[name='password']").val().length < 8){
			$("#checkPwdLogin").html("Mật khẩu phải lớn hơn 8 kí tự và không được để trống.");
			$("#checkPwdLogin").show();
			$("#loginForm div").addClass("has-error");
			$("#loginForm div span").addClass("form-control-feedback"); 
			// isValid = fals3;
		} else {
			$("#loginForm div").addClass("has-success");
			$("#loginForm div span").addClass("form-control-feedback");
			// isValid = true;
		};
	}
	// ============Kết thúc xử lý validate login===================




	// ==============Bắt đầu xử lý nút 'Làm Lại'===================//
	$("#resetLogin").click(function(){
		resetLogin();
	});

	function resetLogin(){
		$("#checkEmailLogin").html("");
		$("#checkPwdLogin").html("");
		$("#loginForm div").removeClass("has-success has-error form-control-feedback");
		$("#loginForm div span").removeClass("has-success has-error form-control-feedback");

		$("[name='email-address']").html("");
		$("[name='password']").html("");
		$("#loginForm div").removeClass("has-success has-error form-control-feedback");
		$("#loginForm div span").removeClass("has-success has-error form-control-feedback");	
	}
	// ==============Kết thúc xử lý nút 'Làm Lại'===================//
});

//=============================Kết thúc xử lý validate login==================================//


// //==================================Bắt đầu xử lý validate register=============================//
$(document).ready(function(){
	var isValidLastname=false;
	var isValidFirstname=false;
	var isValidEmail=false;
	var isValidPassword=false;
	var isValidRePassword=false;
	var isValidPhone=false;
	var isValidBirthday=false;
	var isVaLidCheckbox=false;

	$("#registerBtn").click(function(){
		if(checkIsValidLastname(),
			checkIsValidFirstname(),
			checkIsValidEmail(),
			checkIsValidPassword(),
			checkIsValidRePassword(),
			checkIsPhone()){
			loginHandle();
		}
	});

	function checkIsValidLastname(){
		if($("[name='lastname']").val() < 8){		
			isValidLastname=false;
			$("#checkLastNameRegister").html("Vui lòng nhập vào mục này.");
			$("#checkLastNameRegister").show();
			$("#registerForm #checkErrorRegister").addClass("has-error");
			$("#registerForm div span").addClass("form-control-feedback"); 
		}else{
			// spanMsg.classList="success-msg";
			$("#registerForm #checkErrorRegister").addClass("has-success has-feedback");
			$("#registerForm div span").addClass("form-control-feedback");
			isValidLastname=true;
		}
	}

	function checkIsValidFirstname(){
		if($("[name='firstname']").val() < 8){		
			isValidFirstname=false;
			$("#checkFirstNameRegister").html("Mật khẩu phải lớn hơn 8 kí tự và không được để trống.");
			$("#checkFirstNameRegister").show();
			$("#registerForm #checkErrorRegister").addClass("has-error");
			$("#registerForm div span").addClass("form-control-feedback"); 
		}else{
			// spanMsg.classList="success-msg";
			$("#registerForm #checkErrorRegister").addClass("has-success has-feedback");
			$("#registerForm div span").addClass("form-control-feedback");
			isValidFirstname=true;
		}
	}

	function checkIsValidEmail(){
		if($("[name='email']").val()==0){		
			isValidEmail=false;
			$("#checkEmailRegister").html("Mật khẩu phải lớn hơn 8 kí tự và không được để trống.");
			$("#checkEmailRegister").show();
			$("#registerForm #checkErrorRegister").addClass("has-error");
			$("#registerForm div span").addClass("form-control-feedback"); 
		}else{
			$("#registerForm #checkErrorRegister").addClass("has-success has-feedback");
			$("#registerForm div span").addClass("form-control-feedback");
			isValidEmail=true;
		}
	}

	function checkIsValidPassword(){
		if($("[name='password']").val() < 8){		
			isValidPassword=false;
			$("#checkPassRegister").html("Mật khẩu phải lớn hơn 8 kí tự và không được để trống.");
			$("#checkPassRegister").show();
			$("#registerForm #checkErrorRegister").addClass("has-error");
			$("#registerForm div span").addClass("form-control-feedback"); 
		}else{
			$("#registerForm #checkErrorRegister").addClass("has-success has-feedback");
			$("#registerForm div span").addClass("form-control-feedback");
			isValidPassword=true;
		}
	}

	function checkIsValidRePassword(){
		if($("[name='re-password']").val() != $("[name='password']").val() || $("[name='re-password']").val().length==0){		
			isValidRePassword=false;
			$("#checkRe-PassRegister").html("Mật khẩu phải lớn hơn 8 kí tự và không được để trống.");
			$("#checkRe-PassRegister").show();
			$("#registerForm #checkErrorRegister").addClass("has-error");
			$("#registerForm div span").addClass("form-control-feedback"); 
		}else{
			$("#registerForm #checkErrorRegister").addClass("has-success has-feedback");
			$("#registerForm div span").addClass("form-control-feedback");
			isValidRePassword=true;
		}
	}

	function checkIsPhone(){
		if($("[name='phone']").val()==0){		
			isValidPhone=false;
			$("#checkPhoneRegister").html("Mật khẩu phải lớn hơn 8 kí tự và không được để trống.");
			$("#checkPhoneRegister").show();
			$("#registerForm #checkErrorRegister").addClass("has-error");
			$("#registerForm div span").addClass("form-control-feedback"); 
		}else{
			$("#registerForm #checkErrorRegister").addClass("has-success has-feedback");
			$("#registerForm div span").addClass("form-control-feedback");
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

	$("[name='fullname']").keydown(function(event){
		if(event.keyCode==9){
			checkIsPhone();
		}
	});
	// var AUTHENTICATION_URL="https://youtube-api-challenger.appspot.com/members";
	// $("[name='create-video']").click(function(){
	// 	register();
	// });

	// $("[name='reset-video']").click(function(){
	// 	$("input").val("");
	// 	$("span").text("");
	// });
	//=======================Đăng kí tài khoản=======================//
	function register(){
		var x = new Date($("[name='birthday']").val());
		var miliseconBirthday = x.getTime();
		var data = {
			"data":{
				"type":"Member",
				"attributes":{
					"lastname":$("[name='lastname']").val(),
					"firstname":$("[name='firstname']").val(),
					"email":$("[name='email']").val(),
					"password": $("[name='password']").val(),
					"phone":$("[name='phone']").val(),
					"birthDay":miliseconBirthday,
					"gender":$("[name='select']").val()
				}
			}
		}
		if(isValidLastname && isValidFirstname && isValidEmail && isValidPassword && isValidRePassword && isValidPhone && isVaLidCheckbox){
			$.ajax({
				url:AUTHENTICATION_URL,
				type:"POST",
				data:JSON.stringify(data),
				success:function(response){
					localStorage.setItem("lastname" + "firstname", response.data.attributes.fullName);
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

	// ==============Bắt đầu xử lý nút 'Làm Lại'===================//
	$("#resetRegister").click(function(){
		resetRegister();
	});

	function resetRegister(){
		$("#registerForm div span").html("");
		$("#registerForm #checkErrorRegister").removeClass("has-success has-error form-control-feedback");
		$(".modal-body div span").removeClass("has-success has-error form-control-feedback");
	}

	// ==============Kết thúc xử lý nút 'Làm Lại'===================//
});

// 	// ============Kết thúc xử lý validate register===================//


// ==============Bắt đầuử lý  xđóng form đăng nhập==============//
// ý tưởng sau khi đóng form đăng nhập thì tất cả dữ liệu và thông báo lỗi,
// bên trong form sẽ mất. chưa thực hiện.
// ==============Kết thúc xử lý đóng form đăng nhập==============//




//=================================Bắt đầu form đăng nhập.============================================
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
// 				"email": email.value,
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
//==============================Kết thúc form đăng nhập.======================================//


