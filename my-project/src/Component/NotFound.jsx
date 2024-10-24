// src/pages/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa'; // Import icon
import { motion } from 'framer-motion'; // Import Framer Motion

const NotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '100vh', 
        textAlign: 'center',
        padding: '20px'
      }}
    >
      <FaExclamationTriangle size={80} color="#ff6347" />
      <h1 style={{ marginTop: '20px', fontSize: '2rem' }}>404 - Page Not Found</h1>
      <p style={{ marginTop: '10px', fontSize: '1.2rem', color: '#666' }}>
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link 
        to="/" 
        style={{ 
          marginTop: '20px', 
          padding: '10px 20px', 
          backgroundColor: '#ff6347', 
          color: '#fff', 
          textDecoration: 'none', 
          borderRadius: '5px' 
        }}
      >
        Go Back Home
      </Link>
    </motion.div>
  );
};

export default NotFound;
