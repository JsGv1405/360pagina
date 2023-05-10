import React from "react";
import { useScroll } from "../../components/useScroll";
import { GoPlay } from "react-icons/go";
import { motion } from "framer-motion";

import "../../assets/styles/Mision.scss";

import {
    topContainerAnimation,
    videoAnimation,
    reasonsAnimation,
} from "../../utils/Animations";

function Mision() {
    const [element, controls] = useScroll();
    return (
        <div className="mision-container" id="services" ref={element}>
            <div className="container">
                <motion.div
                    className="content"
                    variants={videoAnimation}
                    animate={controls}
                    transition={{ type: "tween", duration: 0.5 }}
                >
                    <h1>
                        Misión
                    </h1>
                    <p>
                    Nuestra misión es brindar asesoramiento técnico y soluciones de alta calidad en servicios Contables y Empresariales; 
                    contribuyendo a la mejora continua, garantizando seguridad y confianza en la información contable y 
                    financiera, aportando al desarrollo empresarial de nuestros clientes.

                    </p>

                </motion.div>
            </div>
        </div>

    );
}

export default Mision