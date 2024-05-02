import axios from 'axios';

export const POST = async (request) => {
    const data = await request.json();
    
    try {
        const params = new URLSearchParams();
        params.append('email', data.userEmail);
        params.append('domain', data.domain);
        params.append('name', data.userName);
        params.append('password', data.userPassword);
         
        const saveRes = await axios.post('https://api1.contrib.co/wl/user/add?key=5c1bde69a9e783c7edc2e603d8b25023', params);
        return new Response(JSON.stringify({status:true}), { status: 201 });
    
    } catch (error) {
        if (error.isAxiosError) {
            // Handle AxiosError
            console.error("AxiosError:", error.message);
            return new Response("An error occurred with Axios: " + error.message, { status: 500 });
        } else {
            // Handle other errors
            console.error("An error occurred:", error);
            return new Response("An error occurred: " + error.message, { status: 500 });
        }
    }
};
