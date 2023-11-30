function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "admin" && password === "admin") {
        // Admin login successful, redirect to the admin irrigation page
        window.location.href = "pages/irrigacao.html";
    } else if (username === "client" && password === "client") {
        // Client login successful, redirect to the client irrigation page
        window.location.href = "pages/irrigacaoClient.html";
    } else {
        alert("Login falhou. Tente novamente.");
    }
}

document.getElementById('loginForm').addEventListener('submit', authenticate);