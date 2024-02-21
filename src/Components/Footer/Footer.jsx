import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import MapsAPIgoogle from "./MapsAPIgoogle";



function Footer() {
    return (
        <footer id="footer">
            <div className="redessociales">
                <h3>Siguenos</h3>
                <div className="redesicon">
                    <li><FaInstagramSquare /></li>
                    <li><FaFacebookSquare /></li>
                    <li><FaSquareXTwitter /></li>
                    <li><FaSquareWhatsapp /></li>
                </div>
            </div>
            <div className="form">
                <h3>Contactanos</h3>
                <div className="contacto">
                    <input type="email" className="formulario-caja" placeHolder="E-mail"></input>
                </div>
                <div className="contacto">
                    <textarea className="formulario-txt" maxlength="500" placeholder="Texto (Max 500)"></textarea>
                </div>
                <button type="submit" className="btn">Enviar</button>

            </div>
            <div className="contactar">
            </div>

            <div className="map-container">
                <h3>Ubicación</h3>
                    <MapsAPIgoogle />
            </div>

        </footer>
    );
};

export default Footer;
