"use client";
import { useState, useEffect } from "react";
import { FaUserCheck } from "react-icons/fa6";
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
  const [success, setSuccess] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [counter, setCounter] = useState<number>(5);

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
    setIsSubmit(true);
    event.preventDefault();
    const isValid = !Object.values(errors).some((v) => v);
    if (isValid) {
      const response = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify(data)
      })
        .then((response) => {
          console.log('myresponse')
          console.log(response)
          setIsSubmit(false);
          // Handle response here
          setSuccess(true);
          const counterInterval = setInterval(() => {
            setCounter((prev) => {
              if (prev === 1) {
                clearInterval(counterInterval);
                window.location.href = "/login";
               //console.log('response:')
               //console.log(response)
              }

              return prev - 1;
            });
          }, 1000);

          return () => clearInterval(counterInterval);
        })
        .catch((error) => {
          setIsSubmit(false);
          // Handle error here
        });
    } else {
      setErrors({ ...errors, ["validate"]: true });
      setIsSubmit(false);
    }
  };

  return (
    <>
      <main className="min-h-[calc(100vh-56px-32px)] py-8 w-full flex justify-center items-center">
        <Card className="mx-auto max-w-sm">
          {!success ? (
            <>
              <CardHeader>
                <CardTitle className="text-xl">Sign Up</CardTitle>
                <CardDescription>
                  Enter your information to create an account
                </CardDescription>
              </CardHeader>

              <CardContent>
                <form>
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="first-name">First name</Label>
                      <Input
                        id="first-name"
                        name="userName"
                        onChange={handleChange}
                        value={data.userName}
                        placeholder="First name"
                        required
                      />
                      {errors.validate ? (
                        <div className="d-block text-danger small">
                          * {errors.nameError}
                        </div>
                      ) : null}
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
                      {errors.validate ? (
                        <div className="d-block text-danger small">
                          * {errors.emailError}
                        </div>
                      ) : null}
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="password">Password</Label>
                      <Input
                        id="password"
                        name="userPassword"
                        type="password"
                        placeholder="Password"
                        onChange={handleChange}
                        value={data.userPassword}
                        autoComplete="off"
                      />
                      {errors.validate ? (
                        <div className="d-block text-danger small">
                          * {errors.passwordError}
                        </div>
                      ) : null}
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="password">Confirm Password</Label>
                      <Input
                        id="userPasswordConfirm"
                        type="password"
                        name="userPasswordConfirm"
                        placeholder="Password"
                        onChange={handleChange}
                        value={data.userPasswordConfirm}
                        autoComplete="off"
                      />
                      {errors.validate ? (
                        <div className="d-block text-danger small">
                          * {errors.cpasswordError}
                        </div>
                      ) : null}
                    </div>
                    <Button
                      className="w-full"
                      disabled={isSubmit}
                      onClick={handleSubmit}
                    >
                      {isSubmit ? "Creating Account..." : "Create an account"}
                    </Button>
                  </div>
                </form>
                <div className="mt-4 text-center text-sm">
                  Already have an account?{" "}
                  <Link href="/login" className="underline">
                    Log in
                  </Link>
                </div>
              </CardContent>
            </>
          ) : null}
          {success ? (
            <>
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center">
                  <span className="mr-2">
                    <FaUserCheck />
                  </span>{" "}
                  <span>Success!</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-black">
                  <p>
                    Congratulations on signing up! Get ready for a journey
                    towards success!
                  </p>
                  <br />
                  <p className="text-sm">
                    You will be redirected to{" "}
                    <Link href="/login" className="underline">
                      Log in
                    </Link>{" "}
                    in about {counter} secs...
                  </p>
                </div>
              </CardContent>
            </>
          ) : null}
        </Card>
      </main>
    </>
  );
}
