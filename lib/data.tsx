import { User } from "@/types/user";
import axios, { AxiosError } from "axios";
import { options } from "@/lib/options";
import { getServerSession } from "next-auth/next";
import { getDomain } from "../data/data";
interface Error {
  message: string[];
  statusCode: number;
}

export async function Getcampaigns(id: string = "") {
  const domain = getDomain();
  const timestamp = Date.now(); // Get current timestamp
  const url = process.env.API_URL+`campaigns/get?key=`+process.env.API_KEY+`&id=${id}&domain=${domain}&limit=4&timestamp=${timestamp}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
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

/*
   try {
    const apiUrl =
      process.env.API_URL +
      "/user/check?api_key=" +
      process.env.API_KEY +
      "&email=" +
      credentials.email;

    const res = await axios.get(apiUrl, { timeout: 4000 });
    const result = res.data;

    if (result.data.success && result.data.error === "") {
      try {
        const apiUrl =
          process.env.API_URL + "/auth/login?api_key=" + process.env.API_KEY;
        const params = new URLSearchParams();

        params.append("email", credentials.email as string);
        params.append("password", credentials.password as string);

        const res = await axios.post(apiUrl, params);

        if (res.data.token) {
          return {
            id: result.data.data.id,
            email: credentials.email,
            name: result.data.data.first_name,
            token: res.data.token,
          };
        }
      } catch (error) {
        console.log("error", error);
      }

      // return user;
    } else {
      console.log("not found");
      try {
        const apiUrl =
          process.env.API_URL + "/user/save?api_key=" + process.env.API_KEY;
        const params = new URLSearchParams();
        params.append("first_name", credentials.firstName as string);
        params.append("last_name", credentials.lastName as string);
        params.append("email", credentials.email as string);
        params.append("password", credentials.password as string);

        const res = await axios.post(apiUrl, params);
        const result = res.data;

        if (result.success) {
          return {
            id: result.user.id,
            email: result.user.email,
            name: result.user.first_name,
            token: result.token,
          };
          // const userId = result.data.user.id;
          // const apiUrl = process.env.API_URL + '/auth/login?api_key=' + process.env.API_KEY;
          // const params = new URLSearchParams();

          // params.append('email', credentials.email as string);
          // params.append('password', credentials.password as string);

          // const res = await axios.post(apiUrl, params);

          // if (res.data.token) {
          //   return {
          //     id: userId,
          //     email: credentials.email,
          //     name: credentials.firstName,
          //     token: res.data.token,
          //   };
          // }
        }
      } catch (error) {
        console.log("error", error);
      }
    }
    
  } catch (error) {
    console.log("error", error);
  }
  */
};
