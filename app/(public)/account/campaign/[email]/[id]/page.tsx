// pages/redirect.js
"use client"; // This directive marks the file as a client component

import { useEffect } from 'react';

const RedirectPage = async({
  params
}: {
  params: { email: string, id:string };
}) => {
  console.log(params.email);
  console.log(params.id);
  const decodedEmail = atob(params.email);
  console.log(decodedEmail);
  useEffect(() => {
    // Redirect to the homepage
    window.location.href = '/';
  }, []);

 
};

export default RedirectPage;
