import "./HomeEmployee.style.css";
import ChangingFooter from "../components/ChangingFooter"
import React from "react"
import ChangingNavBar from "../components/ChangingNavBar";

const AboutUs = () => { 
  return(
    <>
    <ChangingNavBar navstate="user"/>

    <ChangingFooter footerstate="unimet" />
    </>
  )
}

export default AboutUs;