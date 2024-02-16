import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
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
    console.log(profilePictureUrl);

    await signUp(email, password, username, profilePictureUrl);
  };

  const onSubmit = async () => {
    try {
      await form.handleSubmit(fireOffForm)();
      router.push("/dashboard");
    } catch (e) {
      console.error(e);
      toast("Could not create user");
    }
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
      "https://wallpapers.com/images/high/smiley-default-pfp-0ujhadx5fhnhydlb.webp",
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
