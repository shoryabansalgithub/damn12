import React from "react";
import { motion } from "framer-motion";
import { FaGoogle, FaMicrosoft, FaAmazon, FaApple, FaFacebook, FaPlay, FaMusic, FaPalette } from "react-icons/fa";

const companies = [
  { name: "Google", icon: <FaGoogle /> },
  { name: "Microsoft", icon: <FaMicrosoft /> },
  { name: "Amazon", icon: <FaAmazon /> },
  { name: "Apple", icon: <FaApple /> },
  { name: "Meta", icon: <FaFacebook /> },
  { name: "Netflix", icon: <FaPlay /> },
  { name: "Adobe", icon: <FaPalette /> },
  { name: "Spotify", icon: <FaMusic /> },
];

const Live = () => {
  return (
    <div className="w-full text-center py-1">
      <h3 className="text-gray-800 font-semibold text-lg mb-4">
        Used by employees of
      </h3>
      <div className="overflow-hidden w-full">
        <motion.div
          className="flex gap-16 text-4xl py-4 text-[#10b981] items-center justify-center whitespace-nowrap"
          animate={{ x: [0, -1200] }}
          transition={{ 
            repeat: Infinity, 
            repeatType: "loop", 
            duration: 30, 
            ease: "linear" 
          }}
        >
          {[...companies, ...companies, ...companies, ...companies].map((company, i) => (
            <motion.div key={i} className="flex items-center gap-3">
              <span className="text-2xl">{company.icon}</span>
              <span className="text-xl font-semibold">{company.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Live;
