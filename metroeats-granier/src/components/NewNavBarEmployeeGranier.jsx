import React from "react";
import { Link } from "react-router-dom";
import ChangingButton from "./ChangingButton";
import "./GranierNav.style.css";

const NewNavBarEmployeeGranier = () => {
  return (
    <nav class="navbar fixed-top navbar-expand-lg">
      <div class="container-fluid">
        <Link to="/">
          <img src="./Unimetmetroeatsblanco.png" width="90" />
        </Link>
        <Link to="/granier/contact">
          <img src="./Granieradministradorlogo.png" width="150" />
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
        <div
          class=" justify-content-md-end collapse navbar-collapse"
          id="navbarNav"
        >
          <ul class="navbar-nav justify-content-md-end">
            <li class="nav-item">
              <Link
                class="nav-link active text-light gap-4"
                to="/inprogress"
                aria-current="page"
                href="#"
              >
                Menú
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link text-light" to="/inprogress" href="#">
                Pedidos
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link text-light" to="/inprogress" href="#">
                Cerrar Sesión
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NewNavBarEmployeeGranier;
