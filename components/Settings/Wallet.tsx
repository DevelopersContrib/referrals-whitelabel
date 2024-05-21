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

export default function Wallet() {
    const { data: session } = useSession();
    const [error, setError] = useState("");
    const [updating, setUpdating] = useState(false);
    if (session) {
        return (
            <Card>
                <CardHeader>
                <CardTitle>Wallet Address</CardTitle>
                <CardDescription>
                    Change your wallet address here.
                </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                <div className="space-y-1">
                    <Label htmlFor="current">Wallet Address</Label>
                    <Input id="walletAddress" type="text" />
                </div>
                </CardContent>
                <CardFooter>
                <Button>Save Changes</Button>
                </CardFooter>
          </Card>
        );
    }
}