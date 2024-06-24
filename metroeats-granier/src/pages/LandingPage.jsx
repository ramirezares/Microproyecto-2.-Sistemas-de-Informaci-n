import ButtonImg from "../components/ButtonImg";
import "./LandingPage.style.css";
//import NewNavBarOffline from "../components/NewNavBarOffline";
import NewFooterGranier from "../components/NewFooterGranier";
import ChangingNavBar from "../components/ChangingNavBar";

const LandingPage = () => {
  return (
    <>
      <ChangingNavBar />
      <div className="banner">
        <img className="first" src="/MetroEatsEslogan.png" />
        <img className="second" src="/Thinkingfood.png" />
      </div>
      <h2 className="welcome">¿Qué deseas para hoy?</h2>
      <div className="rest1">
        <ButtonImg
          link="/granier/contact"
          backgroundImage1="https://popmenucloud.com/dcvnzyiq/5e95d0f9-ea39-43df-a95f-09c36a424a00.png"
          backgroundImage2="/Bakeryproducts.png"
        />
      </div>
      <div className="rest2">
        <ButtonImg
          link="/inprogress"
          backgroundImage1="/Kioskobelievelogo.jpg"
          backgroundImage2="/kioskobelieveunimet.jpg"
        />
      </div>
      <NewFooterGranier/>
    </>
  );
};

export default LandingPage;
