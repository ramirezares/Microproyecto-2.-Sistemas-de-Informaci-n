import React from "react";
import "./NewFooter.style.css";
import { Link } from "react-router-dom";


const NewFooterGranier = () => {

    return (
        <footer className='footer text-white py-3'>
            <div className='container' >
                <nav className='row'> 
                <ul className="col-12 col-md-4 list-unstyled">
                        <li className="font-weight-bold mb-2">
                        <a className="text-reset" href="https://graniervenezuela.com">@ GRANIER VENEZUELA | Derechos reservados</a>
                        </li>
                    </ul>
                    <Link to="/" className='col-12 col-md-3 d-flex align-items-center justify-content-center'> 
                        <img src="/MetroEatsNaranja.png" className="mx-2" height='100' />
                    </Link>
                    
                    <ul className="col-12 col-md-3 list-unstyled" >
                        <li className="font-weight-bold mb-2">
                        Página principal de la Universidad Metropolitana:
                        </li>
                        <li className="text-center">
                        <a className="text-reset" href="https://www.unimet.edu.ve">https://www.unimet.edu.ve</a>
                        </li>
                    </ul>
                    </nav>      
                </div>
        </footer>
    );
};
export default NewFooterGranier;