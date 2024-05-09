import { NextResponse } from 'next/server';
import axios from 'axios';

/**
 * @param {Request} request - The request object.
 * @returns {Promise<Response>} A promise resolving to a Response object.
 */
export const POST = async (request) => {
  try {
    const data = await request.json();
    const apiUrl = "https://api1.contrib.co/wl/user/login?key=5c1bde69a9e783c7edc2e603d8b25023";
    const params = new URLSearchParams();
    params.append('email', data.userEmail);
    params.append('password', data.userPassword);
    params.append('domain', data.domain);

    const res = await axios.post(apiUrl, params);
    const result = res.data;
    console.log(result);
    if(result.success){

     
      let response = NextResponse.next();
      response.cookies.set('token', result.token);
      response.cookies.set('userid', result.userid);
  
      return NextResponse.redirect(new URL('/dashboard', request.url));
    } else {
      return new Response("Login error", { status: 500 });
    }
   
  } catch (error) {
    console.error("An error occurred:", error);
    return new Response("Error occurred", { status: 500 }); // You can customize the error response as needed
  }
};
