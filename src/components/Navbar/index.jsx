import React from "react";
import "./style.css";
import { HeaderLogo } from "../../assets";

const Navbar = () => {
  return (
    <nav>
      <picture>
        <img src={HeaderLogo} alt="Little lemon logo" />
      </picture>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Menu</li>
        <li>Resrvation</li>
        <li>Order Online</li>
        <li>Login</li>
      </ul>
    </nav>
  );
};

export default Navbar;
