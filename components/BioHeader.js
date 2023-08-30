import React from "react";
import bioStyles from "../styles/Bio.module.css";

const BioHeader = () => {
  return (
    <div className={bioStyles.mainpage}>
      <div className={bioStyles.topcontainer}>
        <div className={bioStyles.leftcontainer}>
          <img className={bioStyles.kretpic} src="steve5.jpeg" />
        </div>
        <div className={bioStyles.rightcontainer}>
          <p className={bioStyles.header}>Steve Kretz -</p>
          <p className={bioStyles.subheader1}>Realistic Tattoo Artist.</p>
        </div>
      </div>
    </div>
  );
};

export default BioHeader;
