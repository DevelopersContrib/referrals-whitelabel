import React from "react";
import Header from "../Layout/Header";
import BannerImg from "/public/img/banner-1.jpg";
import Image from "next/image";
import Footer from "../Layout/Footer";

interface Campaign {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  widget_details: {
    id: string;
    campaign_id: string;
    background_image: string;
    description:string
    // Add more properties as needed
  };
}

interface HomepageProps {
  domain: string;
  logo: string;
  banner: string;
  campaignData: Campaign[]; // Ensure campaignData is an array of Campaign objects
}

const Homepage: React.FC<HomepageProps> = ({
  domain,
  logo,
  banner,
  campaignData
}) => {
  return (
    <>
      <Header logo={logo} domain={domain} />
      <main className="homepage tw-min-h-screen tw-bg-[#ddd]">
        <section className="tw-py-4 tw-bg-white tw-text-black">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <Image
                  src={banner}
                  width={1280}
                  height={956}
                  alt="Banner"
                  className="img-fluid"
                />
              </div>
              <div className="col-lg-6 tw-flex tw-justify-center tw-flex-col">
                <h1 className="tw-text-6xl tw-font-bold tw-mb-8">
                  Get Instant Free Access
                </h1>
                <p className="">
                  FREE Referral Platform for your Business. Get viral, fast and
                  free! I WOULD LIKE TO MAKE A FREE REFERRAL CAMPAIGN FOR
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="tw-py-4">
          <div className="container tw-grid tw-grid-cols-4 tw-gap-4">
            {Array.isArray(campaignData) && campaignData.length > 0 ? (
              campaignData.map((campaign) => (
                <a href="#" key={campaign.id} className="tw-shadow-md">
                  <div className="tw-flex tw-w-full tw-flex-col">
                    <div>
                      <Image
                        src={campaign.widget_details.background_image}
                        width={1280}
                        height={956}
                        alt="Banner"
                        className="img-fluid tw-max-h-[200px] tw-object-cover"
                      />
                    </div>
                    <div className="tw-flex tw-w-full tw-flex-col tw-p-4 tw-bg-white">
                      <div>
                        <h3 className="tw-capitalize tw-font-bold tw-mb-2">
                          {campaign.name}
                        </h3>
                      </div>
                      <div className="tw-text-sm">
                        <p>{campaign.widget_details.description}</p>
                      </div>
                    </div>
                  </div>
                </a>
              ))
            ) : (
              <p>No campaigns available</p> // Provide a fallback if campaignData is empty or not an array
            )}
          </div>
        </section>
      </main>
      <Footer domain={domain} />
    </>
  );
};

export default Homepage;
