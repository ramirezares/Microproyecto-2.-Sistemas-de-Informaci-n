//import PropTypes from "prop-types";
import "./ChangingNavBar.style.css";
import ChangingButton from "./ChangingButton";
import ProfileButton from "./ProfileButton";
import Img from "./Img";
import { useState, useEffect } from "react";

const ChangingNavBar = (props) => {

  const [state, setState] = useState("offline");

  useEffect(() => {
    setState(props.navstate);
  }, [props.navstate]);

  //Offline
  if (state === "offline") {
    return (
      <div className="navbar">
        <Img route="/logo-provicional-unimet-metroeats.jpg" alt="Img" />
        Desconectado
        <ChangingButton
          text="Regístrate"
          style="bordered-blue-background"
          link="https://refactoring.guru/es/design-patterns/chain-of-responsibility"
        />
        <ChangingButton
          text="Inicia Sesion"
          style="bordered-blue-background"
          link="https://refactoring.guru/es/design-patterns/chain-of-responsibility"
        />
      </div>
    );

  //User  //TODO Hacer boton carrito button imag
  } else if (state === "user") {
    return (
      <div className="navbar">
        <Img route="/logo-provicional-unimet-metroeats.jpg" alt="Img" />
        <Img route="/logo-provicional-unimet-metroeats.jpg" alt="Img" />
        User
        <ChangingButton text="Menú" style="bordered-blue-background" link="" />
        <ChangingButton text="Conócenos" style="bordered-blue-background" link="" />
        
        <ProfileButton text="Ares" style="borderless" link="" />
      </div>
    );

  //Granier
  } else if (state === "granier") {
    return (
      <div className="navbar">
        Granier
        <ChangingButton text="A" style="bordered-blue-background" link="" />
        <ProfileButton text="Ares" style="borderless" link="" />
      </div>
    );
  
  //Employee
  } else if (state === "employee") {
    return (
      <div className="navbar">
        Empleado
        <ChangingButton text="A" style="bordered-blue-background" link="" />
      </div>
    );
  }
  else {
    return <div>Error: state no es 0. El valor actual de state es {state}.</div>;
  }
};

/*TODO - Agregar el de Granier y el de empleado Granier*/

export default ChangingNavBar;
