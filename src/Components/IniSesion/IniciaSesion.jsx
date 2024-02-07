import "./IniciarSesion.css";
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
                    <label>
                        <input type="checkbox" className="check"/> Recordarme
                        <p className="omc">Olvide mi contraseña</p>                            
                    </label>
                </div>
                <button type="submit" className="btn">Entrar</button>
                <br/>
                    <p>No tiene cuenta? <a href="registro.html">Registrate</a></p>
            </form>
        </section>
    )
}
