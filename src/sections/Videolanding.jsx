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

function Videolanding() {
  const [element, controls] = useScroll();

  return (
    <div className="why-container" id="services" ref={element}>
        <div className="container">
         
        <div className="content">
          <motion.div
            variants={videoAnimation}
            animate={controls}
            transition={{ type: "tween", duration: 0.5 }}
          >
           
           <div className="videospot1">
                <video src={Video} width="200%" height="auto" controls="controls" autoplay="true"  muted="true"/>
            </div>
         
           
            
          </motion.div>
         
        </div>
      </div>
    </div>
  );
}

export default Videolanding;
