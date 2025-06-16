import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Imports organizados de acordo com os diretórios
import Login from './components/login/login';
import Admin from './components/irrigacao/admin';
import IrrigacaoClient from './components/irrigacao/irrigacaoClient';
import Sensors from './components/sensors/sensors';
import Material from './components/material/material';
import Tasks from './components/tasks/tasks';
import Crops from './components/crops/crops';
import About from './components/about/about';
import Layout from './components/header/layout';
import ProtectedRoute from './routes/protectedRoute';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login /> } />

      {/* Layout com navbar para rotas autenticadas */}
      <Route element={<Layout />}>
        <Route path="/admin" element={
          <ProtectedRoute role="admin"><Admin /></ProtectedRoute>
        } />
        <Route path="/cliente" element={
          <ProtectedRoute role="client"><IrrigacaoClient /></ProtectedRoute>
        } />
        <Route path="/irrigacao" element={<ProtectedRoute><Sensors /></ProtectedRoute>} />
        <Route path="/sensors" element={<ProtectedRoute><Sensors /></ProtectedRoute>} />
        <Route path="/material" element={<ProtectedRoute><Material /></ProtectedRoute>} />
        <Route path="/tasks" element={<ProtectedRoute><Tasks /></ProtectedRoute>} />
        <Route path="/crops" element={<ProtectedRoute><Crops /></ProtectedRoute>} />
        <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
      </Route>
    </Routes>
  );
}

export default App;
