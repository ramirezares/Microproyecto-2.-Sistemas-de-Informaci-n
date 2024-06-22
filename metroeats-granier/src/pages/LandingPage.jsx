import ChangingNavBar from "../components/ChangingNavBar";
import ChangingFooter from "../components/ChangingFooter";
import ButtomImg from "../ui/ButtomImg";
import './LandingPage.style.css';

function LandingPage () {
    
    return (
        <>
            <ChangingNavBar navstate="offline"/>
                <div className="banner">
                    <img className="first" src="../../public/MetroEatsEslogan.png" />
                    <img className="second" src="../../public/Thinkingfood.png" />
                </div>
                <h2 className="welcome">¿Qué deseas para hoy?</h2>
                <div className="rest1">
                    <ButtomImg link="/register" backgroundImage1="https://popmenucloud.com/dcvnzyiq/5e95d0f9-ea39-43df-a95f-09c36a424a00.png" backgroundImage2="../../public/Bakeryproducts.png"/>
                </div>
                <div className="rest2">
                    <ButtomImg backgroundImage1="https://popmenucloud.com/dcvnzyiq/5e95d0f9-ea39-43df-a95f-09c36a424a00.png" backgroundImage2="../../public/Bakeryproducts.png"/>
                </div>
            <ChangingFooter footerstate="granier"/>
        </>
    )
}

export default LandingPage;