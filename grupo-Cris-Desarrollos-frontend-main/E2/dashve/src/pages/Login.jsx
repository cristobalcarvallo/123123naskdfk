import Button from "../components/Button";
import { Link } from 'react-router-dom';

function Login(){
    return(
    <div class="box_container">
        <div>
        <h2> Ingrese nombre de usuario y contraseña </h2>
        
        <form>
            <div class="box_container">
                <div class = "text">
                    <input type="text" name="username" placeholder="Nombre de usuario" required autofocus/>
                    <input type="text" name="password" placeholder="Contraseña" required/>
                    
                    
                    <Button title="Ingresar" link="/"></Button>
                    <br></br>
                    
                    <li><Link to='/useregister'>¿No tienes una cuenta? Registrate aqui</Link></li>
                        
                    
                </div>
            </div>
        </form>
        </div>
        <div>
            <Button title="Gerente General" link="/boss"></Button>
            <Button title="Gerente Tecnico" link="/gtview"></Button>
            <Button title="Area de armado" link="/areaarmado"></Button>
            <Button title="Area de pintura" link="/areapintura"></Button>
            <Button title="Area de montaje" link="/areamontaje"></Button>

        </div>

    </div>
    

    );
}

export default Login;