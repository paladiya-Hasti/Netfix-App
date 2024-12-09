import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const loggedInEmail = localStorage.getItem('email');

  if (!loggedInEmail) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
