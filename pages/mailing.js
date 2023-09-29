import React from 'react'
import Navbar from '@/components/Navbar'
import Header from "@/components/Header";
import SubscribeForm from '@/components/SubscribeForm';
import subscribeStyles from "../styles/Subscribe.module.css"

const mailing = () => {
  return (
    <main className={subscribeStyles.mainsubscribe}>
      <Navbar />
      <Header title="Secret Club" backgroundImage={"/secret.jpg"}/>
      <SubscribeForm backgroundImage={"/secret.jpg"}/>
    </main>
  )
}

export default mailing