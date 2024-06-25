import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login";

import Contact from "./pages/Contact";

import HomeEmployee from "./pages/HomeEmployee";
import InProgress from "./pages/InProgress";

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
        <Route path="/inprogress" element={<InProgress />} />
      </Routes>
    </Router>
  );
};

export default WebRouter;
