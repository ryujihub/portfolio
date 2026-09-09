import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';
import './Projects.css';

const projects = [
  {
    title: 'E-Commerce Platform',
    desc: 'A full-stack e-commerce solution with Next.js, Stripe, and a modern dashboard.',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    github: '#',
    live: '#'
  },
  {
    title: 'Task Management App',
    desc: 'Real-time collaborative task manager featuring drag-and-drop workflow boards.',
    tags: ['TypeScript', 'Firebase', 'Framer Motion'],
    github: '#',
    live: '#'
  },
  {
    title: 'AI Image Generator',
    desc: 'A beautiful interface for generating images using OpenAI models and caching.',
    tags: ['Next.js', 'OpenAI', 'PostgreSQL'],
    github: '#',
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
