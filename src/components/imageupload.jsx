import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaCloudUploadAlt, FaSpinner } from "react-icons/fa";

const shimmerAnimation = `
  @keyframes shimmer {
    0% { opacity: 0.3; }
    50% { opacity: 0.7; }
    100% { opacity: 0.3; }
  }
`;

const ImageUploader = ({ onUpload }) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && onUpload) {
      handleFileUpload(file);
    }
  };

  const handleFileUpload = async (file) => {
    if (!file.type.startsWith('image/')) {
      alert('Please select an image file');
      return;
    }

    setIsUploading(true);
    try {
      console.log('File selected:', file);
      await onUpload(file);
    } catch (error) {
      console.error('Upload error:', error);
      alert('Failed to upload image. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileUpload(files[0]);
    }
  };

  const handleClick = () => {
    if (!isUploading) {
      fileInputRef.current?.click();
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
            className={`block w-full h-full flex flex-col items-center justify-center bg-white/40 backdrop-blur-md rounded-xl text-center cursor-pointer transition-all border-2 border-dashed ${
              isDragOver 
                ? 'border-[#00ffc3] bg-[#00ffc3]/10' 
                : 'border-gray-300 hover:border-[#00ffc3] hover:shadow-[0_0_12px_#00ffc3]'
            } p-4 relative overflow-hidden`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={handleClick}
          >
            <input
              ref={fileInputRef}
              type="file"
              id="fileInput"
              className="hidden"
              accept="image/*"
              onChange={handleFileChange}
              disabled={isUploading}
            />
            
            {isUploading ? (
              <div className="flex flex-col items-center justify-center">
                <FaSpinner className="animate-spin text-[#00ffc3] text-2xl mb-2" />
                <span className="text-gray-700 text-sm font-medium">
                  Processing image...
                </span>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center">
                <FaCloudUploadAlt className="text-[#00ffc3] text-3xl mb-2" />
                <span className="text-gray-700 text-base md:text-lg font-medium">
                  {isDragOver ? 'Drop image here' : 'Click or drag to upload'}
                </span>
                <span className="text-gray-500 text-sm mt-1">
                  Supports JPG, PNG, GIF
                </span>
              </div>
            )}
          </label>
        </motion.div>
      </section>
    </>
  );
};

export default ImageUploader;
