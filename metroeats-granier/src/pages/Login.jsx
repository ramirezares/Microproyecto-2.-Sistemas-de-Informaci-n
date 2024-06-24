//Importacion React
import "./Login.style.css";
import { useState } from "react";
//Importacion Componentes
import { useAuth } from "../AuthContextConst.jsx";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

//Importacion lectura de tokens
import { jwtDecode } from "jwt-decode";

//Importacion Firebase
//import appFirebase from "../Firebase";
//import { getAuth, onAuthStateChanged } from "firebase/auth";

//const auth= getAuth(appFirebase);

//Importacion de Google
//import {gapi} from "gapi-script";
//import { google } from 'googleapis';
import { GoogleLogin } from "@react-oauth/google";

///////////////////////////////////////////////////////////////

const IDC =
"622416989618-q90npce1r8djjia0msugksigean0c3ld.apps.googleusercontent.com";
const onerror = () => {
console.log("Login Failed");
};
const onsucceeds = (credentialResponse) => {
  const decoded = jwtDecode(credentialResponse?.credential);
  console.log(decoded);
};

function LogIn() {
    const auth = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    console.log(email + " " + password);

    const handleLogin = async (e) => {
        e.preventDefault();
        auth.login(email, password);
    };

    return (
        <>
        <div className="container">
            <div className="row">
            <div className="col-md-4">
                <img
                src="../../public/MetroEats.png"
                className="unimetLogo"
                alt="Logo Unimet"
                width="50"
                />
            </div>
            <div className="col-md-4">
                <div className="card card-body shadow-lg" id="input">
                <h4>Iniciar Sesión en UNIMET MetroEats</h4>
                {/*Inicio de SesionCoeeo */}
                <form onSubmit={handleLogin}>
                    <Form.Group>
                        <div className="mb-3">
                            <input
                            placeholder="Correo Electrónico"
                            type="email"
                            className="form-control"
                            id="email"
                            aria-label="Correo Electrónico"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            />
                        </div>

                        <div className="mb-3">
                            <input
                            placeholder="Contraseña"
                            type="password"
                            className="form-control"
                            id="password"
                            aria-label="Contraseña"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            />
                            <Form.Text id="passwordHelpBlock" muted>
                            La contraseña debe tener más de 6 carácteres.
                            </Form.Text>
                        </div>

                        {/*Boton*/}
                        <div className="row">
                            <Button
                            className="boton"
                            type="submit"
                            variant="primary"
                            value="Submit"
                            >
                            Inicio de Sesión
                            </Button>
                        </div>
                    </Form.Group>
                </form>

                {/*Inicio de Sesion Rapido */}
                <div className="mb-3">
                    <h3>Inicio Rapido de Sesión</h3>
                </div>

                <div className="mb-3" id="googleBotton">
                    <GoogleLogin
                    clientId={IDC}
                    buttonText="Iniciar Sesión con Google"
                    render={(renderProps) => (
                        <button
                        className="btn btn-primary"
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                        ></button>
                    )}
                    onSuccess={onsucceeds}
                    onError={onerror}
                    />

                    {/*if (credentialResponse) {
                                Aqui hay que agarar los datos de ese diccionario para encontrar en la base de datos al usuario y colocarlo como usuario principal en el local storage
                            }else{ reiniciar pagina }*/}
                </div>

                <div className="mb-3">
                <Button className="boton" variant="primary">
                    Facebook
                </Button>
                </div>


                {/**Boton de redireccion a register */}
                <div className="registerText">¿No tienes cuenta?</div>
                <button type="submit" className="btn btn-primary">
                    Crear nueva Cuenta
                </button>
                </div>
            </div>
            </div>
        </div>
        </>
    );
}

export default LogIn;
