import React from 'react';
import "./index.css";
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className='footer'>
      <p className='footer-text'>Made with <span>&lt;/&gt;</span> by Prachi Sahu</p>
      <div>
        <Link
          className="footer-links"
          to="https://github.com/prachi-sahu-codes/bitui"
          target="_blank"
        >
          <i className="fa-brands fa-github" aria-hidden="true"></i>
        </Link>

        <Link
          className="footer-links"
          to="https://twitter.com/_prachi_sahu"
          target="_blank"
        >
          <i className="fa-brands fa-twitter"></i>
        </Link>

        <Link
          className="footer-links"
          to="https://www.linkedin.com/in/prachi-sahu-96b228200/"
          target="_blank"
        >
          <i className="fa-brands fa-linkedin"></i>
        </Link>

        <Link
          className="footer-links"
          to="mailto:prachisahu998@gmail.com"
          target="_blank"
        >
          <i className="fa-solid fa-envelope"></i>
        </Link>
      </div>
      <div className='footer-secondary-text'>© 2023 <p><img className="footer-logo" src={logo}/>Bit-UI.</p></div>
    </div>
  )
}

export default Footer;
