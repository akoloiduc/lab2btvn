function validate(){
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var password_repeat = document.getElementById('password_repeat').value;
    var myemail = document.getElementById('myemail').value;
    var phone = document.getElementById('phone').value;
    var fullname = document.getElementById('fullname').value;
    var address = document.getElementById('address').value;
    if(username === ""){
        alert("Vui lòng nhập tên truy cập!");
        return false;
    }
     if(password === ""){
        alert("Vui lòng nhập mật khẩu!");
        return false;
    }
     if(password_repeat === ""){
        alert("Vui lòng xác nhận lại mật khẩu!");
        return false;
    }
     if(myemail === ""){
        alert("Vui lòng nhập Email của bạn!");
        return false;
    }
     if(phone === ""){
        alert("Vui lòng nhập số điện thoại của bạn!");
        return false;
    }
     if(address === ""){
        alert("Vui lòng nhập địa chỉ!");
        return false;
    }
     if(fullname === ""){
        alert("Vui lòng nhập đầy đủ họ tên!");
        return false;
    }
    return true
}
