import "./Carrito.css";

export const Carrito = () => {
    return (
        <section className="formulario">
            <h5>Ingresá tus datos</h5>
            <br />

                <form className="row g-3">

                    <div className="col-md-6">
                        <label for="inputEmail4" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail4"/>
                    </div>

                    <div className="col-md-4">
                        <label for="inputState" className="form-label">Ciudad</label>

                        <select id="inputState" className="form-select">
                            
                            <option selected>

                                <option>Capital Federal</option>
                                <option>Córdoba Capital</option>
                                <option>Rosario</option>
                                <option>Bariloche</option>
                                <option>Bahía Blanca</option>

                            </option>

                        </select>
                    </div>

                    <div className="col-md-6">
                        <label for="inputAddress" className="form-label">Dirección</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="ej: Coronel Diaz"/>
                    </div>
                    
                    <div className="col-md-6">
                        <label for="inputAddress2" className="form-label">Piso y departamento</label>
                        <input type="text" className="form-control" id="inputAddress2" placeholder="ej: Pb 'A'"/>
                    </div>

                    <div className="col-md-4">
                        <label for="inputState" className="form-label">Provincia</label>
                        <select id="inputState" className="form-select">
                            <option selected>
                                <option>Buenos Aires</option>
                                <option>Catamarca</option>
                                <option>Chaco</option>
                                <option>Chubut</option>
                                <option>Córdoba</option>
                                <option>Corrientes</option>
                                <option>Entre Ríos</option>
                                <option>Formosa</option>
                                <option>Jujuy</option>
                                <option>La Pampa</option>
                                <option>La Rioja</option>
                                <option>Mendoza</option>
                                <option>Misiones</option>
                                <option>Neuquén</option>
                                <option>Río Negro</option>
                                <option>Salta</option>
                                <option>San Juan</option>
                                <option>San Luis</option>
                                <option>Santa Cruz</option>
                                <option>Santa Fe</option>
                                <option>Santiago del Estero</option>
                                <option>Tierra del Fuego, Antártida e Islas del Atlántico Sur</option>
                                <option>Tucumán</option>
                            </option>
                        </select>
                    </div>

                    <div className="col-md-2">
                        <label for="inputZip" className="form-label">Código Postal</label>
                        <input type="text" className="form-control" id="inputZip" placeholder="ej: 1422"/>
                    </div>

                    <div className="col-12">

                        <div className="form-check">

                            <input className="form-check-input" type="checkbox" id="gridCheck"/>
                                <label className="form-check-label" for="gridCheck">
                                    Quiero recibir noticias
                                </label>
                        </div>

                    </div>

                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Enviar</button>
                    </div>

                </form>

        </section>


    )
}
