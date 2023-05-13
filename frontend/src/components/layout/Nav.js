import React from 'react';
import { Link } from 'react-router-dom';
import { CSSProperties } from 'D:/CURSO PROGRAMACION/CURSO DE PROGRAMACION WEB FULLSTACK/TRABAJO FINAL/MECA - copia - copia/frontend/src/styles/components/layout/Nav.css';


const Nav =(props)=>{
    return(
        <nav>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/nosotros">Nosotros</Link></li>
                    <li><Link to="/novedades">Novedades</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                    
                </ul>
            </div>
        </nav>
    );
}

export default Nav;