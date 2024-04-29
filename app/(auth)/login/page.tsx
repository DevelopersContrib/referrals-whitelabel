import React from "react";
import { SlLogin } from "react-icons/sl";

const Login = () => {
  return (
    <>
      <main className="min-h-[calc(100vh-76px-56px)] py-8 w-full flex justify-center items-center">
        <div className="container">
          <div className="row w-full justify-center items-center">
            <div className="col-lg-4 flex flex-col">
              <h1 className="text-3xl font-bold mb-4 text-center">
                Log in to your account
              </h1>
              <div className="bg-[#eee] p-8">
                <div className="mb-4">
                  <label htmlFor="">Username</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="mb-4">
                  <label htmlFor="">Password</label>
                  <input type="password" className="form-control" />
                </div>
                <div className="d-grid">
                  <button className="btn btn-primary !flex items-center justify-center text-center w-full space-x-2">
                    <span>
                      <SlLogin className="w-4 h-4" />
                    </span>
                    <span>Log in</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
