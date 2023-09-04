import React from 'react'
import Navbar from '@/components/Navbar'
import Header from "@/components/Header";
import ContactForm from '@/components/ContactForm';

const contactbooking = () => {
  return (
    <>
      <Navbar />
      <Header title="Secret Club" backgroundImage={"/mailing.jpg"}/>
      <ContactForm backgroundImage={"/mailing.jpg"}/>
    </>
  )
}

export default contactbooking
