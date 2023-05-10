import React from "react";
import Title from "../components/Title";
import { useScroll } from "../components/useScroll";
import Navbar from "../components/Navbar";
import { GoPlay } from "react-icons/go";
import { motion } from "framer-motion";
import "../styles/sections/Why.scss";
import {
  topContainerAnimation,
  videoAnimation,
  reasonsAnimation,
} from "../utils/Animations";

function Why() {
  const [element, controls] = useScroll();

  return (
    <div className="">
 
    <div className="why-container" id="services" ref={element}>
      <div className="container">
        <motion.div
          className="top"
          variants={topContainerAnimation}
          animate={controls}
          transition={{
            duration: 1,
          }}
        >
          <Title title="Asesorías Integrales" color="pink" lineCenter={true} />
          <div className="subTitle">
            <p>
            Más de 10+  años de experiencia con empresas de renombre tanto nacionales como internacionales. Trabajamos en los sectores:
            </p>
          </div>
        </motion.div>
        <div className="content">
          <motion.div
            variants={videoAnimation}
            animate={controls}
            transition={{ type: "tween", duration: 0.5 }}
          >
            <div className="video">
  
            </div>
          </motion.div>
          <motion.div
            className="reasons"
            variants={reasonsAnimation}
            animate={controls}
            transition={{ type: "tween", duration: 0.5 }}
          >
            <ul>

              <li><i class="fas fa-thumbs-up"></i> Productivo </li>
              <li><i class="fas fa-university"></i> Educativo </li>
              <li><i class="fas fa-hand-holding-usd"></i> Comercial </li>
              <li><i class="fas fa-tractor"></i> Agrícola </li>
              <li><i class="fas fa-tablet-alt"></i>  Tecnológico </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Why;
