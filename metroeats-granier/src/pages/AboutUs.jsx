import "./HomeEmployee.style.css";
import ChangingButton from "../components/ChangingButton"
import ChangingFooter from "../components/ChangingFooter"
import Img from "../components/Img";
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

export default HomeEmployee;