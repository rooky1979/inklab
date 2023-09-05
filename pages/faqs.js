import React from "react";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import FaqsBody from "@/components/FaqsBody";

const faqs = () => {
  return (
    <>
      <Navbar />
      <Header title="FAQs" backgroundImage={"/parlour.jpeg"}/>
      <FaqsBody backgroundImage={"/parlour.jpeg"}/>
    </>
  )
}

export default faqs
