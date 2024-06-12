import React from "react";
import dynamic from "next/dynamic";
const DynamicContent = dynamic(() => import('@/components/DynamicContent'), { ssr: false })
import Script from 'next/script'
const CampaignDetailsPage = async ({
  params
}: {
  params: { details: string };
}) => {
  return (
    <>
      <center id="embedwidget"></center>
      <Script src={"https://www.referrals.com/extension/widget.js?key="+params.details}  />
    </>
  )
};

export default CampaignDetailsPage;
