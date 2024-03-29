import React from "react";
import landingStyles from "@/styles/Landing.module.css";

const Video = () => {
  return (
    <>
      <video playsInline autoPlay muted loop className={landingStyles.video} preload="metadata">
        <source src="./inklabLanding.mp4" type="video/mp4" />
      </video>
    </>
  );
};

export default Video;
