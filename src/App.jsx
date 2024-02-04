import React from "react";
import { Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Table from "./pages/Table";
import AuthLayout from "./components/Layout/AuthLayout";
import GuestLayout from "./components/Layout/GuestLayout";
import Login from "./pages/auth/Login";
import Blank from "./pages/Blank";
import Tutorials from "./pages/Tutorials";
import Comprehensive from "./pages/Comprehensive";
import LandingPage from "./pages/LandingPage";
import RegisterIndex from "./pages/auth/Register";
import ChatBot from "./pages/ChatBot";	

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/table" element={<Table />}></Route>
        <Route path="/blank" element={<Blank />}></Route>
        <Route path="/chatbot" element={<ChatBot/>}></Route>
        <Route path="/tutorials" element={<Tutorials />}></Route>
        <Route path="/comprehensive" element={<Comprehensive />}></Route>
        <Route path="/profile" element={<Blank />}></Route>
      </Route>
      <Route path="/auth" element={<GuestLayout />}>
        <Route path="/auth/login" element={<Login />}></Route>
        <Route path="/auth/register" element={<RegisterIndex />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
