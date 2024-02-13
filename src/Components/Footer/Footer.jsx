import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import Maps from "./Maps";



function footer() {
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
                    <label for="ingreso-de-email"></label>
                    <input type="email" class="formulario-caja" id="ingreso-de-email" placeholder="E-mail"></input>
                </div>
                <div className="contacto">
                    <label for="ingreso-de-texto"></label><br></br>
                    <textarea className="formulario-txt" maxlength="500" id="ingreso-de-texto" placeholder="Texto (Max 500)"></textarea>
                </div>
                <input className="button" type="submit" value="Enviar"></input>

            </div>
            <div className="contactar">
            </div>

            <div className="map-container">
                <h3>Ubicación</h3>

                <div className="mapa">
                    <Maps/>
                </div>

            </div>

        </footer>
    );
};

export default footer;


