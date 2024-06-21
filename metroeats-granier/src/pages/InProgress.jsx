import ChangingFooter from "../components/ChangingFooter";
import ChangingNavBar from "../components/ChangingNavBar";
import './InProgress.style.css';

function InProgress () {
    return (
        <>
            <ChangingNavBar navstate="user"/>
            <div className="container">
                <h1 className="firstLine">Lo sentimos</h1>
                <h1 className="secondLine">Esta página se encuentra en construcción.</h1>
                <img src="https://ps.w.org/under-construction-page/assets/screenshot-5.png?rev=1840052" alt="construccionPrueba"/>
            </div>
            <ChangingFooter footerstate="granier"/>
        </>
    )
}

export default InProgress;