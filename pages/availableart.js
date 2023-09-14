import React from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import ArtCarousel from "@/components/ArtCarousel";
import { availableimgs, availabletext } from "../availableimgs";

const availableart = () => {
  return (
    <>
      <Navbar />
      <Header title="Available Art" backgroundImage={"/steve4.webp"} />
      <ArtCarousel text={availabletext} images={availableimgs} backgroundImage={"/steve4.webp"} />
    </>
  );
};

export default availableart;
