import React from "react";
import ChangingNavBar from '../components/ChangingNavBar';
import NewFooterUnimet from "../components/NewFooterUnimet";
import './InProgress.style.css';

function InProgress () {
    return (
        <>
        <ChangingNavBar/>
        <h1 className="firstLine">Lo sentimos</h1>
        <h1 className="secondLine">Esta página se encuentra en construcción.</h1>
        <div className="construction">
            <img src="/Construction.png" />    
        </div>
        <NewFooterUnimet/>
        </>
    )
}

export default InProgress;