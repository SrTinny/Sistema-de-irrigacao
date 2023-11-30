function authenticate(event) {
    event.preventDefault();
    // Obter os valores de usuário e senha do formulário
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Verificar as credenciais e redirecionar conforme necessário
    if (username === "admin" && password === "admin") {
        window.location.href = "../pages/irrigacao.html";
    } else if (username === "client" && password === "client") {
        window.location.href = "irrigacaoClient.html";
    } else {
        alert("Credenciais inválidas. Tente novamente.");
    }

    // Evitar que o formulário seja enviado
    return false;
}

document.getElementById('loginForm').addEventListener('submit', authenticate);