"use client";
import { ReloadIcon, CaretSortIcon } from "@radix-ui/react-icons";
import { useEffect } from "react";
import { signIn } from "next-auth/react";
interface Props {
    campaign_id: string;
    email: string;
  }
const Login = ({ campaign_id, email }: Props) => {
    useEffect(() => {
        async function Signin() {
            await signIn("credentials", {
                redirect: false,
                email: email,
                campaign_id: campaign_id
              });
              window.location.replace("/dashboard");
          }
        Signin()

        
        // eslint-disable-next-line
      },[]);
    return (
      <>
        <br></br>
        <ReloadIcon className="h-4 w-4 animate-spin mr-2" /> Redirecting 
      </>
      )
    }
export default Login;