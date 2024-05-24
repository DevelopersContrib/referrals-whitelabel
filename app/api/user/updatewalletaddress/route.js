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

    const apiUrl = process.env.API_URL + 'user/update?key=' + process.env.API_KEY+'&domain='+getDomain()+'&token='+session?.token+'&wallet_address='+data.wallet_address;  
    const params = new URLSearchParams();
    params.append('wallet_address', data.wallet_address);

    const res = await axios.get(apiUrl, data, config);
    const result = res.data;
    

    return NextResponse.json(result);
  } catch (error) {
    console.log(error);
  }
};
