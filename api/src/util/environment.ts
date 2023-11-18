const getEnvironmentName = () => {
  const environmentName = process.env.ENV;
  if (environmentName === undefined) {
    throw new Error("Environment name cannot be undefined: process.env");
  }
  return environmentName;
};

const isProduction = () => {
  return getEnvironmentName() === "prod";
};

const isLocal = () => {
  return getEnvironmentName() === "local";
};

export const environment = {
  name: getEnvironmentName(),
  isProduction,
  isLocal,
};
