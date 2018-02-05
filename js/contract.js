
//==========================================START VALIDATION FORM CONTACT==============================================
//======================================================================================================================
// Get all input object
var nameInput = document.forms['contact']['nameInput'];
var emailContactInput = document.forms['contact']['emailContactInput'];
var phoneInput = document.forms['contact']['phoneInput'];
var messageInput = document.forms['contact']['messageInput'];

// Getting all error display objects
var name_error = document.getElementById('name_error');
var email_contact_error = document.getElementById('email_contact_error');
var phone_error = document.getElementById('phone_error');
var message_error = document.getElementById('message_error');

// Setting all eventlisteners
nameInput.addEventListener('blur', nameVerify, true);
emailContactInput.addEventListener('blur', emailVerify, true);
phoneInput.addEventListener('blur', phoneVerify, true);
messageInput.addEventListener('blur', messageVerify, true);

// Validation function
function contactValidation() {
    nameVerify();
    emailVerify();
    phoneVerify();
    messageVerify();
    if (nameVerify() == false
        || emailVerify() == false
        || phoneVerify() == false
        || messageVerify() == false) {
        return false;
    }else {
        return true;
    }
}

// event handler functions
function nameVerify() {
    if (nameInput.value == "") {
        nameInput.style.border = "1px solid red";
        name_error.innerHTML = "Thông tin bắt buộc";
        return false;
    } else if(nameInput.value !== "") {
        nameInput.style.border = '1px solid #5E6E66';
        name_error.innerHTML = '';
        return true;
    }
}
function emailVerify() {
        var emailreg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (emailContactInput.value == "") {
            emailContactInput.style.border = "1px solid red";
            email_contact_error.innerHTML = "Thông tin bắt buộc";
            return false;
        } else if (reg.test(emailContactInput.value) == false) { 
            email_contact_error.innerHTML = 'Địa chỉ email không hợp lệ';
            return false;
        } else {
            emailContactInput.style.border = '1px solid #5E6E66';
            email_contact_error.innerHTML = "";
            return true;
        }
}
function phoneVerify() {
        var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if (phoneInput.value == "") {
            phoneInput.style.border = "1px solid red";
            phone_error.innerHTML = "Thông tin bắt buộc";
            return false;
        } else if(phoneInput.value.match(phoneno)) {
            phoneInput.style.border = '1px solid #5E6E66';
            phone_error.innerHTML = '';
            return true;
        } else {
            phone_error.innerHTML = "Số điện thoại không hợp lệ";
            return false;
        }
}
function messageVerify() {
    if (messageInput.value == "") {
        messageInput.style.border = "1px solid red";
        message_error.innerHTML = "Thông tin bắt buộc";
        return false;
    } else {
        messageInput.style.border = '1px solid #5E6E66';
        message_error.innerHTML = "";
        return true;
    }
}

function resetContact() {
    name_error.innerHTML = "";
    nameInput.style.border = "";
    phone_error.innerHTML = "";
    phoneInput.style.border = "";
    email_contact_error.innerHTML = "";
    emailContactInput.style.border = "";
    message_error.innerHTML = "";
    messageInput.style.border = "";
    document.getElementById("contactForm").reset()
}

$('#contact-submit-btn').on('click', function(){
    contactValidation();
})

$('#contact-reset-btn').on('click', function(){
    resetContact();
})


//==========================================END VALIDATION FORM CONTACT==============================================
//======================================================================================================================




