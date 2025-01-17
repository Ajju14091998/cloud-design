import React from 'react';
import { motion } from 'framer-motion';  // Import motion from framer-motion
import './ContactForm.scss';

const ContactForm = () => {
    return (
        <motion.section 
            className="contact-form" 
            initial={{ y: '100%' }}    // Start off-screen to the bottom
            animate={{ y: 0 }}         // Animate to the original position
            transition={{ duration: 3}} 
        >
            <div className="form-container">
                <div className="form-header">
                    <div className="header-left">
                        <div className="header-text">
                            <h3>Lets Collaborate</h3>
                            <div className="blog-divider"></div>
                        </div>
                        <div className="header-description">
                            <p>Clou <span>Design</span> Your Digital Ecosystems to Drive Peak Organizational Performance</p>
                        </div>
                    </div>

                    <img className="form-image" src="https://www.cloudesign.com/images/formcontent.svg" alt="img" />
                </div>

                <div>
                    <div className="form-content flex-col">
                        <div className="consultation-header">
                            <h3>Your First Consultation is <span>Free</span>!</h3>
                            <div className="blog-divider mb-1"></div>
                        </div>
                        <form className="contact-form flex-col">
                            <div className="form-field flex-col">
                                <label htmlFor="name">Full Name <span>*</span></label>
                                <input type="text" placeholder="Name" spellCheck="true" required name="name" />
                            </div>
                            <div className="form-flex">
                                <div className="form-field">
                                    <label htmlFor="designation">Designation <span>*</span></label>
                                    <input type="text" placeholder="Designation" required name="designation" />
                                </div>
                                <div className="form-field">
                                    <label htmlFor="company">Company <span>*</span></label>
                                    <input type="text" placeholder="Company" required name="company" />
                                </div>
                            </div>
                            <div className="form-flex">
                                <div className="form-field">
                                    <label htmlFor="phone">Phone <span>*</span></label>
                                    <div className="phone-container">
                                        <input type="tel" required value="+91" placeholder="Phone *" />
                                    </div>
                                </div>
                                <input type="hidden" name="mobileNumber" />
                                <div className="form-field">
                                    <label htmlFor="email">Email <span>*</span></label>
                                    <input type="email" placeholder="Email" required spellCheck="true" name="email" />
                                </div>
                            </div>
                            <div className="form-field flex-col">
                                <label htmlFor="message">Your Message <span>*</span></label>
                                <textarea placeholder="Type here..." name="message" maxLength="500" required></textarea>
                            </div>
                            <button className="contactBtn" disabled>Submit</button>
                            <div className="divider-container">
                                <div className="divider1"></div>
                                <p className="m-0">or</p>
                                <div className="divider1"></div>
                            </div>
                        </form>
                    </div>

                    <div className="contact-info">
                        <div className="contact-logo">
                            <img src="https://www.cloudesign.com/images/atlogo.svg" alt="img" />
                        </div>
                        <div className="contact-details">
                            <p>Send us an email at</p>
                            <a href="mailto:sales@cloudesign.com" className="email-link">sales@cloudesign.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

export default ContactForm;
