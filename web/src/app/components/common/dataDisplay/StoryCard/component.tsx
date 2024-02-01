import React from "react";
import { StoryCardProps } from "./types";
import s from "./styles.module.scss";
import { IoHeartSharp } from "react-icons/io5";

const StoryCard = ({ likes, title, onClick }: StoryCardProps) => {
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
  );
};

export default StoryCard;
