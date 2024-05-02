import axios from "axios";
import { headers } from "next/headers";

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
  const url = `https://api1.contrib.co/wl/brand/get?key=5c1bde69a9e783c7edc2e603d8b25023&domain=${domain}&timestamp=${timestamp}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function Getcampaigns() {
  const domain = getDomain();
  const timestamp = Date.now(); // Get current timestamp
  const url = `https://api1.contrib.co/wl/campaigns/get?key=5c1bde69a9e783c7edc2e603d8b25023&domain=${domain}&limit=4&timestamp=${timestamp}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}