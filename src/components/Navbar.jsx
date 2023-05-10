import React, { useState } from "react";
import Button from "./Button";
import Dropdown from "./Dropdown";
import BrandName from "./BrandName";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import "../styles/components/Navbar.scss";
import { navbarAnimation } from "../utils/Animations";


function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 730) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 730) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <div className="col">
            <BrandName />
          </div>
          
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Inicio
            </Link>
          </li>

          <li className='nav-item'>
            <Link
              to='/nosotros'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Nosotros
            </Link>
          </li>



          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/asesoria'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Servicios <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>

          

        </ul>
        <Button className="nav-item" content="Contáctanos" />
      </nav>
    </>
  );
}

export default Navbar;
