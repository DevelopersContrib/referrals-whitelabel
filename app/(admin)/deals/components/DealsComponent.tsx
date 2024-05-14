import Image from "next/image";
import { IoDiamondSharp } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { CiBadgeDollar } from "react-icons/ci";
import { Checkbox } from "@/components/ui/checkbox";
import { GetDeals } from "../../../../data/data";

export default async function DealsComponent() {
  const deals = await GetDeals();
  const dealsData = deals.data;
  console.log(dealsData.length);
  console.log(dealsData);
  return (
    <>
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <div className="grid grid-cols-1 md:grid-cols-9 md:gap-4 gap-y-4">
          <div className="col-span-7 grid grid-cols-1 gap-y-4">
            {Array.isArray(dealsData) && dealsData.length > 0 ? (
              dealsData.map((deals) => (
                <a
                  href={deals.url}
                  className="border border-solid border-[hsl(0_0%_0%/0.05)!important] p-4 rounded-xl flex flex-col gap-y-4 hover:translate-y-[-5px] hover:transition-all hover:duration-300 hover:scale-[1.02] hover:shadow-[rgba(149,157,165,0.2)_0px_8px_24px] transition-all duration-200"
                  key={deals.id}
                >
                  <div className="w-full grid grid-cols-1 gap-y-4 lg:grid-cols-8 lg:gap-x-4">
                    <div className="col-span-2 flex w-full">
                      <div className="bg-[#f2f2ff7a] p-4 rounded-lg w-full flex items-center justify-center">
                        <Image
                          src={deals.banner}
                          width={0}
                          height={0}
                          alt=""
                          className="img-fluid h-auto max-h-[110px] object-contain w-full"
                          sizes="100vw"
                        />
                      </div>
                    </div>
                    <div className="col-span-6 flex flex-col gap-y-4">
                      <div className="justify-end flex items-center gap-x-2">
                        <div className="inline-flex bg-[#ffd50033] items-center justify-center p-[4px_7px] gap-x-2 rounded-lg text-md">
                          <div>
                            <IoDiamondSharp />
                          </div>
                          <div className="capitalize">category</div>
                        </div>
                        <div className="inline-flex text-white bg-[#FF6067] items-center justify-center p-[4px_7px] gap-x-2 rounded-lg text-md">
                          <div>
                            <CiBadgeDollar className="h-6 w-6" />
                          </div>
                          <div className="capitalize">19.00</div>
                        </div>
                      </div>

                      <div className=" flex flex-col gap-y-4">
                        <div className="">
                          <h3>{deals.title}</h3>
                        </div>
                        <div className="text-sm text-black/60">
                          <p>{deals.description}</p>
                        </div>
                        <div>
                          <div className="rounded-lg py-2 px-4 bg-primary text-white text-center w-full capitalize flex items-center justify-center">
                            <div className="mr-1">
                              <IoIosSearch className="h-6 w-6" />
                            </div>
                            <div>view deal</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              ))
            ) : (
              <div className="col-span-8 w-full flex items-center justify-center min-h-[30vh]">
                <div className="text-3xl text-black/30">No Deals available</div>
              </div> // Provide a fallback if campaignData is empty or not an array
            )}
          </div>
          <div className="col-span-2">
            <div className="border border-solid border-[hsl(0_0%_0%/0.05)!important] rounded-lg w-full">
              {/* Start::List of Filter */}
              <div className="filter-list-item">
                <div className="border-l border-r border-solid rounded-lg border-[hsl(0_0%_0%/0.05)!important] w-full">
                  <div className="p-6 flex flex-col gap-5">
                    <h6 className="font-bold text-xl relative title-filter capitalize">
                      categories
                    </h6>
                    <div className="flex flex-col w-full gap-2">
                      <div className="items-center flex space-x-2">
                        <Checkbox
                          className="border-black shadow-none rounded-[2px] custom-checkbox"
                          id="terms1"
                        />
                        <div className="grid gap-1.5 leading-none">
                          <label
                            htmlFor="terms1"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 capitalize cursor-pointer"
                          >
                            Tech treats
                          </label>
                        </div>
                      </div>
                      <div className="items-center flex space-x-2">
                        <Checkbox
                          className="border-black shadow-none rounded-[2px] custom-checkbox"
                          id="terms2"
                        />
                        <div className="grid gap-1.5 leading-none">
                          <label
                            htmlFor="terms2"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 capitalize cursor-pointer"
                          >
                            fashion finds
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End::List of Filter */}
              {/* Start::List of Filter */}
              <div className="filter-list-item">
                <div className="border-l border-r border-solid rounded-lg border-[hsl(0_0%_0%/0.05)!important] w-full">
                  <div className="p-6 flex flex-col gap-5">
                    <h6 className="font-bold text-xl relative title-filter capitalize">
                      categories
                    </h6>
                    <div className="flex flex-col w-full gap-2">
                      <div className="items-center flex space-x-2">
                        <Checkbox
                          className="border-black shadow-none rounded-[2px] custom-checkbox"
                          id="terms3"
                        />
                        <div className="grid gap-1.5 leading-none">
                          <label
                            htmlFor="terms3"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 capitalize cursor-pointer"
                          >
                            Tech treats
                          </label>
                        </div>
                      </div>
                      <div className="items-center flex space-x-2">
                        <Checkbox
                          className="border-black shadow-none rounded-[2px] custom-checkbox"
                          id="terms4"
                        />
                        <div className="grid gap-1.5 leading-none">
                          <label
                            htmlFor="terms4"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 capitalize cursor-pointer"
                          >
                            fashion finds
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End::List of Filter */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
