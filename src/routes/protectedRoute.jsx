import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, role }) => {
  const user = JSON.parse(localStorage.getItem('user'));

  if (!user) return <Navigate to="/" />;
  // if (user.role !== role) return <Navigate to="/" />; arrumar isso aqui depois

  return children;
};

export default ProtectedRoute;
