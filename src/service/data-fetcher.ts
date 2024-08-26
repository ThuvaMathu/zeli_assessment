// src/services/api.ts

import axios, { Method } from "axios";
import { demoGetData } from "./demo_data";

type IFetchData = {
  url: string;
  body?: any;
  method: Method; // "GET" | "POST" | "DELETE" | "PUT" | "PATCH" are included in Method type
};

type IApiResponse = {
  status: string;
  statusCode: number;
  response: any;
};

export const fetchData = async ({
  url,
  body,
  method,
}: IFetchData): Promise<IApiResponse> => {
  const demoResponse = demoGetData;

  return {
    status: "success",
    statusCode: 200,
    response: demoResponse,
  };

  // **since I cant able to fetch data from the API because of origin 'http://localhost:3000' has been blocked by CORS policy I use demo data I got from API**

  // try {
  //   const config = {
  //     method: method,
  //     url: url,
  //     headers: {
  //       Authorization: "", // If we use the Authorization header the we no need call or send from everywhere from application
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //     data: body ? JSON.stringify(body) : undefined,
  //   };

  //   const response = await axios(config);

  //   return {
  //     status: "success",
  //     statusCode: response.status,
  //     response: response,
  //   };
  // } catch (error: any) {
  //   return {
  //     status: "error",
  //     statusCode: error.response?.status || 500,
  //     response: error.response?.data || "An unknown error occurred",
  //   };
  // }
};
