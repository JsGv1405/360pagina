import React from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import Title from "../components/Title";
import { useScroll } from "../components/useScroll";
import { HiLightBulb } from "react-icons/hi";
import { BsFillCalendarFill } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { SiGooglemessages } from "react-icons/si";
import { motion } from "framer-motion";
import "../styles/sections/About.scss";
import { reveal } from "../utils/Animations";

function About() {
  const [element, controls] = useScroll();

  return (
    <div className="about-container" id="about" ref={element}>
      <div className="container">
        <motion.div
          className="details"
          initial="hidden"
          animate="show"
          animate={controls}
          variants={reveal}
          transition={{ delay: 0.1, stiffness: 300 }}
        >
          <Title title="Somos la solución que tu empresa necesita" color="blue" />
          <p>
            Nunca más te vuelvas a preocupar por la contabilidad y marketing de tu negocio.
          </p>
          <p>
          No más multas y sanciones. Organizamos tus impuestos dentro de las fechas establecidas e impuslamos a tu negocio.
          </p>
          <Button content="Saber más" />
        </motion.div>
        <div className="cards" ref={element}>
          <Card
            title="Ideas Innovativas"
            logo={<HiLightBulb />}
            animateCustom={controls}
          />
          <Card
            title="Planificación"
            logo={<BsFillCalendarFill />}
            animateCustom={controls}
          />
          <Card
            title="Comunicación"
            logo={<BiSupport />}
            animateCustom={controls}
          />
          <Card
            title="Soporte y Sostenibilidad"
            logo={<SiGooglemessages />}
            animateCustom={controls}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
