import "../GeneralComponentes.css"
import { FaUserLock } from "react-icons/fa"
import { RiLockPasswordFill } from "react-icons/ri"
import { useState } from "react"

export const IniciaSesion = () =>{
    const [userInput, setUserInput] = useState("")
    const [passwordInput, setPasswordInput] = useState("")
    const handleButtonClick = (event) => {
        event.preventDefault()
        if (userInput && passwordInput) {
            alert("¡Te extrañamos! ¡Tenemos cosas nuevas para vos!")
            window.location.href = "/"
        } else {
            alert("Por favor, complete los campos de usuario y contraseña")
        }
    }
    const handleUserInputChange = (event) =>{
        setUserInput(event.target.value)
    }
    const handlePasswordInputChange = (event) =>{
        setPasswordInput(event.target.value)
    }
    return (
            <section className="formulario">
                <form className="cform">
                    <h3>Inicio de sesión</h3>
                    <div className="bartex">
                        <input type="text" placeHolder="Usuario" required value={userInput} onChange={handleUserInputChange} />
                        <FaUserLock />
                    </div>
                    <div className="bartex">
                        <input type="password" placeHolder="Contraseña" required value={passwordInput} onChange={handlePasswordInputChange} />
                        <RiLockPasswordFill />
                    </div>
                    <div className="recordarme">
                        <input type="checkbox" className="check" />
                        <p>Recordarme</p>
                        <p className="omc">Olvide mi contraseña</p>
                    </div>
                    <button type="submit" className="btn" onClick={handleButtonClick}>Entrar</button>
                    <br />
                    <p>No tiene cuenta? <a href="registro.html">Registrate</a></p>
                </form>
            </section>

    )
}