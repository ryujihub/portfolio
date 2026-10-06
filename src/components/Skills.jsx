import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const rowA = ['React', 'Next.js', 'TypeScript', 'React Native', 'Expo', 'Tailwind CSS', 'Framer Motion', 'Firebase'];
const rowB = ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs', 'Figma', 'Git', 'Accessibility'];

const MarqueeRow = ({ items, reverse = false, duration = 26 }) => {
  const doubled = [...items, ...items];
  return (
    <div className="marquee">
      <div
        className={`marquee-track ${reverse ? 'marquee-reverse' : ''}`}
        style={{ animationDuration: `${duration}s` }}
      >
        {doubled.map((skill, i) => (
          <span className="skill-badge" key={`${skill}-${i}`} aria-hidden={i >= items.length}>
            {skill}
          </span>
          ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section className="section skills" id="skills">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">My <span className="heading-gradient">Skills</span></h2>
          <p className="section-subtitle">Tools and technologies I use to bring ideas to life.</p>
        </motion.div>
      </div>

      <motion.div
        className="marquee-wrap"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <MarqueeRow items={rowA} duration={28} />
        <MarqueeRow items={rowB} reverse duration={32} />
      </motion.div>
    </section>
  );
};

export default Skills;
