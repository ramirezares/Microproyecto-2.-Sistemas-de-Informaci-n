import "./Login.style.css";
import { useState } from "react";
import ChangingButton from "../components/ChangingButton"
import ChangingFooter from "../components/ChangingFooter"

//importando los modeulos de firebase
//import appFirebase from "../Firebase";
//import { getAuth, onAuthStateChanged } from "firebase/auth";

//const auth= getAuth(appFirebase);
function LogIn() {
    const [email, setEmail]= useState(null);
    const [password, setPassword]= useState(null);

    console.log(email + password + setPassword +    setEmail)
    /*const [user, setUser]= useState(null);
    onAuthStateChanged(auth,(firebaseUser) => { 
        if (firebaseUser){
            setUser(firebaseUser);
        }else{
            setUser(null);
        }})*/

    return(
<>
    <div className = "container">
        <div className="row">
            <div className="col-md-6">
                    < img src="../../public/MetroEats.png" className="unimetLogo" alt="Logo Unimet" />
            </div>
            <div className="col-md-4">
                <div className="card card-body shadow-lg" id="input">
                    <h3>Iniciar Sesión en UNIMET MetroEats</h3>
                    <form>
                        <div className="mb-3">
                            <input placeholder="Correro Electrónico" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>

                        <div className="mb-3">            
                            <input placeholder="Contraseña" type="password" className="form-control" id="exampleInputPassword1" />
                        </div>

                        <div className="mb-3">
                                <div ><p className="p">Tipo de Cuenta</p>
                                </div>
                                <div className="row">
                                    <div className="col-md" id="check1">
                                        <div className="form-check">
                                            <input className="form-check-input" name="tipo usuario"  type="radio" id="unimetUser" />
                                            <label className="form-check-label" >Usuario Unimet</label>
                                        </div>
                                    </div>
                                    <div className="col-md" id="check2">
                                        <div className="form-check">
                                            <input className="form-check-input" name="tipo usuario" type="radio"  id="foodManager" />
                                            <label className="form-check-label" >Local de Comida</label>
                                            </div>
                                    </div>
                                </div>
                        </div>
                    </form>



                    <button type="submit" className="btn btn-primary">Inciar Sesión</button>
                    <br />
                    <h3>Inicio Rapido de Sesión</h3>
                    <ChangingButton text="google" link="" style=""></ChangingButton>
                    <br/>
                    <ChangingButton text="Facebook" link="" style=""></ChangingButton>
                    <div className="registerText">¿No tienes cuenta?</div>
                    <button  type="submit" className="btn btn-primary">Crear nueva Cuenta</button>
                

                </div>
            </div>
            

                
        </div>
    </div>
    <ChangingFooter footerstate="unimet" />
</>
)
}

export default LogIn;