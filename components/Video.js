import React from "react";
import landingStyles from "@/styles/Landing.module.css";

const Video = () => {
  return (
    <>
      <video playsinline autoPlay muted loop className={landingStyles.video}>
        <source src="./inklabLanding.mp4" type="video/mp4" />
      </video>
    </>
  );
};

export default Video;
