import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FaLinkedin, FaUsers } from "react-icons/fa6";
import {
  FaFacebookSquare,
  FaGooglePlusSquare,
  FaPinterestSquare,
  FaTwitterSquare
} from "react-icons/fa";

import { Textarea } from "@/components/ui/textarea";

const WaysToShareComponent = () => {
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
              <div>
                <Input placeholder="Enter your email address" />
              </div>
              <div>
                <Input placeholder="Enter your Name" />
              </div>
              <div>
                <Button className="flex w-full items-center space-x-2">
                  <span>
                    <FaUsers className="h-4 w-4" />
                  </span>
                  <span>Invite Friends</span>
                </Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="viaSocial">
            <ul className="list-none p-0 m-0 space-x-2">
              <li className="list-none inline-flex">
                <Button variant={"outline"}>
                  <span className="mr-2">
                    <FaGooglePlusSquare />
                  </span>
                  Sign in with Google
                </Button>
              </li>
              <li className="list-none inline-flex">
                <Button variant={"outline"}>
                  <span className="mr-2">
                    <FaFacebookSquare />
                  </span>
                  Facebook
                </Button>
              </li>
              <li className="list-none inline-flex">
                <Button variant={"outline"}>
                  <span className="mr-2">
                    <FaLinkedin />
                  </span>
                  Linkedin
                </Button>
              </li>
              <li className="list-none inline-flex">
                <Button variant={"outline"}>
                  <span className="mr-2">
                    <FaTwitterSquare />
                  </span>
                  Twitter
                </Button>
              </li>
              <li className="list-none inline-flex">
                <Button variant={"outline"}>
                  <span className="mr-2">
                    <FaPinterestSquare />
                  </span>
                  Pinterest
                </Button>
              </li>
            </ul>
          </TabsContent>
          <TabsContent value="viaEmbedCode">
            <p className="text-sm mb-4">
              Copy and paste this code your website to let your visitors send
              referrals
            </p>
            <div className="w-full mb-4">
              <Textarea />
            </div>
            <h4 className="font-bold mb-2">Wordpress Plugin</h4>
            <div className="p-4 bg-[#f7f8fa]">
              <p>
                1. Download referral plugin{" "}
                <a href="#" className="text-blue-600">
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
                4. Activate the plugin through the 'Plugins' menu in WordPress
              </p>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </>
  );
};

export default WaysToShareComponent;
