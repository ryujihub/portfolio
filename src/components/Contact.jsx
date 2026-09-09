import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Code, User } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="section contact" id="contact">
      <div className="container contact-container">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-left">
            Let's <span className="heading-gradient">Connect</span>
          </h2>
          <p className="contact-desc">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <div className="contact-links">
            <a href="mailto:hello@example.com" className="contact-link">
              <Mail size={24} /> caburnayandrey09@gmail.com
            </a>
            <div className="social-links mt-4">
              <a href="https://github.com/ryujihub" target="_blank" rel="noreferrer"><Code size={24} /></a>
              <a href="https://www.linkedin.com/in/caburnay-andrey-d-68465b275" target="_blank" rel="noreferrer"><User size={24} /></a>
            </div>
          </div>
        </motion.div>

        <motion.form
          className="contact-form glass"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="John Doe" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="john@example.com" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="4" placeholder="Hello! I would like to talk about..."></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-full">
            Send Message <Send size={18} />
          </button>
        </motion.form>
      </div>
    </section>
  );
};
export default Contact;
