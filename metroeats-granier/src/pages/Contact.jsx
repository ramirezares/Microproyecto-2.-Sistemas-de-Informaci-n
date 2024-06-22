import React from "react";
import ChangingNavBar from "../components/ChangingNavBar";
import ChangingFooter from "../components/ChangingFooter";
import "./Contact.style.css";

const Contact = () => {
  return (
    <>
      <ChangingNavBar navstate="user" />
      <h1>Informacion de contacto</h1>
      <div className="contanier">
        <div className="information">
          <div>
            <p>@granierVzla</p>
          </div>
          <div>
            <p>contacto@graniervzla.com</p>
          </div>
          <div style={{ height: 100, backgroundColor: "blue" }}>
            <img src="/Facebook.png" alt="" />
            <img style={{padding: 10}} src="/Instagram.png" alt="" />
            <img src="/Twitter.png" alt="" />
            <p>+58 424 568 9898</p>
          </div>
        </div>
        <div className="message">
          <p>
            Podras contactarnos a traves de cualquiera de los siguientes medios
            de comunicacion, te atenderemos a la brevedad
          </p>
        </div>
      </div>
      <ChangingFooter footerstate="unimet" />
    </>
  );
};

export default Contact;
