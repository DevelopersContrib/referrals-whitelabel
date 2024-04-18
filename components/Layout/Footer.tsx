import React from "react";

const Footer = ({ domain }: { domain: string }) => {
  return (
    <>
      <footer className="tw-py-4 tw-bg-black tw-text-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="tw-capitalize">{domain}</div>
            </div>
            <div className="col-lg-6 text-end">
              <ul className="list-inline !tw-space-x-4">
                <li className="list-inline-item">
                  <a href="" className="tw-no-underline tw-capitalize">
                    about
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="" className="tw-no-underline tw-capitalize">
                    privacy policy
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="" className="tw-no-underline tw-capitalize">
                    terms and condition
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
