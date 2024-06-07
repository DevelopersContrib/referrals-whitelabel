import axios from 'axios';
import { options } from '@/lib/options';
import { getServerSession } from 'next-auth/next';

export const POST = async (req: Request) => {
    const data = await req.json();
    const session = await getServerSession(options);

    const apiUrl = process.env.API_URL + 'vote/add/?key=' + process.env.API_KEY;
     const params = new URLSearchParams(); 
    
    params.append('domain', data.domain);
    params.append('campaign_id', data.campaign_id);
    params.append('campart_id', data.campart_id);
    params.append('option_id', data.id);
    params.append('token', session?.token!);
    
    const headers = { 'Authorization': 'Bearer '+session?.token }; // auth header with bearer token
    const result = await axios.post(apiUrl, params, { headers });
    return new Response(JSON.stringify(result.data), { status: 200 });
 
};