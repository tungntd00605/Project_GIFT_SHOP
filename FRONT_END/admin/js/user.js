var USER_API_URL = "http://localhost:3000/_api/v1/users";

$(document).ready(function(){	
	var page = Number(getUrlParameter('page'));
	var limit = Number(getUrlParameter('limit'));
	loadUser(page, limit);

	
});

function loadUser(page, limit){
	$.ajax({
		url: USER_API_URL + '?page=' + page + '&limit=' + limit,
		type: 'GET',				
		success: function(response){
			var listUser = response.listUser;
			var totalPage = response.totalPage;
			var content = '';
			for (var i = 0; i < listUser.length; i++) {
				var id = listUser[i]._id;			
				content += '<tr>';
					content += '<td>' + listUser[i].firstName + '</td>';
					content += '<td>' + listUser[i].lastName + '</td>';				
					content += '<td>';
						content += '<a href="user-edit-form.html?id=' + id + '" class="btn btn-default">Edit</a>&nbsp;';
						content += '<a href="#" onclick="deleteUser(\'' + id + '\')" class="btn btn-danger">Delete</a>';
					content += '</td>';
				content += '</tr>';
			}

			var paginateContent = '';
			if(page > 1){
				paginateContent += '<li><a href="?page=1&limit=' + limit + '" aria-label="First"><span aria-hidden="true"><<</span></a></li>';
				paginateContent += '<li><a href="?page=' + (page - 1) + '&limit=' + limit + '" aria-label="Previous"><span aria-hidden="true"><</span></a></li>';
			}
			if(page > 2){
				paginateContent += '<li><a href="?page=' + (page - 2) + '&limit=' + limit + '">' + (page - 2) + '</a></li>';
			}
			if(page > 1){
				paginateContent += '<li><a href="?page=' + (page - 1) + '&limit=' + limit + '">' + (page - 1) + '</a></li>';
			}
			paginateContent += '<li class="active"><a href="?page=' + page + '">' + page + '</a></li>';			
			if(totalPage > page){
				paginateContent += '<li><a href="?page=' + (page + 1) + '&limit=' + limit + '">' + (page + 1) + '</a></li>';	
			}
			if((totalPage - 1) > page){
				paginateContent += '<li><a href="?page=' + (page + 2) + '&limit=' + limit + '">' + (page + 2) + '</a></li>';	
			}
			if(page < totalPage){
				paginateContent += '<li><a href="?page=' + (page + 1) + '&limit=' + limit + '" aria-label="Next"><span aria-hidden="true">></span></a></li>';
				paginateContent += '<li><a href="?page=' + (totalPage) + '&limit=' + limit + '" aria-label="Last"><span aria-hidden="true">>></span></a></li>';
			}
				
   			$('.pagination').html(paginateContent);
			$('#result').html(content);
		},
		error: function(response, message){
			alert('Có lỗi xảy ra. ' + message);
		}
	});
}

// Edit user
$('[name="btn-edit-user"]').click(function(){
	if (registerValidation()) {
		// get id from url
		var url_string = window.location.href;
		var url = new URL(url_string);
		var id = url.searchParams.get("id");

		var user = {
			'firstName': lastnameReInput.value,				
			'lastName': firstnameReInput.value,
			'email': emailReInput.value,
			'password': passwordReInput.value,
			'phone': phoneReInput.value,
			'gender': genderReInput.value,
			'birthday': birthdayReInput.value,
		};
		$.ajax({
			url: USER_API_URL + '/' + id,
			type: 'PUT',
			data: user,						
			success: function(response){
				alert('Success.');
				location.reload();
			},
			error: function(response, message){
				alert('Error. ' + message);
			}
		});
	}
	
});

function deleteUser(id){			
	if(confirm('Are you sure?')){
		$.ajax({
			url: USER_API_URL + '/' + id,
			type: 'DELETE',							
			success: function(response){
				alert('Success.');
				location.reload();
			},
			error: function(response, message){
				alert('Error. ' + message);
			}
		});
	}
}

// Lấy tham số truyền lên trong url theo tên.
function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

//==========================================BẮT ĐẦU VALIDATION EDIT FORM USER========================================
//==================================================================================================================
// Gán tất cả các đối tượng đầu vào.
var lastnameReInput = document.forms['edit_user_Form']['lastnameReInput'];
var firstnameReInput = document.forms['edit_user_Form']['firstnameReInput'];
var emailReInput = document.forms['edit_user_Form']['emailReInput'];
var passwordReInput = document.forms['edit_user_Form']['passwordReInput'];
var confirmpasswordReInput = document.forms['edit_user_Form']['confirmpasswordReInput'];
var phoneReInput = document.forms['edit_user_Form']['phoneReInput'];
var genderReInput = document.forms['edit_user_Form']['genderReInput'];
var birthdayReInput = document.forms['edit_user_Form']['birthdayReInput'];
var checkReInput = document.forms['edit_user_Form']['checkReInput'];

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
})

//==========================================KẾT THÚC VALIDATION EDIT FORM USER==============================================
//======================================================================================================================