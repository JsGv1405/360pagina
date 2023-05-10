import React from 'react';
import Navbar from '../components/Navbar';
import Starter from "./Starter";
import Outsourcing from './Outsourcing';
import Videolanding from './Videolanding';
import Entregables from './Entregables';
import About from "./About";
import Cotiza from './Cotiza';
import Clientesnuestros from './Clientesnuestros';
import Nuestrosclientes from './Nuestrosclientes';
import Footer from './Footer';

const Landing = () => {
  return (
    <div>
      <div>
        <Outsourcing/>
        <Videolanding/>
        <Entregables/>
        <Cotiza/>
        <Clientesnuestros/>
        <Nuestrosclientes/>
        <Footer/>
      </div>
    </div>
  )
}

export default Landing