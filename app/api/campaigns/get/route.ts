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

        const apiUrl = process.env.API_URL+`user/campaigns/get?key=`+process.env.API_KEY+`&domain=${data.domain}&token=${session?.token}&limit=10&userid=${session?.id}`;
        //console.log('apiUrl',apiUrl)
        const res = await axios.get(apiUrl, config);
        
        if(res.data.success){
            const campaigns = res.data.data as userCampaign[];

            for (const campaign of campaigns) {
                const campaign_id = campaign.campaign_id.toString();
                const emailData = await GetSocialClick(SOCIAL_TYPES.EMAIL, campaign_id, session?.id);
                const fbData = await GetSocialClick(SOCIAL_TYPES.FACEBOOK, campaign_id, session?.id);
                const gplusData = await GetSocialClick(SOCIAL_TYPES.GPLUS, campaign_id, session?.id);
                const linkedinData = await GetSocialClick(SOCIAL_TYPES.LINKEDIN, campaign_id, session?.id);
                const twitterData = await GetSocialClick(SOCIAL_TYPES.TWITTER, campaign_id, session?.id);
                const pinterestData = await GetSocialClick(SOCIAL_TYPES.PINTEREST, campaign_id, session?.id);
                const messengerData = await GetSocialClick(SOCIAL_TYPES.MESSENGER, campaign_id, session?.id);
                

                const socialClicks: SocialClicks = {
                    email: emailData.data.clicks,
                    facebook: fbData.data.clicks,
                    gplus: gplusData.data.clicks,
                    linkedin: linkedinData.data.clicks,
                    twitter: twitterData.data.clicks,
                    pinterest: pinterestData.data.clicks,
                    messenger: messengerData.data.clicks
                };
                campaign.socialClicks = socialClicks;
            }
            return new Response(JSON.stringify(res.data), { status: 200 });
        }
    }
    
    return new Response(JSON.stringify({ error: 'Error'}), { status: 200 });
};