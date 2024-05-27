import { NextResponse } from 'next/server';
import axios from 'axios';
import { getDomain } from "../../../data/data";

export const POST = async (request:any) => {
  try {
    const data = await request.json();
    const token = data.token
    const domain = getDomain();
    const headers = { 'Authorization': 'Bearer '+token }; // auth header with bearer token
    
    let cats = [];
    let parts = data.category_id.split(',');
    for (let i = 0; i < parts.length; i++) {
      if (parts[i]>0){
        cats.push(parseInt(parts[i]));
      }
    }
    const apiUrl = 'https://api1.contrib.co/wl/deals/get?key=5c1bde69a9e783c7edc2e603d8b25023&domain='+domain+'&category_id='+cats.join(',');

    const params = new URLSearchParams();
    params.append('domains', data.domains);
 
    const res = await axios.post(apiUrl, params, { headers });
    const result = res.data;

    return NextResponse.json(result);
  } catch (error) {
    console.log(error);
  }
};