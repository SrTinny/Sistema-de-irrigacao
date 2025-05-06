import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Verificar as credenciais
    if (username === "admin" && password === "admin") {
      window.location.href = "/irrigacao";
    } else {
      alert("Credenciais inválidas. Tente novamente.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-6">Login</h1>
        <form onSubmit={handleLogin}>
          <label className="block text-sm font-medium mb-2" htmlFor="username">Usuário:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded-md"
          />
          <label className="block text-sm font-medium mb-2" htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded-md"
          />
          <button type="submit" className="w-full py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;