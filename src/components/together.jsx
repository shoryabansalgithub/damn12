import React , { useState } from 'react';
import { motion } from 'framer-motion';
import ImageUploader from './imageupload';
import ImagePreview from './imagepr';

const Together = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [enhancedImage, setEnhancedImage] = useState(null);
    const [loading, setLoading] = useState(false);



    const UploadImageHandler = (file) => {
        setSelectedImage(URL.createObjectURL(file));
        setLoading(true);
    }

    return (
        <>
        <ImageUploader UploadImageHandler={UploadImageHandler} />
        <ImagePreview loading={loading} selectedImage={selectedImage} />
        
        </>
    )
}

export default Together;