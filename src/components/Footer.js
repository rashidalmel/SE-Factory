import React from 'react';
import { 
  FaLinkedinIn, 
  FaInstagram, 
  FaTwitter, 
  FaYoutube, 
  FaFacebookF 
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-logo">
            <img src="/66df4d778ad44d7e5a19b837_sef.png" alt="SE Factory" />
          </div>
          <div className="footer-text">
            <p>Home</p>
            <p>Hello world!</p>
            <p>Milestones</p>
            <p>Programs</p>
            <p>Hire Talent</p>
            <p>FAQs</p>
            <p>Testimonials</p>
            <p>Contact us</p>
            <p>Partners</p>
          </div>
        </div>        <div className="footer-right">
          <img src="/63e3c537b1e1f848e77b7c6d_Property 1=logo_square.svg" alt="SE Factory Logo" className="footer-square-logo" />
          <img src="/Brand RA.png" alt="Brand RA" className="footer-brand-ra" />
          <div className="social-links">
            <a href="https://www.linkedin.com/company/se-factory/" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaLinkedinIn />
            </a>
            <a href="https://www.instagram.com/sefactoryofficial/" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaInstagram />
            </a>
            <a href="https://twitter.com/se_factory" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaTwitter />
            </a>
            <a href="https://www.youtube.com/@SEFactory" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaYoutube />
            </a>
            <a href="https://www.facebook.com/SEFactory/" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaFacebookF />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 SE Factory SAL. All rights reserved.</p>
          <a href="/privacy">Privacy policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
