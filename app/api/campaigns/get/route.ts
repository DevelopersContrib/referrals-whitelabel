import { userCampaign } from "@/types/userCampaign";
import axios from 'axios';
import { options } from '@/lib/options';
import { getServerSession } from 'next-auth/next';
import {GetSocialClick} from "@/lib/data";
import { SocialClicks } from "@/types/socialClicks";
import { SOCIAL_TYPES } from "@/lib/constants";
export const POST = async (req: Request) => {
    const data = await req.json();
    const session = await getServerSession(options);
    const config = {
        headers: { Authorization: 'Bearer ' + session?.token , timeout: 10000 }
    };
    
    const timestamp = Date.now(); // Get current timestamp

    if (session?.token){

        const apiUrl = process.env.API_URL+`user/campaigns/get?key=`+process.env.API_KEY+`&domain=${data.domain}&token=${session?.token}&limit=50&userid=${session?.id}`;
        //console.log('apiUrl',apiUrl)
        const res = await axios.get(apiUrl, config);
        
        if(res.data.success){
            const campaigns = res.data.data as userCampaign[];

            for (const campaign of campaigns) {
                const campaign_id = campaign.campaign_id.toString();
                const emailData = campaign.email;
                const fbData =  campaign.facebook;
                const gplusData =0;
                const linkedinData = campaign.linkedin;
                const twitterData = 0;
                const pinterestData = campaign.pinterest;
                const messengerData = 0;

                const socialClicks: SocialClicks = {
                    email: emailData,
                    facebook: fbData,
                    gplus: gplusData,
                    linkedin: linkedinData,
                    twitter: twitterData,
                    pinterest: pinterestData,
                    messenger: messengerData
                };
                campaign.socialClicks = socialClicks;
            }
            return new Response(JSON.stringify(res.data), { status: 200 });
        }
    }
    
    return new Response(JSON.stringify({ error: 'Error'}), { status: 200 });
};