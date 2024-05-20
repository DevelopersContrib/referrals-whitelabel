import Image from "next/image";
import Layout from "@/app/(public)/layout";
import bannerImage from "@/public/img/referral-banner-default.png";
import { FaCheck } from "react-icons/fa6";

interface Campaign {
  id: string;
  name: string;
  description: string;
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
  logo: string;
  banner: string;
  campaignData: Campaign[]; // Ensure campaignData is an array of Campaign objects
}

const Homepage: React.FC<HomepageProps> = ({ banner, campaignData }) => {
  return (
    <>
      <Layout>
        <main className="homepage min-h-screen bg-[#fafafa]">
          <section className="py-20 bg-white text-black">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 flex flex-col">
                  <h1 className="text-6xl font-bold mb-4">
                    Refer [MyCompany] and Earn Rewards!
                  </h1>
                  <p className="mb-4 text-xl font-medium">
                    Join our exciting referral program and start earning amazing
                    rewards and prizes! Share the love for [MyCompany] with your
                    friends and family, and get rewarded for every successful
                    referral.
                  </p>
                  <ul className="list-unstyled mb-4 font-light">
                    <li className="">
                      <span className="inline-flex mr-2">
                        <FaCheck className="h-4 w-4 " />
                      </span>
                      <span className="text-sm">
                        Easy Sharing: Share your unique referral link on social
                        media, email, or directly with friends.
                      </span>
                    </li>
                    <li className="">
                      <span className="inline-flex mr-2">
                        <FaCheck className="h-4 w-4 " />
                      </span>
                      <span className="text-sm">
                        Great Rewards: Earn discounts, exclusive access, and
                        special prizes for each referral.
                      </span>
                    </li>
                    <li className="">
                      <span className="inline-flex mr-2">
                        <FaCheck className="h-4 w-4 " />
                      </span>
                      <span className="text-sm">
                        Track Your Success: Use our intuitive dashboard to
                        monitor your referrals and rewards.
                      </span>
                    </li>
                  </ul>
                  <p className="text-sm">
                    Start referring [MyCompany] today and enjoy the benefits of
                    being a brand ambassador!
                  </p>
                </div>
                <div className="col-lg-6">
                  {!banner ? (
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
                      alt=""
                      className="img-fluid w-full h-auto object-cover"
                    />
                  )}
                </div>
              </div>
            </div>
          </section>
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
                      <div>
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
                        <div className="text-sm">
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
