import React from 'react';

const Newsletter = () => {  return (
    <section className="newsletter">
      <div className="newsletter-container">
        <div className="newsletter-content">
          <div className="newsletter-texts">
            <div className="newsletter-title">
              <h2>Subscribe to our <span>newsletter</span></h2>
            </div>
            <p className="newsletter-description">
              and stay up-to-date with our latest news.
            </p>
          </div>
          <form className="newsletter-form">
            <input
              type="email"
              className="newsletter-input"
              placeholder="Enter your email"
              required
            />
            <button type="submit" className="newsletter-button">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;