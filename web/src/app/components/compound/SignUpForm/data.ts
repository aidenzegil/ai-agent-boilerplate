import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { object, string } from "yup";
import { UseSignUpFormDataParams } from "./types";

export const useSignUpFormData = ({
  form,
  signUp,
  router,
}: UseSignUpFormDataParams) => {
  const errors = form.formState.errors;

  const fireOffForm = async ({
    email,
    password,
    username,
    profilePictureUrl,
  }: {
    email: string;
    password: string;
    username: string;
    profilePictureUrl: string;
  }) => {
    await signUp(email, password, username, profilePictureUrl);
  };

  const onSubmit = async () => {
    try {
      if (!errors.email && !errors.username && !errors.password) {
        await form.handleSubmit(fireOffForm)();
        router.push("/dashboard");
      }
    } catch (e) {
      console.error(e);
      toast("Could not create user, username may be unavailable");
    }
  };

  return { onSubmit, errors };
};

export const formConfig = {
  defaultValues: {
    form: "",
    email: "",
    password: "",
    username: "",
    profilePictureUrl:
      "https://wallpapers.com/images/high/smiley-default-pfp-0ujhadx5fhnhydlb.webp",
  },
  mode: "onChange",
  resolver: yupResolver(
    object({
      email: string().trim().email().required(),
      password: string().trim().required().min(8).max(32),
      username: string().min(6).required().max(32),
      profilePictureUrl: string().required(),
    })
  ),
} as const;
