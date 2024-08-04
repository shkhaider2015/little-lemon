import React from "react";
import "./styles.css";
import {
  Email,
  Facebook,
  FooterLogo,
  LinkedIn,
  Location,
  Mobile,
  StackOverflow,
  Twitter,
} from "../../assets";

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="logo-col">
        <img src={FooterLogo} alt="Footer Logo" />
      </div>
      <div className="links-col">
        <h2>Quick Links</h2>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservation</li>
          <li>Order Online</li>
          <li>Login</li>
        </ul>
      </div>
      <div className="contacts-col">
        <h2>Contacts</h2>
        <ul>
          <li>
            <img src={Location} alt="Location" />
            <span>h-2/23 Karachi, Sindh, Pakistan</span>
          </li>
          <li>
            <img src={Mobile} alt="Mobile" />
            <span>+923460027852</span>
          </li>
          <li>
            <img src={Email} alt="Email" />
            <span>shkhaider2015@gmail.com</span>
          </li>
        </ul>
      </div>
      <div className="socials-col">
        <h2>Connect with us</h2>
        <div className="social-logos">
          <a href="https://www.linkedin.com/in/shakeel-haider-818233176/" target="_blank">
            <img src={LinkedIn} alt="" />
          </a>
          <a href="https://www.facebook.com/" target="_blank">
            <img src={Facebook} alt="" />
          </a>
          <a href="https://stackoverflow.com/users/8307195/shakeel-haider" target="_blank">
            <img src={StackOverflow} alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
