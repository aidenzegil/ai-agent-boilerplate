import s from "./styles.module.scss";
import { FooterProps } from "./types";

const Footer = ({ visible }: FooterProps) => {
  return (
    // class logic applies the hidden class if visibility is false

    <div className={`${s.bottomNav} ${!visible && s.hidden} btm-nav`}>
      <button>
        <svg
          width="800px"
          height="800px"
          viewBox="0 0 1024 1024"
          className={s.arrows}
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z"
            fill="currentColor"
          />
        </svg>
      </button>
      <button className="active">
        <svg
          id="heart"
          width="800px"
          height="800px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={s.heart}
        >
          <path
            d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"
            fill="currentColor"
          />
        </svg>
      </button>
      <button>
        <svg
          width="800px"
          height="800px"
          viewBox="0 0 1024 1024"
          className={s.arrows}
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
  );
};

export default Footer;
