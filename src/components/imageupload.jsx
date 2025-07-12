import React from "react";
import { motion } from "framer-motion";

const shimmerAnimation = `
  @keyframes shimmer {
    0% { opacity: 0.3; }
    50% { opacity: 0.7; }
    100% { opacity: 0.3; }
  }
`;

const ImageUploader = ({ onUpload }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log('File selected:', file);
    if (file && onUpload) {
      console.log('Calling onUpload with file:', file.name);
      onUpload(file);
    } else {
      console.log('No file selected or onUpload not provided');
    }
  };

  return (
    <>
      <style>{shimmerAnimation}</style>
      <section className="bg-white flex flex-col items-center px-2 md:px-4 py-4 md:py-8 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-64 h-32 rounded-xl shadow-lg bg-white flex items-center justify-center"
        >
          <label
            htmlFor="fileInput"
            className="block w-full h-full flex flex-col items-center justify-center bg-white/40 backdrop-blur-md rounded-xl text-center cursor-pointer transition-all border border-[#00ffc3] hover:shadow-[0_0_12px_#00ffc3] p-4 relative overflow-hidden"
          >
            <input
              type="file"
              id="fileInput"
              className="hidden"
              accept="image/*"
              onChange={handleFileChange}
            />
            <span className="text-gray-700 text-base md:text-lg font-medium">
              Click or drag to upload your image
            </span>
          </label>
        </motion.div>
      </section>
    </>
  );
};

export default ImageUploader;
