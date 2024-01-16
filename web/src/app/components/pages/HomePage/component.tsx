import React from "react";
import BannerSelector from "../../common/dataDisplay/BannerSelector/component";
import SectionHeader from "../../common/presentational/SectionHeader/component";
import NavBar from "../../compound/NavBar";

const Component = () => {
  return (
    <div>
      <NavBar />
      <SectionHeader children="Popular Titles" />

      <BannerSelector
        likes={333}
        title="this story about this"
        onClick={() => console.log("hello")}
        active={false}
      />
    </div>
  );
};

export default Component;
