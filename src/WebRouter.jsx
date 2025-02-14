import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LandingPage from "./pages/LandingPage.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";

import Contact from "./pages/Contact.jsx";

import HomeEmployee from "./pages/HomeEmployee.jsx";
import InProgress from "./pages/InProgress.jsx";

import { AuthProvider } from "./AuthContext.jsx";

const WebRouter = () => {
  return (
    <Router>
      <Routes>
        {/*Landing*/}
        <Route
          path=""
          element={
            <AuthProvider>
              <LandingPage />
            </AuthProvider>
          }
        />

        {/*Registro*/}
        <Route
          path="/register"
          element={
            <AuthProvider>
              <Register />
            </AuthProvider>
          }
        />

        {/*Inicio de sesion*/}
        <Route
          path="/login"
          element={
            <AuthProvider>
              <Login />
            </AuthProvider>
          }
        />

        {/*Completar registro*/}
        <Route path="/register/complete" element={<InProgress />} />

        {/*Granier contacto*/}
        <Route
          path="/granier/contact"
          element={
            <AuthProvider>
              <Contact />
            </AuthProvider>
          }
        />

        {/*Nosotros*/}
        <Route
          path="/granier/aboutUs"
          element={
            <AuthProvider>
              <InProgress/>
            </AuthProvider>
          }
        />
        {/*Home empleado*/}
        <Route
          path="/granier/homeEmployee"
          element={
            <AuthProvider>
              <HomeEmployee />
            </AuthProvider>
          }
        />

        {/*En proceso*/}
        <Route path="/inprogress" element={<AuthProvider><InProgress /></AuthProvider>} />
      </Routes>
    </Router>
  );
};

export default WebRouter;
