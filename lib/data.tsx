import { User } from "@/types/user";
import axios, { AxiosError } from "axios";
import { options } from "@/lib/options";
import { getServerSession } from "next-auth/next";
import { getDomain } from "../data/data";
interface Error {
  message: string[];
  statusCode: number;
}
export async function GetUserRewards() {
  try{
    const session = await getServerSession(options);
    const domain = getDomain();
    const timestamp = Date.now(); // Get current timestamp
    const url = process.env.API_URL+`user/rewards/get?key=`+process.env.API_KEY+`&userid=${session?.id}&domain=${domain}&token=${session?.token}&timestamp=${timestamp}`;
   
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

export async function GetUserCampartId(campaign_id: string = "") {
  try{
    const session = await getServerSession(options);
    const domain = getDomain();
    const url = process.env.API_URL + 'campaigns/join?key=' + process.env.API_KEY+'&domain='+domain+'&campaign_id='+campaign_id+'&userid='+session?.id;
   
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

export async function GetVoteOptions(id: string = "") {
  try{
    const domain = getDomain();
    const timestamp = Date.now(); // Get current timestamp
    const url = process.env.API_URL+`vote/options/get?key=`+process.env.API_KEY+`&domain=${domain}&campaign_id=${id}&timestamp=${timestamp}`;
   
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
      const apiUrl = "https://api1.contrib.co/wl/user/login?key="+process.env.API_KEY;
      const params = new URLSearchParams();
      params.append('email', credentials.email  as string);
     
      if(credentials.campaign_id!==''){
        params.append('campaign_id', credentials.campaign_id  as string);
      }else{
        params.append('password', credentials.password  as string);
      }
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


export const testuser = async () => {
 
  try {
    const apiUrl = "https://api1.contrib.co/wl/user/login?key="+process.env.API_KEY;
    const params = new URLSearchParams();
    params.append('email', 'sephjavier@gmail.com');
    params.append('campaign_id', '77');
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