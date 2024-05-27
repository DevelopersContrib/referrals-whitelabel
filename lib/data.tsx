import { User } from "@/types/user";
import axios, { AxiosError } from "axios";
import { options } from "@/lib/options";
import { getServerSession } from "next-auth/next";
import { getDomain } from "../data/data";
interface Error {
  message: string[];
  statusCode: number;
}

export async function GetUsercampaigns() {
  try{
    const session = await getServerSession(options);
    const domain = getDomain();
    const timestamp = Date.now(); // Get current timestamp
    const url = process.env.API_URL+`user/campaigns/get?key=`+process.env.API_KEY+`&domain=${domain}&token=${session?.token}&timestamp=${timestamp}`;
   
    const res = await fetch(url);
    if (!res.ok) {
      return {'error':true}
    }
    
    return res.json();
  } catch (err) {
    const error = err as AxiosError<Error>;
    return  {'error':true,'message':error.response?.data.message};
  }  
}

export async function Getcampaigns(id: string = "") {
  try{
    const domain = getDomain();
    const timestamp = Date.now(); // Get current timestamp
    const url = process.env.API_URL+`campaigns/get?key=`+process.env.API_KEY+`&id=${id}&domain=${domain}&limit=4&timestamp=${timestamp}`;
  
    const res = await fetch(url);
    if (!res.ok) {
      return {'error':true}
    }
    
    // const text = await res.text();
    // if(text==""){
    //   return {'error':true}
    // }

    return res.json();
  } catch (err) {
    const error = err as AxiosError<Error>;
    return  {'error':true,'message':error.response?.data.message};
  }  
}

export async function Getsocialurls(id: string = "") {
  try{
    const domain = getDomain();
    const timestamp = Date.now(); // Get current timestamp
    const url = process.env.API_URL+`campaigns/Getsocialurls?key=`+process.env.API_KEY+`&campaign_id=${id}&domain=${domain}&timestamp=${timestamp}`;
  
    const res = await fetch(url);
    if (!res.ok) {
      return {'error':true}
    }
    
    return res.json();
  } catch (err) {
    const error = err as AxiosError<Error>;
    return  {'error':true,'message':error.response?.data.message};
  }  
}

export async function GetSocialClick(id: number = 0, campaign_id: string="") {
  try{
    const session = await getServerSession(options);
    const user_id = session?.id;
    const domain = getDomain();
    const timestamp = Date.now(); // Get current timestamp
    const url = process.env.API_URL+`campaigns/getclicks?key=`+process.env.API_KEY+`&social_id=${id}&domain=${domain}&campaign_id=${campaign_id}&userid=${user_id}&timestamp=${timestamp}`;
 
    const res = await fetch(url);
    if (!res.ok) {
      return {'error':true}
    }
    
    return res.json();
  } catch (err) {
    const error = err as AxiosError<Error>;
    return  {'error':true,'message':error.response?.data.message};
  }  
}

export async function GetRewardText(id: number = 0) {
  try{
    const session = await getServerSession(options);
    const user_id = session?.id;
    const domain = getDomain();
    const timestamp = Date.now(); // Get current timestamp
    const url = process.env.API_URL+`campaigns/Rewardtext?key=`+process.env.API_KEY+`&campaign_id=${id}&domain=${domain}&timestamp=${timestamp}`;
    
    const res = await fetch(url);
    if (!res.ok) {
      return {'error':true}
    }
    
    return res.json();
  } catch (err) {
    const error = err as AxiosError<Error>;
    return  {'error':true,'message':error.response?.data.message};
  }  
}

export const checkEmail = async (email: string) => {
  try {
    const urlCheck =
      "https://api.dntrademark.com/api/v1/user/check?api_key=6334aed4bdce9855f400653800596920&email=" +
      email;

    const result = await axios.get(urlCheck, { timeout: 4000 });
    //console.log(result.data.data.data.id)
    return result.data.data.data.id
      ? { isEmailAvailable: false }
      : { isEmailAvailable: true };
    // return { isEmailAvailable: false }
  } catch (error) {
    console.log("Error", error);
  }
};

export const getUser = async () => {
  try {
    const session = await getServerSession(options);

    const config = {
      headers: { Authorization: "Bearer " + session?.token },
    };
    const apiUrl =
      process.env.API_URL +
      "/user/" +
      session?.id +
      "?api_key=" +
      process.env.API_KEY;
    const res = await axios.get(apiUrl, config);

    return res.data.user;
  } catch (error) {
    console.log("Error", error);
  }
};

export const loginUser = async (data: User) => {
  try {
    const res = await fetch("/api/auth/signin", {
      method: "POST",
    });
  } catch (error) {
    console.log("Error", error);
  }
};

export const saveUser = async (values: User) => {
  try {
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify(values),
    });

    const result = await res.json();

    if (result.data.id) {
      return { id: result.data.id, name: values.firstName };
    }
  } catch (error) {
    console.log("Error", error);
  }
};

export const invite = async () => {
  try {
    const res = await fetch('/api/deals', {
      method: 'POST',
      body: JSON.stringify({ domains: 'domains.com' })
    });
    return res.json();
  } catch (error) {
    return error;
  }
};

export const authorizeUser = async (credentials: User) => {
 
    try {
      const apiUrl = "https://api1.contrib.co/wl/user/login?key=5c1bde69a9e783c7edc2e603d8b25023";
      const params = new URLSearchParams();
      params.append('email', credentials.email  as string);
      params.append('password', credentials.password  as string);
      params.append('domain', getDomain());
  
      const res = await axios.post(apiUrl, params);
      const result = res.data;

      
      
      return {
        id: result.data.userid,
        email: result.data.email,
        name: result.data.name,
        token: result.data.token,
      };
  
    } catch (error) {
      console.log("error", error);
    }

};
