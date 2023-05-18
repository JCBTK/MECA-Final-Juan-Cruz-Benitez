import React from 'react';
import { Link } from 'react-router-dom';
import { CSSProperties } from 'D:/CURSO PROGRAMACION/CURSO DE PROGRAMACION WEB FULLSTACK/TRABAJO FINAL/MECA - copia - copia/frontend/src/styles/components/layout/Nav.css';


const Nav =(props)=>{
    return(

        <div className='Fondo'>
            <nav className='NavBar'>
                <div className="Header">
                    <img src="img/meca-logo.png" width="100" alt="Logo Meca"/>
                    <h1>MECA</h1>
                </div>
                <div className='barradeNav'>
                    <ul>
                        <li><Link to="/" className="custom-btn btn-16">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span> 
                            Home
                        </Link></li>
                        <li>
                            <Link to="/nosotros" className="custom-btn btn-16">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span> 
                                Nosotros   
                            </Link>
                        </li>
                        <li>
                            <Link to="/novedades" className="custom-btn btn-16">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span> 
                                Novedades
                            </Link>
                        </li>
                        <li>
                            <Link to="/contacto" className="custom-btn btn-16">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span> 
                                contacto   
                            </Link>
                        </li>
                        
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Nav;