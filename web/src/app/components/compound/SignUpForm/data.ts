import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import { UseSignUpFormDataParams } from "./types";

export const useSignUpFormData = ({
  form,
  signUp,
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
    console.log(profilePictureUrl);

    await signUp(email, password, profilePictureUrl, username);
  };

  const onSubmit = async () => {
    await form.handleSubmit(fireOffForm)();
  };

  return { onSubmit, errors };
};

/* NOTE: config should include form: "". However, currently it works without it */
export const formConfig = {
  defaultValues: {
    form: "",
    email: "",
    password: "",
    username: "",
    profilePictureUrl:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapers.com%2Fwallpapers%2Fsmiley-default-pfp-0ujhadx5fhnhydlb.html&psig=AOvVaw28A4SEZBKsqGTcQHeuLRIP&ust=1707504793699000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPCv4Zm1nIQDFQAAAAAdAAAAABAD",
  },
  mode: "onChange",
  resolver: yupResolver(
    object({
      email: string().trim().email().required(),
      password: string().trim().required().min(8),
      username: string().min(6).required(),
      profilePictureUrl: string().required(),
    })
  ),
} as const;
