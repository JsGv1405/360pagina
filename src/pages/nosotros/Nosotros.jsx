import React from 'react';
import ContenidoNosotros from './ContenidoNosotros';
import Banner from './Banner';
import Mision from './Mision';
import Experiencia from "./Experiencia";
import Nuestrosclientes from '../../sections/Nuestrosclientes';
import Clientesnuestros from '../../sections/Clientesnuestros';
import Footer from '../../sections/Footer';

const Nosotros = () => {
  return (
    <div>
      <div>
      <Banner/>
      <Mision/>
      <ContenidoNosotros/>
      <Experiencia/>
      {/* <Clientesnuestros/> */}
      <Nuestrosclientes/>
      <Footer/>
      </div>
    </div>
  )
}

export default Nosotros