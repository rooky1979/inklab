import React from 'react'
import Navbar from "@/components/Navbar";
import Header from '@/components/Header';
import AftercareBody from '@/components/AftercareBody';
import aftercareStyles from "../styles/AftercareFAQs.module.css"

const aftercare = () => {
  return (
    <main className={aftercareStyles.mainaftercare}>
      <Navbar />
      <Header title="Tattoo Aftercare" backgroundImage={"/aftercare.png"}/>
      <AftercareBody backgroundImage={"/aftercare.png"}/>
    </main>
  )
}

export default aftercare
