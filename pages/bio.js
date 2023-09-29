import React from "react";
import Navbar from "@/components/Navbar";
import BioHeader from "@/components/BioHeader";
import BioBody from "@/components/BioBody";
import bioStyles from "../styles/Bio.module.css";

const bio = () => {
  return (
    <main className={bioStyles.main}>
      <Navbar />
      <BioHeader />
      <BioBody />
    </main>
  );
};

export default bio;
