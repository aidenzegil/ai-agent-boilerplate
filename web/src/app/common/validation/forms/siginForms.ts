import type { SuperValidated } from "sveltekit-superforms";
import { z } from "zod";

export const schema = {
  signinWithEmail: z.object({
    email: z.string().email().default("TESTTEST@TEST.com"),
    password: z
      .string()
      .min(8)
      .max(100)
      .default("Test1234"),
  }),
  signinWithLink: z.object({
    email: z.string().email(),
  }),
  signupWithEmail: z.object({
    confirmPassword: z
      .string()
      .min(8)
      .max(100)
      .default("Test1234"),
    displayName: z.string().default("TestUser"),
    email: z.string().email().default("TESTTEST@TEST.com"),
    password: z
      .string()
      // .min(8)
      .max(100)
      .default("Test1234"),
  }),
};

export type SigninForms = {
  signinWithEmail: SuperValidated<typeof schema.signinWithEmail>;
  signinWithLink: SuperValidated<typeof schema.signinWithLink>;
  signupWithEmail: SuperValidated<typeof schema.signupWithEmail>;
};
