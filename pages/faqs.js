import React from "react";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import FaqsBody from "@/components/FaqsBody";

const faqs = () => {
  return (
    <>
      <Navbar />
      <Header title="FAQs" backgroundImage={"/biobkg.jpg"}/>
      <FaqsBody backgroundImage={"/biobkg.jpg"}/>
    </>
  )
}

export default faqs
