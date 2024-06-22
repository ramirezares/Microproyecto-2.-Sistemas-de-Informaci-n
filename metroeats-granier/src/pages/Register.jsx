//Import de CSS
import "./Register.style.css";

//Import de UseState
import { useState } from "react";

//Import Base de Datos // Base de Datos
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, database } from "../firebase.js";
import { setDoc, doc } from "firebase/firestore";

//Import Componentes

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
/*import ChangingFooter from "../components/ChangingFooter"
import ChangingButton from "../components/ChangingButton"*/

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [ ocupation, setOcupation]= useState("");
  const [ department, setDepartment]= useState("");
  
  const careers=[    
    {id:1, name: "Ing. de Sistema"},
    {id:2, name: "Ing. Quimica"},
    {id:3, name: "Ing. Electrica"},
    {id:4, name: "Ing. Mecanica"},
    {id:5, name: "Ing. Produccion"},
    {id:6, name: "Ing. Civil"}
    ];
    const depA=[
      {id:1, name: "Administracion"},
      {id:2, name: "Finanzas"},
      {id:3, name: "Recursos Humanos"},
      {id:4, name: "Mercadeo"},
      {id:5, name: "Sistemas"},
      {id:6, name: "Produccion"}
      ];

    const depD=[
      {id:1, name: "Ciencias Sociales"},
      {id:2, name: "Ciencias Naturales"},
      {id:3, name: "Ciencias Economicas y Administrativas"},
      {id:4, name: "Ingenieria"},
      {id:5, name: "Humanidades"}
      ];
  var arrayList = [];
  const depCareerForm= (() => {
    var type = ocupation;
    
    if (type == "Estudiante") {
      arrayList=careers;
      return arrayList}
    else if (type == "Empleado") {
      arrayList=depA;
      return arrayList;}
    else if (type == "Docente") {
      arrayList=depD;
      return arrayList}
    else{return [];}
  });

  const foodPreferences=(() => {
      let veganCheck = document.getElementById("veganCheck").checked;
      let vegetarianCheck = document.getElementById("vegetarianCheck").checked;
      let glutenFreeCheck = document.getElementById("glutenFreeCheck").checked;

      console.log("vegan variable " + veganCheck);
      console.log("vegeta variable " + vegetarianCheck);
      console.log("gluten variable " + glutenFreeCheck);

      return [veganCheck, vegetarianCheck, glutenFreeCheck];
    });

  

  const handleRegistration = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;

      console.log(user);

      if (user) {
        await setDoc(doc(database, "Users", user.uid), {
          email: user.email,
          firstName: firstName,
          lastName: lastName,
          phone: phone,
          preferences: foodPreferences(),
          ocupation:ocupation,
          depCareer: department, /**Hay que ver como se maneja este */
        });
      }

      console.log("Usuario creado exitosamente");
    } catch (error) {
      console.log("Por ahi no es");
      console.log(error.message);
    }
  };



  return (
    <>
      <div className="container">
        <div className="row">
          <img
            src="../../public/MetroEats.png"
            id="unimetLogo1"
            alt="Logo Unimet"
          />
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
                      La contraseña debe tener más de 3 carácteres.
                    </Form.Text>
                  </div>

                  {/*Ocupacion*/}
                  <div className="mb-3">
                      <div className="p"><p>Ocupación en la Universidad Metropolitana</p></div>
                        <div className="row">
                            <div className="col-md">
                              <Form.Group className="mb-3" controlId="ocupationId">
                              <Form.Label>Ocupación</Form.Label>
                                <Form.Select className="form-select" id="ocupation" onChange={(e) => setOcupation(e.target.value)} required>
                                        <option>Ocupacion</option>
                                        <option value="Estudiante">Estudiante</option>
                                        <option value="Docente">Docente</option>
                                        <option value="Administrativo">Administrativo</option>
                                </Form.Select>
                                </Form.Group>
                            </div>
                            <div className="col-md">
                                <Form.Group className="mb-3" controlId="depCareerId">
                                <Form.Label>Departamento/Carrera</Form.Label>
                                <select className="form-select" id="dep_career" onChange={(e) => setDepartment(e.target.value)} required>
                                  <option> Departamento/Carrer </option>
                                  {depCareerForm().map((dep_career => {  <option value={dep_career.name}> {dep_career.name} </option> })) }
                                </select>
                                </Form.Group>
                            </div>
                            
                      </div>
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
                          <label className="form-check-label">Vegetarianismo</label>
                        </div>

                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="glutenFreeCheck"
                          />
                          <label className="form-check-label">Libre de Gluten</label>
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
                    <Button className="boton"
                      variant="primary"
                      >Google</Button>
                      </div>
                      <div>
                    <Button className="boton"
                      variant="primary">Facebook</Button>
                      </div>
                    </div>
                    
                

                </div>
            </div>

        </div>
      </div>
    </>
  );
}

export default Register;
