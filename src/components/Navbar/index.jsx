import React from "react";
import "./style.css";
import { HeaderLogo } from "../../assets";
import { sectionIds } from "../../constants";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation()

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const _homeSelect = () => {
    if(pathname.includes('reserve-table')) {
      navigate("/")
    } else {
      scrollToSection(sectionIds.HOME)
    }
  }

  console.log("Path : ", pathname);
  
  return (
    <nav>
      <picture>
        <img src={HeaderLogo} alt="Little lemon logo" />
      </picture>
      <ul>
        <li onClick={() => _homeSelect()} >Home</li>
        <li onClick={() => scrollToSection(sectionIds.ABOUT)}  >About</li>
        <li onClick={() => scrollToSection(sectionIds.MENU)} >Menu</li>
        <li onClick={() => scrollToSection(sectionIds.RESERVATION)} >Resrvation</li>
        <li onClick={() => navigate("reserve-table")} >Order Online</li>
        <li>Login</li>
      </ul>
    </nav>
  );
};

export default Navbar;
