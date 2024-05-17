"use client";
import Swal from "sweetalert2";
import React, { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ReloadIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaCheck } from "react-icons/fa6";

export default function Account() {
  const { data: session } = useSession();
  const [error, setError] = useState("");
  const [updating, setUpdating] = useState(false);

  const schema = Yup.object().shape({
    name: Yup.string().required("Enter your name."),
    email: Yup.string().required("Enter your email address.")
  });

  const handleClick = async (values: any) => {
    setError((prev) => "");
    setUpdating(true);

    const updated = await fetch("/api/user/update", {
      method: "POST",
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        token: session?.token
      })
    });

    const result = await updated.json();

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

  const InputName = ({ name, ...props }: any) => {
    return <Input {...props} name={name} type="text" />;
  };

  const InputEmail = ({ name, ...props }: any) => {
    return <Input {...props} name={name} type="text" disabled />;
  };

  if (session) {
    return (
      <>
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>Edit your account details here.</CardDescription>
          </CardHeader>
          <CardContent>
            <Formik
              initialValues={{
                name: session?.user?.name,
                email: session?.user?.email
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
                    <Label htmlFor="name">Name</Label>
                    <Field id="name" as={InputName} name="name" />
                    <ErrorMessage
                      component="small"
                      className="text-[rgb(220,53,69)]"
                      name="name"
                    />
                  </div>

                  <div className="mb-4">
                    <Label htmlFor="email">Email</Label>
                    <Field id="email" as={InputEmail} name="email" />
                    <ErrorMessage
                      component="small"
                      className="text-[rgb(220,53,69)]"
                      name="lastName"
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
      </>
    );
  }
}
