//import PropTypes from "prop-types";
import ChangingButton from "./ChangingButton";
import ProfileButton from "./ProfileButton";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useResolvedPath } from "react-router-dom";
import { AuthProvider } from "../AuthContext";
import "./ChangingNavBar.style.css";

const ChangingNavBar = () => {
  const [state, setState] = useState("offline");

  const navigate = useNavigate();

  const resolvedPath = useResolvedPath();

  const granierRoutes = [
    "/granier/contact",
    "/granier/aboutUs",
    "/granier/homeGranier",
  ];

  useEffect(() => {
    
    //Falta empleado para que el primer if sea empleado
    if (AuthProvider.user && granierRoutes.includes(resolvedPath.pathname)) {
      setState("granier");
    } else if (AuthProvider.user) {
      setState("user");
    } else {
      setState("offline");
    }
  }, [AuthProvider.user, resolvedPath]);

  //Offline
  if (state === "offline") {
    return (
      <nav className="navbar fixed-top navbar-expand-lg bg-light">
        <div className="container-fluid">
          <img src="./MetroEats.png" width="90" onClick={() => {navigate("/")}} />

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
          <div className="collapse navbar-collapse" id="navbarNav">
            <form className="d-flex container-fluid gap-4 d-md-flex justify-content-md-end ">
              <ChangingButton
                text="Regístrate"
                style="bordered-blue-background"
                link="/register"
              />
              <></>
              <ChangingButton
                text="Inicio de sesión"
                style="bordered-blue-background"
                link="/login"
              />
            </form>
          </div>
        </div>
      </nav>
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
// ChangingNavBar.propTypes = {
//   navstate: PropTypes.string.isRequired,
// };
export default ChangingNavBar;
