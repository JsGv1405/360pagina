import React from 'react';
import "../../assets/styles/banner.scss";
import { useScroll } from "../../components/useScroll";
import Navbar from "../../components/Navbar";

function Banner(){
    const [element, controls] = useScroll();
    return (
        <div className="banner-container" id="services" ref={element}>
            <div className='content'>
            <Navbar />
            <br/>
            <br/>
            <br/>
            <h1>NOSOTROS</h1>

            </div>
        </div> 
    )
}

export default Banner;