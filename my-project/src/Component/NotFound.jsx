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
      className="flex flex-col items-center justify-center h-screen text-center bg-gray-100 p-6"
    >
      <FaExclamationTriangle size={80} className="text-red-500" />
      <h1 className="mt-5 text-3xl font-semibold text-gray-800">404 - Page Not Found</h1>
      <p className="mt-3 text-lg text-gray-600">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-2 bg-red-500 text-white font-medium rounded-md hover:bg-red-600 transition"
      >
        Go Back Home
      </Link>
    </motion.div>
  );
};

export default NotFound;
