import axios from "axios";
import { headers } from "next/headers";
import { getServerSession } from "next-auth/next";

export function getDomain() {
  let DOMAIN = process.env.NEXT_PUBLIC_VERCEL_URL;
  const headersList = headers();
  const referrer = headersList.get("host");
  const domainName = referrer.includes("localhost") ? DOMAIN : referrer;
  return domainName.replace("www.", "");
}

export async function Getwlsettings() {
  const domain = getDomain();
  const timestamp = Date.now(); // Get current timestamp
  const url = process.env.API_URL+`brand/get?key=`+process.env.API_KEY+`&domain=${domain}&timestamp=${timestamp}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function Getcampaigns() {
  const domain = getDomain();
  const timestamp = Date.now(); // Get current timestamp
  const url = process.env.API_URL+`campaigns/get?key=`+process.env.API_KEY+`&domain=${domain}&limit=4&timestamp=${timestamp}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function GetcampaignsAll() {
  const domain = getDomain();
  const timestamp = Date.now(); // Get current timestamp
  const url = process.env.API_URL+`campaigns/get?key=`+process.env.API_KEY+`&domain=${domain}&timestamp=${timestamp}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}


export async function GetDeals($category_id='') {
  const domain = getDomain();
  const timestamp = Date.now(); // Get current timestamp
  const url = process.env.API_URL+`deals/get?key=`+process.env.API_KEY+`&domain=${domain}&category_id=${$category_id}&timestamp=${timestamp}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function GetCategories() {
  const domain = getDomain();
  const timestamp = Date.now(); // Get current timestamp
  const url = process.env.API_URL+`category/get?key=`+process.env.API_KEY+`&domain=${domain}&timestamp=${timestamp}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export const getUser = async () => {
  try {
    const session = await getServerSession(options);

    const config = {
      headers: { Authorization: "Bearer " + session?.token },
    };
    const apiUrl =
      process.env.API_URL +
      "user/details?id=" +
      session?.id +
      "&key=" +
      process.env.API_KEY+
      "&domain=" +getDomain();
    const res = await axios.get(apiUrl, config);
    console.log(apiUrl);
    return res.data;
  } catch (error) {
    console.log("Error", error);
  }
};