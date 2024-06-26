"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { IoDiamondSharp } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { CiBadgeDollar } from "react-icons/ci";
import { Checkbox } from "@/components/ui/checkbox";

export default function DealsComponent({ dealsData, categoryData }: any) {
  const [checkedState, setCheckedState] = useState(
    new Array(categoryData.length).fill(false)
  );

  const [filter, setFilter] = useState("");
  const [dealsDataArray, setDealsData] = useState(dealsData);

  const dealUrl = "https://www.referrals.com/deals/details/";

  const updateFilter = (checkboxValues: boolean[]) => {
    let f: any = [];
    checkboxValues.map((item, index) =>
      item === true ? f.push(categoryData[index].category_id) : f.push(0)
    );
    return f;
  };

  const handleOnChange = async (position: number) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
    const filter = updateFilter(updatedCheckedState).join(",");
    setFilter(filter);

    const updated = await fetch("/api/deals", {
      method: "POST",
      body: JSON.stringify({ category_id: filter })
    });

    const deals = await updated.json();
    const dealsData = deals.data;
    setDealsData(dealsData);
  };

  return (
    <>
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <div className="grid grid-cols-1 md:grid-cols-9 md:gap-4 gap-y-4">
          <div className="col-span-7 grid grid-cols-1 gap-y-4">
            {Array.isArray(dealsDataArray) && dealsDataArray.length > 0 ? (
              dealsDataArray.map((deals) => (
                <a
                  href={dealUrl + deals.id}
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
                          <div className="capitalize">
                            {deals.category_name}
                          </div>
                        </div>
                        <div className="inline-flex text-white bg-[#FF6067] items-center justify-center p-[4px_7px] gap-x-2 rounded-lg text-md">
                          <div>
                            <CiBadgeDollar className="h-6 w-6" />
                          </div>
                          <div className="capitalize">{deals.price}</div>
                        </div>
                      </div>

                      <div className=" flex flex-col gap-y-4">
                        <div className="">
                          <h3>{deals.title}</h3>
                        </div>
                        <div className="text-sm text-black/60" dangerouslySetInnerHTML={{ __html: decodeURIComponent(deals.description) }} />
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
                      {Array.isArray(categoryData) &&
                      categoryData.length > 0 ? (
                        categoryData.map((categories, index) => (
                          <div
                            key={categories.category_id}
                            className="items-center flex space-x-2"
                          >
                            <Checkbox
                              className="border-black shadow-none rounded-[2px] custom-checkbox"
                              id="terms1"
                              value={categories.category_id}
                              checked={checkedState[index]}
                              onClick={() => handleOnChange(index)}
                            />
                            <div className="grid gap-1.5 leading-none">
                              <label
                                htmlFor="terms1"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 capitalize cursor-pointer"
                              >
                                {categories.category_name}
                              </label>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="col-span-8 w-full flex items-center justify-center min-h-[30vh]">
                          <div className="text-3xl text-black/30">
                            No Deals available
                          </div>
                        </div> // Provide a fallback if campaignData is empty or not an array
                      )}
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
