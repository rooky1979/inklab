import React from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import ArtCarousel from "@/components/ArtCarousel";
import { availableimgs, availabletext } from "../availableimgs";
import availableStyles from "../styles/ArtCarousel.module.css"

const availableart = () => {
  return (
    <main className={availableStyles.mainavailable}>
      <Navbar />
      <Header title="Available Art" backgroundImage={"/available.png"} />
      <ArtCarousel text={availabletext} images={availableimgs} backgroundImage={"/available.png"} />
    </main>
  );
};

export default availableart;
