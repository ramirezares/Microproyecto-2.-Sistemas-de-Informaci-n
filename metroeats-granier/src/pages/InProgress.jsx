import ChangingFooter from "../components/ChangingFooter";
import ChangingNavBar from "../components/ChangingNavBar";
import './InProgress.style.css';

function InProgress () {
    return (
        <>
        <ChangingNavBar navstate="user"/>
        <h1 className="firstLine">Lo sentimos</h1>
        <h1 className="secondLine">Esta página se encuentra en construcción.</h1>
        <div className="construction">
            <img src="../../public/Construction.png" />    
        </div>
        <ChangingFooter footerstate="granier"/>
        </>
    )
}

export default InProgress;