const fullnameError = $("#fullname-error");
const usernameError = $("#username-error");
const passwordError = $("#password-error");
const repasswordError = $("#repassword-error");
const birthdayError = $("#birthday-error");
const phoneError = $("#phone-error");
const addressError = $("#address-error");
const emailError = $("#email-error");
const hobbyError = $("#hobby-error");

const fullnameInput = $("#fullname");
const usernameInput = $("#username");
const passwordInput = $("#password");
const repasswordInput = $("#repassword");
const birthdayInput = $("#birthday");
const phoneInput = $("#phone");
const addressInput = $("#address");
const emailInput = $("#email");
const hobbyInput = $("#hobby");

/*
Khi nhấn nút đăng ký, nếu nhập đúng dữ liệu sẽ chuyển sang trang thongtin.htm ghi
lại tất cả các thông tin đã đăng ký, nếu nhập sai thì sẽ đặt con trỏ lại ô đã nhập sai
đầu tiên
*/

$(document).ready(function () {
  $("#submit-btn").on("click", function (e) {
    e.preventDefault();
    const fullname = $("#fullname").val();
    const username = $("#username").val();
    const password = $("#password").val();
    const repassword = $("#repassword").val();
    const birthday = $("#birthday").val();
    const phone = $("#phone").val();
    const address = $("#address").val();
    const email = $("#email").val();
    const hobby = $("#hobby").val();

    if (fullname === "") {
      fullnameError.text("Vui lòng nhập họ và tên");
      fullnameInput.focus();
    } else {
      fullnameError.text("");
    }

    if (username === "") {
      usernameError.text("Vui lòng nhập tên đăng nhập");
      usernameInput.focus();
    } else {
      usernameError.text("");
    }

    if (password === "") {
      passwordError.text("Vui lòng nhập mật khẩu");
      passwordInput.focus();
    } else {
      passwordError.text("");
    }

    if (repassword === "") {
      repasswordError.text("Vui lòng nhập lại mật khẩu");
      repasswordInput.focus();
    } else if (repassword !== password) {
      repasswordError.text("Mật khẩu không khớp");
    } else {
      repasswordError.text("");
    }

    // Tên đăng nhập ít nhất là 6 ký tự
    if (username.length < 6) {
      usernameError.text("Tên đăng nhập phải có ít nhất 6 ký tự");
      usernameInput.focus();
    } else {
      usernameError.text("");
    }

    // Điện thoại phải là số
    if (isNaN(phone)) {
      phoneError.text("Điện thoại phải là số");
      phoneInput.focus();
    } else {
      phoneError.text("");
    }

    // Email phải đúng mẫu (dùng regular expression)
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
      emailError.text("Email không hợp lệ");
      emailInput.focus();
    } else {
      emailError.text("");
    }

    window.location.href = `thongtin.html?fullname=${fullname}&username=${username}&password=${password}&birthday=${birthday}&phone=${phone}&address=${address}&email=${email}&hobby=${hobby}`;
  });
});
