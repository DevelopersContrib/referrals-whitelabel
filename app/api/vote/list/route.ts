import axios from 'axios';
import { options } from '@/lib/options';
import { getServerSession } from 'next-auth/next';

export const POST = async (req: Request) => {
  const data = await req.json();
  const session = await getServerSession(options);
  const config = {
      headers: { Authorization: 'Bearer ' + session?.token },
    };

  const apiUrl = process.env.API_URL+`vote/options/get?key=`+process.env.API_KEY+`&domain=${data.domain}&campaign_id=${data.id}`;
   
  const res = await axios.get(apiUrl, config);
  if(res.data.success){
    return new Response(JSON.stringify(res.data), { status: 200 });
  }

  return new Response(JSON.stringify({ error: 'Error'}), { status: 200 });
        
};