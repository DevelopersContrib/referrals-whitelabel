// pages/redirect.js
//"use client"; // This directive marks the file as a client component
import { useState, useEffect } from "react";
import { signIn } from "next-auth/react";
//import { useEffect } from 'react';

const RedirectPage = async({
  params
}: {
  params: { email: string, id:string };
}) => {
  // const decodedEmail = atob(params.email);
  // const initialValues = {
  //   userEmail: decodedEmail,
  //   userPassword: "",
  //   domain: ""
  // };
  // console.log(params.email);
  // console.log(params.id);
 
  // console.log(decodedEmail);
  // const [data, setData] = useState(initialValues);
  // const response = await fetch("/api/login", {
  //   method: "POST",
  //   body: JSON.stringify(data)
  // });

  // if (response.ok) {
   
  //   console.log(response);
  //   await signIn("credentials", {
  //     redirect: false,
  //     email: data.userEmail,
  //     password: data.userPassword,
  //     domain: data.domain
  //   });
  //   window.location.replace("/dashboard");
  // } else {
  //   console.log("login error");
   
  // }

 /* useEffect(() => {
    // Redirect to the homepage
    window.location.href = '/';
  }, []);*/

  
  return (
    <>
      <br></br>  
      <br></br>
      <h1>email {atob(decodeURIComponent(params.email))}</h1>
      <h1>id {params.id}</h1>
    </>
  )
};


export default RedirectPage;
