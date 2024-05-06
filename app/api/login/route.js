//import { NextResponse } from 'next/server';
import axios from 'axios';

export const POST = async (request) => {
  try {
    const data = await req.json();
    const apiUrl = "https://api1.contrib.co/wl/user/login?key=5c1bde69a9e783c7edc2e603d8b25023";
    const params = new URLSearchParams();
    params.append('email', data.email);
    params.append('password', data.password);
    params.append('domain', data.domain);

    const res = await axios.post(apiUrl, params);
    const result = res.data;
    console.log(result);
    //let response = NextResponse.next();
    //response.cookies.set('token', result.token);

    //return NextResponse.redirect(new URL('/new', req.url));
  } catch (error) {
    return error;
  }
};
