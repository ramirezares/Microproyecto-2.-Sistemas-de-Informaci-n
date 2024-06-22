import PropTypes from "prop-types";
import "./ChangingFooter.style.css";
import React from "react";
import { useState, useEffect } from "react";


const ChangingFooter = () => {
  const [estado, setEstado] = React.useState('unimet');

  const handleEstadoChange = (newEstado) => {
    setEstado(newEstado);
  };

  return (
    <footer className="footer">
      {estado === 'unimet'? (
        <div className="container">
          <div className="row">
            <div className="col-md-4 text-left">
              <p>
                <a href="https://www.unimet.edu.ve" target="_blank" rel="noopener noreferrer">
                  Universidad Metropolitana
                </a>
              </p>
            </div>
            <div className="col-md-4 text-center">
              <img src="logo-unimet.png" alt="Logo Unimet" />
            </div>
            <div className="col-md-4 text-right">
              <p>&copy; 2023 Universidad Metropolitana. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <p>@ GRANIER VENEZUELA</p>
              <hr />
              <p>Derechos reservados</p>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

ChangingFooter.propTypes = {
  footerstate: PropTypes.string.isRequired,
};

export default ChangingFooter;
