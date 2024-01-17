"use client";

import React from "react";
import NavBar from "../../compound/NavBar";
import SectionHeader from "../../common/presentational/SectionHeader/component";
import BannerSelector from "../../common/dataDisplay/BannerSelector/component";
import { ProfilePageFields } from "./types";
import s from "./styles.module.scss";

const Component = ({
  active,
  onClick,
  title,
  profilePictureUrl,
  username,
}: ProfilePageFields) => {
  return (
    <div>
      <NavBar />
      <div className={s.userProfileContainer}>
        <img src={profilePictureUrl || undefined} className={s.userProfile} />
        <div className={s.username}>{username}</div>
      </div>
      <SectionHeader children="Continue Stories" />
      <BannerSelector
        likes={333}
        title={title}
        onClick={onClick}
        active={active}
      />
      <SectionHeader children="Liked Stories" />
      <BannerSelector
        likes={333}
        title={title}
        onClick={onClick}
        active={active}
      />
    </div>
  );
};

export default Component;
