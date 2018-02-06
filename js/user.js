//==========================================BẮT ĐẦU VALIDATION KHUNG ĐĂNG NHẬP======================================
//==================================================================================================================
// Gán tất cả các đối tượng đầu vào.
var emailInput = document.forms['login-form']['emailInput'];
var passwordInput = document.forms['login-form']['passwordInput'];

// Gán tất cả các đối tượng hiển thị lỗi.
var email_error = document.getElementById('email_error');
var password_error = document.getElementById('password_error');


// Setup các sự kiện.
emailInput.addEventListener('blur', emailVerify, true);
passwordInput.addEventListener('blur', passwordVerify, true);


// Các biến Validation.
function loginValidation() {
	emailVerify();
	passwordVerify();

	if (emailVerify() == false      
		|| passwordVerify() == false) {
		return false;
}else {
	return true;
}
}

// Hàm xử lý trường Email.
function emailVerify() {
	var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (emailInput.value == "") {
		emailInput.style.border = "1px solid red";
		email_error.innerHTML = "Thông tin bắt buộc";
		return false;
	} else if (reg.test(emailInput.value) == false) {
		email_error.innerHTML = 'Địa chỉ email không hợp lệ';
		return false;
	} else {
		emailInput.style.border = '1px solid green';
		email_error.innerHTML = "";
		return true;
	}
}


// Hàm xử lý trường Mật khẩu.
function passwordVerify() {
	if (passwordInput.value == "") {
		passwordInput.style.border = "1px solid red";
		password_error.innerHTML = "Thông tin bắt buộc";
		return false;
	} else if (passwordInput.value.length < 8) {
		passwordInput.style.border = "1px solid red";
		password_error.innerHTML = "Mật khẩu phải lớn hơn 8 ký tự.";
	} else {
		passwordInput.style.border = '1px solid green';
		password_error.innerHTML = "";
		return true;
	}
}

// Hàm reset thông qua click nút Làm Lại.
function resetLogin() {
	email_error.innerHTML = "";
	emailInput.style.border = "";
	password_error.innerHTML = "";
	passwordInput.style.border = "";
	document.getElementById("login_Form").reset()
}

$('#Login').on('hidden.bs.modal', function (e) {
	resetLogin();
})

$('#login-reset-btn').on('click', function(){
	resetLogin();
})

$('#login-submit-btn').on('click', function(){
	loginValidation();
})

//==========================================KẾT THÚC VALIDATION KHUNG ĐĂNG NHẬP==============================================
//======================================================================================================================



//==========================================BẮT ĐẦU VALIDATION KHUNG ĐĂNG KÝ========================================
//==================================================================================================================
// Gán tất cả các đối tượng đầu vào.
var lastnameReInput = document.forms['register_Form']['lastnameReInput'];
var firstnameReInput = document.forms['register_Form']['firstnameReInput'];
var emailReInput = document.forms['register_Form']['emailReInput'];
var passwordReInput = document.forms['register_Form']['passwordReInput'];
var confirmpasswordReInput = document.forms['register_Form']['confirmpasswordReInput'];
var phoneReInput = document.forms['register_Form']['phoneReInput'];
var genderReInput = document.forms['register_Form']['genderReInput'];
var birthdayReInput = document.forms['register_Form']['birthdayReInput'];
var checkReInput = document.forms['register_Form']['checkReInput'];

// Gán tất cả các đối tượng hiển thị lỗi.
var lastnameRe_error = document.getElementById('lastnameRe_error');
var firstnameRe_error = document.getElementById('firstnameRe_error');
var emailRe_error = document.getElementById('emailRe_error');
var passwordRe_error = document.getElementById('passwordRe_error');
var confirmpasswordRe_error = document.getElementById('confirmpasswordRe_error');
var phoneRe_error = document.getElementById('phoneRe_error');
var checkRe_error = document.getElementById('checkRe_error');

// Setup các sự kiện.
lastnameReInput.addEventListener('blur', lastnameReVerify, true);
firstnameReInput.addEventListener('blur', firstnameReVerify, true);
emailReInput.addEventListener('blur', emailReVerify, true);
passwordReInput.addEventListener('blur', passwordReVerify, true);
confirmpasswordReInput.addEventListener('blur', confirmpasswordReVerify, true);
phoneReInput.addEventListener('blur', phoneReVerify, true);
birthdayReInput.addEventListener('blur', birthdayReVerify, true);
checkReInput.addEventListener('click', checkReVerify, true);


// Các biến Validation.
function registerValidation() {
	lastnameReVerify();
	firstnameReVerify();
	emailReVerify();
	passwordReVerify();
	confirmpasswordReVerify();
	phoneReVerify();
	birthdayReVerify();
	checkReVerify();

	if (lastnameReVerify() == false
		|| firstnameReVerify() == false      
		|| emailReVerify() == false      
		|| passwordReVerify() == false      
		|| confirmpasswordReVerify() == false      
		|| phoneReVerify() == false   
		|| birthdayReVerify() == false    
		|| checkReVerify() == false) {
		return false;
}else {
	return true;
}
}

// Hàm xử lý trường Họ.
function lastnameReVerify() {
	if (lastnameReInput.value == "") {
		lastnameReInput.style.border = "1px solid red";
		lastnameRe_error.innerHTML = "Thông tin bắt buộc";
		return false;
	} else if(lastnameReInput.value !== "") {
		lastnameReInput.style.border = '1px solid green';
		lastnameRe_error.innerHTML = '';
		return true;
	}
}

// Hàm xử lý trường Tên.
function firstnameReVerify() {
	if (firstnameReInput.value == "") {
		firstnameReInput.style.border = "1px solid red";
		firstnameRe_error.innerHTML = "Thông tin bắt buộc";
		return false;
	} else if(firstnameReInput.value !== "") {
		firstnameReInput.style.border = '1px solid green';
		firstnameRe_error.innerHTML = '';
		return true;
	}
}

// Hàm xử lý trường Email.
function emailReVerify() {
	var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (emailReInput.value == "") {
		emailReInput.style.border = "1px solid red";
		emailRe_error.innerHTML = "Thông tin bắt buộc";
		return false;
	} else if (reg.test(emailReInput.value) == false) {
		emailRe_error.innerHTML = 'Địa chỉ email không hợp lệ';
		return false;
	} else {
		emailReInput.style.border = '1px solid green';
		emailRe_error.innerHTML = "";
		return true;
	}
}


// Hàm xử lý trường Nội Dung lời nhắn.
function passwordReVerify() {
	if (passwordReInput.value == "") {
		passwordReInput.style.border = "1px solid red";
		passwordRe_error.innerHTML = "Thông tin bắt buộc";
		return false;
	} else if (passwordReInput.value.length < 8) {
		passwordReInput.style.border = "1px solid red";
		passwordRe_error.innerHTML = "Mật khẩu phải lớn hơn 8 ký tự.";
	} else {
		passwordReInput.style.border = '1px solid green';
		passwordRe_error.innerHTML = "";
		return true;
	}
}

// Hàm xử lý trường Nội Dung lời nhắn.
function confirmpasswordReVerify() {
	if (confirmpasswordReInput.value == "") {
		confirmpasswordReInput.style.border = "1px solid red";
		confirmpasswordRe_error.innerHTML = "Thông tin bắt buộc";
		return false;
	} else if (confirmpasswordReInput.value !== passwordReInput.value) {
		confirmpasswordReInput.style.border = "1px solid red";
		confirmpasswordRe_error.innerHTML = "Mật khẩu không khớp.";
	} else {
		confirmpasswordReInput.style.border = '1px solid green';
		confirmpasswordRe_error.innerHTML = "";
		return true;
	}
}

// Hàm xử lý trường Số Điện Thoại.
function phoneReVerify() {
	var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
	if (phoneReInput.value == "") {
		phoneReInput.style.border = "1px solid red";
		phoneRe_error.innerHTML = "Thông tin bắt buộc";
		return false;
	} else if(phoneReInput.value.match(phoneno)) {
		phoneReInput.style.border = '1px solid green';
		phoneRe_error.innerHTML = '';
		return true;
	} else {
		phoneRe_error.innerHTML = "Số điện thoại không hợp lệ";
		return false;
	}
}


// Hàm xử lý trường birthday.
function birthdayReVerify() {
	var birthday = new Date(birthdayReInput.value);
	var ageDifMs = Date.now() - birthday.getTime();
	var ageDate = new Date(ageDifMs);
	var validateYear = ageDate.getUTCFullYear() - 1970;

	if (birthdayReInput.value == "") {
		birthdayReInput.style.border = "1px solid red";
		birthdayRe_error.innerHTML = "Thông tin bắt buộc";
		return false;
	} else if(validateYear > 16) {
		birthdayReInput.style.border = "1px solid green";
		birthdayRe_error.innerHTML = '';
		return true;
	} else {
		birthdayRe_error.innerHTML = "Ngày sinh không hợp lệ (lớn hơn 16 tuổi)";
		return false;
	}
}

// Hàm xử lý trường Số Điện Thoại.
function checkReVerify() {
	if (!checkReInput.checked) {
		checkReInput.style.border = "1px solid red";
		checkRe_error.innerHTML = "Thông tin bắt buộc";
		return false;
	} else {
		checkRe_error.innerHTML = '';
		return true;
	}
}


// Hàm reset thông qua click nút Làm Lại.
function resetRegister() {
	lastnameRe_error.innerHTML = "";
	lastnameReInput.style.border = "";
	firstnameRe_error.innerHTML = "";
	firstnameReInput.style.border = "";
	emailRe_error.innerHTML = "";
	emailReInput.style.border = "";
	passwordRe_error.innerHTML = "";
	passwordReInput.style.border = "";
	confirmpasswordRe_error.innerHTML = "";
	confirmpasswordReInput.style.border = "";
	phoneRe_error.innerHTML = "";
	phoneReInput.style.border = "";
	birthdayRe_error.innerHTML = "";
	birthdayReInput.style.border = "";
	checkRe_error.innerHTML = "";
	checkReInput.style.border = "";
	document.getElementById("register_Form").reset()
}

$('#Register').on('hidden.bs.modal', function (e) {
	resetRegister();
});

$('#register-submit-btn').on('click', function(){
	registerValidation();
})

$('#register-reset-btn').on('click', function(){
	resetRegister();
})

//==========================================KẾT THÚC VALIDATION KHUNG ĐĂNG KÝ==============================================
//======================================================================================================================
