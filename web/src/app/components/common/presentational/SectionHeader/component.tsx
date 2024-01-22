import React from "react";
import { SectionHeaderProps } from "./types";
import s from "./styles.module.scss";

const SectionHeader = ({ children }: SectionHeaderProps) => {
  return (
    <div className={s.container}>
      <div className={s.fillerLeft}></div>
      <div className={s.text}>{children}</div>
      <div className={s.fillerRight}></div>
    </div>
  );
};

export default SectionHeader;
