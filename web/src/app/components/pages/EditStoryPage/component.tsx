"use client";

import React from "react";
import { FIELDS } from "./types";
import NavBar from "../../compound/NavBar";

import EditStoryForm from "../../compound/EditStoryForm";

const Component = ({}: FIELDS) => {
  return (
    <div>
      <NavBar />
      <EditStoryForm />
    </div>
  );
};

export default Component;
