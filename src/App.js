import React, { useEffect, useRef, useState } from 'react';
import './styles.css';
import Milestones from './components/Milestones';
import Programs from './components/Programs';
import HireTalent from './components/HireTalent';
import Testimonials from './components/Testimonials';
import FAQs from './components/FAQs';
import ContactUs from './components/ContactUs';
import Partners from './components/Partners';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Menu from './components/Menu';

function App() {
  const rotatingTextRef = useRef(null);
  const heroLeftRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const rotatingText = rotatingTextRef.current;
    const heroLeft = heroLeftRef.current;

    const texts = ['SOFTWARE ENGINEER?', 'UI/UX DESIGNER?', 'WEB DEVELOPER?'];
    const colors = ['#28eea7d9', '#fb508eed', '#9864daed'];
    let currentIndex = 0;

    function changeBackground(color) {
      if (!heroLeft) return;
      heroLeft.style.backgroundColor = color;
      heroLeft.style.backgroundImage = `linear-gradient(${color}, ${color}), url('https://cdn.prod.website-files.com/63e3828f575098222357ad70/641b4c900878f534cf0d3f17_Untitled%20design%20(11).png')`;
    }

    function deleteText(text, onComplete) {
      let i = text.length;
      const deleteInterval = setInterval(() => {
        if (i > 0) {
          rotatingText.textContent = text.substring(0, i - 1);
          i--;
        } else {
          clearInterval(deleteInterval);
          if (onComplete) onComplete();
        }
      }, 100);
    }

    function typeText(text, color, onComplete) {
      let i = 0;
      rotatingText.textContent = '';
      changeBackground(color);

      const typeInterval = setInterval(() => {
        if (i < text.length) {
          rotatingText.textContent = text.substring(0, i + 1) + '_';
          i++;
        } else {
          clearInterval(typeInterval);
          if (onComplete) onComplete();
        }
      }, 100);
    }

    function startAnimation() {
      const currentText = rotatingText.textContent;
      deleteText(currentText, () => {
        setTimeout(() => {
          typeText(texts[currentIndex], colors[currentIndex], () => {
            setTimeout(() => {
              currentIndex = (currentIndex + 1) % texts.length;
              startAnimation();
            }, 2000);
          });
        }, 500);
      });
    }

    changeBackground(colors[0]);
    rotatingText.textContent = '';
    startAnimation();
  }, []);

  return (
    <>
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <section className="hero">
        {/* <img src="/Brand RA.png" alt="Brand RA" className="brand-ra-logo" /> */}
        <div className="hero-left" ref={heroLeftRef}>
          <img src="/66df4d778ad44d7e5a19b837_sef.png" alt="SE Factory" className="logo" />
          <div className="menu-button-wrapper" onClick={() => setIsMenuOpen(true)}>
            <div className="menu-button-responsive"></div>
          </div>
          <div className="hero-content">
            <h2>WANT TO BECOME A</h2>
            <h1><span id="rotating-text" ref={rotatingTextRef}></span></h1>
            <p>Jumpstart your journey in tech with our courses in Computer Science, Full-Stack Web development, Data Engineering and UI/UX Design. Get hands-on experience and gain essential skills for a successful tech career.</p>
            <button className="hero-btn">#GET TRAINED</button>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-right-menu" onClick={() => setIsMenuOpen(true)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="hero-content">
            <h2>WANT TO HIRE</h2>
            <h1>JOB-READY TECH TALENT?</h1>
            <p>Look no further than our comprehensive talent matching and placement services! Our expert team will connect you with highly trained and skilled developers who are ready to hit the ground running and drive your success.</p>
            <button className="hero-btn">#HIRE TALENT</button>
          </div>
        </div>
      </section>

      <section className="video-section">
        <div className="video-section-header">
          <div className="header-left">
            <span className="prompt">&gt;</span> <span className="hello-world">Hello world!</span>
          </div>
          <div className="nav-dots">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>

        <div className="video-container">
          <div className="video-header">
            <div className="header-right">
              <div className="arabic-nav">
                {/* <button className="nav-link">مشاركة</button>
                <button className="nav-link">المشاهدة لاحقا</button> */}
              </div>
            </div>
          </div>
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Placeholder Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      <Milestones />
      <Programs />
      <HireTalent />
      <Testimonials />
      <FAQs />
      <ContactUs />
      <Partners />
      <Newsletter/>
      <Footer />
    </>
  );
}

export default App;
