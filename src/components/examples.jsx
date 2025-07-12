import React from "react";
import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1581091012184-7c74768c0785",
  "https://images.unsplash.com/photo-1579546929518-9e396f3cc809",
  "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308"
];

const FourImageGrid = () => {
  return (
    <div className="grid py-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-auto gap-4 p-4 sm:gap-6 sm:p-6 max-w-6xl mx-auto">
      <motion.div
        className="sm:col-span-2 sm:row-span-2 rounded-2xl overflow-hidden shadow-xl"
        initial="rest"
        whileHover="hover"
        animate="rest"
        variants={{
          rest: { filter: "blur(4px) brightness(0.85)" },
          hover: { filter: "blur(0px) brightness(1)" }
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <motion.img
          src={images[0]}
          alt="hero"
          className="w-full h-[300px] sm:h-full object-cover"
          draggable="false"
        />
      </motion.div>

      <div className="sm:col-span-2 grid sm:grid-rows-2 gap-4 sm:gap-6">
        <motion.div
          className="row-span-1 rounded-2xl overflow-hidden shadow-xl"
          initial="rest"
          whileHover="hover"
          animate="rest"
          variants={{
            rest: { filter: "blur(4px) brightness(0.85)" },
            hover: { filter: "blur(0px) brightness(1)" }
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <motion.img
            src={images[1]}
            alt="top right"
            className="w-full h-[200px] sm:h-full object-cover"
            draggable="false"
          />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          <motion.div
            className="rounded-2xl overflow-hidden shadow-xl"
            initial="rest"
            whileHover="hover"
            animate="rest"
            variants={{
              rest: { filter: "blur(4px) brightness(0.85)" },
              hover: { filter: "blur(0px) brightness(1)" }
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <motion.img
              src={images[2]}
              alt="bottom left"
              className="w-full h-[200px] sm:h-full object-cover"
              draggable="false"
            />
          </motion.div>

          <motion.div
            className="rounded-2xl overflow-hidden shadow-xl"
            initial="rest"
            whileHover="hover"
            animate="rest"
            variants={{
              rest: { filter: "blur(4px) brightness(0.85)" },
              hover: { filter: "blur(0px) brightness(1)" }
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <motion.img
              src={images[3]}
              alt="bottom right"
              className="w-full h-[200px] sm:h-full object-cover"
              draggable="false"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FourImageGrid;