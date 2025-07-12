import React, { useState, useEffect, useCallback } from 'react';

// Custom hook for polling API calls
export const usePolling = (apiCall, interval = 5000, dependencies = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isPolling, setIsPolling] = useState(false);

  const executeApiCall = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await apiCall();
      setData(result);
    } catch (err) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  }, [apiCall]);

  const startPolling = useCallback(() => {
    setIsPolling(true);
    executeApiCall();
  }, [executeApiCall]);

  const stopPolling = useCallback(() => {
    setIsPolling(false);
  }, []);

  useEffect(() => {
    let intervalId;

    if (isPolling) {
      // Execute immediately
      executeApiCall();
      
      // Set up polling interval
      intervalId = setInterval(() => {
        executeApiCall();
      }, interval);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isPolling, interval, executeApiCall, ...dependencies]);

  return {
    data,
    loading,
    error,
    isPolling,
    startPolling,
    stopPolling,
    refetch: executeApiCall
  };
};

// Example API functions
export const apiFunctions = {
  // Example: Check image processing status
  checkImageStatus: async (imageId) => {
    const response = await fetch(`/api/images/${imageId}/status`);
    if (!response.ok) {
      throw new Error('Failed to check image status');
    }
    return response.json();
  },

  // Example: Get enhanced image result
  getEnhancedImage: async (imageId) => {
    const response = await fetch(`/api/images/${imageId}/enhanced`);
    if (!response.ok) {
      throw new Error('Failed to get enhanced image');
    }
    return response.json();
  },

  // Example: Upload and process image
  uploadAndProcessImage: async (formData) => {
    const response = await fetch('/api/images/upload', {
      method: 'POST',
      body: formData,
    });
    if (!response.ok) {
      throw new Error('Failed to upload image');
    }
    return response.json();
  }
};

// Example component using polling
export const PollingComponent = ({ imageId }) => {
  const {
    data,
    loading,
    error,
    isPolling,
    startPolling,
    stopPolling
  } = usePolling(
    () => apiFunctions.checkImageStatus(imageId),
    3000, // Poll every 3 seconds
    [imageId]
  );

  useEffect(() => {
    if (imageId) {
      startPolling();
    }
    return () => stopPolling();
  }, [imageId, startPolling, stopPolling]);

  // Stop polling when processing is complete
  useEffect(() => {
    if (data?.status === 'completed' || data?.status === 'failed') {
      stopPolling();
    }
  }, [data?.status, stopPolling]);

  if (loading && !data) {
    return <div>Initializing...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h3>Image Processing Status</h3>
      <p>Status: {data?.status || 'Unknown'}</p>
      <p>Progress: {data?.progress || 0}%</p>
      {isPolling && <p>Polling active...</p>}
      {data?.status === 'completed' && (
        <div>
          <p>Processing complete!</p>
          <img src={data.enhancedImageUrl} alt="Enhanced" />
        </div>
      )}
    </div>
  );
};

export default {
  usePolling,
  apiFunctions,
  PollingComponent
};

