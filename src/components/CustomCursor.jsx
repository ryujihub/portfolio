import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import './CustomCursor.css';

const CustomCursor = () => {
  // Fine-pointer only: decided once at init, no effect-driven state updates.
  const [enabled] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches
  );
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 250, damping: 24, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 250, damping: 24, mass: 0.6 });

  useEffect(() => {
    if (!enabled) return;

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      document.documentElement.style.setProperty('--mx', `${e.clientX}px`);
      document.documentElement.style.setProperty('--my', `${e.clientY}px`);

      const target = e.target;
      const interactive = target.closest?.('a, button, input, textarea, [role="button"]');
      setHovering(!!interactive);
    };

    const leave = () => setVisible(false);

    window.addEventListener('mousemove', move, { passive: true });
    document.documentElement.addEventListener('mouseleave', leave);
    return () => {
      window.removeEventListener('mousemove', move);
      document.documentElement.removeEventListener('mouseleave', leave);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="cursor-dot"
        style={{ x, y, opacity: visible ? 1 : 0 }}
        aria-hidden="true"
      />
      <motion.div
        className="cursor-ring"
        style={{ x: ringX, y: ringY, opacity: visible ? 1 : 0 }}
        animate={{ scale: hovering ? 1.8 : 1 }}
        transition={{ duration: 0.2 }}
        aria-hidden="true"
      />
    </>
  );
};

export default CustomCursor;
