import React, { useState } from "react";
import DealsComponent from "@/app/(admin)/deals/components/DealsComponent";
import { GetDeals, GetCategories } from "../../../data/data";
const Deals = async () => {
  const categories = await GetCategories();
  const deals = await GetDeals();
  const categoryData = categories.data;
  const dealsData = deals.data;

  return (
    <>
      <DealsComponent dealsData={dealsData} categoryData={categoryData} />
    </>
  );
};

export default Deals;
