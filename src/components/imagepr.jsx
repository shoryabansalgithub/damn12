import React from "react";

const ImagePreview = ({ uploadedUrl, enhancedUrl }) => {
  return (
    <div className="mt-12 px-4 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Uploaded Image */}
        <div className="bg-white/40 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-xl">
          <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center">Uploaded Image</h2>
          {uploadedUrl ? (
            <img
              src={uploadedUrl}
              alt="uploaded"
              className="w-full h-full object-cover rounded-xl"
            />
          ) : (
            <div className="flex items-center justify-center h-64 bg-gray-100 text-gray-500 rounded-xl p-4 ">
              No Image Selected
            </div>
          )}
        </div>

        {/* Enhanced Image */}
        <div className="bg-white/40 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-xl">
          <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center">Enhanced Image</h2>
          {enhancedUrl ? (
            <img
              src={enhancedUrl}
              alt="enhanced"
              className="w-full h-full object-cover rounded-xl"
            />
          ) : (
            <div className="flex items-center justify-center h-64 bg-gray-100 text-gray-500 rounded-xl p-4 ">
              No Image Selected
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImagePreview;



