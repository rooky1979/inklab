import React from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import ArtCarousel from "@/components/ArtCarousel";
import { portfolioimgs, portfoliotext } from "../portfolioimgs";

const portfolio = () => {
  return (
    <>
      <Navbar />
      <Header title="Portfolio" backgroundImage={"/steve3.png"} />
      <ArtCarousel text={portfoliotext} images={portfolioimgs} backgroundImage={"/steve3.png"} />
    </>
  );
};

export default portfolio;
