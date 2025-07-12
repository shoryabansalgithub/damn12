import React from 'react';
import { FaTwitter, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const MotionLink = ({ href, children }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 hover:text-black transition"
    whileHover={{ scale: 1.2 }}
  >
    {children}
  </motion.a>
);

const MotionTextBlock = ({ className, children, delay }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

const TypingText = ({ lines, speed = 30 }) => {
  const [index, setIndex] = useState(0);
  const [typed, setTyped] = useState('');

  useEffect(() => {
    if (index < lines.join(' ').length) {
      const timeout = setTimeout(() => {
        setTyped((prev) => prev + lines.join(' ')[index]);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, lines, speed]);

  return <p className="whitespace-pre-line">{typed}</p>;
};

        function Header() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="relative bg-white min-h-screen flex flex-col items-center justify-center text-center px-6 py-12 overflow-hidden"
    >
      {/* Social Icons */}
      <div className="absolute top-6 right-6 flex items-center gap-4">
        <MotionLink href="https://twitter.com"><FaTwitter size={22} /></MotionLink>
        <MotionLink href="https://github.com"><FaGithub size={22} /></MotionLink>
      </div>

      {/* Badge */}
      <motion.div
        className="mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <span className="inline-flex items-center gap-2 px-4 py-1 text-sm font-medium text-[#10b981] bg-[#f0fdf4] rounded-full shadow-sm">
          🌟 New AI Model <span className="text-gray-600">Boost Clarity</span>
        </span>
      </motion.div>

      {/* Heading */}
      {inView && (
        <MotionTextBlock className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight" delay={0.2}>
          Enhance Images<br />
          <span className="text-gray-500">with AI Superpowers</span>
        </MotionTextBlock>
      )}

      {/* Typing Description */}
      {inView && (
        <MotionTextBlock className="mt-6 max-w-2xl text-lg text-gray-600 font-medium" delay={0.4}>
          <TypingText
            lines={[
              'Upload any image and let AI sharpen, upscale, and restore details.\n',
              'Built for creators, coders, and perfectionists.\n',
              'Instant results. No code.'
            ]}
            speed={25}
          />
        </MotionTextBlock>
      )}

      {/* CTA */}
      {inView && (
        <MotionTextBlock className="mt-8 flex flex-col sm:flex-row items-center gap-4" delay={0.6}>
          <motion.a
            href="#upload-section"
            className="px-6 py-3 text-white font-semibold bg-[#10b981] rounded-lg shadow-lg hover:bg-[#0ea57f] transition"
            whileHover={{ scale: 1.05 }}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('upload-section').scrollIntoView({ 
                behavior: 'smooth' 
              });
            }}
          >
            Try it Free →
          </motion.a>
          <motion.a
            href="#"
            className="text-sm text-gray-500 hover:underline"
            whileHover={{ scale: 1.05 }}
          >
            See Examples
          </motion.a>
        </MotionTextBlock>
      )}
    </section>
  );
}

  
export default Header