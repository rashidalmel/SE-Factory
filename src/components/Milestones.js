import React from 'react';

const Milestones = () => {
  return (
    <section className="milestones">      <div className="milestone-header">
        <div className="milestone-header-left">
          <span className="milestone-arrow">&gt;</span>
          <h2>Milestones</h2>
        </div>
        <div className="milestone-dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot green"></span>
        </div>
      </div>
        <div className="milestone-grid">
        <div className="milestone-left">
          <div className="milestone-90">
            <h1>90%</h1>
            <h3>employment success rate</h3>
            <ul>
              <li>- Supported the employment of 250+ youth</li>
              <li>- 50% working remotely from Lebanon</li>
              <li>- Average salary today $1,300</li>
            </ul>
          </div>
        </div>

        <div className="milestone-right">
          <div className="stat-card">
            <h2>1,000+</h2>
            <p>youth trained since 2016</p>
          </div>
          
          <div className="stat-card">
            <h2>10+</h2>
            <p>hiring countries</p>
          </div>
          
          <div className="stat-card">
            <h2>300+</h2>
            <p>graduated Full-Stack web developers</p>
          </div>
          
          <div className="stat-card">
            <h2>220+</h2>
            <p>global recruitment partner companies</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Milestones;
