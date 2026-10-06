import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { GitHubIcon } from './BrandIcons';
import gadShot from '../assets/shots/gad-hero.png';
import dtr1 from '../assets/shots/dtr-1.jpg';
import dtr2 from '../assets/shots/dtr-2.jpg';
import dtr3 from '../assets/shots/dtr-3.jpg';
import dtr4 from '../assets/shots/dtr-4.jpg';
import './Projects.css';

const projects = [
  {
    title: 'GAD Corner Website',
    desc: 'The official digital hub for Gender and Development (GAD) initiatives of Montalban, Rizal — a centralized portal for GAD news, programs, and services. Features news and article publishing, a media gallery of community programs, and quick-access resources like the GAD Plan & Budget, GAD Projects, and Knowledge & IEC materials.',
    tags: ['React', 'GovTech', 'Web'],
    github: 'https://github.com/ryujihub',
    live: 'https://gad-3.onrender.com/',
    monogram: 'GAD',
    cover: 'linear-gradient(135deg, #1d4ed8 0%, #7c3aed 55%, #0891b2 100%)',
    image: gadShot,
    highlight: true,
  },
  {
    title: 'DTR Tracker App',
    desc: 'A Daily Time Record app for tracking work shifts — morning, afternoon, and overtime clock-ins with a live dashboard, daily progress, goal tracking, and a full history view with monthly totals. Built with React Native & Expo.',
    tags: ['React Native', 'Expo', 'Mobile'],
    github: 'https://github.com/ryujihub/DTR-Tacker',
    live: 'https://www.facebook.com/share/p/1Bzd6UZgHc/',
    monogram: 'DTR',
    cover: 'linear-gradient(135deg, #0f766e 0%, #2563eb 60%, #4f46e5 100%)',
    screens: [dtr4, dtr1, dtr2, dtr3],
  },
];

const MAX_TILT = 7;

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const px = useMotionValue(50);
  const py = useMotionValue(50);
  const rxRaw = useMotionValue(0);
  const ryRaw = useMotionValue(0);
  const rx = useSpring(rxRaw, { stiffness: 180, damping: 18 });
  const ry = useSpring(ryRaw, { stiffness: 180, damping: 18 });
  const rotateX = useTransform(rx, v => `${v}deg`);
  const rotateY = useTransform(ry, v => `${v}deg`);
  const glow = useTransform(
    [px, py],
    ([x, y]) => `radial-gradient(320px circle at ${x}% ${y}%, rgba(96, 165, 250, 0.13), transparent 65%)`
  );

  const handleMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const nx = (e.clientX - rect.left) / rect.width;
    const ny = (e.clientY - rect.top) / rect.height;
    px.set(nx * 100);
    py.set(ny * 100);
    ryRaw.set((nx - 0.5) * MAX_TILT * 2);
    rxRaw.set(-(ny - 0.5) * MAX_TILT * 2);
  };

  const handleLeave = () => {
    rxRaw.set(0);
    ryRaw.set(0);
    px.set(50);
    py.set(50);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={ref}
        className={`project-card glass ${project.highlight ? 'project-card-featured' : ''}`}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
      >
        <div
          className={`project-cover ${project.screens ? 'project-cover-phones' : ''}`}
          style={{ background: project.cover }}
        >
          {project.screens ? (
            <div className="phone-fan" aria-hidden="true">
              {project.screens.map((src, i) => (
                <div
                  key={src}
                  className="phone"
                  style={{
                    '--r': `${[-12, -4, 4, 12][i]}deg`,
                    '--y': `${[16, -6, -6, 16][i]}px`,
                    zIndex: i === 1 || i === 2 ? 2 : 1,
                  }}
                >
                  <img src={src} alt="" loading="lazy" />
                </div>
              ))}
            </div>
          ) : project.image ? (
            <img src={project.image} alt={`${project.title} preview`} className="project-shot" loading="lazy" />
          ) : (
            <span className="project-monogram">{project.monogram}</span>
          )}
          {project.highlight && <span className="tag tag-featured">★ Featured</span>}
        </div>

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
          {project.github && (
            <a
              href={project.github}
              className="icon-link"
              aria-label={`${project.title} source code`}
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon size={20} />
            </a>
          )}
          {project.live && (
            <a href={project.live} className="btn btn-sm btn-primary" target="_blank" rel="noreferrer">
              Live Demo <ExternalLink size={16} />
            </a>
          )}
        </div>

        <motion.div className="project-glow" style={{ background: glow }} aria-hidden="true" />
      </motion.div>
    </motion.div>
  );
};

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
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <motion.p
          className="projects-note"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          More experiments and coursework live on my <a href="https://github.com/ryujihub" target="_blank" rel="noreferrer">GitHub</a>.
        </motion.p>
      </div>
    </section>
  );
};

export default Projects;
