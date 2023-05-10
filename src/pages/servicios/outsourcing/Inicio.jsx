import React from 'react';
import "../../../assets/styles/Inicio_Outsourcing.scss"
import { useScroll } from "../../../components/useScroll";
import Navbar from "../../../components/Navbar";
import Banner2 from "../../../components/Banner2";
import { motion } from "framer-motion";
import Title from "../../../components/Title";
import {
    topContainerAnimation,
    videoAnimation,
    reasonsAnimation,
} from "../../../utils/Animations";

function Inicio(){
    const [element, controls] = useScroll();
    return(
        <div className='outsourcing-container' ref={element}>
            <Navbar />
            <Banner2 title="SERVICIOS" subtitle={"Outsourcing"} />
            <div className="container">
                <motion.div
                    className="content"
                    variants={videoAnimation}
                    animate={controls}
                    transition={{ type: "tween", duration: 0.5 }}
                >
                    <Title title="Outsourcing" color="pink" lineCenter={true} />
                    <p>Cada día buscamos hacer más eficientes los procesos, y es el momento perfecto para trabajar con metodologías de BPO(Business Process Outsourcing), centradas en la administración de procesos, contables, tributarios, nómina y financieros, brindado la oportunidad que usted se centre en lo relevante de su empresa.</p>

                </motion.div>
            </div>

        </div>
    );
}

export default Inicio