import React from "react"
import ChangingFooter from "../components/ChangingFooter"
import ChangingNavBar from "../components/ChangingNavBar";
import "./AboutUs.style.css";

const AboutUs = () => { 
  return(
    <>
    <ChangingNavBar navstate="user"/>

    <ChangingFooter footerstate="unimet" />
    </>
  )
}

export default AboutUs;