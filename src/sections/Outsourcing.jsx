import React from "react";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import { useScroll } from "../components/useScroll";
import { GoPlay } from "react-icons/go";
import { motion } from "framer-motion";
import "../styles/sections/Why.scss";
import {
  topContainerAnimation,
  videoAnimation,
  reasonsAnimation,
} from "../utils/Animations";

function Outsourcing() {
  const [element, controls] = useScroll();

  return (
    <div className="why-container" id="services" ref={element}>
      <Navbar />
      <div className="container">
        <motion.div
          className="content"
          variants={videoAnimation}
          animate={controls}
          transition={{ type: "tween", duration: 0.5 }}
        >
          <h1>
          Outsourcing
          </h1>
          <p>
          Cada día buscamos hacer más eficientes los procesos, y es el momento perfecto para trabajar con metodologías de BPO(Business Process Outsourcing), centradas en la administración de procesos, contables, tributarios, nómina y financieros, brindado la oportunidad que usted se centre en lo relevante de su empresa.

          </p>
          <div className="outsourcing">
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Outsourcing;
