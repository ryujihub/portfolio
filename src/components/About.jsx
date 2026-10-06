import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Search, Gamepad2, Sparkles } from 'lucide-react';
import './About.css';

const stats = [
  { value: '5+', label: 'Projects Built' },
  { value: '10+', label: 'Technologies' },
  { value: '2026', label: 'Grad Year' },
];

const interests = [
  {
    icon: GraduationCap,
    title: 'Education',
    desc: "I graduated with a Bachelor's Degree in Information Technology.",
    highlight: 'Class of 2026',
  },
  {
    icon: Search,
    title: 'Curious Explorer',
    desc: 'I constantly explore and research new topics that catch my interest to expand my perspective and knowledge.',
  },
  {
    icon: Gamepad2,
    title: 'Gamer',
    desc: "When I'm not coding or exploring ideas, you can find me casually dropping into matches playing PUBG Mobile.",
  },
];

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
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

        <div className="bento-grid">
          <motion.div
            className="bento-tile bento-intro glass"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bento-icon-wrapper">
              <Sparkles size={26} />
            </div>
            <h3>Hi, I'm Andrey 👋</h3>
            <p>
              An IT graduate and web developer from the Philippines who ships real things —
              the official Gender and Development platform for Montalban, Rizal, and a
              DTR tracking app used by working students. I sweat the UX details, write
              code that lasts, and measure success by whether people actually use what I build.
            </p>
          </motion.div>

          <motion.div
            className="bento-tile bento-stats glass"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {stats.map((s, i) => (
              <motion.div
                className="stat-item"
                key={s.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.12 }}
              >
                <span className="stat-value heading-gradient">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {interests.map((item, i) => (
            <motion.div
              className="bento-tile glass"
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
            >
              <div className="bento-icon-wrapper">
                <item.icon size={26} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              {item.highlight && <span className="about-highlight">{item.highlight}</span>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
