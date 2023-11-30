import React from "react";
import { LeafCardProps } from "./types";
import s from "./styles.module.scss";

const LeafCard = ({ children }: LeafCardProps) => {
  return <div className={s.container}>{children}</div>;
};
export default LeafCard;
