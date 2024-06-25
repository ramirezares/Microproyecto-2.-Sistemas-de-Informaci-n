import React from "react";
import ChangingButton from "../components/ChangingButton";
import ChangingFooter from "../components/ChangingFooter";
import "./HomeEmployee.style.css";

const HomeEmployee = () => {
  return (
    <>
      <div>
        <div className="navBar">
          <div className="logo">
            <img src="/MetroEats.png" />
          </div>

          <div className="logoGranier">
            <img src="/Granieradministradorlogo-remove.png" />
          </div>

          <div>
            <ChangingButton text="Menu" style="customStyleButtons" link="" />
          </div>

          <div>
            <ChangingButton text="Pedidos" style="customStyleButtons" link="" />
          </div>
          <div>
            <ChangingButton
              text="Cerrar sesion"
              style="customStyleButtons"
              link=""
            />
          </div>
        </div>
        <div className="imageBar">
          <img src="/Bakeryproducts.png" alt="First Image" class="topImage" />
          <img
            src="/Granieradministradorlogo-remove.png"
            alt="Second Image"
            class="bottomImage"
          />
          <div class="overlayText">Pan de Verdad,Cada día</div>
        </div>

        <div className="interactionBar">
          <div className="interactionBar_buttons">
            <ChangingButton
              text="Ir al Menú"
              link=""
              style="customStyleButtons2"
            ></ChangingButton>
            <ChangingButton
              text="Agregar producto o promoción"
              link=""
              style="customStyleButtons2"
            ></ChangingButton>
            <ChangingButton
              text="Gestionar pedidos"
              link=""
              style="customStyleButtons2"
            ></ChangingButton>
            <ChangingButton
              text="Ver Reseña"
              link=""
              style="customStyleButtons2"
            ></ChangingButton>
          </div>
          <div className="interactionBar_img">
            <img src="/Chicacafe.jpg" />
          </div>
        </div>

        <div className="rightsBar">
          <p className="prove">
            <a href="http://graniervenezuela.com/">
              <u>@ GRANIER VENEZUELA</u>
            </a>{" "}
            | Derechos reservados
          </p>
        </div>

        <ChangingFooter className="unimet" footerstate="unimet" />
      </div>
    </>
  );
};

export default HomeEmployee;
