/**Componente Contexto
 * Este sirve para poder usar el contexto de autentificacion en 
 * cualquier parte de la aplicacion. Aqui se encuentra el inicio de sesion,
 * el registro y el cierre de sesion, tanto de google, correo y facebook.
 */

//Importaciones Firebase
import {auth} from "./firebase.js"
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged} from "firebase/auth"

//Importaciones Google

//Importaciones Facebook

//Importaciones React
import {useState, useEffect} from "react";
import { authContext } from "./AuthContextConst.jsx"
import PropTypes from 'prop-types';

//////////////////////////////////////////////////////////////

/**Funcion encargada de globalizar nuestro contexto*/
export function AuthProvider({children}){

    const [user, setUser]=useState("");

    useEffect(() => {
        const logedUser =  onAuthStateChanged(auth, (currentUser)=>{
            if(!currentUser){
                console.log("No hay usuario")
            }else{
                setUser(currentUser)
            }
        })
            return ()  =>  logedUser();
    }, [])



    //Registro
    const register = async( email, password) => {
            const response = await createUserWithEmailAndPassword(auth, email, password);

            console.log(response);
        }
        
    //Inicio Sesion con Correo
    const login= async(email, password) => {
        try { const response= await signInWithEmailAndPassword(auth, email, password)
        console.log(response);
        } catch (error) { {/*AQUI VA UN POP-UP CON EL ERROR*/}
        console.log(error.message);
    }
        }
    //Inicio Sesion con Google
    const loginWithGoogle= async() =>{
        try { const responseGoogle = new GoogleAuthProvider();
            return await signInWithPopup(auth, responseGoogle);
        } catch (error) { {/*AQUI VA UN POP-UP CON EL ERROR*/}
            console.log(error.message);
        }
        }

    //Inicio Sesion con Facebook

        
    //Cierre Sesion
    const logout = async() => {
            try{const response = await signOut(auth)
            console.log(response)
            } catch (error) { {/*AQUI VA UN POP-UP CON EL ERROR*/}
            console.log(error.message);
        }

        }

    return(
        <authContext.Provider value={{register,  login, loginWithGoogle, logout, user}}>
            {children}
        </authContext.Provider>
    );
}
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};