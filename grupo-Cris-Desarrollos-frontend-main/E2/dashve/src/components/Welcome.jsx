import React from "react";
import Proc from "../img/proc.png"

function Welcome() {
    return (
        <div class="box_container">
            
        <div class= "content">
            <div class="text">
                <h2>Bienvenido a Dashve</h2>
                <p>Esta aplicación te dara todas las herramientas necesarias para que tu cadena de producción funcione de la manera mas optima posible, esta se encarga de recopilar todo tipo de datos y simular escenarios que ayuden a tomar las mejores decisiones administrativas para tu empresa.</p>
                <a href="nosotros.html" class="btn">Conoce nuestro equipo</a>
            </div>
        </div>
        <div class="image">
            <img src={Proc} alt="Home-Image" />
        </div>
        </div>
    );
}

export default Welcome;

