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

function Clientesnuestros() {
  const [element, controls] = useScroll();

  return (
    <div className="why-container" id="services" ref={element}>
      <div className="container"> 
        <div className="content">
          <div className="containerclientesnuestros">

          
          <div className="clientes2"></div>
          <div className="videospot2">
                <video src={Video} width="150%" height="auto" controls="controls" autoplay="true"  muted="true"/>
          </div>
            
         
            

          </div>
        </div>
      </div>
    </div>
  );
}

export default Clientesnuestros;
