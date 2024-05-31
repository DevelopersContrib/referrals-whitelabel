import { NextResponse } from 'next/server';
import axios from 'axios';
import { options } from '@/lib/options';
import { getDomain } from '../../../../data/data';
import { getServerSession } from 'next-auth/next';

export const POST = async (request:any) => {
  try {
    const data = await request.json();
    
    const session = await getServerSession(options);
    /*const config = {
      headers: { Authorization: 'Bearer ' + session?.token },
    };*/
    //const userSettings = GetUserSettings(data.id);
    //const apiUrl = process.env.API_URL + 'user/update?key=' + process.env.API_KEY+'&domain='+getDomain()+'&token='+session?.token+'&name='+data.name+'&email='+data.email;  
    const domain = getDomain();
    const timestamp = Date.now(); // Get current timestamp
    const apiUrl = process.env.API_URL+`user/details?key=`+process.env.API_KEY+`&domain=${domain}&id=${session?.id}&timestamp=${timestamp}`;
   // const params = new URLSearchParams();
    //params.append('name', data.name);
   // params.append('email', data.email);

    const res = await axios.get(apiUrl);
    const result = res.data;
    

    return NextResponse.json(result);
  } catch (error) {
    console.log(error);
  }
};
