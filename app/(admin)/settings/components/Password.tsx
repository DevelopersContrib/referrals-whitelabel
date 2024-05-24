"use client";
import Swal from "sweetalert2";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ReloadIcon } from "@radix-ui/react-icons";

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
import { FaCheck } from "react-icons/fa6";

export default function Password() {
  const { data: session } = useSession();
  const [error, setError] = useState("");
  const [updating, setUpdating] = useState(false);

  const schema = Yup.object().shape({
    password: Yup.string().required("Enter your password."),
    rePassword: Yup.string()
      .oneOf([Yup.ref('password')], "Passwords must match")
      .required("Please confirm your password."),
  });

  const handleClick = async (values: any) => {
    setError("");
    setUpdating(true);

    const response = await fetch("/api/user/updatepassword", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        password: values.password,
      })
    });

    const result = await response.json();

    console.log(result);
    if (!result.success) {
      setError(result.error);
      setUpdating(false);
    } else {
      Swal.fire({
        title: "Success!",
        text: "You successfully updated your details!",
        icon: "success",
        confirmButtonText: "Close"
      });
      setUpdating(false);
    }

    if (error) {
      Swal.fire({
        title: "Error!",
        text: error,
        icon: "error",
        confirmButtonText: "Close"
      });
      setError("");
    }
  };

  const InputPassword = ({ name, ...props }: any) => {
    return <Input {...props} name={name} type="password" />;
  };

  const InputRepassword = ({ name, ...props }: any) => {
    return <Input {...props} name={name} type="password" />;
  };

  if (session) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Password</CardTitle>
          <CardDescription>Change your password here.</CardDescription>
        </CardHeader>
        <CardContent>
          <Formik
            initialValues={{
              password: '',
              rePassword: ''
            }}
            validationSchema={schema}
            onSubmit={(values: any) => {
              setTimeout(() => {
                handleClick(values);
              }, 500);
            }}
          >
            {(formik) => (
              <Form>
                <div className="mb-4">
                  <Label htmlFor="password">Password</Label>
                  <Field id="password" as={InputPassword} name="password" />
                  <ErrorMessage
                    component="small"
                    className="text-[rgb(220,53,69)]"
                    name="password"
                  />
                </div>

                <div className="mb-4">
                  <Label htmlFor="rePassword">Re Type Password</Label>
                  <Field id="rePassword" as={InputRepassword} name="rePassword" />
                  <ErrorMessage
                    component="small"
                    className="text-[rgb(220,53,69)]"
                    name="rePassword"
                  />
                </div>
                <Button type="submit" disabled={updating}>
                  {updating ? (
                    <>
                      <ReloadIcon className="h-4 w-4 mr-1 animate-spin" />
                      Updating...
                    </>
                  ) : (
                    <>
                      <FaCheck className="h-4 w-4 mr-1" />
                      Save Changes
                    </>
                  )}
                </Button>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    );
  }

  return null; // Handle the case when there is no session
}
