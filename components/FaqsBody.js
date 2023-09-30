import React from "react";
import bodyStyles from "../styles/AftercareFAQs.module.css";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 2, delay: 2} },
};

const FaqsBody = ({backgroundImage}) => {
  const mainpageStyle = {
    backgroundImage: `url(${backgroundImage})`,
  }
  return (
    <>
      <div className={bodyStyles.mainpage} style={mainpageStyle}>
        <motion.div 
        initial="hidden"
        animate="visible"
        variants={fadeInVariant}
        className={bodyStyles.bodycontainer}>
          <div>
            <p className={bodyStyles.boldtext}>
            Where to get tattooed in Whistler?
            </p>
            <p className={bodyStyles.text}>
            There are many great artists in Whistler. Please check my portfolio first and if my style doesn{'\u0027'}t fit your ideas, I{'\u0027'}d be happy to suggest another artist.
            </p>
            <br />
            <p className={bodyStyles.boldtext}>
            Where are you based?
            </p>
            <p className={bodyStyles.text}>
            I am based in Whistler, B.C. and operate from a private studio, alongside some other great artists. The location is open by appointment only, so provides a very relaxed atmosphere to get tattooed. We are located within Black Ohm Tattoos studio in Function Junction, just outside of the centre of Whistler. A great area to explore with walks, coffee shops and breweries.
            </p>
            <br />   
            <p className={bodyStyles.text}>
            The studio is not open to the public, so please <strong><Link className={bodyStyles.tabhover} href="/contactbooking">
                contact
              </Link></strong> me to discuss booking an appointment in advance.
            </p>
            <br />
            <p className={bodyStyles.boldtext}>
            Where are your rates?
            </p>
            <p className={bodyStyles.text}>
My current rates are:
            </p> 
            <br />
            <p className={bodyStyles.text}>
            Consultations are free
            </p>
            <p className={bodyStyles.text}>
            Hourly rate – $200/hour
            </p>
            <p className={bodyStyles.text}>
            One hour minimum charge
            </p>
            <p className={bodyStyles.text}>
            Day Rate – 6 hour appointment (11 – 5pm) – $1000
            </p>
            <p className={bodyStyles.text}>
            Day Rate – 8 hour appointment (11am – 7pm) – $1200
            </p>
            <p className={bodyStyles.text}>
            Pre-drawn Artwork – Contact to discuss prices
            </p>
            <br />   
            <p className={bodyStyles.text}>
            The studio is not open to the public, so please <strong><Link className={bodyStyles.tabhover} href="/contactbooking">
                contact
              </Link></strong> me to discuss booking an appointment in advance.
            </p>
            <br />          
            <p className={bodyStyles.boldtext}>
            How do I book and what{'\u0027'}s the process?
            </p>
            <p className={bodyStyles.text}>
            If you click on the <strong><Link className={bodyStyles.tabhover} href="/contactbooking">
                Contact/Booking
              </Link></strong> tab, there you will find everything you need to know to get started including my booking terms and conditions. General enquiries are also welcomed.
            </p>
            <br />
            <p className={bodyStyles.boldtext}>
            How long is your waitlist?
            </p>
            <p className={bodyStyles.text}>
            It can be anywhere from a week to a month or more, depending on size of your tattoo and my schedule. If you{'\u0027'}d like to get an accurate time frame contact me with your ideas!
            </p>
            <br />
            <p className={bodyStyles.boldtext}>
            What styles of tattoo do you offer?
            </p>
            <p className={bodyStyles.text}>
            I really love a variety of styles and although I mainly tattoo realistic imagery, I often will tattoo with a bolder outlined style, or maybe even mix styles to create something unique.
            </p>
            <br />
            <p className={bodyStyles.boldtext}>
            Do you do small tattoos?            </p>
            <p className={bodyStyles.text}>
            I have met some great people and been lucky enough to be their choice for their first tattoo. I{'\u0027'}m always happy to start small and who knows, it may lead on to bigger things later!
            </p>
            <br />
            <p className={bodyStyles.boldtext}>I{'\u0027'}m interested in a sleeve tattoo, where do I start?</p>
            <p className={bodyStyles.text}>
            All I really need to get started is a rough concept, then I{'\u0027'}m happy to book a free consultation to discuss the possibilities with you. If you like my ideas, then the fun starts and we create your artwork!
            </p>
            <br />
            <p className={bodyStyles.boldtext}>How much does a sleeve tattoo cost?</p>
            <p className={bodyStyles.text}>
            A sleeve tattoo take multiple sessions and often takes around six days. This does depend on the artwork, so I can often work to a budget, or space out appointments to help spread the cost
            </p>
            <br />
            <p className={bodyStyles.text}>
            If you like what you have heard so far and would like to talk about an idea, please fill in a quick               <strong><Link className={bodyStyles.tabhover} href="/contactbooking">
                Contact/Booking
              </Link></strong> form and I{'\u0027'}ll be in touch soon!
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
};
export default FaqsBody;
