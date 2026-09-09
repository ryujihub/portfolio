import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Search, Gamepad2 } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container about-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">About <span className="heading-gradient">Me</span></h2>
          <p className="section-subtitle">Get to know more about my background and interests.</p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-cards"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="about-card glass">
              <div className="about-icon-wrapper">
                <GraduationCap size={32} className="about-icon" />
              </div>
              <h3>Education</h3>
              <p>I graduated with a Bachelor's Degree in Information Technology.</p>
              <span className="about-highlight">Class of 2026</span>
            </div>

            <div className="about-card glass">
              <div className="about-icon-wrapper">
                <Search size={32} className="about-icon" />
              </div>
              <h3>Curious Explorer</h3>
              <p>I constantly explore and research new topics that catch my interest to expand my perspective and knowledge.</p>
            </div>

            <div className="about-card glass">
              <div className="about-icon-wrapper">
                <Gamepad2 size={32} className="about-icon" />
              </div>
              <h3>Gamer</h3>
              <p>When I'm not coding or exploring ideas, you can find me casually dropping into matches playing PUBG Mobile.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
