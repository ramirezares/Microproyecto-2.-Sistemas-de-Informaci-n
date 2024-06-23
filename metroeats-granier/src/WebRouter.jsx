import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import LandingPage from './pages/LandingPage';
import Contact from './pages/Contact';
import InProgress from './pages/InProgress';
import AboutUs from './pages/AboutUs';
import HomeEmployee from './pages/HomeEmployee';
import PaginaPrueba from "./pages/PaginaPrueba";

//import { useLocalStorage } from "react-use";
/*
import CompleteRegister from './pages/CompleteRegister';
import HomeEmployee from './pages/HomeEmployee';
*/

const WebRouter = () => {
  
  /*
  const [user,setUser] = useLocalStorage("user")
  const [gmail,setGmail] = useLocalStorage("gmail")
  const [employee,setEmployee] = useLocalStorage("employee")
  */

  return (
    <Router>
      <Routes>
        <Route path="" element={<LandingPage/>}/>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/granier/contact" element={<Contact/>}/>
        <Route path="/inprogress" element={<InProgress/>}/>
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/granier/homeEmployee" element={<HomeEmployee/>}/>
        <Route path="/prueba" element={<PaginaPrueba/>}/>
        {/*
        <Route path="/register/complete" element={<CompleteRegister/>}/>
        */}
      </Routes>
      
    </Router>
  );
};

export default WebRouter;
