import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    let role = 'client';
    if (username === 'admin' && password === 'admin') role = 'admin';

    const user = { username, role };
    localStorage.setItem('user', JSON.stringify(user));

    navigate(role === 'admin' ? '/admin' : '/cliente');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md w-80">
        <h1 className="text-2xl mb-4 text-center">Login</h1>
        <label>Usuário:</label>
        <input
          type="text"
          className="block w-full mb-2 border p-2"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Senha:</label>
        <input
          type="password"
          className="block w-full mb-4 border p-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
