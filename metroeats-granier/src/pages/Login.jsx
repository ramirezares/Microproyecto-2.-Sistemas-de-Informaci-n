//Importacion React
import "./Login.style.css";
import { useState } from "react";
import { getAdditionalUserInfo } from "firebase/auth";
//Importacion Componentes
import { useAuth } from "../AuthContextConst.jsx";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

//Importacion lectura de tokens
//import { jwtDecode } from "jwt-decode";

//Importacion Firebase

//Importacion de Google
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import PopUp from "../components/PopUp.jsx";

//Importacion de Facebook
import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";

///////////////////////////////////////////////////////////////

function LogIn() {
  const [profile, setprofile] = useState("");
  const auth = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [succeed, setSucceed] = useState(null);
  const [error, setError] = useState(null);

  console.log(email + " " + password);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      
      await auth.login(email, password);
      
      setSucceed("Inicio de sesión exitoso");
    
      console.log(auth.user);
    } catch (error) {
      console.log("Error login user:", error.message);
      if (auth.error.code === "auth/wrong-password") {
        setError("Contraseña incorrecta, por favor intentelo de nuevo.");
      } else if (auth.error.code === "auth/user-not-found") {
        setError(
          "Correo no encontrado, por favor intentelo de nuevo. Si no esta registrado cree una cuenta."
        );
      } else {
        setError("Un error ha ocurrido, por favor intentelo de nuevo.");
      }
    }
  };

  const handleGoogle = async (e) => {
    e.preventDefault();
    //se va a llamar la cuestion
    const credential = await auth.loginWithGoogle();
    try {
      //const user = credential.user;
      const userInfo = getAdditionalUserInfo(credential);
      console.log(userInfo.profile);
      // Extract the necessary information from the Google user object
      const { email } = userInfo.profile;
      setEmail(email);
    } catch (error) {
      console.log("Error login user with Google:", error.message);
    }
  };

  const handleCloseSucceed = () => {	
    setSucceed(null);
    navigate("/");
  }

  const handleCloseError = () => {
    setError(null);
    navigate(0);
  };

  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img
              src="/MetroEats.png"
              className="unimetLogo"
              alt="Logo Unimet"
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
                </div>
              </div>

              <div className="mb-3">
                {!profile ? (
                  <LoginSocialFacebook
                    appId="1198674931381739"
                    onResolve={(response) => {
                      console.log(response);
                      setprofile(response.data);
                      console.log(profile);
                    }}
                    onReject={(error) => {
                      console.log(error);
                    }}
                  >
                    <FacebookLoginButton>
                      Iniciar Sesión con Facebook
                    </FacebookLoginButton>
                  </LoginSocialFacebook>
                ) : (
                  ""
                )}

                {profile
                  ? console.log("sesion iniciada") &&
                    "Redirigir a la pagina principal en el local storage"
                  : ""}
              </div>
              {/**Boton de redireccion a register */}
              <div className="registerText">¿No tienes cuenta?</div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={() => {
                  navigate("/register");
                }}
              >
                Crear nueva Cuenta
              </button>
            </div>
          </div>
        </div>
        {succeed && <PopUp text={succeed} onClose={handleCloseSucceed} />}
        {error && <PopUp text={error} onClose={handleCloseError} />}
      </div>
    </>

    //auth/popup-closed-by-user
  );
}

export default LogIn;
