import React, { useState } from 'react';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is the Difference Between the FSW Bootcamp & the FCS Program?",
      answer: "The FSW (Full-Stack Web Development) Bootcamp is an intensive 14-week program focused on practical web development skills, while the FCS (Foundations of Computer Science) Program is designed to give you a solid theoretical foundation in computer science fundamentals."
    },
    {
      question: "Where do I apply?",
      answer: "You can apply through our website by clicking the 'Apply Now' button at the top of the page. The application process includes an online form and assessment."
    },
    {
      question: "What programs do you offer?",
      answer: "We offer several specialized programs including:\n- FSW (Full-Stack Web Development) Bootcamp\n- FCS (Foundations of Computer Science)\n- UIX (User Interface & Experience Design)\n- FSD (Full-Stack Development with Python)"
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faqs">
      <div className="faqs-container">        <div className="faqs-header">
          <span className="prompt">&gt;</span>
          <h2>FAQs</h2>
          <div className="nav-dots">
            <div className="dot dark"></div>
            <div className="dot light"></div>
            <div className="dot green"></div>
          </div>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                {faq.question}
                <span className="arrow">▼</span>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>          ))}          <div className="view-all-button">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              VIEW ALL <span className="arrow">→</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
