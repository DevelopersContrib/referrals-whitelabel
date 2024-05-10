import { NextResponse } from 'next/server';
import axios from 'axios';


export const POST = async (request) => {
    const data = await request.json();
    
    try {
        const params = new URLSearchParams();
        params.append('email', data.userEmail);
        params.append('domain', data.domain);
        params.append('name', data.userName);
        params.append('password', data.userPassword);
         
        const res = await axios.post(process.env.API_URL+'user/add?key='+process.env.API_KEY, params);
        
         const result = res.data;
  
         return NextResponse.json(result.data);
       
    } catch (error) {
        // Handle AxiosError
        if (axios.isAxiosError(error)) {
            console.error("AxiosError:", error.message);
            return new Response("An error occurred with Axios: " + error.message, { status: 500 });
        } else {
            // Handle other errors
            console.error("An error occurred:", error);
            return new Response("An error occurred: " + error.message, { status: 500 });
        }
    }
};
