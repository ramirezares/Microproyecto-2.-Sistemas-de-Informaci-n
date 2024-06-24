import "./Register.style.css";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, database } from "../firebase.js";
import { setDoc, doc } from "firebase/firestore";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import OcupationArea from "../components/OcupationArea";
import { useNavigate } from "react-router-dom";
import PopUp from "../components/PopUp.jsx";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [ocupation, setOcupation] = useState("");
  const [department, setDepartment] = useState("");
  const [succeed, setSucceed] = useState(null);
  const [error, setError] = useState(null);

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

  const manageOcupationArea = (ocupation) => {
    return ocupation ? ocupation : "No especificado";
  };

  const handleRegistration = async (e) => {
    console.log("Registrando usuario");
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
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
          ocupation: manageOcupationArea(ocupation),
          depCareer:
            manageOcupationArea(
              department
            ) /**Hay que ver como se maneja este */,
        });
      }
      //AQUI DEBO ACTIVAR EL POPUP
      console.log("Usuario creado exitosamente");
      setSucceed("Usuario registrado exitosamente.");
    } catch (error) {
      console.log("Por ahi no es");
      console.log(error.message);
      setError(error.message);
      if (error.code === "auth/email-already-in-use") {
        setError("El correo ya está registrado");
      } else if (error.code === "auth/weak-password") {
        setError("La contraseña debe tener al menos 6 caracteres");
      }

      //COLOCAR POP UP CON ERROR
    }
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

  return (
    <>
      <div className="container">
        <div className="row">
          <img
            id="unimetLogo"
            src="/MetroEats.png"
            alt="Logo Unimet"
            onClick={() => {
              navigate("/");
            }}
          />
        </div>
        <div className="row">
          <div className="mx-auto col-md-5">
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
                      La contraseña debe tener 6 carácteres como mínimo.
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
          <div className="mx-auto col-md-4">
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
        {succeed && <PopUp text={succeed} onClose={handleCloseSucceed} />}
        {error && <PopUp text={error} onClose={handleCloseError} />}
      </div>
    </>
  );
}

export default Register;
