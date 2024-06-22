import "./Register.style.css";
import { useState } from "react";
import ChangingButton from "../components/ChangingButton"
import ChangingFooter from "../components/ChangingFooter"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth , database} from "../firebase";
import { setDoc, doc} from "firebase/firestore"; 
import Form from 'react-bootstrap/Form'

/**/
function Register(){

    const[email, setEmail]=useState("");
    const[password, setPassword]=useState("");
    const[firstName, setFirstName]=useState("");
    const[lastName, setLastName]=useState("");
    const[phone, setPhone]=useState("");
    
    const[ocupation, setOCupation]=useState("");
    const[department, setDepartment]=useState("");
    const[foodPreferences, setFoodPreferences]=useState("");
    const preferences= ()=>{
        var veganCheck=document.getElementById("veganCheck").value;
        var vegetarianCheck=document.getElementById("vegetarianCheck").value;
        var glutenFreeCheck=document.getElementById("glutenFreeCheck").value;
        return [veganCheck,vegetarianCheck,glutenFreeCheck];
    }
    const ocup=()=>{{/*me falta esto*/}
        return null
    }
    const depart_career= ()=>{{/*me falta esto*/}
        return null
    }
    

    const handleRegistration = async(e)=> {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            const user= auth.currentUser();
            setFoodPreferences(preferences);
            setDepartment(depart_career);{/*me falta esto*/}
            setOCupation(ocup);{/*me falta esto*/}
            console.log(user);
            if (user){
                await setDoc(doc(database, "Users", user.uid, {
                    email: user.email,
                    firstName: firstName,
                    lastName: lastName,
                    phone: phone,
                    ocupation: ocupation,
                    depart_career:department,
                    preferences: foodPreferences
                }))
            }
            console.log("Usuario creado exitosamente");
        } catch (error) {
            console.log(error.message);
        }
    };

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
                        <form onSubmit={handleRegistration}>
                            {/*Datos Basicos*/}
                            <div className="mb-3">
                                <input 
                                    placeholder="Nombre" 
                                    type="text" className="form-control" 
                                    id="firstName" onChange={(e)=> setFirstName(e.target.value)} 
                                    required/>
                            </div>
                            <div className="mb-3">            
                                <input 
                                    placeholder="Apellido" 
                                    type="text" 
                                    className="form-control" 
                                    id="lastName" 
                                    onChange={(e)=> setLastName(e.target.value)} 
                                    required/>
                            </div>
                            <div className="mb-3">            
                            <input 
                                placeholder="Correo Electrónico" 
                                type="email" 
                                className="form-control" 
                                id="email" 
                                aria-label="Correo Electrónico"
                                onChange={(e)=> setEmail(e.target.value)} 
                                required/>
                            </div>
                            <div className="mb-3">            
                                <input 
                                    placeholder="Teléfono" 
                                    type="tel" 
                                    className="form-control" 
                                    id="phone" 
                                    aria-label="Teléfono"
                                    onChange={(e)=> setPhone(e.target.value)} 
                                    required/>
                            </div>
                            <div className="mb-3">            
                                <input 
                                    placeholder="Contraseña" 
                                    type="password" 
                                    className="form-control" 
                                    id="password" 
                                    aria-label="Contraseña"
                                    onChange={(e)=> setPassword(e.target.value)} 
                                    required/>
                            </div>

                            {/*Ocupacion*/}
                            <div className="mb-3">
                                <div className="p"><p>Ocupación en la Universidad Metropolitana</p>
                                </div>
                                <div className="row">
                                    <div className="col-md">
                                        <Form.select classNassme="form-select" id="ocupation" required>
                                                <option selected>Ocupación</option>
                                                <option value="estudiante">Estudiante</option>
                                                <option value="docente">Docente</option>
                                                <option value="administrativo">Administrativo</option>
                                        </Form.select>
                                    </div>
                                    <div className="col-md">
                                        <Form.select className="form-select" id="dep_career" required>
                                                <option selected>Departamento/Carrera</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.select>
                                    </div>
                                    
                                </div>
                            </div>
                            {/*preferencias alimentarias*/}
                            <div className="mb-3">
                                <div className="p"><p>Preferencias alimentarias</p></div>
                                <div className="input-group mb-3">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value={true} id="veganCheck" />
                                        <label className="form-check-label">Veganismo</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value={true} id="vegetarianCheck" />
                                        <label className="form-check-label">Vegetarianismo</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value={true} id="glutenFreeCheck" />
                                        <label className="form-check-label">Libre de Gluten</label>
                                    </div>
                                </div>
                            </div>  
                            <div className="row"><button type="submit" value={handleRegistration} className="btn btn-primary">Registrarse</button ></div>
                        </form>  

                        <div className="loginText">¿Tienes cuenta?</div>
                        <button  type="submit" className="btn btn-primary" >Iniciar Sesion</button>
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

export default Register;