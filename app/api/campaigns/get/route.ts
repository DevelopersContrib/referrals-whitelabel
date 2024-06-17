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

    //if (session?.token){

        // const apiUrl = process.env.API_URL+`user/campaigns/get?key=`+process.env.API_KEY+`&domain=${data.domain}&token=${session?.token}&limit=50`;
        const apiUrl = "https://api1.contrib.co/wl/user/campaigns?key=5c1bde69a9e783c7edc2e603d8b25023&domain=whitelabel.referrals.com&userid=11"
      
        const res = await axios.get(apiUrl, config);
        
        if(res.data.success){
            // const campaigns = res.data.data as userCampaign[];

            // for (const campaign of campaigns) {
            //     const campaign_id = campaign.campaign_id.toString();
            //     const emailData = await GetSocialClick(SOCIAL_TYPES.EMAIL, campaign_id);
            //     const fbData = await GetSocialClick(SOCIAL_TYPES.FACEBOOK, campaign_id);
            //     const gplusData = await GetSocialClick(SOCIAL_TYPES.GPLUS, campaign_id);
            //     const linkedinData = await GetSocialClick(SOCIAL_TYPES.LINKEDIN, campaign_id);
            //     const twitterData = await GetSocialClick(SOCIAL_TYPES.TWITTER, campaign_id);
            //     const pinterestData = await GetSocialClick(SOCIAL_TYPES.PINTEREST, campaign_id);
            //     const messengerData = await GetSocialClick(SOCIAL_TYPES.MESSENGER, campaign_id);

            //     const socialClicks: SocialClicks = {
            //         email: emailData.data.clicks,
            //         facebook: fbData.data.clicks,
            //         gplus: gplusData.data.clicks,
            //         linkedin: linkedinData.data.clicks,
            //         twitter: twitterData.data.clicks,
            //         pinterest: pinterestData.data.clicks,
            //         messenger: messengerData.data.clicks
            //     };
            //     campaign.socialClicks = socialClicks;
            // }
            return new Response(JSON.stringify(res.data), { status: 200 });
        }
    //}
    
    //return new Response(JSON.stringify({ error: 'Error'}), { status: 200 });
};