import React from 'react';
import { Mail, Code2 } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './BrandIcons';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <span className="logo footer-logo">
            <Code2 size={22} className="logo-icon" /> Andrey Caburnay
          </span>
          <p>Web developer crafting accessible, human-centered digital experiences.</p>
        </div>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-social">
          <a href="https://github.com/ryujihub" target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon size={20} /></a>
          <a href="https://www.linkedin.com/in/caburnay-andrey-d-68465b275" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon size={20} /></a>
          <a href="mailto:caburnayandrey09@gmail.com" aria-label="Email"><Mail size={20} /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {year} Andrey Caburnay. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
