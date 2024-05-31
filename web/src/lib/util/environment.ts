import { environmentName } from "./getEnvSecret";

const getDomain = (): string => {
  return (() => {
    const environment = environmentName;
    switch (environment) {
      case "prod":
        return "";
      case "local":
        return "http://localhost:3000";
      default:
        return ``;
    }
  })();
};

const isProduction = (): boolean => {
  return environmentName === "prod";
};

const isLocal = (): boolean => {
  return environmentName === "local";
};

export const environment = {
  getDomain,
  isLocal,
  isProduction,
};
