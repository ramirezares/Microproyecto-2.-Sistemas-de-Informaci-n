import PropTypes from "prop-types";
import ChangingButton from "./ChangingButton";
import ProfileButton from "./ProfileButton";
import { useState, useEffect } from "react";
import "./ChangingNavBar.style.css";
import { useNavigate } from "react-router-dom";

const ChangingNavBar = (props) => {
  const navigate = useNavigate();

  const [state, setState] = useState("offline");

  useEffect(() => {
    setState(props.navstate);
  }, [props.navstate]);

  //Offline
  if (state === "offline") {
    return (
      <div className="navbar">
        <div className="logos">
          <img
            className="img-fluid rounded float-start"
            src="/MetroEats.png"
            alt="img"
            onClick={() => {
              navigate("/");
            }}
          />
        </div>
        <div className="d-flex justify-content-between">
          <ChangingButton
            text="Regístrate"
            style="bordered-blue-background"
            link="/register"
          />
          <ChangingButton
            text="Inicia Sesion"
            style="bordered-blue-background"
            link="/login"
          />
        </div>
      </div>
    );

    //User  //TODO Hacer boton carrito button imag
  } else if (state === "user") {
    return (
      <div className="navbar">
        <div className="logos">
          <img
            className="img-fluid rounded float-start"
            src="/MetroEats.png"
            alt="img"
            onClick={() => {
              navigate("/");
            }}
          />
        </div>
        <div className="buttons">
          <ProfileButton
            use="profile"
            text="Ares"
            style="borderless"
            path="/Icono de perfil.png"
            link="a"
          />
        </div>
      </div>
    );

    //Granier
    //TODO Colocar imagen del carrito y de perfil con <ButtonImg/> debajo de changing button
  } else if (state === "granier") {
    return (
      <div className="navbar-blue">
        <div className="logos">
          <img
            src="/MetroEats.png"
            alt=""
            onClick={() => {
              navigate("/");
            }}
          />
          <img
            src="/LogoGranier.png"
            alt=""
            onClick={() => {
              navigate("/granier/contact");
            }}
          />
        </div>
        <div className="buttons">
          <ChangingButton text="Menu" style="borderless" link="" disable />
          <ChangingButton text="Conocenos" style="borderless" link="" />
          <div className="img-fluent">
            <img
              src="/Carrito.png"
              alt=""
              onClick={() => {
                navigate("/inprogress");
              }}
            />
          </div>

          <ProfileButton
            use="profile"
            text="Ares"
            link="/"
            style="borderless"
            path="/Icono de perfil.png"
          />
        </div>
      </div>
    );

    //Employee
  } else if (state === "employee") {
    return (
      <div className="navbar-blue">
        <img
          src="/MetroEats.png"
          alt=""
          onClick={() => {
            navigate("/");
          }}
        />
        <img
          src="/Granieradministradorlogo.png"
          alt=""
          onClick={() => {
            navigate("granier/homeEmployee");
          }}
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
