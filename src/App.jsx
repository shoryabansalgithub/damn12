import React, { useState } from "react";
import './App.css';
import Header from './components/header';
import ImageUploader from './components/imageupload';
import Live from './components/live';
import FourImageGrid from './components/examples';
import ImagePreview from './components/imagepr';
import { enhanceImageApi } from './utils/ehancedimageAPI';

function App() {
  const [uploadedUrl, setUploadedUrl] = useState(null);
  const [enhancedUrl, setEnhancedUrl] = useState(null);
  const [isEnhancing, setIsEnhancing] = useState(false);
  const [error, setError] = useState(null);

  const handleImageUpload = async (file) => {
    try {
      console.log('App: handleImageUpload called with file:', file.name);
      setError(null);
      
      // Create URL for uploaded image
      const url = URL.createObjectURL(file);
      setUploadedUrl(url);
      setEnhancedUrl(null);
      
      // Start enhancement process
      setIsEnhancing(true);
      const enhancedResult = await enhanceImageApi(file);
      
      if (enhancedResult && enhancedResult.url) {
        setEnhancedUrl(enhancedResult.url);
        console.log('Image enhancement completed successfully');
      } else {
        throw new Error('Enhancement failed - no result received');
      }
    } catch (error) {
      console.error('Error in handleImageUpload:', error);
      setError('Failed to enhance image. Please try again.');
    } finally {
      setIsEnhancing(false);
    }
  };

  return (
    <div>
      <Header />
      <Live />
      <div id="upload-section" className="flex flex-col items-center">
        <ImageUploader onUpload={handleImageUpload} />
        
        {error && (
          <div className="mt-4 px-4 py-2 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}
        
        <section id="preview-section" className="flex flex-col items-center">
          <ImagePreview 
            uploadedUrl={uploadedUrl} 
            enhancedUrl={enhancedUrl}
            isEnhancing={isEnhancing}
          />
        </section>
        
        <section id="examples-section" className="mt-10 py-12 flex flex-col items-center">
          <FourImageGrid />
        </section>
      </div>
    </div>
  );
}

export default App; 