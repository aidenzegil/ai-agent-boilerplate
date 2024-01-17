"use client";
import React, { useState } from "react";
import Component from "./component";

const ProfilePage = () => {
  const [active, setActive] = useState(false);
  const toggleActive = () => {
    setActive(!active);
  };

  return (
    <div>
      <Component
        profilePictureUrl="/fakeProfilePicture.png"
        username="this person"
        title="this title"
        active={active}
        onClick={toggleActive}
      />
    </div>
  );
};

export default ProfilePage;
