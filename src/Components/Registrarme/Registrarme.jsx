import "../GeneralComponentes.css"
import { FaUserLock } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

export const Registrarme = () => {
    return (
        <section className="formulario">
            <form className="cform">
                <h3 >Registrate</h3>
                <div className="bartex">
                    <input type="email" className="input" placeHolder="Correo Electrónico" required/>
                    <FaUserLock />
                </div>
                <div className="bartex">
                    <input type="email" className="input" placeHolder="Usuario" required/>
                    <FaUserLock />
                </div>
                <div className="bartex">
                    <input type="text" className="input" placeHolder="Contraseña" required />
                    <RiLockPasswordFill />
                </div>
                <div className="bartex">
                    <input type="text" className="input" placeHolder="Confirmar contraseña" required />
                    <RiLockPasswordFill />
                </div>
                <br />
                <p>¿Ya tienes cuenta? Inicia Sesión</p>
                <button type="submit" className="btn">Registrate</button>
            </form>
        </section>


    )
}
