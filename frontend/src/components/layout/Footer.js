import React from 'react';
import { Link } from "react-router-dom";
import { CSSProperties } from 'D:/CURSO PROGRAMACION/CURSO DE PROGRAMACION WEB FULLSTACK/TRABAJO FINAL/MECA - copia - copia/frontend/src/styles/components/layout/Footer.css';

const Footer = (props) => {
    return (
        <div >
            <footer className='fondofooter'>
                <div className='derechos'>
                    <h1>Copyright 2023 | Meca</h1>
                </div>
                <ul className="wrapper">
                    <li className="icon facebook">
                        <span className="tooltip">@Meca_Engineering</span>
                        <div className='circulo'>
                            <img src="/img/footer/facebook.png" alt='facebook' width={30} className='logo'/>
                        </div>
                    </li>
                    <li className="icon instagram">
                        <span className="tooltip">@Meca_Engineering</span>
                        <div className='circulo'>
                            <img src="/img/footer/instagram.png" alt='instagram' width={30} className='logo'/>
                        </div>
                    </li>
                    <li className="icon mail">
                        <span className="tooltip">MecaEngineering@hotmail.com</span>
                        <div className='circulo'>
                            <img src="/img/footer/mail.png" alt='mail' width={30} className='logo' />
                        </div>
                    </li>
                    <li className="icon twitter">
                        <span className="tooltip">@Meca_Engineering</span>
                        <div className='circulo'>
                            <img src="/img/footer/twitter.png" alt='twitter' width={30} className='logo'/>
                        </div>
                    </li>
                    
                </ul>
            </footer>
        </div>
    );
}

export default Footer;