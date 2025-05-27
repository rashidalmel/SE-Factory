import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    quote: "Growing up, I saw that every girl that had taken interest in anything technical or scientific had been undermined and underestimated in her field.",
    author: "Zakaria T.",
    role: "SEF alumna working at",
    company: "Poesis",
    image: "/641ae721f027b6a3a4753ab2_1.png"
  },
  {
    id: 2,
    quote: "The program at SE Factory was intensive and challenging but completely worth it. The practical experience and industry insights helped me transition into a tech career.",
    author: "Rayan N.",
    role: "Full Stack Developer at",
    company: "GeekExpress",
    image: "/6422c87dcb6d6083e9c17c55_Rayan-Najdi_GeekExpress.jpeg"
  },
  {
    id: 3,
    quote: "SE Factory provided me with the perfect environment to grow both technically and professionally. The hands-on approach to learning was exactly what I needed.",
    author: "Rabih K.",
    role: "Software Engineer at",
    company: "Tech Solutions",
    image: "/64880a8d662eb14723b746cd_rabih.jpeg"
  },
  {
    id: 4,
    quote: "The mentorship and support I received at SE Factory were invaluable. It's more than just coding - it's about building a strong foundation for a tech career.",
    author: "Sarah M.",
    role: "UI/UX Designer at",
    company: "DigitalWave",
    image: "/641ae9d82d5cbb30e5d9a9d7_Untitled design (8).png"
  }
];

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleDotClick = (index) => {
    if (index === activeSlide) return;
    setActiveSlide(index);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const currentTestimonial = testimonials[activeSlide];

  return (
    <section className="testimonials">
      <div className="testimonials-header">
        <span className="prompt">&gt;</span>
        <h2>Testimonials</h2>
        <div className="nav-dots">
          <span className="dot dark"></span>
          <span className="dot light"></span>
          <span className="dot green"></span>
        </div>
      </div>
      <div className="testimonial-slider">
        <div className="testimonial-card">
          <div className="testimonial-content">
            <div className="quote-mark">
              <img src="/62434fa732124a91e612aae8_quote-mark.svg" alt="quote mark" />
            </div>
            <p className="quote">{currentTestimonial.quote}</p>
            <div className="author-info">
              <div className="author-image">
                <img src={currentTestimonial.image} alt={currentTestimonial.author} />
              </div>
              <div className="author-details">
                <h3>{currentTestimonial.author}</h3>
                <p>
                  <span className="prompt">&gt;</span> {currentTestimonial.role}{" "}
                  <span className="company">{currentTestimonial.company}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="testimonial-media">
            <img src={currentTestimonial.image} alt={currentTestimonial.author} />
          </div>
        </div>
      </div>
      <div className="slider-dots">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`slider-dot ${index === activeSlide ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
