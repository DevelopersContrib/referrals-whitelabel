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
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaCheck } from "react-icons/fa6";

export default function Wallet(userData:any) {
  const { data: session } = useSession();
  const [error, setError] = useState("");
  const [updating, setUpdating] = useState(false);

  const schema = Yup.object().shape({
    wallet_address: Yup.string().required("Enter your wallet address."),
  });

  const handleClick = async (values: any) => {
    setError("");
    setUpdating(true);

    const response = await fetch("/api/user/updatewalletaddress", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        wallet_address: values.wallet_address,
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
        text: "You successfully updated your wallet address!",
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

  const InputWalletaddress = ({ name, ...props }: any) => {
    return <Input {...props} name={name} type="text" />;
  };


  if (session) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Wallet Address</CardTitle>
        </CardHeader>
        <CardContent>
          <Formik
            initialValues={{
                wallet_address: userData.wallet_address
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
                  <Label htmlFor="password">Wallet Address</Label>
                  <Field id="wallet_address" as={InputWalletaddress} name="wallet_address" />
                  <ErrorMessage
                    component="small"
                    className="text-[rgb(220,53,69)]"
                    name="wallet_address"
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
