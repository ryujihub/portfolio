import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';
import './Projects.css';

const projects = [
  {
    title: 'DTR Tracker App',
    desc: 'A Daily Time Record (DTR) tracking mobile application built with React Native.',
    tags: ['React Native', 'Expo', 'Mobile'],
    github: 'https://github.com/ryujihub/DTR-Tacker',
    live: 'https://www.facebook.com/share/p/1Bzd6UZgHc/'
  },
  {
    title: 'VESOS (AyudaAuto)',
    desc: 'A mobile application for real-time emergency roadside assistance featuring offline capabilities and SMS fallback.',
    tags: ['React Native', 'Firebase', 'Mobile'],
    github: 'https://github.com/ryujihub/VESOS_VehicleEmergencySOS',
    live: '#'
  }
];

const Projects = () => {
  return (
    <section className="section projects" id="projects">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured <span className="heading-gradient">Projects</span>
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              className="project-card glass"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="project-links">
                <a href={project.github} className="icon-link"><Code size={20} /></a>
                <a href={project.live} className="icon-link"><ExternalLink size={20} /></a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;
