"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import React from "react";
import { FaUserEdit } from "react-icons/fa";

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
  const routerQuery = useSearchParams();
  const initialValues = {
    userEmail: "",
    userName: "",
    userPassword: "",
    userPasswordConfirm: ""
  };

  const initialErrors = {
    validate: false,
    emailError: "",
    nameError: "",
    passwordError: "",
    cpasswordError: ""
  };

  const [data, setData] = useState(initialValues);
  const [errors, setErrors] = useState(initialErrors);
  useEffect(() => {
    const validateErrors = () => {
      let dataErrors;
      dataErrors = {
        validate: false, // Include validate property
        emailError:
          (data.userEmail ? "" : "Email is required") ||
          (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.userEmail)
            ? ""
            : "Invalid Email"),
        nameError: data.userName ? "" : "Name is required.",
        passwordError: data.userPassword ? "" : "Password is required.",
        cpasswordError:
          (data.userPasswordConfirm ? "" : "Confirm password is required.") ||
          (data.userPassword !== data.userPasswordConfirm
            ? "Confirm password did not match."
            : "")
      };
      setErrors(dataErrors);
    };
    validateErrors();
  }, [data]);

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const isValid = !Object.values(errors).some((v) => v);
    if (isValid) {
    } else {
      setErrors({ ...errors, ["validate"]: true });
    }
  };

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
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Input id="first-name" placeholder="Max" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input id="last-name" placeholder="Robinson" required />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" />
              </div>
              <Button type="submit" className="w-full">
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
