import React, { useState } from 'react';
import backgroundImage from '../assets/img/background.jpg';  // Caminho para a imagem de fundo

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Verificar as credenciais
    if (username === "admin" && password === "admin") {
      window.location.href = "/irrigacao"; // Redireciona após login
    } else {
      alert("Credenciais inválidas.");
    }
  };

  return (
    <div className="login-container" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label htmlFor="username">Usuário:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Senha:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
