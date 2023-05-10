import React from 'react';

import Inicio from './Inicio';
import Footer from '../../../sections/Footer';
import Formulario from '../../../sections/Formulario';

function Consultoria(){

    return(

        <div>
            <Inicio/>
            <Formulario servicio="Consultoría"/>
            <Footer/>
        </div>
    );
}

export default Consultoria