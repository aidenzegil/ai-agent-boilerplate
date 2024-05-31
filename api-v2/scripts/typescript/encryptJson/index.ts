/* eslint-disable @typescript-eslint/require-await */
import { Secret, Token } from "fernet";
import { writeFileSync } from "fs";

import { AnsiBackground, AnsiForeground, deep } from "$util/logging/deepLog";

import input from "./input.json";

const encryptJson = async (): Promise<void> => {
  try {
    const key = process.env.ENCRYPTION_FERNET_KEY;
    if (!key) {
      throw new Error("ENCRYPTION_FERNET_KEY is not defined");
    }
    const secret = new Secret(key);
    const token = new Token({
      secret,
    });
    const encodedString = token.encode(JSON.stringify(input));
    writeFileSync("scripts/typescript/encryptJson/output.dat", encodedString);
    return;
  } catch (error) {
    deep.error(error, AnsiForeground.BLACK, AnsiBackground.WHITE);
    return;
  }
};

const main = async (): Promise<void> => {
  deep.log("====================", AnsiForeground.BRIGHT_GREEN);
  await encryptJson();
  deep.log("====================", AnsiForeground.BRIGHT_GREEN);
};

// eslint-disable-next-line @typescript-eslint/no-floating-promises
main().then(() => {
  process.exit(0);
});
