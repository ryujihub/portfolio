import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Mail, Download } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './BrandIcons';
import portrait from '../assets/portrait.jpg';
import './Hero.css';

const ROLES = ['Web Developer', 'UI Craftsman', 'Problem Solver', 'Mobile Builder'];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex(i => (i + 1) % ROLES.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="badge">
            <span className="badge-pulse" /> Available for Work
          </div>
          <h1 className="hero-title">
            Crafting Digital <br />
            <span className="heading-gradient">Experiences</span>
          </h1>

          <p className="hero-desc">
            Hi, I'm <span className="hero-name">Andrey Caburnay</span> — a{' '}
            <span className="role-typewriter">
              <AnimatePresence mode="wait">
                <motion.span
                  key={ROLES[roleIndex]}
                  className="role-word"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35 }}
                >
                  {ROLES[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </span>{' '}
            from the Philippines. I build real products that real people rely on —
            from a government hub serving Montalban residents to mobile apps people
            use every day.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Work <ArrowRight size={18} />
            </a>
            <a
              href="Andrey-Caburnay-Portfolio.pdf"
              download="Andrey-Caburnay-Portfolio.pdf"
              className="btn btn-outline"
            >
              Download Portfolio <Download size={18} />
            </a>
            <div className="social-links">
              <a href="https://github.com/ryujihub" target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon size={22} /></a>
              <a href="https://www.linkedin.com/in/caburnay-andrey-d-68465b275" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon size={22} /></a>
              <a href="mailto:caburnayandrey09@gmail.com" aria-label="Email"><Mail size={22} /></a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="avatar-ring">
            <div className="avatar">
              <img src={portrait} alt="Andrey Caburnay" className="avatar-photo" />
            </div>
            <span className="avatar-status" title="Open to work" />
            <div className="orbit orbit-1" aria-hidden="true"><span className="orbit-dot dot-blue" /></div>
            <div className="orbit orbit-2" aria-hidden="true"><span className="orbit-dot dot-violet" /></div>
          </div>
          <div className="hero-float glass float-a">
            <span className="float-label">Projects</span>
            <span className="float-value">5+</span>
          </div>
          <div className="hero-float glass float-b">
            <span className="float-label">Tech</span>
            <span className="float-value">10+</span>
          </div>
        </motion.div>
      </div>
      <div className="glow-orb orb-1"></div>
      <div className="glow-orb orb-2"></div>
    </section>
  );
};

export default Hero;
