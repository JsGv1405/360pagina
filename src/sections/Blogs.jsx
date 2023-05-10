import React from "react";
import Blog from "../components/Blog";
import Button from "../components/Button";
import Title from "../components/Title";
import { useScroll } from "../components/useScroll";
import { motion } from "framer-motion";
import BlogImage1 from "../assets/blogImage1.jpg";
import BlogImage2 from "../assets/blogImage2.jpg";
import BlogImage3 from "../assets/blogImage3.jpg";
import "../styles/sections/Blogs.scss";
import { textAnimation, cardAnimation } from "../utils/Animations";

function Blogs() {
  const [element, controls] = useScroll();

  return (
    <div className="blogs-container" id="blog" ref={element}>
      <div className="container">
        <motion.div
          className="title-container"
          variants={textAnimation}
          animate={controls}
          transition={{ duration: 1 }}
        >
          <Title title="Nuestros Servicios" color="pink" lineCenter={true} />

        </motion.div>
        <div className="blogs">
          <Blog
            //image={BlogImage1}
            title="Asesoría"
            subTitle="Resolvemos  contingencias   contables  o tributarias que interrumpan las operaciones de su empresa o ponga en riesgo su continuidad."
            variants={cardAnimation}
            animate={controls}
          />
          <Blog
            // image={BlogImage2}
            title="Outsourcing"
            subTitle="Resolvemos contingencias contables o tributarias que interrumpan las operaciones de su empresa o ponga en riesgo su continuidad. "
            variants={cardAnimation}
            animate={controls}
          />
          <Blog
            //image={BlogImage3}
            title="Consultoría"
            subTitle="Somos su departamento contable de confianza, nuestra  experiencia   atendiendo  a cientos  de empresas,  nos   permiten   innovar   día  a   día, brindamos    una     atención    personalizada   y contamos con diversas soluciones."
            variants={cardAnimation}
            animate={controls}
          />
        </div>
        <div
          className="button-container"
          variants={textAnimation}
          animate={controls}
        >
          <Button content="Saber más" />
        </div>

        <div className="google-map-code">
          <iframe src="https://maps.google.com/maps?q=360grupoconsultor&t=&z=17&ie=UTF8&iwloc=&output=embed" width="831" height="450" frameborder="0" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>
      </div>

    </div>
  );
}

export default Blogs;
