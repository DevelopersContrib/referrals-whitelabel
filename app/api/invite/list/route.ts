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

    const url = process.env.API_URL + 'invite/get/?key=' + process.env.API_KEY+'&domain='
        +data.domain+'&token='+session?.token!+'&campaign_id='+data.campaign_id+'&campart_id='+res.data.data.campart_id;
    
    const result = await axios.get(url, config);

    return new Response(JSON.stringify(result.data), { status: 200 });
  }

  return new Response(JSON.stringify({ error: 'Error'}), { status: 200 });
        
};