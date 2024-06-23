import PropTypes from "prop-types";
import "./ChangingFooter.style.css";
import { useState, useEffect } from "react";

const ChangingFooter = (props) => {
  const [state, setState] = useState("unimet");

  useEffect(() => {
    setState(props.footerstate);
  }, [props.footerstate]);

  if (state === "unimet") {
    return (
      <div className="unimet">
        <div className="pagelink">
          <p>Página principal de la Universidad Metropolitana:</p>
          <a className="a" href="https://www.unimet.edu.ve">https://www.unimet.edu.ve</a>
        </div>
        <div className="logo">
          <img className="img-fluid" src="/MetroEatsNaranja.png"/>
        </div>
        <div className="copyright">
          <p>
            Copyright @ 2024 - Universidad Metropolitana. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    );
  } else if (state === "granier") {
    return (
      <>
        <div className="granier">
          <a className="text-reset"   href="https://graniervenezuela.com">@ GRANIER VENEZUELA |</a>
          <p> Derechos reservados</p>
        </div>
        <div className="unimet">
          <div className="pagelink">
            <p>Página principal de la Universidad Metropolitana:</p>
            <a className="a" href="https://www.unimet.edu.ve">https://www.unimet.edu.ve</a>
          </div>
          <div className="logo">
            <img src="/MetroEats.png" alt="" />
          </div>
          <div className="copyright">
            <p>
              Copyright @ 2024 - Universidad Metropolitana. Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </>
    );
  }
};
ChangingFooter.propTypes = {
  footerstate: PropTypes.string.isRequired,
};
export default ChangingFooter;
