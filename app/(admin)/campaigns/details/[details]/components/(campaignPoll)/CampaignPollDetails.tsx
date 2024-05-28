import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  FaFacebookSquare,
  FaGooglePlusSquare,
  FaPinterestSquare,
  FaTwitterSquare,
  FaVoteYea
} from "react-icons/fa";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { FaEnvelope, FaLinkedin, FaUsers } from "react-icons/fa6";
import { Input } from "@/components/ui/input";

const CampaignPollDetails = () => {
  return (
    <>
      <div className="w-full xl:w-3/4">
        <Card className="my-4">
          <CardHeader className="px-7">
            <CardTitle className="text-xl">Best Friend Gender</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Start:: Poll */}
            <div className="hidden">
              <div className="mb-8">
                <RadioGroup defaultValue="comfortable">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="default" id="r1" />
                    <Label htmlFor="r1">Default</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="comfortable" id="r2" />
                    <Label htmlFor="r2">Comfortable</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="compact" id="r3" />
                    <Label htmlFor="r3">Compact</Label>
                  </div>
                </RadioGroup>
              </div>
              <div>
                <Button className="px-8 flex bg-primary hover:bg-primary/90">
                  <span className="mr-2">
                    <FaVoteYea />
                  </span>
                  Vote
                </Button>
              </div>
            </div>

            {/* Start:: Poll Percent */}
            <div className="">
              <Alert className="border-primary !text-primary mb-4">
                <FaVoteYea className="h-6 w-6 !text-primary" />
                <AlertTitle className="!pl-8 text-base">Success!</AlertTitle>
                <AlertDescription className="!pl-8">
                  Thanks for voting, your vote has been recorded.
                </AlertDescription>
              </Alert>
              <div className="flex flex-col w-full space-y-4 mb-8">
                <div className="flex flex-col w-full">
                  <div>Default - (33%)</div>
                  <Progress value={33} />
                </div>
                <div className="flex flex-col w-full">
                  <div>Comfortable - (88%)</div>
                  <Progress value={88} />
                </div>
                <div className="flex flex-col w-full">
                  <div>Compact - (8%)</div>
                  <Progress value={8} />
                </div>
              </div>

              <div className="mb-8 grid grid-cols-1 gap-y-4 lg:gap-y-0 lg:grid-cols-3 lg:gap-x-4 w-3/4 mx-auto">
                <div>
                  <Input placeholder="Enter your name" />
                </div>
                <div>
                  <Input placeholder="Enter your email address" />
                </div>
                <div>
                  <Button className="flex w-full items-center space-x-2">
                    <span>
                      <FaUsers className="h-4 w-4" />
                    </span>
                    <span>Invite Friends</span>
                  </Button>
                </div>
              </div>

              <div className="mb-4 w-full justify-center items-center text-center">
                <ul className="list-none p-0 m-0 space-x-2">
                  <li className="list-none inline-flex">
                    <a
                      target="_blank"
                      href={""}
                      className={buttonVariants({ variant: "outline" })}
                    >
                      <span className="mr-2">
                        <FaGooglePlusSquare />
                      </span>
                      Sign in with Google
                    </a>
                  </li>
                  <li className="list-none inline-flex">
                    <a
                      target="_blank"
                      href={""}
                      className={buttonVariants({ variant: "outline" })}
                    >
                      <span className="mr-2">
                        <FaFacebookSquare />
                      </span>
                      Facebook
                    </a>
                  </li>
                  <li className="list-none inline-flex">
                    <a
                      target="_blank"
                      href={""}
                      className={buttonVariants({ variant: "outline" })}
                    >
                      <span className="mr-2">
                        <FaLinkedin />
                      </span>
                      Linkedin
                    </a>
                  </li>
                  <li className="list-none inline-flex">
                    <a
                      target="_blank"
                      href={""}
                      className={buttonVariants({ variant: "outline" })}
                    >
                      <span className="mr-2">
                        <FaTwitterSquare />
                      </span>
                      Twitter
                    </a>
                  </li>
                  <li className="list-none inline-flex">
                    <a
                      target="_blank"
                      href={""}
                      className={buttonVariants({ variant: "outline" })}
                    >
                      <span className="mr-2">
                        <FaPinterestSquare />
                      </span>
                      Pinterest
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mb-4 mt-8 pt-4 border-t border-[#ddd] border-dashed grid grid-cols-1 lg:grid-cols-6 lg:gap-x-4 lg:gap-y-0 gap-y-4">
                <div className="flex flex-col w-full items-center text-center justify-center">
                  <div className="mb-1">
                    <FaEnvelope className="h-8 w-8" />
                  </div>
                  <div className="font-bold text-2xl">0</div>
                </div>
                <div className="flex flex-col w-full items-center text-center justify-center">
                  <div className="mb-1">
                    <FaFacebookSquare className="h-8 w-8" />
                  </div>
                  <div className="font-bold text-2xl">0</div>
                </div>
                <div className="flex flex-col w-full items-center text-center justify-center">
                  <div className="mb-1">
                    <FaLinkedin className="h-8 w-8" />
                  </div>
                  <div className="font-bold text-2xl">0</div>
                </div>
                <div className="flex flex-col w-full items-center text-center justify-center">
                  <div className="mb-1">
                    <FaTwitterSquare className="h-8 w-8" />
                  </div>
                  <div className="font-bold text-2xl">0</div>
                </div>
                <div className="flex flex-col w-full items-center text-center justify-center">
                  <div className="mb-1">
                    <FaPinterestSquare className="h-8 w-8" />
                  </div>
                  <div className="font-bold text-2xl">0</div>
                </div>
                <div className="flex flex-col w-full items-center text-center justify-center">
                  <div className="mb-1 text-base font-semibold">
                    Rewarded Participants/Value
                  </div>
                  <div className="font-bold text-2xl">13 for $0</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default CampaignPollDetails;
