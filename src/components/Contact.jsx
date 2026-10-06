import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, LoaderCircle, TriangleAlert, CircleCheck } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './BrandIcons';
import './Contact.css';

const EMAIL = 'caburnayandrey09@gmail.com';

const Contact = () => {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = form;
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus('error');
      return;
    }

    setStatus('sending');

    // No backend attached yet — open the visitor's mail client as a reliable fallback.
    const subject = encodeURIComponent(`Portfolio inquiry from ${name.trim()}`);
    const body = encodeURIComponent(`${message.trim()}\n\n— ${name.trim()} (${email.trim()})`);
    const mailto = `mailto:${EMAIL}?subject=${subject}&body=${body}`;

    // Let the browser open the mail client; treat as delivered shortly after.
    window.location.href = mailto;
    setTimeout(() => setStatus('sent'), 600);
  };

  return (
    <section className="section contact" id="contact">
      <div className="container contact-container">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-left">
            Let's <span className="heading-gradient">Connect</span>
          </h2>
          <p className="contact-desc">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <div className="contact-links">
            <a href={`mailto:${EMAIL}`} className="contact-link">
              <Mail size={24} /> caburnayandrey09@gmail.com
            </a>
            <div className="social-links mt-4">
              <a href="https://github.com/ryujihub" target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon size={24} /></a>
              <a href="https://www.linkedin.com/in/caburnay-andrey-d-68465b275" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon size={24} /></a>
            </div>
          </div>
        </motion.div>

        <motion.form
          className="contact-form glass"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="John Doe"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="john@example.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="4"
              placeholder="Hello! I would like to talk about..."
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          {status === 'error' && (
            <p className="form-status form-status-error" role="alert">
              <TriangleAlert size={16} /> Please fill in your name, email, and message.
            </p>
          )}
          {status === 'sent' && (
            <p className="form-status form-status-success" role="status">
              <CircleCheck size={16} /> Your email app should have opened — just hit send!
            </p>
          )}

          <button type="submit" className="btn btn-primary w-full" disabled={status === 'sending'}>
            {status === 'sending' ? (
              <>
                Opening email app… <LoaderCircle size={18} className="spin" />
              </>
            ) : (
              <>
                Send Message <Send size={18} />
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
