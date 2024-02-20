
import { FaUserLock } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

export const Registrarme = () => {
    return (
        <section className="formulario">
            <form className="cform">
                <h3 >Registrate</h3>
                <div className="bartex">
                    <input className="bartexInput" type="email" placeHolder="Correo Electrónico" required/>
                    <p className="iconinpu"><FaUserLock /></p>
                </div>
                <div className="bartex">
                    <input className="bartexInput" type="email" placeHolder="Usuario" required/>
                    <p className="iconinpu"><FaUserLock /></p>
                </div>
                <div className="bartex">
                    <input className="bartexInput" type="text" placeHolder="Contraseña" required />
                    <p className="iconinpu"><RiLockPasswordFill /></p>
                </div>
                <div className="bartex">
                    <input className="bartexInput" type="text"  placeHolder="Confirmar contraseña" required />
                    <p className="iconinpu"><RiLockPasswordFill /></p>
                </div>
                <br />
                <div className="registrarmeIniciarSesion">
                <p>¿Ya tienes cuenta? </p>
                <Link to="/src/Components/IniSesion/IniciaSesion.jsx" className="RegIniSesion">Inicia Sesión</Link>
                </div>
                
                <button type="submit" className="btn">Registrate</button>
            </form>
        </section>


    )
}
