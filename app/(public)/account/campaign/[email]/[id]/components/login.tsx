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
    Signin();

    // eslint-disable-next-line
  }, []);
  return (
    <>
      <main>
        <section className="min-h-screen flex flex-col justify-center items-center bg-[#fafafa]">
          <div className="w-full max-w-sm">
            <div className="flex flex-col items-center justify-center">
              <div className="text-center flex text-2xl font-semi text-gray-800/60 items-center justify-center">
                <ReloadIcon className="h-4 w-4 animate-spin mr-2" /> Please wait ...
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default Login;
