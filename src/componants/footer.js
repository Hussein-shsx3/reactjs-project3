import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div id="footer">
      <div className="contact">
        <h1>Contact</h1>
        <a href="/">
          <i className="fa-solid fa-house"></i>123/Colombo/Sri Lanka
        </a>
        <a href="/">
          <i className="fa-solid fa-phone"></i>+94 12 345 6789
        </a>
        <a href="/">
          <i className="fa-solid fa-envelope"></i>contact@gmail.com
        </a>
      </div>

      <div className="tag">
        <h1>Get Help</h1>
        <a href="/" className="center">
          FAQ
        </a>
        <a href="/" className="center">
          Shipping
        </a>
        <a href="/" className="center">
          Returns
        </a>
        <a href="/" className="center">
          Payment Options
        </a>
      </div>

      <div className="tag">
        <h1>Our Stores</h1>
        <a href="/" className="center">
          Sri Lanka
        </a>
        <a href="/" className="center">
          USA
        </a>
        <a href="/" className="center">
          India
        </a>
        <a href="/" className="center">
          Japan
        </a>
      </div>

      <div className="tag">
        <h1>Follw Us</h1>
        <div className="social_link">
          <a href="/">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </div>
      </div>

      <div className="end">
        <h1>Newsletter</h1>
        <div className="search_bar">
          <input type="text" placeholder="You email id here" />
          <button type="submit">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
