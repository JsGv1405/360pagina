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
import "../styles/sections/Starter2.scss";
import WorkImage from "../assets/imagen.svg";
import { reveal } from "../utils/Animations";
import { videoAnimation, reasonsAnimation } from "../utils/Animations";

function Starter2() {
  const [element, controls] = useScroll();

  return (
    <div className="starter2-container" id="about" ref={element}>
      <div className="container">
        
        <div className="cards" ref={element}>
            <motion.div
            className="image"
            variants={videoAnimation}
            animate={controls}
            transition={{ type: "tween", duration: 0.5 }}
            >
            <img src={WorkImage} alt="Work Image"  className="image"/>
            </motion.div>
        </div>
        <motion.div
          className="details"
          initial="hidden"
          animate="show"
          animate={controls}
          variants={reveal}
          transition={{ delay: 0.1, stiffness: 300 }}
        >
          <Title title="Nunca más te vuelvas a preocupar por la contabilidad de tu negocio" color="blue" />
          <p>
          Tenemos planes que se adaptan al número de transacciónes que realiza tu empresa. Sin importar la opción que elijas, nos comprometemos a llevar tu contabilidad al día mientras ahorras tiempo, esfuerzo y dinero.
          </p>
         
          <Button content="Saber más" />
        </motion.div>
      </div>
    </div>
  );
}

export default Starter2;
