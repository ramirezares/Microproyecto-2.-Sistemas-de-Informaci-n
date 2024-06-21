import "./Register.style.css";
import { useState } from "react";
import ChangingButton from "../components/ChangingButton"
import ChangingFooter from "../components/ChangingFooter"

//importando los modeulos de firebase
/*import appFirebase from "../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";


const auth= getAuth(appFirebase);*/
/**/
function Register(){
    const[email, setEmail]=useState("");
    const[password, setPassword]=useState("");
    const[firstName, setFirstName]=useState("");
    const[lastName, setLastName]=useState("");
    const[phone, setPhone]=useState("");
    /* const[ocupation, setOCupation]=useState("");
    const[department, setDepartment]=useState("");
    const[foodPreferences, setFoodPreferences]=useState("");*/
    console.log(email + password + firstName + lastName + phone + setEmail + setPassword + setFirstName + setLastName + setPhone)
    return(
<>
<div className = "container">
        <div className="row">
            < img src="../../public/MetroEats.png" id="unimetLogo1" alt="Logo Unimet" />
        </div>
        <div className="row">        
            <div className="col-md-5">
                <div className="card card-body shadow-lg" id="input">
                        <h4>Regístrate en UNIMET MetroEats</h4>
                        <form>
                        <div className="mb-3">
                            <input placeholder="Nombre" type="text" className="form-control" id="firstName" onChange={(e)=> setFirstName(e.target.value)}/>
                        </div>
                        <div className="mb-3">            
                            <input placeholder="Apellido" type="text" className="form-control" id="lastName" onChange={(e)=> setLastName(e.target.value)}/>
                        </div>
                        <div className="mb-3">            
                        <input placeholder="Correo Electrónico" type="email" className="form-control" id="email" onChange={(e)=> setEmail(e.target.value)}/>
                        </div>
                        <div className="mb-3">            
                            <input placeholder="Teléfono" type="phone" className="form-control" id="phone" onChange={(e)=> setPhone(e.target.value)}/>
                        </div>
                        <div className="mb-3">            
                            <input placeholder="Contraseña" type="password" className="form-control" id="password" onChange={(e)=> setPassword(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <div className="p"><p>Ocupación en la Universidad Metropolitana</p>
                            </div>
                            <div className="row">
                                <div className="col-md">
                                    <select className="form-select" id="0mmtre" required>
                                            <option selected>Ocupación</option>
                                            <option value="1">Estudiante</option>
                                            <option value="2">Docente</option>
                                            <option value="3">Administrativo</option>
                                        </select>
                                </div>
                                <div className="col-md">
                                    <select className="form-select" id="floatingSelectGrid">
                                            <option selected>Departamento/Carrera</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                </div>
                                
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="p"><p>Preferencias alimentarias</p></div>
                            <div className="input-group mb-3">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="veganCheck" />
                                    <label className="form-check-label">Veganismo</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="vegetarianCheck" />
                                    <label className="form-check-label">Vegetarianismo</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="glutenFreeCheck" />
                                    <label className="form-check-label">Libre de Gluten</label>
                                </div>
                            </div>
                        </div>
                        </form>  

                        <button type="submit" className="btn btn-primary">Registrarse</button >
            
                        <div className="loginText">¿Tienes cuenta?</div>
                        <button  type="submit" className="btn btn-primary">Iniciar Sesion</button>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card card-body shadow-lg" id="input">
                    <h4>Registro Rapido</h4>
                    <ChangingButton text="google" link="" style=""></ChangingButton>
                    <br/>
                    <ChangingButton text="Facebook" link="" style=""></ChangingButton>
                    
                

                </div>
            </div>
            

                
        </div>
    </div>


    <ChangingFooter footerstate="unimet" />
</>
)
}

export default Register