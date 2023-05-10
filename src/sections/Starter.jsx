import React from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Testimonials from "./Testimonials";
import { useScroll } from "../components/useScroll";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { GoPlay } from "react-icons/go";
import { motion } from "framer-motion";
import WorkImage from "../assets/fondo2.png";
import "../styles/sections/Starter.scss";
import { headerAnimation, imageAnimation } from "../utils/Animations";

export default function Starter() {
  const [element, controls] = useScroll();

  return (
    <div className="">
    {/* <Testimonials/> */}
    <div className="main-container" ref={element}>
       
      <Navbar />
      <div className="container">
        <motion.div
          className="content"
          variants={headerAnimation}
          animate={controls}
          transition={{ delay: 0.2, type: "tween" }}
        >
          <h1>
          Asesorías Integrales
          </h1>
          <p>
          Nos encargamos de la contabilidad de tu empresa y mantenemos su información actualizada para que no tengas que pagar sanciones por irregularidades contables.
          </p>
          <div className="button-container">
            <Button
              color="pink"
              content="Contactar Asesor"
              icon={<HiOutlineArrowNarrowRight />}
            />
          </div>
          <br />
          <div className="button-container">
            <Button
              color="pink"
              content="Cotizar Ahora"
              icon={<HiOutlineArrowNarrowRight />}
            />
          </div>
        </motion.div>
        <motion.div
          className="image"
          variants={imageAnimation}
          animate={controls}
          transition={{ type: "tween" }}
        >
          <img src={WorkImage} alt="Work Image" />
        </motion.div>
      </div>
    </div>
    </div>
  );
}
