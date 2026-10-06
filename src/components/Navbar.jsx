import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Menu, X } from 'lucide-react';
import './Navbar.css';

const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Scroll-spy: pick the last section whose top passed 40% of viewport
      const probe = window.innerHeight * 0.4;
      let current = '';
      for (const link of links) {
        const el = document.querySelector(link.href);
        if (el && el.getBoundingClientRect().top <= probe) current = link.href;
      }
      setActive(current);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.nav
      className={`navbar ${scrolled || menuOpen ? 'scrolled glass' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container navbar-container">
        <a href="#" className="logo" onClick={closeMenu}>
          <Code2 size={28} className="logo-icon" />
          <span>Andrey Caburnay</span>
        </a>

        <div className="nav-links">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={active === link.href ? 'active' : ''}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          className="nav-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu glass"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            {links.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={active === link.href ? 'active' : ''}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
