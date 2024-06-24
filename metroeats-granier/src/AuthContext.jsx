/**Componente Contexto
 * Este sirve para poder usar el contexto de autentificacion en 
 * cualquier parte de la aplicacion. Aqui se encuentra el inicio de sesion,
 * el registro y el cierre de sesion, tanto de google, correo y facebook.
 */

//Importaciones Firebase
import {auth} from "./firebase.js"
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged,FacebookAuthProvider} from "firebase/auth"

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
                setUser("")
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
            const info=await signInWithPopup(auth, responseGoogle)
            console.log(info)
            console.log(info.user)
            setUser(info.user)
            return info;
        } catch (error) { {/*AQUI VA UN POP-UP CON EL ERROR*/}
            console.log(error.message);
        }
        }

    //Inicio Sesion con Facebook

    const loginWithFacebook = async () => {
        try {
            const provider = new FacebookAuthProvider();
            const result = await signInWithPopup(auth, provider);
            // You can also get the Facebook access token if needed
            const credential = FacebookAuthProvider.credentialFromResult(result);
            console.log(credential)
            setUser(result.user);
            console.log(result)
            
            return result;

            } catch (error) {
            // Handle Errors here.
            const errorCode = error.code;
            console.log(errorCode)
            const errorMessage = error.message;
            console.log(errorMessage)
            // The email of the user's account used.
            const email = error.customData.email;
            console.log(email)
            // The AuthCredential type that was used.
            const credential = FacebookAuthProvider.credentialFromError(error);
            console.log(credential);
            console.log(error);
        }
        }
    
    //Cierre Sesion
    const logout = async() => {
            try{const response = await signOut(auth)
            console.log(response)
            } catch (error) { {/*AQUI VA UN POP-UP CON EL ERROR*/}
            console.log(error.message);
        }

        }

    return(
        <authContext.Provider value={{register, login, loginWithGoogle, logout, user,loginWithFacebook}}>
            {children}
        </authContext.Provider>
    );
}
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};