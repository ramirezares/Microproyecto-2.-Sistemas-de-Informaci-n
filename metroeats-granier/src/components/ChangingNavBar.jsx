import PropTypes from "prop-types";
import ChangingButton from "./ChangingButton";
import ProfileButton from "./ProfileButton";
import Img from "./Img";
//import ButtonImg from "../ui/ButtonImg";
import { useState, useEffect } from "react";
import "./ChangingNavBar.style.css";

const ChangingNavBar = (props) => {
  const [state, setState] = useState("offline");

  useEffect(() => {
    setState(props.navstate);
  }, [props.navstate]);

  //Offline
  if (state === "offline") {
    return (
      <div className="navbar">
        <div className="logos">
          <Img
            route="/logo-provicional-unimet-metroeats.jpg"
            alt="Img"
            style="img"
          />
        </div>
        <div className="buttons">
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
      </div>
    );

    //User  //TODO Hacer boton carrito button imag
  } else if (state === "user") {
    return (
      <div className="navbar">
        <div className="logos">
          <Img
            route="/logo-provicional-unimet-metroeats.jpg"
            alt="Img"
            style="img"
          />
        </div>
        <div className="buttons">
          <ProfileButton text="Ares" style="borderless" link="" />
        </div>
      </div>
    );

    //Granier
    //TODO Colocar imagen del carrito y de perfil con <ButtonImg/> debajo de changing button
  } else if (state === "granier") {
    return (
      <div className="navbar-blue">
        <div className="logos">
        <Img
          route="/logo-provicional-unimet-metroeats.jpg"
          alt="Img"
          style="img"
        />
        <Img
          route="/logo-provicional-unimet-metroeats.jpg"
          alt="Img"
          style="img"
        />
        </div>
        <div className="buttons">
        <ChangingButton text="Menu" style="borderless" link="" />
        <ChangingButton text="Conocenos" style="borderless" link="" />
        </div>
      </div>
    );

    //Employee
  } else if (state === "employee") {
    return (
      <div className="navbar-blue">
        <Img
          route="/logo-provicional-unimet-metroeats.jpg"
          alt="Img"
          style="img"
        />
        <Img
          route="/logo-provicional-unimet-metroeats.jpg"
          alt="Img"
          style="img"
        />
        Empleado
        <ChangingButton text="Menu" style="borderless" link="" />
        <ChangingButton text="Pedidos" style="borderless" link="" />
        <ChangingButton text="Cerrar sesion" style="borderless" link="" />
      </div>
    );
  } else {
    return (
      <div>Error: state no es 0. El valor actual de state es {state}.</div>
    );
  }
};

/*TODO - Agregar logo al de Granier y el de empleado. Agg img perfil a granier*/
ChangingNavBar.propTypes = {
  navstate: PropTypes.string.isRequired,
};
export default ChangingNavBar;
