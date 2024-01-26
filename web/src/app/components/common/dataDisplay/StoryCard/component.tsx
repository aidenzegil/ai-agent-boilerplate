import React from "react";
import { StoryCardProps } from "./types";
import s from "./styles.module.scss";
import { IoHeartSharp } from "react-icons/io5";
import Button from "../../inputs/Button/component";

const StoryCard = ({
  likes,
  title,
  active,
  authorPicUrl,
  onClick,
}: StoryCardProps) => {
  return (
    <div className="card w-96 bg-primary shadow-xl">
      <div className="card-body ">
        <h2 className="card-title ">{title}</h2>
        <p className={s.likes}>
          <IoHeartSharp className={s.heartIcon} />
          {likes}
        </p>
        <div className="card-actions justify-end">
          <button className="btn" onClick={onClick}>
            Read
          </button>
        </div>
      </div>
    </div>

    // <div className={`${s.container} ${active && s.activeContainer}`}>
    //   <div className={s.likesCount}>{likes}</div>
    //   <IoHeartSharp className={s.heartIcon} />
    //   <div className={s.infoContainer} onClick={onClick}>
    //     <div className={s.authorContainer}>
    //       <img
    //         src={authorPicUrl}
    //         alt="Author Profile Picture"
    //         className={s.authorPic}
    //       />
    //     </div>

    //     <h1 className={s.titleInfo}>{title}</h1>
    //   </div>
    // </div>
  );
};

export default StoryCard;
