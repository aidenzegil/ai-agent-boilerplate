import React from "react";
import { SectionHeaderProps } from "./types";

const SectionHeader = ({ children }: SectionHeaderProps) => {
  return <div className="divider divider-start mx-10 mt-10">{children}</div>;
};

export default SectionHeader;
