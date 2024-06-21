import PropTypes from "prop-types";
import "./ChangingFooter.style.css";
import Img from "./Img";
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
          <a href="https://www.unimet.edu.ve">https://www.unimet.edu.ve</a>
        </div>
        <div className="logo">
          <img src="../../public/MetroEatsNaranja.png" className="img" />
        </div>
        <div className="copyright">
          <p>
            Copyright @ 2024 - Universidad Metropolitana. Todos los derechos
            reservados.
          </p>
          <a href="https://www.unimet.edu.ve">https://www.unimet.edu.ve</a>
        </div>
      </div>
    );
  } else if (state === "granier") {
    return (
      <>
        <div className="granier">
          <a href="https://graniervenezuela.com">@ GRANIER VENEZUELA |</a>
          <p> Derechos reservados</p>
        </div>
        <div className="unimet">
          <div className="pagelink">
            <p>Página principal de la Universidad Metropolitana:</p>
            <a href="https://www.unimet.edu.ve">https://www.unimet.edu.ve</a>
          </div>
          <div className="logo">
            <Img route="/logoUnimet50x50.jpg" style="img" />
          </div>
          <div className="copyright">
            <p>
              Copyright @ 2024 - Universidad Metropolitana. Todos los derechos
              reservados.
            </p>
            <a href="https://www.unimet.edu.ve">https://www.unimet.edu.ve</a>
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
