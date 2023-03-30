import React from 'react'
import { Navigate, Outlet,Route } from 'react-router-dom';

const ProtectedRoute = (props) => {
  const user = localStorage.getItem('user');
  <Outlet/>

  if (user) {
    return <Outlet/>
  }
  else {
    return <Navigate to="/login" />
  }  
}
export default ProtectedRoute
