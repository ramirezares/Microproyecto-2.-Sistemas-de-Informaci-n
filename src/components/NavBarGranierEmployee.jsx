import React from "react";

const NavBarGranierEmployee = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-lg">
          <div className="container-fluid">
            <img
              src="./Unimetmetroeatsblanco.png"
              width="90"
              onClick={() => {
                navigate("/");
              }}
            />
            <img
              src="./Granieradministradorlogo.png"
              width="150"
              onClick={() => {
                navigate("/granier/homeEmployee");
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
                    className="nav-link text-light"
                    aria-current="page"
                    onClick={() => {
                      navigate("/inprogress");
                    }}
                  >
                    Pedidos
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link text-light"
                    aria-current="page"
                    onClick={() => {
                      navigate("/inprogress");
                    }}
                  >
                    Cerrar Sesión
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );
 }

export default NavBarGranierEmployee