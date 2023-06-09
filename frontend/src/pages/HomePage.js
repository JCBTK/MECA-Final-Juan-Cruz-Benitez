import React from "react";
import { Link } from "react-router-dom";
import { CSSProperties } from "../styles/components/pages/HomePage.css";

const HomePage = (props)=>{

    return(
        <div className="FondoHome">
            <main className="Holder">
                <div className="Principal">
                    <h4>Mente creativa, trabajos creativos</h4>
                    <h1>MECA</h1>
                    <Link to="/contacto" className="neon-button">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span> 
                        contacto   
                    </Link>
                </div>
                <div className="Columnas">
                    <div className="Bienvenidos">
                        <h2>Bienvenidos</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia quam ut eros suscipit, ut egestas enim tempus. Nam porttitor arcu felis, at congue diam ornare vitae. Integer sem urna, faucibus eu molestie eget, vehicula sit amet enim. Aliquam vel mollis nibh. Duis nec tincidunt sapien, porta aliquam augue. Praesent velit eros, feugiat non facilisis ac, vulputate mattis ipsum. Nunc dictum libero ut neque bibendum vehicula.</p>
                    </div>
                    <div className="testimonios">
                        <h2>Testimonios</h2>
                        <div className="testimonio">
                            <span className="cita">Luego de un largo trayecto de desarrollo, nos dimos cuenta que la tecnologia y los conocimientos que teniamos a nuestro alcance no eran lo suficiente, nos contactamos con meca y en muy poco tiempo su equipo de desarrollo logro cosas impensadas para nosotros, un trabajo exelente. </span>
                            <span className="autor">Gazoo Racing Team ARG</span>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
}

export default HomePage;