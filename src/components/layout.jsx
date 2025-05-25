import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import '../styles/layout.scss'; // novo

const Layout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div className="layout-container">
      <nav className="navbar">
        <div className="logo">🌿 Sistema de Irrigação</div>
        <div className="nav-links">
          <NavLink to="/irrigacao">Irrigação</NavLink>
          <NavLink to="/sensors">Sensores</NavLink>
          <NavLink to="/material">Material</NavLink>
          <NavLink to="/tasks">Tarefas</NavLink>
          <NavLink to="/crops">Plantações</NavLink>
          <NavLink to="/about">Sobre</NavLink>
          <button onClick={handleLogout}>Sair</button>
        </div>
      </nav>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
