import React from 'react';

import Inicio from "./Inicio";
import Footer from '../../../sections/Footer';
import Formulario from '../../../sections/Formulario';


function Asesoria(){

    return(

        <div>
            <Inicio/>
            <Formulario servicio="Asesorías"/>
            <Footer/>
        </div>

    );
}

export default Asesoria