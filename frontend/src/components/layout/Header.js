import React from 'react';

import { CSSProperties } from 'D:/CURSO PROGRAMACION/CURSO DE PROGRAMACION WEB FULLSTACK/TRABAJO FINAL/MECA - copia - copia/frontend/src/styles/components/layout/Header.css';


const Header = (props) =>{
    return(
        <header>
            <div className="holder">
                <img src="img/meca-logo.png" width="100" alt="Logo Meca"/>
                <h1>Meca Engineering</h1>
            </div>
        </header>
    );
}

export default Header;
