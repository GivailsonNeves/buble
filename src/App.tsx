import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login-page";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
