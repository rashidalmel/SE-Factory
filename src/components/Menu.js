import React from 'react';

function Menu({ isOpen, onClose }) {
  return (
    <div className={`menu-overlay ${isOpen ? 'open' : ''}`}>
      <button className="close-menu" onClick={onClose}>×</button>
      <div className="menu-content">
        <div className="menu-left">
          <h3>Home</h3>
          <h3>Hello world!</h3>
          <h3>Milestones</h3>
          <h3>Programs</h3>
          <h3>Hire talent</h3>
          <h3>Testimonials</h3>
          <h3>FAQs</h3>
          <h3>Contact us</h3>
          <h3>Partners</h3>
          <h3>ok</h3>
        </div>
        <div className="menu-right">
          <h2 className="menu-title">Account</h2>
          <p className="menu-description">{/* Login with existing or create a new account in order to apply to SEF programs */}</p>
          <button className="menu-button login">LOG IN</button>
          <button className="menu-button signup">SIGN UP</button>          
          <a href="https://hrfactory.example.com" className="hr-factory-banner" target="_blank" rel="noopener noreferrer">
            <div className="hr-logo">
              <img src="/63e4e564253e4eaed97f68ed_Property 1=logo_text.svg" alt="HR Factory" />
            </div>
            <div className="hr-content">
              <h3>Global Companies, Meet Lebanese Talent</h3>
              <p>All You Need to Launch a Local Team</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Menu;
