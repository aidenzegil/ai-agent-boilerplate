import { environmentName } from "./getEnvSecret";

const getDomain = (): string => {
  return (() => {
    const environment = environmentName;
    switch (environment) {
      case "prod":
        return "https://wetpages.com";
      case "local":
        return "http://localhost:3000";
      default:
        return `https://${environment}.wetpages.com`;
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
