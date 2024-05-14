"use client";
import { useState, useEffect } from "react";
import React from "react";

import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

export default function Login() {
  const initialValues = {
    userEmail: "",
    userPassword: "",
    domain: "whitelabel.referrals.com"
  }

  const initialErrors = {
    validate: false,
    emailError: "",
    passwordError: ""
  }

  const [data, setData] = useState(initialValues);
  const [errors, setErrors] = useState(initialErrors);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const validateErrors = () => {
      let dataErrors;
      dataErrors = {
        validate: false, // Include validate property
        emailError: (data.userEmail ? "" : "Email is required") ||
        (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.userEmail)
          ? ""
          : "Invalid Email"),
        passwordError: data.userPassword ? "" : "Password is required.",
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
      const response = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify(data)
      })
        .then((response) => {
          // Handle response here
          setSuccess(true);
          // console.log(response);
          if(response.ok){
            //window.location.href = response.url;
            signIn('credentials', {redirect: false, email:data.userEmail,password:data.userPassword,domain:data.domain}).then((result) => {
              //window.location.href = response.url;
              window.location.replace("/dashboard")
        })
          }
          //window.location.href = response.url;
          
        })
        .catch((error) => {
          // Handle error here
        });
    }else{
      setErrors({ ...errors, ["validate"]: true });
    }
  }

  return (
    <>
      <main className="min-h-[calc(100vh-56px-32px)] py-8 w-full flex justify-center items-center">
        <Card className="mx-auto max-w-sm">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Login</CardTitle>
            <CardDescription>
              Enter your email and password to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="Email address"
                  required
                  type="email"
                  name="userEmail"
                  onChange={handleChange} value={data.userEmail}
                />
                {errors.validate ? <div className="d-block text-danger small mt-2">{errors.emailError}</div> : null}
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  required
                  type="password"
                  name="userPassword"
                  placeholder="Password"
                  onChange={handleChange} value={data.userPassword}
                />
                {errors.validate ? <div className="d-block text-danger small mt-2">{errors.passwordError}</div> : null}
              </div>
              <Button className="w-full" onClick={handleSubmit}>
                Login
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </>
  );
};
