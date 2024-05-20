"use client";
import { useState, useEffect } from "react";
import { ReloadIcon } from "@radix-ui/react-icons";
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
import { signIn } from "next-auth/react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

export default function Login() {
  const initialValues = {
    userEmail: "",
    userPassword: "",
    domain: ""
  };

  const initialErrors = {
    validate: false,
    emailError: "",
    passwordError: ""
  };

  const [data, setData] = useState(initialValues);
  const [errors, setErrors] = useState(initialErrors);
  const [success, setSuccess] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const validateErrors = () => {
      const dataErrors = {
        validate: false,
        emailError:
          (data.userEmail ? "" : "Email is required") ||
          (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.userEmail)
            ? ""
            : "Invalid Email"),
        passwordError: data.userPassword ? "" : "Password is required."
      };
      setErrors(dataErrors);
    };

    if (data.userEmail || data.userPassword) {
      validateErrors();
    }
  }, [data]);

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const isValid = !errors.emailError && !errors.passwordError;

    if (isValid) {
      setIsLoading(true);
      setLoginError(false);
      try {
        const response = await fetch("/api/login", {
          method: "POST",
          body: JSON.stringify(data)
        });

        if (response.ok) {
          setSuccess(true);
          console.log(response);
          await signIn("credentials", {
            redirect: false,
            email: data.userEmail,
            password: data.userPassword,
            domain: data.domain
          });
          window.location.replace("/dashboard");
        } else {
          console.log("login error");
          setLoginError(true);
        }
      } catch (error) {
        console.error("Error during login:", error);
      } finally {
        setIsLoading(false);
      }
    } else {
      setErrors({ ...errors, validate: true });
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-[calc(100vh-56px-32px)] py-8 w-full flex justify-center items-center">
      <Card className="mx-auto max-w-sm">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Login</CardTitle>
          <CardDescription>
            Enter your email and password to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          {loginError && (
            <Alert variant="destructive" className="mb-2 border-destructive">
              <ExclamationTriangleIcon className="h-4 w-4" />
              <AlertTitle className="mb-0">Invalid Login</AlertTitle>
            </Alert>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="Email address"
                required
                type="email"
                name="userEmail"
                onChange={handleChange}
                value={data.userEmail}
              />
              {errors.validate && errors.emailError && (
                <div className="d-block text-danger small mt-2">
                  {errors.emailError}
                </div>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                required
                type="password"
                name="userPassword"
                placeholder="Password"
                onChange={handleChange}
                value={data.userPassword}
              />
              {errors.validate && errors.passwordError && (
                <div className="d-block text-danger small mt-2">
                  {errors.passwordError}
                </div>
              )}
            </div>
            <Button className="w-full" type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <ReloadIcon className="h-4 w-4 mr-1 animate-spin" />
                  Loading...
                </>
              ) : (
                "Login"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
