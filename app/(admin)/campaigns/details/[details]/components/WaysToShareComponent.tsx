"use client";
import { Input } from "@/components/ui/input";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FaLinkedin, FaUsers } from "react-icons/fa6";
import { ReloadIcon } from "@radix-ui/react-icons";
import {
  FaFacebookSquare,
  FaGooglePlusSquare,
  FaPinterestSquare,
  FaTwitterSquare
} from "react-icons/fa";

import { Textarea } from "@/components/ui/textarea";
import { campaign } from "@/types/campaign";
import { socialUrls } from "@/types/socialUrls";
import { useState, useEffect } from "react";

interface props {
  detail: campaign;
  socialUrls: socialUrls;
  domain: string;
}
const WaysToShareComponent = ({ socialUrls, detail, domain }: props) => {
  const initialValues = {
    email: "",
    name: "",
    domain: domain,
    campaign_id: detail.id
  };

  const initialErrors = {
    validate: false,
    emailError: "",
    nameError: ""
  };
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState(initialValues);
  const [errors, setErrors] = useState(initialErrors);
  const [success, setSuccess] = useState(false);
  const [inviteError, setInviteError] = useState(false);
  const [inviteErrorMsg, setInviteErrorMsg] = useState("");
  const [Domain, setDomain] = useState(domain);
  const [CampainId, setCampainId] = useState(detail.id);

  const val = `<script id="referral-script" src="https://www.referrals.com/extension/widget.js?key=${detail.id}" type="text/javascript"></script>`;

  useEffect(() => {
    const validateErrors = () => {
      let dataErrors;
      dataErrors = {
        validate: false, // Include validate property
        emailError:
          (data.email ? "" : "Email is required") ||
          (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)
            ? ""
            : "Invalid Email"),
        nameError: data.name ? "" : "Name is required."
      };
      setErrors(dataErrors);
    };
    validateErrors();
  }, [data]);

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const Invite = async () => {
    const isValid = !Object.values(errors).some((v) => v);

    if (isValid) {
      setIsLoading(true);
      const res = await fetch("/api/invite/", {
        method: "POST",
        body: JSON.stringify(data)
      });
      const ret = await res.json();
      setIsLoading(false);
      if (!ret.success) {
        setInviteError(true);
        setInviteErrorMsg(ret.data.error_message);
      } else {
        setSuccess(true);
        setData(initialValues);
      }
    } else {
      setErrors({ ...errors, ["validate"]: true });
    }
  };

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
                <Input
                  name="email"
                  onChange={handleChange}
                  value={data.email}
                  placeholder="Enter your email address"
                />
                {errors.validate ? (
                  <div className="d-block text-danger small mt-2">
                    {errors.emailError}
                  </div>
                ) : null}
              </div>
              <div>
                <Input
                  name="name"
                  onChange={handleChange}
                  value={data.name}
                  placeholder="Enter your Name"
                />
                {errors.validate ? (
                  <div className="d-block text-danger small mt-2">
                    {errors.nameError}
                  </div>
                ) : null}
              </div>
              <div>
                <Button
                  onClick={() => Invite()}
                  className="flex w-full items-center space-x-2"
                >
                  {isLoading ? (
                    <ReloadIcon className="h-4 w-4 mr-1 animate-spin" />
                  ) : (
                    <span>
                      <FaUsers className="h-4 w-4" />
                    </span>
                  )}
                  <span>Invite Friends</span>
                </Button>
                {inviteError && <span>{inviteErrorMsg}</span>}
                {success && <span>Invitation sent successfully!</span>}
              </div>
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
                  href={socialUrls.facebook}
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
