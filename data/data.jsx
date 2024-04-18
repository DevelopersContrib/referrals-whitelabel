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
    const url = 'https://api1.contrib.co/v2/referrals/Getwlsettings?key=5c1bde69a9e783c7edc2e603d8b25023' + `&domain=${domain}`;
    const res = await fetch(url);
  
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
  
    return res.json();
}