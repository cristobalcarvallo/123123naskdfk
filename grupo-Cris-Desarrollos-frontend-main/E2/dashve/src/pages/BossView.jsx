import React from "react";
import { useState } from "react";
import Button from "../components/Button";
import BossRequests from "./BossRequests";
import {BrowserRouter as Router, Link} from 'react-router-dom';
import axios from "axios";
export const SERVER_URL = "http://localhost:3000";

const BossView = () => {

    const sendForm = async () => {
        const url = `${SERVER_URL}/form`;
        const body = {
            nombre: values.nombre,
            presupuesto: values.presupuesto,
            descripcion: values.descripcion,
            estado: 'pendiente'
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
        nombre: '',
        presupuesto: '',
        descripcion: '',
    })

    function handleChange(evt) {
        const { target } = evt;
        const { name, value } = target;
        const newValues = {
          ...values,
          [name]: value,
        };
        setValues(newValues);
        console.log(values)
      }
    

    return(
        
    <div class="box_container">
        <form>
            <label>Nombre</label>
                <input name="nombre" type="text" value={values.nombre} onChange={handleChange}></input>
            <br/>
            <label>Presupuesto</label>
                <input name="presupuesto" type="text" value={values.presupuesto} onChange={handleChange}></input>
            <br/>
            <label>Descripcion</label>

                <input class = 'description' name="descripcion" type="text" value={values.descripcion} onChange={handleChange}></input>
            <br/>
            
            <Button title="Enviar" link="/" onClick={sendForm}></Button>
            
        </form>
        <div class="box_container">
        
        <Button title="Revisar solicitudes" link="/requests"></Button>
        
    </div>
</div>
    
    
        
        
    )
}


export default BossView;