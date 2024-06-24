import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import LandingPage from './pages/LandingPage';
import Contact from './pages/Contact';
import InProgress from './pages/InProgress';
import AboutUs from './pages/AboutUs';
//import HomeEmployee from './pages/HomeEmployee';
//import PaginaPrueba from "./pages/PaginaPrueba";
import {AuthProvider} from "./AuthContext.jsx"
import Register2 from "./pages/Register2.jsx";

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

  window.addEventListener("beforeunload", (ev) =>{
    AuthProvider.logout
  });

  return (
    <Router>
      <Routes>
        <Route path="" element={<AuthProvider><LandingPage/></AuthProvider>}/>
        <Route path="/register" element={<AuthProvider><Register /></AuthProvider>} />
        <Route path="/login" element={<AuthProvider><Login /></AuthProvider>} />
        <Route path="/granier/contact" element={<AuthProvider><Contact/></AuthProvider>}/>
        <Route path="/inprogress" element={<InProgress/>}/>
        <Route path="/aboutus" element={<AuthProvider><AboutUs /></AuthProvider>} />
        <Route path="/Register2" element={<AuthProvider><Register2 /></AuthProvider>} />
        {/*
        
        <Route element={<ProtectedRoute canActivate={gmail}> Si existe gmail
        <Route path="/register/complete" element={<CompleteRegister/>}/>
        

        <Route element={<ProtectedRoute canActivate={user}}> Que este activo la sesion
        guardando en local storage cuando inicie sesion
        <Route path="/granier/aboutUs" element={<AboutUs/>}/>
          CONTACTO
        </Route>

        Route element={<ProtectedRoute canActivate={employee}> Que sea empleado

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
