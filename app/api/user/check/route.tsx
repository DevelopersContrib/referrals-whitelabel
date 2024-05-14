import axios from 'axios';

const headers = {
  'Content-Type': 'application/json', // set the Content-Type header
};

export const POST = async (req: Request) => {
  try {
    const data = await req.json();

    //const apiUrl = process.env.API_URL + "user/login?key=5c1bde69a9e783c7edc2e603d8b25023";
    const apiUrl = "https://api1.contrib.co/wl/user/login?key=5c1bde69a9e783c7edc2e603d8b25023";
    const params = new URLSearchParams();
    params.append('email', data.email);
    params.append('password', data.password);
    params.append('domain', data.domain);

    const res = await axios.post(apiUrl, params);
    const result = res.data;
console.log('##########################################',result)
    return new Response(JSON.stringify(result), { status: 201 });
  } catch (error) {
    //console.log(error);
    return error;
  }

};
