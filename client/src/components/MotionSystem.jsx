import React from 'react';
import { motion } from 'framer-motion';

// Page entrance wrapper
export const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2, ease: 'easeIn' } }
};

export function PageTransition({ children, className = '' }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Scroll reveal component for sections/containers
export function ScrollReveal({ children, delay = 0, yOffset = 24, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Staggered grid container & item variants
export const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05
    }
  }
};

export const staggerItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] }
  }
};

export function StaggerContainer({ children, className = '' }) {
  return (
    <motion.div
      variants={staggerContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-30px' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = '' }) {
  return (
    <motion.div variants={staggerItemVariants} className={className}>
      {children}
    </motion.div>
  );
}

// Spring Interactive Card (Card with lift and hover)
export function AnimatedCard({ children, className = '', onClick }) {
  return (
    <motion.div
      whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
      whileTap={{ scale: 0.98 }}
      className={className}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}

// Animated Button with subtle scale & press feedback
export function AnimatedButton({ children, className = '', onClick, type = 'button', disabled = false }) {
  return (
    <motion.button
      type={type}
      disabled={disabled}
      whileHover={!disabled ? { scale: 1.02, y: -1 } : {}}
      whileTap={!disabled ? { scale: 0.97 } : {}}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className={className}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}

// Animated Counter (Counts up smoothly when visible)
export function AnimatedCounter({ from = 0, to, duration = 1.6, suffix = '' }) {
  const [count, setCount] = React.useState(from);
  const [hasAnimated, setHasAnimated] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = from;
          const end = parseInt(to, 10) || 0;
          if (start === end) return;
          const totalMilSec = duration * 1000;
          const incrementTime = 30;
          const step = (end - start) / (totalMilSec / incrementTime);

          const timer = setInterval(() => {
            start += step;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, incrementTime);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasAnimated, from, to, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}
