import HeartIcon from "@/app/components/common/presentational/iconFactory/HeartIcon/component";
import LeftArrowIcon from "@/app/components/common/presentational/iconFactory/LeftArrowIcon/component";
import RightArrowIcon from "@/app/components/common/presentational/iconFactory/RightArrowIcon/component";
import s from "./styles.module.scss";
import { FooterProps } from "./types";

const Footer = ({ visible }: FooterProps) => {
  return (
    // class logic applies the hidden class if visibility is false

    <div className={`${s.bottomNav} ${!visible && s.hidden} btm-nav`}>
      <button>
        <LeftArrowIcon className={s.arrows} />
      </button>
      <button className="active">
        <HeartIcon className={s.heart} />
      </button>
      <button>
        <RightArrowIcon className={s.arrows} />
      </button>
    </div>
  );
};

export default Footer;
