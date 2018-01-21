var LOGIN_API = "https://youtube-api-challenger.appspot.com/authentication";
var MEMBER_API = "https://youtube-api-challenger.appspot.com/members";
// var email = document.forms["login-form"]["email"];
// var password = document.forms["login-form"]["password"];
var btnSubmit = document.getElementById("btnSubmit");
var registerBtn = document.getElementById("registerBtn");
var isValid = true;
// Gán sự kiện cho nút đăng nhập.
if(btnSubmit != null){
	btnSubmit.onclick = function(){
		ValidateForm();
		if(isValid){
			loginHandle();	
		}
	}
};

// Gán sự kiện cho nút đăng ký.
// if(registerBtn != null){
// 	registerBtn.onclick = function(){
// 		ValidateForm();
// 		if(){

// 		};
// 	}
// };


//=============================Bắt đầu xử lý validate login==================================//
$(document).ready(function(){
	//Xử lý nút đăng nhập.
	$("#loginSubmit").click(function(){
		if(isValidForm()){
			Login();
		}
	});
	//Check thông tin đăng nhâp trước khi gửi lên server.
	function isValidForm(){
		if($("[name='email-address']").val() == null
			||$("[name='email-address']") == null
			||$("[name='email-address']").val().length < 8){
			$("#checkEmailLogin").html("Tài khoản phải lớn hơn 8 kí tự và không được để trống.");
			$("#checkEmailLogin").show();
		// return false;
		}
		if($("[name='password']").val() == null
			||$("[name='password']") == null
			||$("[name='password']").val().length < 8){
			$("#checkPwdLogin").html("Mật khẩu phải lớn hơn 8 kí tự và không được để trống.");
			$("#checkPwdLogin").show();
		// return false;
		}
	};
	// ============Kết thúc xử lý validate login===================


	// ==============Bắt đầu xử lý nút 'Làm Lại'===================//
	$("#resetBtn").click(function(){
		resetBtn();
	});

	function resetBtn(){
		$("#checkEmailLogin").html("");
		$("#checkPwdLogin").html("");

		$("[name='email-address']").html("");
		$("[name='password']").html("");	
	}
	// ==============Kết thúc xử lý nút 'Làm Lại'===================//
});
//=============================Kết thúc xử lý validate login==================================//


// //==================================Bắt đầu xử lý validate register=============================//
// $(document).ready(function(){
// 	//Xử lý nút đăng nhập.
// 	$("#registerBtn").click(function(){
// 		if(isValidForm()){
// 			Register();
// 		}
// 	});
// 	//Check thông tin đăng nhâp trước khi gửi lên server.
// 	function isValidRegister(){
// 		if($("[name='lastname']").val() == null
// 			||$("[name='lastname']") == null){
// 			$("#checkErrorRegister").html("Mục này bắt buộc phải nhập.");
// 			$("#checkErrorRegister").show();
// 		// return false;
// 		}
// 		if($("[name='firstname']").val() == null
// 			||$("[name='firstname']") == null){
// 			$("#checkErrorRegister").html("Mục này bắt buộc phải nhập.");
// 			$("#checkErrorRegister").show();
// 		// return false;
// 		}

// 		if($("[name='email-address']").val() == null
// 			||$("[name='email-address']") == null
// 			||$("[name='email-address']").val().length < 8){
// 			$("#checkErrorRegister").html("Mục này bắt buộc nhập trên 8 ký tự.");
// 			$("#checkErrorRegister").show();
// 		// return false;
// 		}
// 		if($("[name='password']").val() == null
// 			||$("[name='password']") == null
// 			||$("[name='password']").val().length < 8){
// 			$("#checkErrorRegister").html("Mật khẩu phải lớn hơn 8 kí tự.");
// 			$("#checkErrorRegister").show();
// 		// return false;
// 		}

// 		if($("[name='re-password']").val() != $("[name='password']").val() || $("[name='re-password']").val().length==0){		
// 			isValidRePassword=false;
// 			$("[name='re-password']").next().addClass("text-danger");
// 			$("[name='re-password']").next().text("Mật khẩu không trùng khớp.");
// 		}


// 		if($("[name='phone']").val() == null
// 			||$("[name='phone']") == null){
// 			$("#checkErrorRegister").html("Mục này bắt buộc phải nhập.");
// 			$("#checkErrorRegister").show();
// 		// return false;
// 		}
// 	};
// 	// ============Kết thúc xử lý validate login===================


// 	// ==============Bắt đầu xử lý nút 'Làm Lại'===================//
// 	$("#resetBtn").click(function(){
// 		resetBtn();
// 	});

// 	function resetBtn(){
// 		$("#checkErrorRegister").html("");
// 		$("#checkErrorRegister").html("");

// 		$("[name='email-address']").html("");
// 		$("[name='password']").html("");	
// 	}
// 	// ==============Kết thúc xử lý nút 'Làm Lại'===================//
// });







// ==============Bắt đầu xử lý đóng form đăng nhập==============//
// ý tưởng sau khi đóng form đăng nhập thì tất cả dữ liệu và thông báo lỗi,
// bên trong form sẽ mất. chưa thực hiện.
// ==============Kết thúc xử lý đóng form đăng nhập==============//




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
// ==============================Kết thúc form đăng nhập.======================================//



