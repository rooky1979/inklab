import React from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import ArtCarousel from "@/components/ArtCarousel";
import { portfolioimgs, portfoliotext } from "../portfolioimgs";
import portfolioStyles from "../styles/ArtCarousel.module.css"

const portfolio = () => {
  return (
    <main className={portfolioStyles.mainportfolio}>
      <Navbar />
      <Header title="Portfolio" backgroundImage={"/steve3.png"} />
      <ArtCarousel text={portfoliotext} images={portfolioimgs} backgroundImage={"/steve3.png"} />
    </main>
  );
};

export default portfolio;
