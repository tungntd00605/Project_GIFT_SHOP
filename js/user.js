var LOGIN_API = "https://youtube-api-challenger.appspot.com/authentication";
var MEMBER_API = "https://youtube-api-challenger.appspot.com/members";
var email = document.forms["modal-login-form"]["email"];
var password = document.forms["modal-login-form"]["password"];
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

function ValidateForm(){
	if(username.value.length == 0 || username.value.length < 6){
		isValid = false;
		email.nextElementSibling.classList = "error-msg";
		email.nextElementSibling.innerHTML = "Email đăng nhập phải lớn hơn 6 ký tự";
	} 
	if(password.value.length == 0 || password.value.length < 6){
		isValid = false;
		password.nextElementSibling.classList = "error-msg";
		password.nextElementSibling.innerHTML = "Mật khẩu phải lớn hơn 6 ký tự";
	}
}

function logoutHandle(){	
	if(confirm("Bạn có chắc muốn đăng xuất không?")){
		localStorage.removeItem("secretToken");
		localStorage.removeItem("userId");
		alert("Logged out!");
		window.location.reload();
	}	
}

function loginHandle(){	
	var loginData = {
		"data": {
			"type": "MemberLogin",
			"attributes": {
				"username": username.value,
				"password": password.value
			}
		}
	}

	var xhr = new XMLHttpRequest();
	xhr.open("POST", LOGIN_API, true);		
	xhr.onreadystatechange = function() {		
		if(this.readyState === XMLHttpRequest.DONE) {
			var responseObject = JSON.parse(this.responseText);
			if(this.status === 200){
				// Xử lý thành công.
				localStorage.setItem("secretToken", responseObject.data.attributes.secretToken);
				localStorage.setItem("userId", responseObject.data.attributes.userId);
				alert("Đăng nhập thành công!");
				window.location.href = "index1.html";
			}else {
				// Xử lý lỗi.				
				document.getElementById("total-msg").classList = "error-msg";
				document.getElementById("total-msg").innerHTML = responseObject.errors[0].title + " " + responseObject.errors[0].detail;
			}									
		} 	  
	};
	xhr.send(JSON.stringify(loginData));
}
