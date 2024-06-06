"use client";

import { Button, buttonVariants } from "@/components/ui/button";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FaLinkedin, FaUsers } from "react-icons/fa6";
import InviteFriends from "./../InviteFriends";
import {
  FaFacebookSquare,
  FaGooglePlusSquare,
  FaPinterestSquare,
  FaTwitterSquare
} from "react-icons/fa";

import { Textarea } from "@/components/ui/textarea";
import { campaign } from "@/types/campaign";
import { socialUrls } from "@/types/socialUrls";

interface props {
  detail: campaign;
  socialUrls: socialUrls;
  domain: string;
}
const WaysToShareComponent = ({ socialUrls, detail, domain }: props) => {
 
  const val = `<script id="referral-script" src="https://www.referrals.com/extension/widget.js?key=${detail.id}" type="text/javascript"></script>`;

  return (
    <>
      <Tabs defaultValue="viaEmail">
        <div className="inline-flex">
          <TabsList className="inline-flex w-full">
            <TabsTrigger value="viaEmail">Via Email</TabsTrigger>
            <TabsTrigger value="viaSocial">Via Social</TabsTrigger>
            <TabsTrigger value="viaEmbedCode">Via Embed Code</TabsTrigger>
          </TabsList>
        </div>
        <div className="w-full">
          <TabsContent value="viaEmail">
            <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-y-4 lg:gap-4">
             
              <InviteFriends detail={detail} domain={domain} />
            </div>
          </TabsContent>
          <TabsContent value="viaSocial">
            <ul className="list-none p-0 m-0 space-x-2">
              <li className="list-none inline-flex">
                <a
                  target="_blank"
                  href={socialUrls.google_plus}
                  className={buttonVariants({ variant: "outline" })}
                >
                  <span className="mr-2">
                    <FaGooglePlusSquare />
                  </span>
                  Sign in with Google
                </a>
              </li>
              <li className="list-none inline-flex">
                <a
                  target="_blank"
                  href={socialUrls.facebook}
                  className={buttonVariants({ variant: "outline" })}
                >
                  <span className="mr-2">
                    <FaFacebookSquare />
                  </span>
                  Facebook
                </a>
              </li>
              <li className="list-none inline-flex">
                <a
                  target="_blank"
                  href={socialUrls.linkedin}
                  className={buttonVariants({ variant: "outline" })}
                >
                  <span className="mr-2">
                    <FaLinkedin />
                  </span>
                  Linkedin
                </a>
              </li>
              <li className="list-none inline-flex">
                <a
                  target="_blank"
                  href={socialUrls.twitter}
                  className={buttonVariants({ variant: "outline" })}
                >
                  <span className="mr-2">
                    <FaTwitterSquare />
                  </span>
                  Twitter
                </a>
              </li>
              <li className="list-none inline-flex">
                <a
                  target="_blank"
                  href={socialUrls.pinterest}
                  className={buttonVariants({ variant: "outline" })}
                >
                  <span className="mr-2">
                    <FaPinterestSquare />
                  </span>
                  Pinterest
                </a>
              </li>
            </ul>
          </TabsContent>
          <TabsContent value="viaEmbedCode">
            <p className="text-sm mb-4">
              Copy and paste this code your website to let your visitors send
              referrals
            </p>
            <div className="w-full mb-4">
              <Textarea
                name="w_embed_code_ac"
                id="w_embed_code_ac"
                className="form-control m-input"
              >
                {val}
              </Textarea>
            </div>
            <h4 className="font-bold mb-2">Wordpress Plugin</h4>
            <div className="p-4 bg-[#f7f8fa]">
              <p>
                1. Download referral plugin{" "}
                <a href="https://github.com/DevelopersContrib/Wordpress-Plugins/blob/master/referral_widget/referral_widget.zip" className="text-blue-600">
                  here
                </a>
                .
              </p>
              <p>2. Unzip the referral_widget.zip on your computer</p>
              <p>
                3. Upload referral_widget directory to the /wp-content/plugins/
                directory
              </p>
              <p>
                4. Activate the plugin through the &apos;Plugins&apos; menu in
                WordPress
              </p>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </>
  );
};

export default WaysToShareComponent;
