import React, { useState } from "react";
import './App.css';
import Header from './components/header';
import ImageUploader from './components/imageupload';
import Live from './components/live';
import FourImageGrid from './components/examples';
import ImagePreview from './components/imagepr';

function App() {
  const [uploadedUrl, setUploadedUrl] = useState(null);
  const [enhancedUrl, setEnhancedUrl] = useState(null);

  const handleImageUpload = (file) => {
    console.log('App: handleImageUpload called with file:', file.name);
    const url = URL.createObjectURL(file);
    console.log('App: Created URL:', url);
    setUploadedUrl(url);
    setEnhancedUrl(null); // or set to an enhanced image URL if you have one
    console.log('App: State updated with uploadedUrl');
  };

  return (
    <div>
      <Header />
      <Live />
      <div id="upload-section" className="flex flex-col items-center">
        <ImageUploader onUpload={handleImageUpload} />
        <section id="preview-section" className="flex flex-col items-center">
          <ImagePreview uploadedUrl={uploadedUrl} enhancedUrl={enhancedUrl} />
        </section>
        <section id="examples-section" className="mt-10 py-12 flex flex-col items-center">
          <FourImageGrid />
        </section>
      </div>
    </div>
  );
}

export default App; 