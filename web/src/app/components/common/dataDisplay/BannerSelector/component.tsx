import React from "react";
import { BannerProps } from "./types";
import s from "./styles.module.scss";
import { IoHeartSharp } from "react-icons/io5";

// BannerProps type includes storyId and chapterId optional props
const BannerSelector = ({
  likes,
  title,
  authorPic,
  storyId,
  chapterId,
}: BannerProps) => {
  return (
    <div className={s.container}>
      <div className={s.likesCount}>{likes}</div>
      <IoHeartSharp className={s.heartIcon} />
      <div className={s.infoContainer}>
        <div className={s.authorContainer}>
          <img
            src={authorPic}
            alt="Author Profile Picture"
            className={s.authorPic}
          />
        </div>

        <div className={s.titleInfo}>{title}</div>
      </div>
    </div>
  );
};

export default BannerSelector;
