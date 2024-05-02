"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import React from "react";


import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Register() {
  const initialValues = {
    userEmail: "",
    userName: "",
    userPassword: "",
    userPasswordConfirm: "",
    domain: "whitelabel.referrals.com"
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
        emailError: (data.userEmail ? "" : "Email is required") ||
        (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.userEmail)
          ? ""
          : "Invalid Email"),
        nameError: data.userName ? "" : "Name is required.",
        passwordError: data.userPassword ? "" : "Password is required.",
        cpasswordError:
            (data.userPasswordConfirm ? "" : "Confirm password is required.") ||
            (data.userPassword !== data.userPasswordConfirm
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
      const response = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify(data)
      })
        .then((response) => {
          // Handle response here
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
      <main className="min-h-[calc(100vh-76px-32px)] py-8 w-full flex justify-center items-center">
        <Card className="mx-auto max-w-sm">
          <CardHeader>
            <CardTitle className="text-xl">Sign Up</CardTitle>
            <CardDescription>
              Enter your information to create an account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Input id="first-name" name="userName" onChange={handleChange} value={data.userName} placeholder="First name" required />
                  {errors.validate ? <div className="d-block text-danger small mt-2">{errors.nameError}</div> : null}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="userEmail"
                  onChange={handleChange}
                  value={data.userEmail}
                  placeholder="Email address"
                  required
                />
                {errors.validate ? <div className="d-block text-danger small mt-2">{errors.emailError}</div> : null}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" name="userPassword" type="password" placeholder="Password" onChange={handleChange} value={data.userPassword} />
                {errors.validate ? <div className="d-block text-danger small mt-2">{errors.passwordError}</div> : null}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Confirm Password</Label>
                <Input id="userPasswordConfirm" type="password" name="userPasswordConfirm" placeholder="Password" onChange={handleChange} value={data.userPasswordConfirm} />
                {errors.validate ? <div className="d-block text-danger small mt-2">{errors.cpasswordError}</div> : null}
              </div>
              <Button className="w-full" onClick={handleSubmit}>
                Create an account
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link href="#" className="underline">
                Log in
              </Link>
            </div>
          </CardContent>
        </Card>
      </main>
    </>
  );
}
