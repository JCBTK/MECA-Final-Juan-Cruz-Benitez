import { CSSProperties } from "../styles/components/pages/NovedadesPage.css";
import { useState, useEffect } from "react";
import axios from 'axios';
import NovedadItem from '../components/novedades/NovedadItem';


const NovedadesPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect(() => {
        const cargarNovedades = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/novedades');
            setNovedades(response.data);
            setLoading(false);
        };
        cargarNovedades();
    }, []);


    return (
        <section className="Novedades">
            <h2>Novedades</h2>
            <div className="Novedades-noticias">
            {loading ? (
                <p>cargando...</p>
            ) : (
                novedades.map(item => <NovedadItem key={item.id}
                    imagen={item.imagen}
                    title={item.titulo}
                    subtitle={item.subtitulo} 
                    body={item.cuerpo} />) 
            )};
            </div>
        </section>)
};

export default NovedadesPage;