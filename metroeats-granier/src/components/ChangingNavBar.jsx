//import PropTypes from "prop-types";
import "./ChangingNavBar.style.css";
import ChangingButton from "./ChangingButton";
import ProfileButton from "./ProfileButton";
import Img from "./Img";

const ChangingNavBar = (props) => {
  const kind = props.kind;

  if (kind === "offline") {
    return (
      <div className="navbar">
        <Img route="/logo-provicional-unimet-metroeats.jpg" alt="Img" />
        Desconectado 
        <ChangingButton text="Regístrate" style="bordered-blue-background" link="" />
        <ChangingButton text="Inicia Sesion" style="bordered-blue-background" link="" />
      </div>
    );
  } else if (kind === "client") {
    return (
      <div className="navbar">
        <Img route="/logo-provicional-unimet-metroeats.jpg" alt="Img" />
        Cliente
        <ProfileButton text="Ares" style="borderless" link=""/>
      </div>
    );
  } else {
    return (
      <div className="navbar">
        Empleado
        <ChangingButton text="A" style="bordered-blue-background" link="" />
      </div>
    );
  }
};

/*TODO - Agregar el de Granier y el de empleado Granier*/

export default ChangingNavBar;
