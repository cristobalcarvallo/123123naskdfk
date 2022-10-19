import React from "react";
import { useState } from "react";
import Button from "../components/Button";
import { Link } from 'react-router-dom';
import axios from "axios";
export const SERVER_URL = "http://localhost:3000";

function Login(){
    const sendForm = async () => {
        const url = `${SERVER_URL}/boss`;
        const body = {
            name: values.name,
            password: values.password,
            email: values.email
        };
        console.log(body)
        await axios
          .post(url, body)
          .then((response) => {
            alert(` post request to ${url} was successful`);

          })
          .catch((error) =>
            alert(`[${error.response.status}] ${error.response.data}`)
    )}

    const [values, setValues] = useState({
        name: '',
        password: '',
        email: ''
    })

    function handleChange(evt) {
        const { target } = evt;
        const { name, value } = target;
        const newValues = {
          ...values,
          [name]: value,
        };
        setValues(newValues);
      }
    return(
    <div class="box_container">
        <div>
        <h2> Ingresa los siguientes datos </h2>
        
        <form>
            <div class="box_container">
                <div class = "text">
                    <label>Nombre</label>
                    <input name="name" type="text" value={values.name} onChange={handleChange} required autofocus/>
                    <br/>
                    <label>Contraseña</label>
                    <input name="password" type="text" value={values.password} onChange={handleChange} required/>
                    <br/>
                    <label>Email</label>
                    <input name="email" type="text" value={values.email} onChange={handleChange} required/>
                    
                    <Button title="Crear Usuario"  onClick={sendForm} link="/login"></Button>
                    <br></br>
                    
                    
                        
                    
                </div>
            </div>
        </form>
        </div>
        

    </div>
    

    );
}

export default Login;