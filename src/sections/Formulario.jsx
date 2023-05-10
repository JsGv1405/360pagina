import React from "react";
import Form from "../components/Form";
import Title from "../components/Title";
import "../styles/sections/Formulario.scss";

function Formulario({ servicio }) {
    return (
        <div className="formulario-content">

            <div className="container">
                <div className="content">
                    <div className="informacion">
                        <Title title="Cotiza ahora" color="pink" lineCenter={true} />
                        <h3>Solicita nuestro servicio en {servicio}</h3>
                        <p>Envíanos tu solicitud para ponernos en contacto de inmediato.</p>
                    </div>
                    <div className="formulario">
                        <Form />
                    </div>

                </div>

            </div>


        </div>
    );
}

export default Formulario