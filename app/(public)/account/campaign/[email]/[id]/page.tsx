// pages/redirect.js
"use client"; // This directive marks the file as a client component

import { useEffect } from 'react';

const RedirectPage = () => {
  useEffect(() => {
    // Redirect to the homepage
    window.location.href = '/';
  }, []);

 
};

export default RedirectPage;
