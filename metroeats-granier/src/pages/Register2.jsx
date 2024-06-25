//Importacion Firebase
import { database } from "../firebase.js";
import { setDoc, doc } from "firebase/firestore";
import { getAdditionalUserInfo } from "firebase/auth";

//Importacion React // ReactBootStrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Register.style.css";
import { useState } from "react";
import "./Register.style.css";

//Importacion de Componentes
import OcupationArea from "../components/OcupationArea";
//Importaciones React
import { useAuth } from "../AuthContextConst.jsx";

import { useNavigate } from "react-router-dom";
import PopUp from "../components/PopUp.jsx";

//////////////////////////////////////////////////////////////

function Register2() {
  //constante que contiene todas las funciones de registro etc etc

  const auth = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [ocupation, setOcupation] = useState("");
  const [department, setDepartment] = useState("");
  const [succeed, setSucceed] = useState(null);
  const [error, setError] = useState(null);

  async function handleRegistrationWithGoogle(credential) {
    try {
      const user = credential.user;
      const userInfo = getAdditionalUserInfo(credential);
      console.log(userInfo.profile);
      // Extract the necessary information from the Google user object
      const { name, email, family_name, given_name } = userInfo.profile;

      // Save the user information to Firebase
      await setDoc(doc(database, "Users", user.uid), {
        email: email,
        firstName: given_name,
        lastName: family_name,
        phone: "",
        preferences: [],
        ocupation: "",
        depCareer: "",
      });

      console.log("Usuario creado exitosamente");
      console.log(name);
    } catch (error) {
      console.log("Error registering user with Google:", error.message);
    }
  }

  const handleGoogle = async (e) => {
    e.preventDefault();
    //se va a llamar la cuestion
    const credential = await auth.loginWithGoogle();
    handleRegistrationWithGoogle(credential);
  };

  const handleFacebook = async (e) => {
    e.preventDefault();
    try {
      const userResult = await auth.loginWithFacebook();
      const user = userResult.user;
      const userInfo = getAdditionalUserInfo(userResult);
      console.log(userInfo.profile);
      if (user) {
        const { name, email, first_name, last_name } = userInfo.profile;
        // Guardar a; usuario en firebase
        await setDoc(doc(database, "Users", user.uid), {
          email: email,
          firstName: first_name,
          lastName: last_name,
          phone: "",
          preferences: [],
          ocupation: "",
          depCareer: "",
        });
        console.log("Usuario creado exitosamente");
        console.log(name);
      } else {
        console.log("Error getting user information");
      }
    } catch (error) {
      console.log("Error registering user with Facebook:", error.message);
    }
  };

  const foodPreferences = () => {
    let veganCheck = document.getElementById("veganCheck").checked;
    let vegetarianCheck = document.getElementById("vegetarianCheck").checked;
    let glutenFreeCheck = document.getElementById("glutenFreeCheck").checked;

    // console.log("vegan variable " + veganCheck);
    // console.log("vegeta variable " + vegetarianCheck);
    // console.log("gluten variable " + glutenFreeCheck);

    return {
      vegan: veganCheck,
      vegetarian: vegetarianCheck,
      glutenFree: glutenFreeCheck,
    };
  };
  const handleOcupationChange = (value) => {
    console.log("Ocupation changed to:", value);
    setOcupation(value);
  };
  const handleDepartmentChange = (value) => {
    console.log("Department changed to:", value);
    setDepartment(value);
  };

  const manageOcupationArea = (ocupation) => {
    return ocupation ? ocupation : "No especificado";
  };

  const handleCloseSucceed = () => {
    setSucceed(null);
    navigate("/");
  };

  const handleCloseError = () => {
    setError(null);
    navigate(0);
  };

  const navigate = useNavigate();

  const handleRegistration = async (e) => {
    e.preventDefault();
    const domainRegex = /(correo\.unimet\.edu\.ve|unimet\.edu\.ve)$/;

    if (domainRegex.test(email)) {
      try {
        console.log("Email is valid");
        auth.register(email, password);
        const user = auth.currentUser;
        console.log(ocupation);
        console.log(department);
        if (user) {
          await setDoc(doc(database, "Users", user.uid), {
            email: user.email,
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            preferences: foodPreferences(),
            ocupation: manageOcupationArea(ocupation),
            depCareer: manageOcupationArea(department),
          });
        }
        console.log("Usuario creado exitosamente");
        setSucceed("Usuario registrado exitosamente.");
      } catch (error) {
        //COLOCAR POP CON ERROR
        console.log("Error");
        console.log(error.message);
        setError(error.message);
        if (error.code === "auth/email-already-in-use") {
          setError("El correo ya está registrado");
        } else if (error.code === "auth/weak-password") {
          setError("La contraseña debe tener al menos 6 caracteres");
        }
      }
    } else {
      /**COLOCAR POPUP ACA */
      console.log("Email is not valid");
      console.log("Correo invalido");
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <img
            src="/MetroEats.png"
            id="unimetLogo1"
            alt="Logo Unimet"
            onClick={() => {
              navigate("/");
            }}
          />
        </div>
        <div className="row">
          {/*Registro Correo */}
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
              <div className="row">
                <div className="mb-3">
                  <h4>Registro Rapido</h4>
                </div>
              </div>
              <div className="mb-3">
                <div className="row" id="b2">
                  <Button
                    className="boton"
                    variant="primary"
                    onClick={handleGoogle}
                  >
                    Google
                  </Button>
                </div>

                <div className="row" id="b1">
                  <Button
                    className="boton"
                    variant="primary"
                    onClick={handleFacebook}
                  >
                    Facebook
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {succeed && <PopUp text={succeed} onClose={handleCloseSucceed} />}
        {error && <PopUp text={error} onClose={handleCloseError} />}
      </div>
    </>
  );
}

export default Register2;
