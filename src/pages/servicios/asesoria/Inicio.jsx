import React from 'react';

import "../../../assets/styles/Inicio_Asesoria.scss";

import { useScroll } from "../../../components/useScroll";
import { GoPlay } from "react-icons/go";
import { motion } from "framer-motion";
import Navbar from "../../../components/Navbar";
import Banner2 from "../../../components/Banner2";
import Title from "../../../components/Title";
import Formulario from "../../../sections/Formulario";
import Card from "../../../components/Card2";
import { HiOutlineBadgeCheck, HiOfficeBuilding, HiOutlineUserGroup, HiGlobeAlt } from "react-icons/hi";

import {
    topContainerAnimation,
    videoAnimation,
    reasonsAnimation,
} from "../../../utils/Animations";

function Inicio() {
    const [element, controls] = useScroll();
    return (
        <div className="asesoria-container" id="services" ref={element}>
            <Navbar />
            <Banner2 title="SERVICIOS" subtitle={"Asesoría"}/>
            <div className="container">


                <motion.div
                    className="content"
                    variants={videoAnimation}
                    animate={controls}
                    transition={{ type: "tween", duration: 0.5 }}
                >
                    <Title title="Asesorías en:" color="pink" lineCenter={true} />
                    <div className="cards" ref={element}>
                        <Card
                            title="Marketing"
                            logo={<HiOutlineBadgeCheck />}
                            animateCustom={controls}
                        />
                        <Card
                            title="Contabilidad"
                            logo={<HiOfficeBuilding />}
                            animateCustom={controls}
                        />
                        <Card
                            title="Finanzas"
                            logo={<HiOutlineUserGroup />}
                            animateCustom={controls}
                        />
                        <Card
                            title="Administración"
                            logo={<HiGlobeAlt />}
                            animateCustom={controls}
                        />
                    </div>

                </motion.div>
                
            </div>
        </div>

    );

}

export default Inicio