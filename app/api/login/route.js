import { NextResponse } from 'next/server';
import axios from 'axios';
import {getDomain} from '../../../data/data';
/**
 * @param {Request} request - The request object.
 * @returns {Promise<Response>} A promise resolving to a Response object.
 */
export const POST = async (request) => {
  try {
    const data = await request.json();
    const apiUrl = process.env.API_URL+`user/login?key=`+process.env.API_KEY;
    const params = new URLSearchParams();
    params.append('email', data.userEmail);
    params.append('password', data.userPassword);
    params.append('domain', getDomain());

    const res = await axios.post(apiUrl, params);
    const result = res.data;
    //console.log(result);
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
