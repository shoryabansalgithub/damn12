import React from "react";
import { FaSpinner } from "react-icons/fa";

const ImagePreview = ({ uploadedUrl, enhancedUrl, isEnhancing }) => {
  console.log('ImagePreview: uploadedUrl:', uploadedUrl);
  console.log('ImagePreview: enhancedUrl:', enhancedUrl);
  console.log('ImagePreview: isEnhancing:', isEnhancing);
  
  return (
    <div className="mt-12 px-4 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Uploaded Image */}
        <div className="bg-white/40 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-xl">
          <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center">Original Image</h2>
          {uploadedUrl ? (
            <div className="w-full h-64 overflow-hidden rounded-xl">
              <img
                src={uploadedUrl}
                alt="uploaded"
                className="w-full h-full object-contain bg-gray-50"
              />
            </div>
          ) : (
            <div className="flex items-center justify-center h-64 bg-gray-100 text-gray-500 rounded-xl p-4">
              <div className="text-center">
                <div className="text-4xl mb-2">📷</div>
                <p>No Image Selected</p>
                <p className="text-sm text-gray-400">Upload an image to get started</p>
              </div>
            </div>
          )}
        </div>

        {/* Enhanced Image */}
        <div className="bg-white/40 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-xl">
          <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center">Enhanced Image</h2>
          {isEnhancing ? (
            <div className="flex items-center justify-center h-64 bg-gray-100 rounded-xl p-4">
              <div className="text-center">
                <FaSpinner className="animate-spin text-[#00ffc3] text-3xl mx-auto mb-4" />
                <p className="text-gray-700 font-medium">Enhancing your image...</p>
                <p className="text-sm text-gray-500 mt-2">This may take a few seconds</p>
              </div>
            </div>
          ) : enhancedUrl ? (
            <div className="w-full h-64 overflow-hidden rounded-xl">
              <img
                src={enhancedUrl}
                alt="enhanced"
                className="w-full h-full object-contain bg-gray-50"
              />
            </div>
          ) : (
            <div className="flex items-center justify-center h-64 bg-gray-100 text-gray-500 rounded-xl p-4">
              <div className="text-center">
                <div className="text-4xl mb-2">✨</div>
                <p>Enhanced version will appear here</p>
                <p className="text-sm text-gray-400">After processing your image</p>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Enhancement Status */}
      {uploadedUrl && (
        <div className="mt-6 text-center">
          {isEnhancing ? (
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full">
              <FaSpinner className="animate-spin" />
              <span>Enhancing image with AI...</span>
            </div>
          ) : enhancedUrl ? (
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full">
              <span>✅ Enhancement complete!</span>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default ImagePreview;



