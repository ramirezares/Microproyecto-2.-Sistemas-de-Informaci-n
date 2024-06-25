import { createContext, useContext } from "react"


//////////////////////////////////////////////////////////////


/*Contexto de Autentificacion*/
export const authContext = createContext();

/*funcion que usa incializa y devuelve el contexto,.
a partir de la funcion de useContext con el contexto antes creaddo*/
export const useAuth = () => {
    const context = useContext(authContext);
    if(!context){
        console.log("Error Creating auth Context. No se creo o no se inicializo correctamente el contexto.")
    }
    return context;
}
