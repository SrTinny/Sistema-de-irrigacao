import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Admin from './pages/admin';
import IrrigacaoClient from './pages/irrigacaoClient';
import Irrigacao from './pages/irrigacao';
import Sensors from './pages/sensors';
import Material from './pages/material';
import Tasks from './pages/tasks';
import Crops from './pages/crops';
import About from './pages/about';
import Layout from './components/layout';
import ProtectedRoute from './routes/ProtectedRoute';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      {/* Layout com navbar para rotas autenticadas */}
      <Route element={<Layout />}>
        <Route path="/admin" element={
          <ProtectedRoute role="admin"><Admin /></ProtectedRoute>
        } />
        <Route path="/cliente" element={
          <ProtectedRoute role="client"><IrrigacaoClient /></ProtectedRoute>
        } />
        <Route path="/irrigacao" element={<Irrigacao />} />
        <Route path="/sensors" element={<Sensors />} />
        <Route path="/material" element={<Material />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/crops" element={<Crops />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
