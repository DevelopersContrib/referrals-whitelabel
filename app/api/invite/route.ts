import { NextResponse } from 'next/server';
import axios from 'axios';
import { options } from '@/lib/options';
import { getServerSession } from 'next-auth/next';

export const POST = async (req: Request) => {
  const data = await req.json();
  const session = await getServerSession(options);
  const config = {
      headers: { Authorization: 'Bearer ' + session?.token },
    };

  const apiUrl = process.env.API_URL + 'campaigns/join?key=' + process.env.API_KEY+'&domain='+data.domain+'&campaign_id='+data.campaign_id+'&userid='+session?.id;

 
  const res = await axios.get(apiUrl, config);
  if(res.data.success){

    const apiUrl = process.env.API_URL + 'invite/email/?key=' + process.env.API_KEY;
    const params = new URLSearchParams(); 
    params.append('domain', data.domain);
    params.append('email', data.email);
    params.append('name', data.name);
    params.append('campart_id', res.data.campart_id);
    params.append('token', session?.token!);

    const headers = { 'Authorization': 'Bearer '+session?.token }; // auth header with bearer token
    const result = await axios.post(apiUrl, params, { headers });
    return new Response(JSON.stringify(result.data), { status: 200 });
  }

  return new Response(JSON.stringify({ error: 'Error'}), { status: 200 });
        
};