import React from "react";
import { motion } from "framer-motion";
import "../styles/components/Testimonial.scss";

function Testimonial({ content, name, designation, variants, animate }) {
  return (
    <motion.div
      className="testimonial-container"
      variants={variants}
      animate={animate}
    >
      <div className="">
      <div className="google-map-code">
          <iframe src="https://maps.google.com/maps?q=360grupoconsultor&t=&z=13&ie=UTF8&iwloc=&output=embed" width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>
     
      <div className="quote">
        <span>&#10077;</span>
      </div>
      <div className="content">{content}</div>
      <div className="author">
        <div className="name">{name}</div>
        <div className="designation">{designation}</div>
      
      </div>
      </div>
    </motion.div>
  );
}

export default Testimonial;
