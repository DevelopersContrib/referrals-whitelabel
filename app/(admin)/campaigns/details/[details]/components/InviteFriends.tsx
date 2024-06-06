"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaUsers } from "react-icons/fa6";
import { ReloadIcon } from "@radix-ui/react-icons";
import { campaign } from "@/types/campaign";
import { useState, useEffect } from "react";

interface props {
  detail: campaign;
  domain: string;
}
const InviteFriends = ({ detail, domain }: props) => {
  const initialValues = {
    email: "",
    name: "",
    domain: domain,
    campaign_id: detail.id
  };

  const initialErrors = {
    validate: false,
    emailError: "",
    nameError: ""
  };
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState(initialValues);
  const [errors, setErrors] = useState(initialErrors);
  const [success, setSuccess] = useState(false);
  const [inviteError, setInviteError] = useState(false);
  const [inviteErrorMsg, setInviteErrorMsg] = useState("");

  useEffect(() => {
    const validateErrors = () => {
      let dataErrors;
      dataErrors = {
        validate: false, // Include validate property
        emailError:
          (data.email ? "" : "Email is required") ||
          (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)
            ? ""
            : "Invalid Email"),
        nameError: data.name ? "" : "Name is required."
      };
      setErrors(dataErrors);
    };
    validateErrors();
  }, [data]);

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const Invite = async () => {
    const isValid = !Object.values(errors).some((v) => v);

    if (isValid) {
      setIsLoading(true);
      const res = await fetch("/api/invite/", {
        method: "POST",
        body: JSON.stringify(data)
      });
      const ret = await res.json();
      setIsLoading(false);
      if (!ret.success) {
        setInviteError(true);
        setInviteErrorMsg(ret.data.error_message);
      } else {
        setSuccess(true);
        setData(initialValues);
      }
    } else {
      setErrors({ ...errors, ["validate"]: true });
    }
  };

  return (
    <>
        <div>
            <Input
                name="email"
                onChange={handleChange}
                value={data.email}
                placeholder="Enter your email address"
            />
            {errors.validate ? (
                <div className="d-block text-danger small mt-2">
                {errors.emailError}
                </div>
            ) : null}
            </div>
            <div>
            <Input
                name="name"
                onChange={handleChange}
                value={data.name}
                placeholder="Enter your Name"
            />
            {errors.validate ? (
                <div className="d-block text-danger small mt-2">
                {errors.nameError}
                </div>
            ) : null}
            </div>
            <div>
            <Button
                onClick={() => Invite()}
                className="flex w-full items-center space-x-2"
            >
                {isLoading ? (
                <ReloadIcon className="h-4 w-4 mr-1 animate-spin" />
                ) : (
                <span>
                    <FaUsers className="h-4 w-4" />
                </span>
                )}
                <span>Invite Friends</span>
            </Button>
            {inviteError && <span>{inviteErrorMsg}</span>}
            {success && <span>Invitation sent successfully!</span>}
        </div>
    </>
  );
};

export default InviteFriends;
