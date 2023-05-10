import React from "react";
import Title from "../components/Title";
import Testimonial from "../components/Testimonial";
import { useScroll } from "../components/useScroll";
import { motion } from "framer-motion";
import "../styles/sections/Testimonials.scss";
import { textAnimation, cardAnimation } from "../utils/Animations";

export default function Testimonials() {
  const [element, controls] = useScroll();

  return (
    <div className="">
      {/* <form >
        <label>
          Name:
          <input type="text" />
        </label>
        <input type="submit" value="Submit" />
      </form>
       <div className="google-map-code">
          <iframe src="https://maps.google.com/maps?q=360grupoconsultor&t=&z=17&ie=UTF8&iwloc=&output=embed" width="831" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div> */}
    
    <div className="testimonials-container" id="testimonial" ref={element}>
      <div className="container">
        <motion.div
          className="title-container"
          variants={textAnimation}
          animate={controls}
          transition={{
            duration: 1,
          }}
        >
          <Title title="Nunca más te vuelvas a preocupar por la contabilidad de tu negocio" color="blue" lineCenter={true} />
        </motion.div>
        <div className="testimonials">
          <Testimonial
            content="Resolvemos  contingencias   contables  o tributarias que interrumpan las operaciones de su empresa o ponga en riesgo su continuidad."
            name="Trushit Vyas"
            designation="Co-Founder"
            variants={cardAnimation}
            animate={controls}
          />
          <Testimonial
            content="Resolvemos contingencias contables o tributarias que interrumpan las operaciones de su empresa o ponga en riesgo su continuidad."
            name="Kishan H. Sheth"
            designation="Founder & CEO"
            variants={cardAnimation}
            animate={controls}
          />
          <Testimonial
            content="Somos su departamento contable de confianza, nuestra  experiencia   atendiendo  a cientos  de empresas,  nos   permiten   innovar   día  a   día, brindamos    una     atención    personalizada   y contamos con diversas soluciones."
            name="Romit Gandhi"
            designation="Founder"
            variants={cardAnimation}
            animate={controls}
          />
        </div>
      </div>
    </div>
    </div>
  );
}
