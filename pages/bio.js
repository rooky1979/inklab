import React from "react";
import bioStyles from "../styles/Dashheading.module.css";
import Navbar from "@/components/Navbar";


const bio = () => {
  return (
    <div>
        <Navbar />
      <div className={bioStyles.header}>
        <h1>Steve Kretz - Realistic Tattoo Artist:</h1>
        <h>My Story</h>
      </div>
    </div>
  );
};

export default bio;
