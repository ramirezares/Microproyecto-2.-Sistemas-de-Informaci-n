import ChangingFooter from "../components/ChangingFooter";
import ChangingNavBar from "../components/ChangingNavBar";
import './InProgress.style.css';
import NewNavBarEmployeeGranier from "../components/NewNavBarEmployeeGranier";
import NewFooterUnimet from "../components/NewFooterUnimet";

function InProgress () {
    return (
        <>
        <NewNavBarEmployeeGranier/>
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