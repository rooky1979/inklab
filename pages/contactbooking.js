import React from 'react'
import Navbar from '@/components/Navbar'
import Header from "@/components/Header";
import ContactForm from '@/components/ContactForm';
import contactStyles from "../styles/Contact.module.css"


const contactbooking = () => {
  return (
    <main className={contactStyles.maincontact}>
      <Navbar />
      <Header title="Contact/Booking" backgroundImage={"/mailing.jpg"}/>
      <ContactForm backgroundImage={"/mailing.jpg"}/>
    </main>
  )
}
export default contactbooking
