import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { CSSProperties } from '../styles/components/pages/ContactoPage.css';

const ContactoPage = (props) =>{
    
    
    const initialForm = {
        nombre:'',
        email:'',
        telefono:'',
        consulta:''
    }
    
    const[sending, setSending] = useState(false);
    const[msg, setMsg]= useState('');
    const[formData, setFormData] = useState(initialForm);

    const handleChange = e=> {
        const {name,value}=e.target;
        setFormData(oldData =>({
            ...oldData,
            [name]:value
        }));
    }
   
    const handleSubmit= async e =>{
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await
        axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false){
            setFormData(initialForm)
        }
    }

   
    return (
        
        <main>
            <div className='contacto'>
                <h2>Contacto Rapido</h2>
                <form className='formulario' onSubmit={handleSubmit}>
                    <p>
                        <label for="nombre">Nombre</label>
                        <input type="text" name="" value={formData.nombre} onChange={handleChange}></input>
                    </p>
                    <p>
                        <label for="email">Email</label>
                        <input type="text" name=""value={formData.email} onChange={handleChange}></input>
                    </p>
                    <p>
                        <label for="telefono">Telefono</label>
                        <input type="text" name=""value={formData.telefono} onChange={handleChange}></input>
                    </p>
                    <p>
                        <label for="mensaje">Mensaje</label>
                        <input type="text" name=""value={formData.mensaje} onChange={handleChange}></input>
                    </p>
                    {sending ? <p>Enviando...</p> : null}
                    {msg ? <p>{msg}</p> : null} 
                    <p className="centrar">
                        <input type="submit" value="Enviar"></input>
                    </p>
                </form>
            </div>
            <div className="datos">
                <h2>Otras vias de comunicacion</h2>
                <p>Tambien puede contactarse con nosotros usando los siguientes medios</p>
                <ul>
                    <li>Telefono:2964619342</li>
                    <li>Email:Meca-E-ARG@hotmail.com</li>
                    <li>Facebook: @MecaARG</li>
                    <li>Instagram: @MecaARG</li>
                </ul>
            </div>
        </main>
    );
} 
export default ContactoPage;