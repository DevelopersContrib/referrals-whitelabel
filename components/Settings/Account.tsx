'use client';
import Swal from 'sweetalert2'
import React, { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';
import { Button } from "@/components/ui/button";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';





export default function Account()  {  

    const { data: session } = useSession()
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [updating, setUpdating] = useState(false);
   

  const schema = Yup.object().shape({
    name: Yup.string().required('Enter your name.'),
    email: Yup.string().required('Enter your email address.'),
  });

  const handleClick = async (values: any) => {
    setError((prev) => '');
    setUpdating(true);
    
    const updated = await fetch('/api/user/update', {
    method: 'POST',
    body: JSON.stringify({ name:values.name, email:values.email, token:session?.token  }),
    });

    const result = await updated.json();

    console.log(result);
    if (!result.success) {
      setError(result.error);
      setUpdating(false);
    } else {
      setSuccess('You successfully updated your details!');
      setUpdating(false);
     
    }

    
    if (error){
      Swal.fire({
        title: 'Error!',
        text: error,
        icon: 'error',
        confirmButtonText: 'Close'
      })
      setError('');
   }
  }


    if (session) {
        
        return (
          <>
           <Formik
               initialValues={{
                  name: session?.user?.name,
                  email: session?.user?.email,
                 
                }}
              validationSchema={schema}
              onSubmit={(values: any) => {
                setTimeout(() => {
                  handleClick (values);
                }, 500);
              }}
            >
              {(formik) => (
                <Form>
                  <div className="mb-8">
              
      
            </div>
              { success != "" ?
              <div className="mb-4">
              <div
                className="flex w-full rounded-lg border-l-[6px] border-[#34D399] bg-[#34D399] bg-opacity-[15%] px-7 py-8 shadow-md md:p-9"
              >
                <div
                  className="mr-5 flex h-9 w-full max-w-[36px] items-center justify-center rounded-lg bg-[#34D399]"
                >
                  <svg
                    width="16"
                    height="12"
                    viewBox="0 0 16 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.2984 0.826822L15.2868 0.811827L15.2741 0.797751C14.9173 0.401867 14.3238 0.400754 13.9657 0.794406L5.91888 9.45376L2.05667 5.2868C1.69856 4.89287 1.10487 4.89389 0.747996 5.28987C0.417335 5.65675 0.417335 6.22337 0.747996 6.59026L0.747959 6.59029L0.752701 6.59541L4.86742 11.0348C5.14445 11.3405 5.52858 11.5 5.89581 11.5C6.29242 11.5 6.65178 11.3355 6.92401 11.035L15.2162 2.11161C15.5833 1.74452 15.576 1.18615 15.2984 0.826822Z"
                      fill="white"
                      stroke="white"
                    ></path>
                  </svg>
                </div>
                <div className="w-full">
                  <h5 className="mb-3 text-lg font-semibold text-dark">
                    {success}
                  </h5>
                  
                </div>
              </div>
              </div>:null}
              <div className="font-medium leading-relaxed">
               </div>
               <ErrorMessage component="small" className="text-[rgb(220,53,69)]" name="domains" />
                      {error != '' && (
                        <>
                          <small className="text-[rgb(220,53,69)]">{error}</small>
                        </>
                      )}
             
               <div className="mb-4">
               <label htmlFor="" className="mb-3 block text-base font-medium text-black">
                Name
              </label>
               
               <Field
                type="text"
                name="name"
                className="border-[#ddd] text-body-color placeholder-body-color focus:border-primary active:border-primary w-full rounded-lg border-[1.5px] py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]"
                />
                <span className="absolute right-4 top-4">
                          <svg className="fill-current" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.5">
                              <path
                                d="M19.2516 3.30005H2.75156C1.58281 3.30005 0.585938 4.26255 0.585938 5.46567V16.6032C0.585938 17.7719 1.54844 18.7688 2.75156 18.7688H19.2516C20.4203 18.7688 21.4172 17.8063 21.4172 16.6032V5.4313C21.4172 4.26255 20.4203 3.30005 19.2516 3.30005ZM19.2516 4.84692C19.2859 4.84692 19.3203 4.84692 19.3547 4.84692L11.0016 10.2094L2.64844 4.84692C2.68281 4.84692 2.71719 4.84692 2.75156 4.84692H19.2516ZM19.2516 17.1532H2.75156C2.40781 17.1532 2.13281 16.8782 2.13281 16.5344V6.35942L10.1766 11.5157C10.4172 11.6875 10.6922 11.7563 10.9672 11.7563C11.2422 11.7563 11.5172 11.6875 11.7578 11.5157L19.8016 6.35942V16.5688C19.8703 16.9125 19.5953 17.1532 19.2516 17.1532Z"
                                fill=""
                              />
                            </g>
                          </svg>
                        </span>
                        <ErrorMessage component="small" className="text-[rgb(220,53,69)]" name="firstName" />
                </div>
      
              <div className="mb-4">
               <label htmlFor="" className="mb-3 block text-base font-medium text-black">
                Email
              </label>
               
               <Field
                type="text"
                name="email"
                className="border-[#ddd] text-body-color placeholder-body-color focus:border-primary active:border-primary w-full rounded-lg border-[1.5px] py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]"
                />
                <span className="absolute right-4 top-4">
                          <svg className="fill-current" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.5">
                              <path
                                d="M19.2516 3.30005H2.75156C1.58281 3.30005 0.585938 4.26255 0.585938 5.46567V16.6032C0.585938 17.7719 1.54844 18.7688 2.75156 18.7688H19.2516C20.4203 18.7688 21.4172 17.8063 21.4172 16.6032V5.4313C21.4172 4.26255 20.4203 3.30005 19.2516 3.30005ZM19.2516 4.84692C19.2859 4.84692 19.3203 4.84692 19.3547 4.84692L11.0016 10.2094L2.64844 4.84692C2.68281 4.84692 2.71719 4.84692 2.75156 4.84692H19.2516ZM19.2516 17.1532H2.75156C2.40781 17.1532 2.13281 16.8782 2.13281 16.5344V6.35942L10.1766 11.5157C10.4172 11.6875 10.6922 11.7563 10.9672 11.7563C11.2422 11.7563 11.5172 11.6875 11.7578 11.5157L19.8016 6.35942V16.5688C19.8703 16.9125 19.5953 17.1532 19.2516 17.1532Z"
                                fill=""
                              />
                            </g>
                          </svg>
                        </span>
                        <ErrorMessage component="small" className="text-[rgb(220,53,69)]" name="lastName" />
                </div>
                 <button type="submit" className='bg-primary inline-flex items-center justify-center rounded-md py-4 px-10 text-center text-base font-normal text-white hover:bg-opacity-90 lg:px-8 xl:px-10'>{updating ? "Updating..." : "Save Changes"}</button>
                 
                </Form>
              )}
      
            </Formik>
            
          </>
        )
    }
}