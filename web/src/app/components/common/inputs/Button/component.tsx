import { ButtonProps, ButtonSize, ButtonVariant } from "./types";
import s from "./styles.module.scss";
import classNames from "classnames";

const Button = ({
  size,
  variant,
  children,
  onClick,
  className,
  ...otherProps
}: ButtonProps) => {
  const sizeClassName = (() => {
    switch (size) {
      case ButtonSize.LARGE:
        return s.large;
      case ButtonSize.MEDIUM:
        return s.medium;
      case ButtonSize.SMALL:
        return s.small;
      default:
        return s.medium;
    }
  })();

  const variantClassName = (() => {
    switch (variant) {
      case ButtonVariant.PRIMARY_FILLED:
        return s.primaryFilled;
      case ButtonVariant.PRIMARY_OUTLINED:
        return s.primaryOutlined;
      case ButtonVariant.SUDO_LINK:
        return s.sudoLink;
      default:
        return s.primaryFilled;
    }
  })();

  return (
    <button
      className={classNames(s.base, sizeClassName, variantClassName, className)}
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
