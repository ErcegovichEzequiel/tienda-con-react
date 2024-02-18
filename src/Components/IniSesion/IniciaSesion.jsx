
import { FaUserLock } from "react-icons/fa"
import { RiLockPasswordFill } from "react-icons/ri"
import { useState } from "react"
import { Link } from 'react-router-dom';

export const IniciaSesion = () => {
    const [userInput, setUserInput] = useState("")
    const [passwordInput, setPasswordInput] = useState("")
    const handleButtonClick = (event) => {
        event.preventDefault()
        if (userInput && passwordInput) {
            alert("¡Te extrañamos! ¡Tenemos cosas nuevas para vos!")
            window.location.href = "/"
        } else {
            alert("Por favor, complete los campos de usuario y contraseña.")
        }
    }
    const handleUserInputChange = (event) => {
        setUserInput(event.target.value)
    }
    const handlePasswordInputChange = (event) => {
        setPasswordInput(event.target.value)
    }
    return (
        <section className="formulario">
            <form className="cform">
                <h3>Inicio de sesión</h3>
                <div className="bartex">
                    <input className="bartexInput" type="text" placeHolder="Usuario" required value={userInput} onChange={handleUserInputChange} />
                    <p className="iconinpu"><FaUserLock /></p>
                </div>
                <div className="bartex">
                    <input className="bartexInput" type="password" placeHolder="Contraseña" required value={passwordInput} onChange={handlePasswordInputChange} />
                    <p className="iconinpu"><RiLockPasswordFill /></p>

                </div>
                <div className="recordarme">
                    <input type="checkbox" className="check" />
                    <p className="recordarmeP">Recordarme</p>

                </div>
                <Link to="/" className="omc">Olvide mi contraseña</Link>
                <button type="submit" className="btn" onClick={handleButtonClick}>Ingresar</button>
                <br />
                <div className="registrameInicioSesion">
                    <p>No tiene cuenta?</p> <Link className="linkRecordarme" to="/src/Components/Registrarme">Registrate</Link>
                </div>


            </form>
        </section>

    )
}