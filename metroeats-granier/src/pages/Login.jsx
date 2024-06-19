import "./Login.style.css";
import ChangingButton from "../components/ChangingButton"
import ChangingFooter from "../components/ChangingFooter"
function LogIn()
{return(
<>
    <div className = "loginPage">

        <div className="imageHolder"> < img src="../../public/MetroEats.png" className="unimetLogo" alt="Logo Unimet" /> </div>

        <div className="inputHolder">
            <h1>Inicio de Sesión</h1>
            <form action="">

           {/* <input type= "text" name= "username" value= {username} onChange = {handleChange}/>

            <input type= "password" name= "password" value= {password} onChange = {handleChange}/>

            <ChangingButton type= "submit" variant= "primary" disabled= {username || !password}> Iniciar Sesión </ChangingButton>

                
                </input>*/} 
                <label>Correo electrónico: </label>
                <input placeholder="Correo Electrónico" />
                <br />
                <br />
                <label>Contraseña: </label>
                <input placeholder="Contraseña" />
            </form>	


            <h1>Inicio Rapido de Sesión</h1>
            <ChangingButton text="google" link="" style=""></ChangingButton>
            <ChangingButton text="Facebook" link="" style=""></ChangingButton>

            <h2>no tienes una cuenta?</h2>
            <ChangingButton text="Registrate" link="" style=""></ChangingButton>

        </div>

    </div>

    <ChangingFooter footerstate="unimet" />
    </>
)
}

export default LogIn;