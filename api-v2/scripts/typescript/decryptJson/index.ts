/* eslint-disable @typescript-eslint/require-await */
import { Secret, Token } from "fernet";
import { readFileSync, writeFileSync } from "fs";

import { AnsiBackground, AnsiForeground, deep } from "$util/logging/deepLog";

const decryptJson = async (): Promise<void> => {
  try {
    const key = process.env.ENCRYPTION_FERNET_KEY;
    if (!key) {
      throw new Error("ENCRYPTION_FERNET_KEY is not defined");
    }
    const encodedString = readFileSync(
      "scripts/typescript/decryptJson/input.dat"
    ).toString();
    const secret = new Secret(key);
    const token = new Token({
      secret,
      token: encodedString,
      ttl: 0,
    });
    const decodedString = token.decode();
    writeFileSync("scripts/typescript/decryptJson/output.json", decodedString);
    return;
  } catch (error) {
    deep.error(error, AnsiForeground.BLACK, AnsiBackground.WHITE);
    return;
  }
};

const main = async (): Promise<void> => {
  deep.log("====================", AnsiForeground.BRIGHT_GREEN);
  await decryptJson();
  deep.log("====================", AnsiForeground.BRIGHT_GREEN);
};

// eslint-disable-next-line @typescript-eslint/no-floating-promises
main().then(() => {
  process.exit(0);
});
