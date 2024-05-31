import {
  getEnvironmentName,
  getStackName,
} from "$util/environment/getEnvSecret";

const getDomain = (): string => {
  return (() => {
    const environment = getEnvironmentName();
    switch (environment) {
      case "prod":
        return "https://production.com/api";
      case "local":
        return "http://localhost:3000";
      default:
        return `https://${environment}.production.com/api`;
    }
  })();
};

export const isProduction = (): boolean => {
  return getEnvironmentName() === "prod";
};

const isLocal = (): boolean => {
  return getEnvironmentName() === "local";
};

export const environment = {
  getDomain,
  isLocal,
  isProduction,
  name: getEnvironmentName(),
  stack: getStackName(),
};
