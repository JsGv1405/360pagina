import React from "react";
import "../styles/components/Form.scss";

function Form() {
    return (
        <div>
            <form className="form">
                <h4>Información Obligatoria</h4>
                <p>Llena esta información para poder asesorarte de mejor manera.</p>
                <div >
                    <label htmlFor="" >Actividad Empresarial:</label>
                    <select id="" name="">
                        <option value="">Bienes</option>
                        <option value="">Servicios</option>
                    </select>
                </div>
                <div >
                    <label htmlFor="" >Tipo de Contribuyente:</label>
                    <select id="" name="">
                        <option value="">Empresa</option>
                        <option value="">Persona Natural</option>
                        <option value="">Persona Jurídica</option>
                    </select>
                </div>
                
                <div >
                    <label htmlFor="nombre" >Empresa:</label>
                    <input type="text" id="empresa" name="" placeholder="Nombre de la empresa.." />
                </div>

                <div >
                    <label htmlFor="" >Tipo de Empresa:</label>
                    <select id="" name="">
                    <option value="">Persona Natural</option>
                    <option value="">Persona Natural Obligada a llevar Contabilidad</option>
                    <option value="">Sociedad Anónima</option>
                    <option value="">Compañía LTDA.</option>
                    <option value="">S.A.S</option>
                    <option value="">Sociedad de Hecho</option>
                    <option value="">Contribuyente Especial</option>
                    </select>
                </div>

                <div >
                    <label htmlFor="nombre" >Correo:</label>
                    <input type="text" id="empresa" name="" placeholder="" />
                </div>

                <div >
                    <label htmlFor="nombre" >Teléfono:</label>
                    <input type="text" id="empresa" name="" placeholder="" />
                </div>
                <div >
                    <label htmlFor="" >Cuentas con personal en el área contable:</label>
                    <select id="" name="">
                        <option value="">SI</option>
                        <option value="">NO</option>
                    </select>
                </div>

                <button type="summit">Enviar</button>
            </form>

        </div>
    );
}

export default Form