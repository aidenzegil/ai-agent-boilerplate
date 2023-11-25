import React from "react";
import { BannerProps } from "./types";
import s from "./styles.module.scss";
import { IoHeartSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

// BannerProps type includes storyId and chapterId optional props
const BannerSelector = ({ likes, title, author }: BannerProps) => {
  return (
    <div className={s.container}>
      <div className={s.likesCount}>{likes}</div>
      <IoHeartSharp className={s.heartIcon} />
      <div className={s.infoContainer}>
        <div className={s.authorContainer}>
          {/* default profile picture */}
          <CgProfile className={s.authorInfo} />
          {/* JSX.Element prop for passing custom user profile pic */}
          {author}
        </div>

        <div className={s.titleInfo}>{title}</div>
      </div>
    </div>
  );
};

export default BannerSelector;
