import React from "react";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import FaqsBody from "@/components/FaqsBody";
import faqsStyles from "../styles/AftercareFAQs.module.css"

const faqs = () => {
  return (
    <main className={faqsStyles.mainfaqs}>
      <Navbar />
      <Header title="FAQs" backgroundImage={"/tattoosign.jpg"}/>
      <FaqsBody backgroundImage={"/tattoosign.jpg"}/>
    </main>
  )
}

export default faqs
