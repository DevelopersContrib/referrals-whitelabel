import { NextResponse } from 'next/server';
import axios from 'axios';
import { options } from '@/lib/options';
import { getDomain } from '../../../../data/data';
import { getServerSession } from 'next-auth/next';

export const POST = async (request) => {
  try {
    const data = await request.json();
    
    const session = await getServerSession(options);
    const config = {
      headers: { Authorization: 'Bearer ' + session?.token },
    };

    const apiUrl = process.env.API_URL + 'user/update?key=' + process.env.API_KEY+'&domain='+getDomain()+'&token='+session?.token+'&name='+data.name+'&email='+data.email;  
    const params = new URLSearchParams();
    params.append('name', data.name);
    params.append('email', data.email);

    const res = await axios.get(apiUrl, data, config);
    const result = res.data;
    

    return NextResponse.json(result);
  } catch (error) {
    console.log(error);
  }
};