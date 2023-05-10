import React from "react";
import { motion } from "framer-motion";
import "../styles/components/Card.scss";
import { cardAnimation } from "../utils/Animations";
function Card({ logo, title, animateCustom,text }) {
  return (
    <motion.div
      className="card"
      variants={cardAnimation}
      initial="hidden"
      animate="show"
      animate={animateCustom}
      transition={{ stiffness: 5000 }}
    >
      <div className="logo">{logo}</div>
      <div className="card-title">
        <h4>{title}</h4>
      </div>
      <div className="card-text">
        <p>{text}</p>
      </div>
    </motion.div>
  );
}

export default Card;
