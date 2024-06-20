import ChangingFooter from "../components/ChangingFooter";
import ButtomImg from "../ui/ButtomImg";
import ChangingNavBar from "../components/ChangingNavBar";
import './LandingPage.style.css';
// import { useState, useEffect } from "react";

function LandingPage () {
    return (
        <>
            <ChangingNavBar navstate="user"/>
            <div className="container">
                {/* <div className="welcomeImg" /> */}
                <h2 className="welcome">¿Qué deseas para hoy?</h2>
                <div className="rest1">
                    <ButtomImg />
                </div>
                <div className="rest2">
                    <ButtomImg />
                </div>
            </div>
            <ChangingFooter footerstate="granier"/>
        </>
    )
} 

export default LandingPage;