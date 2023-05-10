import React from "react";
import Title from "../components/Title";
import { useScroll } from "../components/useScroll";
import { GoPlay } from "react-icons/go";
import { motion } from "framer-motion";
import "../styles/sections/Why.scss";
import Video from "../assets/Spot2.mp4";
import {
  topContainerAnimation,
  videoAnimation,
  reasonsAnimation,
} from "../utils/Animations";

function Nuestrosclientes() {
  const [element, controls] = useScroll();

  return (
    <div className="why-container" id="services" ref={element}>
        <div className="container">
         
        <div className="content">
          <div className="containerclientes">
          <div className="clientes"></div>
          <div className="videospot3">
            <video src={Video} width="94%" height="auto" controls="controls" autoplay="true"  muted="true"/>
          </div>
         
            

          </div>
        </div>
      </div>
    </div>
  );
}

export default Nuestrosclientes;
