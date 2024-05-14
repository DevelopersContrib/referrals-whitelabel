import { NextResponse } from 'next/server';
import axios from 'axios';

export const POST = async (req: Request) => {
  try {
    const data = await req.json();
    const apiUrl = process.env.API_URL + '/auth/login?api_key=' + process.env.API_KEY;
    const params = new URLSearchParams();
    params.append('email', data.email);
    params.append('password', data.password);

    const res = await axios.post(apiUrl, params);
    const result = res.data;
    console.log(result);
    let response = NextResponse.next();
    response.cookies.set('token', result.token);

    return NextResponse.redirect(new URL('/new', req.url));
  } catch (error) {
    return error;
  }
};
