import React from "react";
import "./NavBarGranier.style.css";
import { useNavigate } from "react-router-dom";

const NavBarGranier = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar fixed-top navbar-expand-lg">
      <div className="container-fluid">
        <img
          src="/Unimetmetroeatsblanco.png"
          width="90"
          onClick={() => {
            navigate("/");
          }}
        />
        <img
          src="/Graniersoloblanco.png"
          width="150"
          onClick={() => {
            navigate("/granier/contact");
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
        <div
          className=" justify-content-md-end collapse navbar-collapse"
          id="navbarNav"
        >
          <ul className="navbar-nav justify-content-md-end">
            <li className="nav-item">
              <button
                className="nav-link active text-light gap-4"
                aria-current="page"
                onClick={() => {
                  navigate("/inprogress");
                }}
              >
                Menu
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link active text-light gap-4"
                aria-current="page"
                onClick={() => {
                  navigate("/inprogress");
                }}
              >
                Conócenos
              </button>
            </li>
            <li className="nav-item ">
              <img
                src="/Carrito.png"
                width="30"
                onClick={() => {
                  navigate("/inprogress");
                }}
              />
            </li>
            <li className="nav-item">
              <img
                src="/Iconopequeblanco.png"
                width="30"
                onClick={() => {
                  navigate("/inprogress");
                }}
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBarGranier;
