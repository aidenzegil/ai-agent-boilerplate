import WebError from "@/app/common/errors/WebError";
import { Result } from "@/app/common/types/result";
import { GET } from "../api/axiosInstance";

interface Dependencies {
  authToken: string | undefined;
}
interface Methods {
  getPing: () => Promise<Result<unknown, WebError>>;
}

type AppController = (deps: Dependencies) => Methods;

export const appController: AppController = ({ authToken }) => ({
  getPing: async (): Promise<Result<unknown, WebError>> => {
    const res = await GET({
      authToken,
      path: "/ping",
      requiresAuth: true,
    });

    return res;
  },
});
