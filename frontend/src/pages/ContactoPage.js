import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { CSSProperties } from '../styles/components/pages/ContactoPage.css';

const ContactoPage = (props) =>{
    
    
    const initialForm = {
        nombre:'',
        email:'',
        telefono:'',
        mensaje:''
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
        
        <main className='fondoContacto' >
            <div className='contacto'>
                <h2>Contacto Rapido</h2>
                <form action="/contacto" method="post"className='formulario' onSubmit={handleSubmit}>
                    <div className='datos-a-llenar'>
                    <p>
                        <label for="nombre">Nombre</label>
                        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange}/>
                    </p>
                    <p>
                        <label for="email">Email</label>
                        <input type="text" name="email" value={formData.email} onChange={handleChange}></input>
                    </p>
                    <p>
                        <label for="telefono">Telefono</label>
                        <input type="text" name="telefono" value={formData.telefono} onChange={handleChange}></input>
                    </p>
                    <p>
                        <label for="mensaje">Mensaje</label>
                        <input type="text" name="mensaje" value={formData.mensaje} onChange={handleChange}></input>
                    </p>
                    </div>
                    {sending ? <p>Enviando...</p> : null}
                    {msg ? <p>{msg}</p> : null} 
                    <div className='boton'>
                        <p>
                            <input type="submit" value="Enviar"></input>
                        </p>
                    </div>
                </form>
            </div>
            <div className="datos">
              
            </div>
        </main>
    );
} 
export default ContactoPage;