import React from 'react';

import Inicio from './Inicio';
import Footer from '../../../sections/Footer';
import Entregables from '../../../sections/Entregables';
import Formulario from '../../../sections/Formulario';


function Outsourcing1(){
    return(
        <div>
            <Inicio/>
            <Entregables/>
            <Formulario servicio="Outsourcing"/>
            <Footer/>
            
        </div>
    );
}
export default Outsourcing1