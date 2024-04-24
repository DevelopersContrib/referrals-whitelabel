import axios from 'axios'

export const POST = async (request) => {
	const data = await request.json();
	
	try {
		const params = new URLSearchParams();
        params.append('userEmail', data.userEmail);
        params.append('domain', data.domain);
        params.append('userName', data.userName);
        params.append('password', data.userPassword);
         
		const saveRes = await axios.post('https://api1.contrib.co/v2/referrals/Wladduser?key=5c1bde69a9e783c7edc2e603d8b25023', params);
		
	
	} catch (error) {
		return new Response("An error occurred", { status: 500 });
	}
}
