import { deep } from "$util/logging/deepLog";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const dotenvx = require("@dotenvx/dotenvx");

export const loadSecrets = (): void => {
  const env = process.env.ENV || "prod";
  const key = `DOTENV_KEY_${env.toUpperCase()}`;

  // eslint-disable-next-line @typescript-eslint/naming-convention, @typescript-eslint/no-unsafe-member-access
  dotenvx.config({ DOTENV_KEY: process.env[key] });

  deep.log(process.env);
};
