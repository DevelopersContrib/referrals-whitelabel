"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import React from "react";
import { FaUserEdit } from "react-icons/fa";

export default function Register(){
  const routerQuery = useSearchParams();
  const initialValues = {
    email: "",
    name: "",
    password: "",
    cpassword: ""
  }

  const initialErrors = {
    validate: false,
    emailError: "",
    nameError: "",
    passwordError: "",
    cpasswordError: ""
  }

  const [data, setData] = useState(initialValues);
  const [errors, setErrors] = useState(initialErrors);
  useEffect(() => {
    const validateErrors = () => {
      let dataErrors;
      dataErrors = {
        validate: false, // Include validate property
        emailError: (data.email ? "" : "Email is required") ||
        (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)
          ? ""
          : "Invalid Email"),
        nameError: data.name ? "" : "Name is required.",
        passwordError: data.password ? "" : "Password is required.",
        cpasswordError:
            (data.cpassword ? "" : "Confirm password is required.") ||
            (data.password !== data.cpassword
              ? "Confirm password did not match."
              : ""),
      }
      setErrors(dataErrors);
    };
    validateErrors();
  },[data]);

  const handleChange = (e:any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event:any) => {
    event.preventDefault();
    const isValid = !Object.values(errors).some((v) => v);
    if(isValid) {

    }else{
      setErrors({ ...errors, ["validate"]: true });
    }
  }

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
                    <input type="text" name="userEmail" onChange={handleChange} value={data.email} className="form-control" />
                    
                  </div>
                  <div className="tw-mb-4">
                    <label htmlFor="">Your Name</label>
                    <input type="text" name="userName" onChange={handleChange} value={data.name} className="form-control" />
                  </div>
                  <div className="tw-mb-4">
                    <label htmlFor="">Password</label>
                    <input type="password" name="userPassword" onChange={handleChange} value={data.password} className="form-control" />
                  </div>
                  <div className="tw-mb-4">
                    <label htmlFor="">Confirm Password</label>
                    <input type="password" name="userPasswordConfirm" onChange={handleChange} value={data.cpassword} className="form-control" />
                  </div>
                  <div className="d-grid">
                    <button className="btn btn-primary !tw-flex tw-items-center tw-justify-center tw-text-center tw-w-full tw-space-x-2" onClick={handleSubmit}>
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


