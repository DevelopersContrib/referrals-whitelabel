import { NextResponse } from 'next/server';
import axios from 'axios';

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
  
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }else{
      return new Response("Login error", { status: 500 });
    }
   
   
  } catch (error) {
    return error;
  }
};
