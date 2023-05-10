import React from 'react';
import Card from "../../components/Card2";
import { motion } from "framer-motion";
import Title from "../../components/Title";
import { textAnimation, cardAnimation } from "../../utils/Animations";
import { useScroll } from "../../components/useScroll";
import { HiOutlineBadgeCheck, HiOfficeBuilding, HiOutlineUserGroup, HiGlobeAlt} from "react-icons/hi";
import "../../assets/styles/Experiencia.scss";


function Experiencia() {
    const [element, controls] = useScroll();
    return (
        <div class="experiencia-container" id="experiencia" ref={element}>
            <div className="container">

                <div className="cards" ref={element}>
                    <Card
                        title="+ 10"
                        logo={<HiOutlineBadgeCheck />}
                        text="Años de Experiencia"
                        animateCustom={controls}
                    />
                    <Card
                        title="+ 5"
                        logo={<HiOfficeBuilding />}
                        text="Sectores Empresariales"
                        animateCustom={controls}
                    />
                    <Card
                        title="+ 100"
                        logo={<HiOutlineUserGroup />}
                        text="Clientes Satisfechos"
                        animateCustom={controls}
                    />
                    <Card
                        title="+ 20"
                        logo={<HiGlobeAlt />}
                        text="Emprendimientos Apoyados"
                        animateCustom={controls}
                    />
                </div>
            </div>

        </div>

    );
}

export default Experiencia