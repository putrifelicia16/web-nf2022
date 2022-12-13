function login() {
    event.preventDefault();

    let uname = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if(uname == "putri1606" && pass == "integrity") {
        location.replace("success.html");
        alert("Login Berhasil");
    } else {
        alert("Login Gagal");
    }
}