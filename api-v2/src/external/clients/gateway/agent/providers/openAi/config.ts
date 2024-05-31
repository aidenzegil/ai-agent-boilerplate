import { getEnvSecret } from "$util/environment/getEnvSecret";

export const OPEN_AI_URL = getEnvSecret("OPEN_AI_URL")();
export const OPEN_AI_API_KEY = getEnvSecret("OPEN_AI_API_KEY")();
