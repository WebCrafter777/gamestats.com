import { useQuery } from "react-query";
import axios, { AxiosHeaders } from "axios";

export class RestClient {
  static postRequest = (url: string, data: any, key: string, headers?: any) => {
    return useQuery({
      queryKey: [key],
      queryFn: async () => {
        const {data:rdata} = await axios.post(url, data, {
          headers,
        });
        return rdata;
      },
    });
  };
  static getRequest = (url: string, key: string, headers?: any) => {
    return useQuery({
      queryKey: [key],
      queryFn: async () => {
        const {data} = await axios.get(url, {
          headers,
        });
        return data;
      },
    });
  };
}

export class AxiosRequests{
    static postRequest = async(postUrl: string, data: any, headers?: {}) => {
        return axios.post(postUrl, data, {
          headers: headers
        });
      };
    static getRequest = async(postUrl: string, headers?: typeof AxiosHeaders | {},options?:any) => {
        return axios.get(postUrl, {
          headers: headers,
          ...options
        });
      };
    static putRequest = async(url:string,data:any,headers?:any)=>{
      return axios.put(url,data,{
        headers:headers
      })
    }
}