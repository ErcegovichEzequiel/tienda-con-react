

export const Carrito = () => {
    return (
        <section className="formulario">
            <form className="cform">
                <h3>Ingresá tus datos</h3>
                <div className="bartex">
                    <input className="bartexInput" type="email" placeHolder="Correo Electrónico" required />
                </div>
                <div className="bartex"> {/* provincias  */}
                    <select className="bartexOpcions">
                        <option className="disabled-option" disabled selected>Provincia</option>
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
                    </select>
                </div>
                <div className="bartex"> {/* ciudad  */}
                    <select className="bartexOpcions">
                        <option className="disabled-option" disabled selected>Ciudad</option>
                        <option>Capital Federal</option>
                        <option>Córdoba Capital</option>
                        <option>Rosario</option>
                        <option>Bariloche</option>
                        <option>Bahía Blanca</option>
                    </select>
                </div>
                <div className="bartex"> {/* dire  */}
                    <input className="bartexInput" type="text" placeholder="Dirección Ej: Av. Colón" />
                </div>
                <div className="bartex"> {/* piso  */}
                    <input className="bartexInput" type="text" placeholder="Piso y Departamento Ej: 1ro C" />
                </div>
                <div className="bartex"> {/* CP  */}
                    <input className="bartexInput" type="text" placeholder="Código Postal Ej: 1856" />
                </div>

                <div className="bartex">
                    <button type="submit" className="btnCarrito">Enviar</button>
                </div>
            </form>
        </section>


    )
}
