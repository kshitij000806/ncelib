var correctUsername = "Hi";
var correctPassword = "Hello";

function login() {
    var usernameInput = document.getElementById("usn").value;
    var passwordInput = document.getElementById("password").value;

    if (usernameInput === correctUsername && passwordInput === correctPassword) {
        window.location.href = "https://www.youtube.com/@MrBeast";
    } else {
        alert("Incorrect username or password");
    }
}