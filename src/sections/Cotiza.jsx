import React from "react";
import Title from "../components/Title";
import { useScroll } from "../components/useScroll";
import { GoPlay } from "react-icons/go";
import { motion } from "framer-motion";
import "../styles/sections/Why.scss";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Button from "../components/Button";
import {
  topContainerAnimation,
  videoAnimation,
  reasonsAnimation,
} from "../utils/Animations";

function Cotiza() {
  const [element, controls] = useScroll();

  return (
    <div className="why-container" id="services" ref={element}>
      <div className="container">
       
        <div className="content">
            
            <div className="cotiza">
              <div >
                  <h4 className="formulario">Actividad Empresarial:</h4>
                  <select name="" id="">
                    <option value="">--Seleccione--</option>
                    <option value="">Bienes</option>
                    <option value="">Servicios</option>
                  </select>
                  <br/>
                  <br />
                  <h4 className="formulario">Tipo de Contribuyente:</h4>
                  <select name="" id="">
                    <option value="">--Seleccione--</option>
                    <option value="">Empresa</option>
                    <option value="">Persona Natural</option>
                    <option value="">Persona Juridica</option>
                  </select>
                  <br />
                  <br />
                  <input type="text" placeholder="Nombre de la Empresa" />
                  <h4 className="formulario">Tipo de Empresa:</h4>
                  <select name="" id="">
                    <option value="">--Seleccione--</option>
                    <option value="">Persona Natural</option>
                    <option value="">Persona Natural Obligada a llevar Contabilidad</option>
                    <option value="">Sociedad Anónima</option>
                    <option value="">Compañía LTDA.</option>
                    <option value="">S.A.S</option>
                    <option value="">Sociedad de Hecho</option>
                    <option value="">Contribuyente Especial</option>
                  </select>
                  <h4 className="formulario">Personal Área Contable:</h4>
                  <select name="" id="">
                    <option value="">--Seleccione--</option>
                    <option value="">SÍ</option>
                    <option value="">NO</option>
                    
                  </select>
                  <br />
                  <br />
                  <div className="button-container">
                   <button className="boton">Enviar</button>
                  </div>
              </div>
            
              
            </div>

         
        </div>
      </div>
    </div>
  );
}

export default Cotiza;
