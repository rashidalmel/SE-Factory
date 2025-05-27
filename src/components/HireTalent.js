import React from 'react';

const HireTalent = () => {
  return (
    <section className="hire-talent">
      <div className="hire-header">
        <div className="section-header">
          <span className="prompt">&gt;</span>
          <h1 className="sec5">Hire talent</h1>
          <div className="stats-dots">
            <span className="dot dark"></span>
            <span className="dot light"></span>
            <span className="dot green"></span>
          </div>
        </div>
      </div>
      
      <div className="hire-container">
        <h1 className="sec5">Become a Recruitment Partner</h1>
        
        <div className="stats-banner">
          <div className="stats-group">
            <span className="stats-number">220+</span>
            <span className="stats-text">companies</span>
          </div>
          <div className="stats-group">
            <span className="stats-text">from over</span>
            <span className="stats-number">10</span>
            <span className="stats-text">countries</span>
          </div>
          <div className="stats-group">
            <span className="stats-text">have joined our network since</span>
            <span className="stats-number">2016</span>
          </div>
        </div>
        
        <div className="benefits-list">
          <ol>
            <li>Exclusive, direct, and streamlined access to our graduating cycles</li>
            <li>Candidate insights from instructors and personalized recommendations</li>
            <li>Interviews at will</li>
            <li>Tech talks participation and engagement with students opportunities</li>
          </ol>
        </div>

        <p className="recruitment-cta">
          Are you on the hunt for exceptional rising junior developers? Look no further than SE Factory!
        </p>

        <div className="contact-section">
          <button className="contact-button">CONTACT US <span className="arrow">&gt;</span></button>
        </div>
      </div>
      
      <div className="hr-factory-banner">
        <p>Want to launch a local team? check out</p>
        <div className="hr-factory-logo">
          <img src="/63e4e564253e4eaed97f68ed_Property 1=logo_text.svg" alt="HR Factory" />
        </div>
      </div>
    </section>
  );
};

export default HireTalent;
