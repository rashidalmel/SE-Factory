import React from 'react';

const ContactUs = () => {
    return (
        <section className="contact-us">
            <div className="contact-header">
                <h2>
                    <span className="prompt">&gt;</span>
                    Contact us
                </h2>
                <div className="nav-dots">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
            </div>
            <div className="contact-container">
                <div className="map-container">
                    <div className="get-directions">
                        <span className="prompt">&gt;</span>
                        <h3>Get directions</h3>
                    </div>
                    <div className="map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.5669328292256!2d35.51171331524804!3d33.88835643335737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f16ca89b47c75%3A0x48f3f06d0fd4e5f4!2sBerytech%20Digital%20Park!5e0!3m2!1sen!2slb!4v1624981224408!5m2!1sen!2slb"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div className="address">
                        <p>// SE Factory</p>
                        <p>BDD1294 Floor 4,</p>
                        <p>Bechara El Khoury Street,</p>
                        <p>Bachoura, Beirut, Lebanon</p>
                    </div>
                </div>
                <div className="contact-form-container">
                    <div className="contact-form-header">
                        <span className="prompt">&gt;</span>
                        <h3>Contact form</h3>
                    </div>
                    <div className="email">
                        <p>info@sefactory.io</p>
                    </div>                    <form className="contact-form">
                        <div className="form-row">
                            <input type="text" placeholder="// First name" title="First name" required />
                            <input type="text" placeholder="// Last name" title="Last name" required />
                        </div>
                        <div className="form-row">
                            <input type="email" placeholder="// Email" title="Email" required />
                            <input type="tel" placeholder="// Phone number" title="Phone number" required />
                        </div>                    <div className="service-options">
                            <label>{'// what can we help you with?'}</label>
                            <div className="options">
                                <label><input type="radio" name="service" value="FCS" title="FCS" /> FCS</label>
                                <label><input type="radio" name="service" value="FSE" title="FSE" /> FSE</label>
                                <label><input type="radio" name="service" value="FSD" title="FSD" /> FSD</label>
                                <label><input type="radio" name="service" value="UIX" title="UIX" /> UIX</label>
                                <label><input type="radio" name="service" value="Hire Talent" title="Hire Talent" /> Hire Talent</label>
                                <label><input type="radio" name="service" value="Other" title="Other" /> Other</label>
                            </div>
                        </div>
                        <div className="form-row">
                            <textarea placeholder="// What can we help you with?" title="Inquiry" rows="4" required></textarea>
                        </div>
                        <button type="submit" className="submit-btn">SUBMIT</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
