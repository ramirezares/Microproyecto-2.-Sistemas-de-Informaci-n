//import PropTypes from "prop-types";
import "./ChangingFooter.style.css";
import Img from "./Img";

const ChangingFooter = (props) => {
  const className = props.kind;

  if (className === "unimet") {
    return (
      <div className={className}>
        <div className="pagelink">
            <p>Página principal de la Universidad Metropolitana:</p>
            <a href="https://www.unimet.edu.ve">"https://www.unimet.edu.ve"</a>
        </div>
        <div className="logo">
            <Img route="/logoUnimet50x50.jpg" />
        </div>
        <div className="copyright"><p>Copyright @ 2024 - Universidad Metropolitana. Todos los derechos reservados.</p>
        <a href="https://www.unimet.edu.ve">"https://www.unimet.edu.ve"</a></div>
      </div>
    );
  } else if (className === "granier") {
    return (
      <>
        <div className={className}>
          <a href="https://graniervenezuela.com">@ GRANIER VENEZUELA  |</a>
          <p> Derechos reservados</p>
        </div>
        <div></div>
      </>
    );
  }
};

export default ChangingFooter;
