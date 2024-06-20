
import "./HomeEmployee.style.css";
import ChangingButton from "../components/ChangingButton"
import ChangingFooter from "../components/ChangingFooter"
import Img from "../components/Img";
import React from "react"

const HomeEmployee = () => { 
  return(
    <>
    <div className="loginPage1">
      <div className="navBar">

        <div className="logo">
          <Img route=""/>
        </div>

        <div className="logoGranier">
          <Img route=""/>
        </div>
        <ChangingButton text="Menú" link="" style=""></ChangingButton>
        <ChangingButton text="Pedidos" link="" style=""></ChangingButton>
        <ChangingButton text="Cerrar Sesion" link="" style=""></ChangingButton>
      </div>
      <div className="imageBar">

      </div>
      <div className="interactionBar">
        <ChangingButton text="Ir al Menú" link="" style=""></ChangingButton>
        <ChangingButton text="Agregar producto o promoción" link="" style=""></ChangingButton>
        <ChangingButton text="Gestionar pedidos" link="" style=""></ChangingButton>
        <ChangingButton text="Ver Reseña" link="" style=""></ChangingButton>
        <Img/>
      </div>
      <div className="rightsBar">
        <p className="prove"><u>@ GRANIER VENEZUELA</u> | Derechos reservados</p>
      </div>
    </div>
    <ChangingFooter footerstate="unimet" />
    </>
  )
}

export default HomeEmployee;

