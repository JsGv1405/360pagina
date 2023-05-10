import React from "react";
import "../styles/components/BrandName.scss";
import GrupoConsultor from "../assets/1.png";
function BrandName({ isFooter = false }) {
  return (
    <div className={`brand ${isFooter === true ? "footer" : ""}`}>
      <span><img className="imagenGrupoConsultor" src={GrupoConsultor} alt="GrupoConsultor" /></span>
    </div>
  );
}

export default BrandName;
