// components/ClientLoaderWrapper.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Loader from './Loader'; // Import the Loader component

const ClientLoaderWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false); // Hide the loader after 2 seconds
    }, 2000);

    return () => clearTimeout(timeout); // Cleanup on unmount
  }, []);

  return (
    <>
      {loading ? (
        <Loader /> // Show loader while loading
      ) : (
        <>{children}</> // Show actual content after loading
      )}
    </>
  );
};

export default ClientLoaderWrapper;
