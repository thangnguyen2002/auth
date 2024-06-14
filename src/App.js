import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/authen/Login';
import Register from './components/authen/Register';
import Home from './components/authen/Home';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  </Router>
  )
}

export default App;
