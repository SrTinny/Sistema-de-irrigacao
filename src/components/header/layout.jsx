import React, { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import './layout.scss';

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="layout-container">
      <nav className="navbar">
        <div className="nav-header">
          <div className="logo">SysPlant</div>
        </div>

        <div className={`nav-links`}>
          <NavLink to="/irrigacao" onClick={toggleMenu}>Irrigação</NavLink>
          <NavLink to="/sensors" onClick={toggleMenu}>Sensores</NavLink>
          <NavLink to="/tasks" onClick={toggleMenu}>Tarefas</NavLink>
          <NavLink to="/crops" onClick={toggleMenu}>Plantações</NavLink>
          <button onClick={() => { handleLogout(); toggleMenu(); }}>Sair</button>
        </div>
      </nav>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
