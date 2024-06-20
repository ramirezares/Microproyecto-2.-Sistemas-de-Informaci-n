import "./Login.style.css";
import ChangingButton from "../components/ChangingButton"
import ChangingFooter from "../components/ChangingFooter"

function LogIn()
{return(
<>
    <div className = "loginPage">

        <div className="imageHolder"> < img src="../../public/MetroEats.png" className="unimetLogo" alt="Logo Unimet" /> </div>

            <div className="inputHolder">
                <h3>Iniciar Sesión en UNIMET MetroEats</h3>
                <form className="inputHolder1">
                    
                    <label>Correo electrónico: </label>
                    <input placeholder="Correo Electrónico" />
                    <br />
                    <label>Contraseña: </label>
                    <input placeholder="Contraseña" />
                    <br />
                    <button type="submit">Iniciar Sesión</button>    
                </form>	

                <h3>Inicio Rapido de Sesión</h3>
                <ChangingButton text="google" link="" style=""></ChangingButton>
                <br/>
                <ChangingButton text="Facebook" link="" style=""></ChangingButton>
                <p>¿No tienes cuenta?</p>
                <ChangingButton text="Crear nueva Cuenta" link="" style=""></ChangingButton>
            </div>
        </div>
    <ChangingFooter footerstate="unimet" />
</>
)
}

export default LogIn;