import React from 'react'
import Navbar from '@/components/Navbar'
import Header from "@/components/Header";
import SubscribeForm from '@/components/SubscribeForm';

const mailing = () => {
  return (
    <>
      <Navbar />
      <Header title="Secret Club" backgroundImage={"/mailing.jpg"}/>
      <SubscribeForm backgroundImage={"/mailing.jpg"}/>
    </>
  )
}

export default mailing