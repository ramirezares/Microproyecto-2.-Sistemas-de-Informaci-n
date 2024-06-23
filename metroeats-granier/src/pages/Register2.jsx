//Importacion Firebase
import { database } from "../firebase.js";
import { setDoc, doc } from "firebase/firestore";

//Importacion React // ReactBootStrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Register.style.css";
import { useState } from "react";

//Importacion de Componentes
import OcupationArea from "../components/OcupationArea";
import { useAuth, AuthProvider } from "../authContext";

function Register2() {
    //constante que contiene todas lsa funciones de registro etc etc

    const auth = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [ocupation, setOcupation] = useState("");
    const [department, setDepartment] = useState("");

    const foodPreferences = () => {
        let veganCheck = document.getElementById("veganCheck").checked;
        let vegetarianCheck = document.getElementById("vegetarianCheck").checked;
        let glutenFreeCheck = document.getElementById("glutenFreeCheck").checked;
    
        // console.log("vegan variable " + veganCheck);
        // console.log("vegeta variable " + vegetarianCheck);
        // console.log("gluten variable " + glutenFreeCheck);
    
        return [veganCheck, vegetarianCheck, glutenFreeCheck];
    };
    const handleOcupationChange = (value) => {
    console.log("Ocupation changed to:", value);
    setOcupation(value);
    };
    const handleDepartmentChange = (value) => {
    console.log("Department changed to:", value);
    setDepartment(value);
    };


    const handleRegistration = async (e) => {
        e.preventDefault();
        auth.register(email, password)
        console.log("messi")
        try {
            const user = auth.currentUser;
        
            console.log("llegue");
            console.log(ocupation);
            console.log(department);
            
            if (user) {
                await setDoc(doc(database, "Users", user.uid), {
                email: user.email,
                firstName: firstName,
                lastName: lastName,
                phone: phone,
                preferences: foodPreferences(),
                ocupation: ocupation,
                depCareer: department, /**Hay que ver como se maneja este */
                });
            }
            console.log("Usuario creado exitosamente");

        } catch (error) {  //COLOCAR POP CON ERROR
            console.log("Por ahi no es");
            console.log(error.message);
            }
        };
    







return (
<>
<AuthProvider>
    <div className="container">
    <div className="row">
        <img src="/MetroEats.png" id="unimetLogo1" alt="Logo Unimet" />
    </div>
    <div className="row">
        <div className="col-md-5">
        <div className="card card-body shadow-lg" id="input">
            <h4>Regístrate en UNIMET MetroEats</h4>
            <form onSubmit={handleRegistration}>
            <Form.Group>
                {/*Datos Basicos*/}
                <div className="mb-3">
                <input
                    placeholder="Nombre"
                    type="text"
                    className="form-control"
                    id="firstName"
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                />
                </div>
                <div className="mb-3">
                <input
                    placeholder="Apellido"
                    type="text"
                    className="form-control"
                    id="lastName"
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />
                </div>
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
                <div className="input-group has-validation">
                    <span className="input-group-text" id="inputGroupPrepend">
                    +58
                    </span>
                    <input
                    placeholder="Teléfono"
                    type="tel"
                    className="form-control"
                    id="phone"
                    aria-label="Teléfono"
                    onChange={(e) => setPhone(e.target.value)}
                    pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                    required
                    />
                </div>
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

                {/*Ocupacion*/}
                <div className="mb-3">
                <OcupationArea
                    onOcupationChange={(value) =>
                    handleOcupationChange(value)
                    }
                    onDepartmentChange={(value) =>
                    handleDepartmentChange(value)
                    }
                />
                </div>

                {/*preferencias alimentarias*/}
                <div className="mb-3">
                <div className="p">
                    <p>Preferencias alimentarias</p>
                </div>

                <div className="input-group mb-3">
                    <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="veganCheck"
                    />
                    <label className="form-check-label">Veganismo</label>
                    </div>

                    <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="vegetarianCheck"
                    />
                    <label className="form-check-label">
                        Vegetarianismo
                    </label>
                    </div>

                    <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="glutenFreeCheck"
                        />
                        <label className="form-check-label">
                        Libre de Gluten
                        </label>
                    </div>
                    </div>
                </div>

                {/*Boton*/}
                <div className="row">
                    <Button
                    className="boton"
                    type="submit"
                    variant="primary"
                    value="Submit"
                    >
                    Registrarse
                    </Button>
                </div>
                </Form.Group>
            </form>
            </div>
        </div>

        {/*Registro rapido*/}
        <div className="col-md-4">
            <div className="card card-body shadow-lg" id="input">
            <h4>Registro Rapido</h4>
            <div>
                <div>
                <Button className="boton" variant="primary">
                    Google
                </Button>
                </div>
                <div>
                <Button className="boton" variant="primary">
                    Facebook
                </Button>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
</AuthProvider>
    </>
);
}

export default Register2;
