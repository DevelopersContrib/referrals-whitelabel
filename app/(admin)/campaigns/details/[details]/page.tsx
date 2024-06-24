import React from "react";
import dynamic from "next/dynamic";
const DynamicContent = dynamic(() => import('@/components/DynamicContent'), { ssr: false })
import Script from 'next/script'

import { options } from "@/lib/options";
import { getServerSession } from "next-auth/next";

const CampaignDetailsPage = async ({
  params
}: {
  params: { details: string };
}) => {

  const session = await getServerSession(options);
  const name: string | null | undefined = session?.user?.name;
  const email: string | null | undefined = session?.user?.email;

  const timestamp = Date.now(); // Get current timestamp
  return (
    <>
      <center id="embedwidget"></center>
      <Script src={"https://www.referrals.com/extension/widget.js?key="+params.details+
          "&email="+email+"&name="+encodeURIComponent(name as string)+"&t="+timestamp}  />
    </>
  )
};

export default CampaignDetailsPage;
