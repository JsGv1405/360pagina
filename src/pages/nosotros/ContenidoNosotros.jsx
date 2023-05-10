import React from "react";
import Button from "../../components/Button";
import Navbar from "../../components/Navbar";
import Banner from './Banner';
import Title from "../../components/Title";
import { useScroll } from "../../components/useScroll";
import "../../styles/sections/ContenidoNosotros.scss";
import { motion } from "framer-motion";
import WorkImage from "../../assets/images/contador.jpg";
import { reveal } from "../../utils/Animations";
import { textAnimation, cardAnimation } from "../../utils/Animations";

function ContenidoNosotros() {
  const [element, controls] = useScroll();

  return (
    <div className="nosotros-container" id="about" ref={element}>

      <div className="container">

        <div className="cards" ref={element}>
          <motion.div
            className="image"
            variants={textAnimation}
            animate={controls}
            transition={{ duration: 1 }}
          >
            <img src={WorkImage} alt="Work Image" className="image" />
          </motion.div>
        </div>
        <motion.div
          className="details"
          variants={textAnimation}
          animate={controls}
          transition={{ duration: 1 }}
        >
          <Title title="Más de 10+ años de experiencia" color="blue" />
          <p>
            Somos un equipo profesional con amplio conocimiento y
            experiencia trabajando en empresas de diversos sectores como: Productivo, Educativo, Comercial, Agrícola y Tecnológico.

          </p>
          <p>
            Nuestro negocio se basa en brindar completa satisfacción.
          </p>



        </motion.div>
      </div>
    </div>
  );
}

export default ContenidoNosotros;
