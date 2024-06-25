//import PropTypes from "prop-types";
import ChangingButton from "./ChangingButton";
import ProfileButton from "./ProfileButton";

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AuthProvider } from "../AuthContext";
import { useAuth } from "../AuthContextConst";

const ChangingNavBar = () => {
  const user = useAuth();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await AuthProvider.logout;
      console.log("Cerrado")
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }

  }, [user]);

  if (isAuthenticated) {
    return (
      <nav className="navbar fixed-top navbar-expand-lg bg-light">
        <div className="container-fluid">
          <img
            src="./MetroEats.png"
            width="90"
            onClick={() => {
              navigate("/");
            }}
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <form className="d-flex container-fluid gap-4 d-md-flex justify-content-md-end ">
              <ProfileButton
                use="profile"
                text="Ares"
                style="borderless"
                path="/Icono de perfil.png"
                link="/inprogress"
              />
              <ChangingButton
                text="Cerrar sesion"
                style="bordered-blue-background"
                onClick={handleLogout}
              />
            </form>
          </div>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="navbar fixed-top navbar-expand-lg bd-light">
        <div className="container-fluid">
          <img
            src="./MetroEats.png"
            width="90"
            onClick={() => {
              navigate("/");
            }}
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <form className="d-flex container-fluid gap-4 d-md-flex justify-content-md-end ">
              <ChangingButton
                text="Regístrate"
                style="bordered-blue-background"
                link="/register"
              />
              <></>
              <ChangingButton
                text="Inicio de sesión"
                style="bordered-blue-background"
                link="/login"
              />
            </form>
          </div>
        </div>
      </nav>
    );
  }
};

export default ChangingNavBar;
