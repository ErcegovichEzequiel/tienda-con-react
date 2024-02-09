

function footer() {
    return (
        <footer id="footer">
            <div className="redessociales">
                <h3>Siguenos</h3>
                <li><i className="fa-brands fa-square-instagram"></i></li>
                <li><i className="fa-brands fa-facebook"></i></li>
                <li><i className="fa-brands fa-twitter"></i></li>
                <li><i className="fa-brands fa-whatsapp"></i></li>
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
        </footer>
    );
}

export default footer;


