import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const skillCategories = [
  {
    title: "Frontend Tools",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vue"]
  },
  {
    title: "Backend & DB",
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Redis", "REST APIs"]
  },
  {
    title: "Design & UX",
    skills: ["Figma", "UI Design", "Wireframing", "Prototyping", "Accessibility"]
  }
];

const Skills = () => {
  return (
    <section className="section skills" id="skills">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My <span className="heading-gradient">Skills</span>
        </motion.h2>

        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <motion.div 
              className="skill-category glass"
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map(skill => (
                  <span key={skill} className="skill-badge">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;
