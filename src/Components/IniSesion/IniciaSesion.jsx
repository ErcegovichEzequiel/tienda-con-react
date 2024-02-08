import "../GeneralComponentes.css";
import { FaUserLock } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

export const IniciaSesion = () => {
    return (
        <section className="formulario">
            <form className="cform">
                <h3>Inicio de sesión</h3>
                <div className="bartex">
                    <input type="text" placeHolder="Usuario" required/>
                    <FaUserLock />
                </div>
                <div className="bartex">
                    <input type="password" placeHolder="Contraseña" required/>
                    <RiLockPasswordFill />
                </div>
                <div className="recordarme">
                        <input type="checkbox" className="check"/> 
                        <p>Recordarme</p>
                        <p className="omc">Olvide mi contraseña</p>                    
                </div>
                <button type="submit" className="btn">Entrar</button>
                <br/>
                    <p>No tiene cuenta? <a href="registro.html">Registrate</a></p>
            </form>
        </section>
    )
}
