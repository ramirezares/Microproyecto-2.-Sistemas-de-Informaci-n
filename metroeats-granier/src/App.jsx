//import { useState } from "react";
import ChangingNavBar from "./components/ChangingNavBar";
import ChangingFooter from "./components/ChangingFooter";

function App() {
  let navstate = "offline";
  let footerstate = "unimet";

  return(
    <>
    <ChangingNavBar navstate={navstate} />
    <ChangingFooter footerstate={footerstate} />
    </>
  );
}

export default App;
