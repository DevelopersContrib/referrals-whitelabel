import Image from "next/image";
import Layout from "@/app/(public)/layout";
import bannerImage from "@/public/img/referral-banner-default.png";
import { FaCheck, FaGift, FaShare } from "react-icons/fa6";
import { FaChartLine } from "react-icons/fa";

interface Campaign {
  id: string;
  name: string;
  description: string;
  reward_type_name:string;
  imageUrl: string;
  widget_details: {
    id: string;
    campaign_id: string;
    background_image: string;
    description: string;
    // Add more properties as needed
  };
}

interface HomepageProps {
  domain: string;
  brand: string;
  logo: string;
  banner: string;
  description: string;
  featCampaignName: string;
  featCampaigDescription: string;
  featCampaigImage: string;
  featCampaignId: string;
  campaignData: Campaign[]; // Ensure campaignData is an array of Campaign objects
} 

const Homepage: React.FC<HomepageProps> = ({
  banner,
  campaignData,
  brand,
  description,
  featCampaignName,
  featCampaigDescription,
  featCampaigImage,
  featCampaignId
}) => {
  const decodedDescription = decodeURIComponent(description);
  return (
    <>
      <Layout>
        <main className="homepage min-h-screen bg-[#fafafa]">
          <section className="pt-20 bg-white text-black">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 flex flex-col justify-center">
                  <h1 className="text-6xl font-bold mb-4">
                    Refer {brand.charAt(0).toUpperCase() + brand.slice(1)} and Earn Rewards!
                  </h1>
                  {description ? (
                    <div className="mb-4 text-xl font-medium" dangerouslySetInnerHTML={{ __html: decodedDescription }} />
                  ) : (
                    <>
                      <p className="mb-4 text-xl font-medium">
                        Join our exciting referral program and start earning
                        amazing rewards and prizes! Share the love for {brand.charAt(0).toUpperCase() + brand.slice(1)}{" "}
                        with your friends and family, and get rewarded for every
                        successful referral. 
                      </p>
                      <p className="text-sm">
                        Start referring {brand.charAt(0).toUpperCase() + brand.slice(1)} today and enjoy the benefits of
                        being a brand ambassador!
                      </p>
                    </>
                  )}
                </div>
                <div className="col-lg-6">
                  {banner ? (
                    <Image
                      src={banner}
                      width={0}
                      height={0}
                      alt=""
                      className="img-fluid w-full h-auto object-contain"
                      sizes="100vw"
                    />
                  ) : (
                    <Image
                      src={bannerImage}
                      width={0}
                      height={0}
                      alt=""
                      className="img-fluid w-full h-auto object-contain"
                      sizes="100vw"
                    />
                  )}
                </div>
              </div>
            </div>
          </section>
          <section className="py-20 bg-[#fafafa]">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <h1 className="text-6xl font-bold mb-8 mt-0 text-center">
                    Features
                  </h1>
                </div>
                <div className="col-lg-4">
                  <div className="bg-white p-4 flex flex-col md:space-x-4 lg:space-y-4 text-center items-center justify-center shadow-md">
                    <div>
                      <div className="text-white bg-[#FF6067] rounded p-3 flex items-center justify-center">
                        <FaShare className="h-8 w-8" />
                      </div>
                    </div>
                    <div className="font-semibold text-2xl">Easy Sharing</div>
                    <div>
                      Share your unique referral link on social media, email, or
                      directly with friends.
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="bg-white p-4 flex flex-col space-y-4 text-center items-center justify-center shadow-md">
                    <div>
                      <div className="text-white bg-[#FF6067] rounded p-3 flex items-center justify-center">
                        <FaGift className="h-8 w-8" />
                      </div>
                    </div>
                    <div className="font-semibold text-2xl">Great Rewards</div>
                    <div>
                      Earn discounts, exclusive access, and special prizes for
                      each referral.
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="bg-white p-4 flex flex-col space-y-4 text-center items-center justify-center shadow-md">
                    <div>
                      <div className="text-white bg-[#FF6067] rounded p-3 flex items-center justify-center">
                        <FaChartLine className="h-8 w-8" />
                      </div>
                    </div>
                    <div className="font-semibold text-2xl">
                      Track Your Success
                    </div>
                    <div>
                      Use our intuitive dashboard to monitor your referrals and
                      rewards.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {featCampaignId ? (
            <section className="py-20 bg-white text-black">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <Image
                      src={featCampaigImage}
                      width={0}
                      height={0}
                      alt=""
                      className="img-fluid w-full h-auto object-contain"
                      sizes="100vw"
                    />
                  </div>
                  <div className="col-lg-6 flex justify-center flex-col">
                    <h1 className="text-6xl font-bold mb-8">
                      {featCampaignName}
                    </h1>
                    <p className="">{featCampaigDescription}</p>
                  </div>
                </div>
              </div>
            </section>
          ) : (
            <section className="py-20 bg-white text-black">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <Image
                      src={
                        "https://s3.amazonaws.com/referrals.com/images/referral-network.png"
                      }
                      width={0}
                      height={0}
                      alt=""
                      className="img-fluid w-full h-auto object-contain"
                      sizes="100vw"
                    />
                  </div>
                  <div className="col-lg-6 flex justify-center flex-col">
                    <h1 className="text-6xl font-bold mb-8">
                      Get Instant Free Access
                    </h1>
                    <p className="">
                      FREE Referral Platform for your Business. Get viral, fast
                      and free! I WOULD LIKE TO MAKE A FREE REFERRAL CAMPAIGN
                      FOR
                    </p>
                  </div>
                </div>
              </div>
            </section>
          )}
          <section className="py-20">
            <div className="container grid grid-cols-1 lg:grid-cols-4 gap-4">
              {Array.isArray(campaignData) && campaignData.length > 0 ? (
                campaignData.map((campaign) => (
                  <a
                    href="/register"
                    key={campaign.id}
                    className="shadow-md inline-flex"
                  >
                    <div className="flex w-full flex-col h-full">
                      <div className="relative">
                        <div className="absolute bottom-2 left-2 z-10 shadow">
                          <div className="bg-[#FF6067] rounded flex w-full mt-auto text-white items-center px-2 py-1 text-sm">
                            <div className="mr-1">
                              <FaGift />
                            </div>
                            <div className="capitalize">
                              {campaign.reward_type_name}
                            </div>
                          </div>
                        </div>
                        <Image
                          src={campaign.widget_details.background_image}
                          width={0}
                          height={0}
                          alt="Referral Campaign Image"
                          className="img-fluid h-[200px] object-cover w-full"
                          sizes="100vw"
                        />
                      </div>
                      <div className="flex w-full flex-col p-4 bg-white h-100">
                        <div>
                          <h3 className="capitalize font-bold mb-2">
                            {campaign.name}
                          </h3>
                        </div>
                        <div className="text-sm mb-4">
                          <p>{campaign.widget_details.description}</p>
                        </div>
                      </div>
                    </div>
                  </a>
                ))
              ) : (
                <div className="col-span-4 w-full flex items-center justify-center min-h-[30vh]">
                  <div className="text-3xl text-black/30">
                    No campaigns available
                  </div>
                </div> // Provide a fallback if campaignData is empty or not an array
              )}
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default Homepage;
