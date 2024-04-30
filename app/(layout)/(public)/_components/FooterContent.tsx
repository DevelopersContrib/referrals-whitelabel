import React from "react";

const FooterContent = ({ domain }: { domain: string }) => {
  return (
    <>
      <footer className="py-2 bg-slate-900 text-white text-xs">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="capitalize">{domain}</div>
            </div>
            <div className="col-lg-6 text-end">
              <ul className="list-inline !space-x-4">
                <li className="list-inline-item">
                  <a href="" className="no-underline capitalize">
                    about
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="" className="no-underline capitalize">
                    privacy policy
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="" className="no-underline capitalize">
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

export default FooterContent;
