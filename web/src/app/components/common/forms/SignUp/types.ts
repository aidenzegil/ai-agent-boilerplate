export interface SignUpProps extends React.ComponentPropsWithRef<"form"> {
  clearErrors?: (name?: "form") => void;
  errors?: { [N: "form" | string]: { message?: string } | undefined };
}
