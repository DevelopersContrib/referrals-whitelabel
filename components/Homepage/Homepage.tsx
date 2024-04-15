import React from "react";
import Header from "../Layout/Header";
import BannerImg from "/public/img/banner-1.jpg";
import Image from "next/image";

const Homepage = () => {
  return (
    <>
      <Header />
      <main className="homepage tw-min-h-screen tw-bg-[#ddd]">
        <section className="tw-py-4 tw-bg-black tw-text-white">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <Image src={BannerImg} alt="Banner" className="img-fluid" />
              </div>
              <div className="col-lg-6">
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
            <a href="#" className="tw-shadow-md">
              <div className="tw-flex tw-w-full tw-flex-col">
                <div>
                  <Image
                    src={BannerImg}
                    alt="Banner"
                    className="img-fluid tw-max-h-[200px] tw-object-cover"
                  />
                </div>
                <div className="tw-flex tw-w-full tw-flex-col tw-p-4 tw-bg-white">
                  <div>
                    <h3 className="tw-capitalize tw-font-bold tw-mb-2">
                      campaign #30 social rewards
                    </h3>
                  </div>
                  <div className="tw-text-sm">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <a href="#" className="tw-shadow-md">
              <div className="tw-flex tw-w-full tw-flex-col">
                <div>
                  <Image
                    src={BannerImg}
                    alt="Banner"
                    className="img-fluid tw-max-h-[200px] tw-object-cover"
                  />
                </div>
                <div className="tw-flex tw-w-full tw-flex-col tw-p-4 tw-bg-white">
                  <div>
                    <h3 className="tw-capitalize tw-font-bold tw-mb-2">
                      campaign #30 social rewards
                    </h3>
                  </div>
                  <div className="tw-text-sm">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <a href="#" className="tw-shadow-md">
              <div className="tw-flex tw-w-full tw-flex-col">
                <div>
                  <Image
                    src={BannerImg}
                    alt="Banner"
                    className="img-fluid tw-max-h-[200px] tw-object-cover"
                  />
                </div>
                <div className="tw-flex tw-w-full tw-flex-col tw-p-4 tw-bg-white">
                  <div>
                    <h3 className="tw-capitalize tw-font-bold tw-mb-2">
                      campaign #30 social rewards
                    </h3>
                  </div>
                  <div className="tw-text-sm">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <a href="#" className="tw-shadow-md">
              <div className="tw-flex tw-w-full tw-flex-col">
                <div>
                  <Image
                    src={BannerImg}
                    alt="Banner"
                    className="img-fluid tw-max-h-[200px] tw-object-cover"
                  />
                </div>
                <div className="tw-flex tw-w-full tw-flex-col tw-p-4 tw-bg-white">
                  <div>
                    <h3 className="tw-capitalize tw-font-bold tw-mb-2">
                      campaign #30 social rewards
                    </h3>
                  </div>
                  <div className="tw-text-sm">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default Homepage;
