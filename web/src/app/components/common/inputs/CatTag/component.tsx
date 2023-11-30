import React from "react";
import s from "./styles.module.scss";
import { CatTagProps } from "./types";

const CatTag = ({ name }: CatTagProps) => {
  return <div className={s.container}>{name}</div>;
};

export default CatTag;
