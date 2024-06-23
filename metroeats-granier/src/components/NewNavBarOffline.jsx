import React from "react";
import { Link } from "react-router-dom";
import ChangingButton from "./ChangingButton";
import "./NewNavBar.style.css";

const NewNavBarOffline = () => {
  return (
    <nav class="navbar fixed-top navbar-expand-lg bg-light">
      <div class="container-fluid">
        <Link to="/">
          <img src="./MetroEats.png" width="90" />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <form class="d-flex container-fluid gap-4 d-md-flex justify-content-md-end ">
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
};

export default NewNavBarOffline;
