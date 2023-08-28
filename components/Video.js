import React from "react";
import landingStyles from "@/styles/Landing.module.css";

const Video = () => {
  return (
    <>
      <video autoPlay muted controls loop className={landingStyles.video}>
        <source src="./inklabLanding.mp4" type="video/mp4" />
      </video>
    </>
  );
};

export default Video;
