import React from 'react'
import Navbar from "@/components/Navbar";
import Header from '@/components/Header';
import AftercareBody from '@/components/AftercareBody';

const aftercare = () => {
  return (
    <>
      <Navbar />
      <Header title="Tattoo Aftercare" backgroundImage={"/aftercare.png"}/>
      <AftercareBody backgroundImage={"/aftercare.png"}/>
    </>
  )
}

export default aftercare
