/* eslint-disable @typescript-eslint/naming-convention */
import AuthenticationError from "@/common/errors/AuthenticationError";
import WebError from "@/common/errors/WebError";
import { Err, Ok, Result } from "@/common/types/result";
import type { AxiosError } from "axios";
import axios from "axios";
import { adminLog } from "../../util/deepLog";
import { NEXT_PUBLIC_HACKATHON_AGENT_API } from "../../util/getEnvSecret";
import { Data } from "../types/apiResponse";
import { apiUtils } from "./utils";

const axiosInstance = axios.create({
  baseURL: NEXT_PUBLIC_HACKATHON_AGENT_API,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
  withCredentials: true,
});

type GetParams = {
  authToken?: string;
  path: string;
  queryParams?: Record<string, string>;
  requiresAuth: boolean;
};
export const GET = async <T>({
  authToken,
  path,
  queryParams = {},
  requiresAuth,
}: GetParams): Promise<Result<T, WebError>> => {
  if (requiresAuth) {
    if (!authToken) {
      return Err(
        new AuthenticationError({
          devMessage: "Auth token is missing.",
        })
      );
    }
    // otherwise set the auth header
    axiosInstance.defaults.headers.get["Authorization"] = `Bearer ${authToken}`;
  }

  const queryString = Object.entries(queryParams).reduce((acc, [key, val]) => {
    const prefix = acc ? "&" : "?";
    return `${acc}${prefix}${key}=${val}`;
  }, "");

  const result: Result<T, WebError> = await axiosInstance
    .get<{ data: T }>(`${path}${queryString}`)
    .then(
      (val) => {
        const res = val.data;
        return Ok(res.data);
      },
      (e: AxiosError) => {
        adminLog({ axiosError: e });
        const apiErr = apiUtils.transformAxiosError(e);
        return Err(apiErr);
      }
    );

  return result;
};

type PostParams = {
  authToken?: string;
  body?: Record<string, unknown>;
  path: string;
  queryParams?: Record<string, string>;
  requiresAuth: boolean;
};
export const POST = async <T>({
  authToken,
  body,
  path,
  queryParams = {},
  requiresAuth,
}: PostParams): Promise<Result<T, WebError>> => {
  if (requiresAuth) {
    if (!authToken) {
      return Err(
        new AuthenticationError({
          devMessage: "Auth token is missing.",
        })
      );
    }
    // otherwise set the auth header
    axiosInstance.defaults.headers.post["Authorization"] =
      `Bearer ${authToken}`;
  }

  const queryString = Object.entries(queryParams).reduce((acc, [key, val]) => {
    const prefix = acc ? "&" : "?";
    return `${acc}${prefix}${key}=${val}`;
  }, "");

  const result: Result<T, WebError> = await axiosInstance
    .post<Data<T>>(`${path}${queryString}`, body)
    .then(
      (val) => Ok(val.data.data),
      (e: AxiosError) => {
        adminLog({ axiosError: e });
        const apiErr = apiUtils.transformAxiosError(e);
        return Err(apiErr);
      }
    );

  return result;
};

type PutParams = {
  authToken?: string;
  body?: Record<string, unknown>;
  path: string;
  queryParams?: Record<string, string>;
  requiresAuth: boolean;
};
export const PUT = async <T>({
  authToken,
  body,
  path,
  queryParams = {},
  requiresAuth,
}: PutParams): Promise<Result<T, WebError>> => {
  if (requiresAuth) {
    if (!authToken) {
      return Err(
        new AuthenticationError({
          devMessage: "Auth token is missing.",
        })
      );
    }
    // otherwise set the auth header
    axiosInstance.defaults.headers.post["Authorization"] =
      `Bearer ${authToken}`;
  }

  const queryString = Object.entries(queryParams).reduce((acc, [key, val]) => {
    const prefix = acc ? "&" : "?";
    return `${acc}${prefix}${key}=${val}`;
  }, "");

  const result: Result<T, WebError> = await axiosInstance
    .put<T>(`${path}${queryString}`, body)
    .then(
      (val) => Ok(val.data),
      (e: AxiosError) => {
        adminLog({ axiosError: e });
        const apiErr = apiUtils.transformAxiosError(e);
        return Err(apiErr);
      }
    );

  return result;
};
