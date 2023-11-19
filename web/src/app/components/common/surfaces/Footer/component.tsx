import s from "./styles.module.scss";
import { FooterProps } from "./types";

const Footer = ({ children, visible }: FooterProps) => {
  return (
    // class logic applies the hidden class if visibility is false
    <div className={`${s.container} ${!visible && s.hidden}`}>{children}</div>
  );
};

export default Footer;
