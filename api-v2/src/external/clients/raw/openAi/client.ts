import { Injectable } from "@nestjs/common";
import axios, { AxiosInstance } from "axios";
import {
  CreateChatCompletionRequest,
  CreateChatCompletionResponse,
} from "./schema/create_chat_completion";

@Injectable()
export class OpenAIRawClient {
  private axiosInstance: AxiosInstance;

  constructor(url: string, apiKey: string) {
    this.axiosInstance = axios.create({
      baseURL: `${url}`,
      headers: {
        authorization: `Bearer ${apiKey}`,
        "content-type": "application/json",
      },
    });
  }

  async create_chat_completion(params: CreateChatCompletionRequest) {
    return await this.axiosInstance.post<CreateChatCompletionResponse>(
      `/v1/chat/completions`,
      params
    );
  }
}
