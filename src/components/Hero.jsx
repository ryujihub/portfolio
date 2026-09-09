import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, User, Mail } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="badge">Available for Work</div>
          <h1 className="hero-title">
            Crafting Digital <br />
            <span className="heading-gradient">Experiences</span>
          </h1>
          <p className="hero-desc">
            Hi, I'm Andrey Caburnay, a Web Developer specializing in building exceptional digital experiences. 
            Currently focused on accessible, human-centered products.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Work <ArrowRight size={18} />
            </a>
            <div className="social-links">
              <a href="https://github.com/ryujihub" target="_blank" rel="noreferrer"><Code size={22} /></a>
              <a href="https://www.linkedin.com/in/caburnay-andrey-d-68465b275" target="_blank" rel="noreferrer"><User size={22} /></a>
              <a href="mailto:hello@example.com"><Mail size={22} /></a>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="glow-orb orb-1"></div>
      <div className="glow-orb orb-2"></div>
    </section>
  );
};
export default Hero;
