import React from 'react'
import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Login from './pages/Login';
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <ToastContainer />
    </>
  );
}

export default App;