import axios from 'axios';

/**
 * @param {Request} request - The request object.
 * @returns {Promise<Response>} A promise resolving to a Response object.
 */

export const POST = async (request) => {
    try {
      const data = await request.json();
    
      const token = request.cookies.get('token');
      const apiUrl = process.env.API_URL+'user/campaigns?key='+process.env.API_KEY+'&domain='+data.domain+'&token='+token;
      
      const res = await axios.get(apiUrl, config);
  
      return new Response(JSON.stringify({ domains: res }), { status: 200 });
    } catch (error) {
      console.log(error);
      return error;
    }
};