import Image from "next/image";
import Layout from "@/app/(public)/layout";

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
        <main className="homepage min-h-screen bg-[#ddd]">
          <section className="py-4 bg-white text-black">
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
                <div className="col-lg-6 flex justify-center flex-col">
                  <h1 className="text-6xl font-bold mb-8">
                    Get Instant Free Access
                  </h1>
                  <p className="">
                    FREE Referral Platform for your Business. Get viral, fast
                    and free! I WOULD LIKE TO MAKE A FREE REFERRAL CAMPAIGN FOR
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="py-4">
            <div className="container grid grid-cols-4 gap-4">
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
                <p>No campaigns available</p> // Provide a fallback if campaignData is empty or not an array
              )}
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default Homepage;
