"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import React from "react";
import { FaUserEdit } from "react-icons/fa";

export default function Register(){
  return (
    <>
      <>
        <main className="tw-min-h-[calc(100vh-76px-56px)] py-8 tw-w-full tw-flex tw-justify-center tw-items-center">
          <div className="container">
            <div className="row tw-w-full tw-justify-center tw-items-center">
              <div className="col-lg-4 tw-flex tw-flex-col">
                <h1 className="tw-text-3xl tw-font-bold tw-mb-4 tw-text-center">
                  Register for an account
                </h1>
                <div className="tw-bg-[#eee] tw-p-8">
                  <div className="tw-mb-4">
                    <label htmlFor="">Your Email</label>
                    <input type="text" name="userEmail" className="form-control" />
                  </div>
                  <div className="tw-mb-4">
                    <label htmlFor="">Your Name</label>
                    <input type="text" name="userName" className="form-control" />
                  </div>
                  <div className="tw-mb-4">
                    <label htmlFor="">Password</label>
                    <input type="password" name="userPassword" className="form-control" />
                  </div>
                  <div className="tw-mb-4">
                    <label htmlFor="">Confirm Password</label>
                    <input type="password" name="userPasswordConfirm" className="form-control" />
                  </div>
                  <div className="d-grid">
                    <button className="btn btn-primary !tw-flex tw-items-center tw-justify-center tw-text-center tw-w-full tw-space-x-2">
                      <span>
                        <FaUserEdit className="tw-w-4 tw-h-4" />
                      </span>
                      <span>Register</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
    </>
  );
};


