import React from "react"
import ChangingButton from "../components/ChangingButton"
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