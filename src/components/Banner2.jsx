import React from 'react';
import "../styles/components/Banner2.scss";
import { useScroll } from "./useScroll";

function Banner2({ title, subtitle}){
    const [element, controls] = useScroll();
    return (
        <div className="banner2-container" id="services" ref={element}>
            <div className='content'>
                <br/>
                <br/>
                <br/>
                <h1>{title}</h1>
                <h3> {subtitle}</h3>
            </div>
        </div> 
    )
}

export default Banner2;