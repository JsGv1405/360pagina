import React from 'react';

import "../../../assets/styles/Inicio_Consultoria.scss";

import { useScroll } from "../../../components/useScroll";
import { GoPlay } from "react-icons/go";
import { motion } from "framer-motion";
import Navbar from "../../../components/Navbar";
import Banner2 from "../../../components/Banner2";
import Title from "../../../components/Title";


import {
    topContainerAnimation,
    videoAnimation,
    reasonsAnimation,
} from "../../../utils/Animations";

function Inicio() {
    const [element, controls] = useScroll();
    return (
        <div className="consultoria-container" id="services" ref={element}>
            <Navbar />
            <Banner2 title="SERVICIOS" subtitle={"Consultoría"} />
            <div className="container">
                <motion.div
                    className="content"
                    variants={videoAnimation}
                    animate={controls}
                    transition={{ type: "tween", duration: 0.5 }}
                >
                    <Title title="Consultorías" color="pink" lineCenter={true} />
                    <p>Somos su departamento contable de confianza, nuestra experiencia atendiendo a cientos de empresas,
                        nos permiten innovar día a día, brindamos una atención personalizada y contamos con diversas soluciones.</p>

                </motion.div>
            </div>
        </div>

    );

}

export default Inicio