import React from "react";
import bodyStyles from "../styles/AftercareFAQs.module.css";

const FaqsBody = ({backgroundImage}) => {
  const mainpageStyle = {
    backgroundImage: `url(${backgroundImage})`,
  }
  return (
    <>
      <div className={bodyStyles.mainpage} style={mainpageStyle}>
        <div className={bodyStyles.bodycontainer}>
          <div>
            <p className={bodyStyles.boldtext}>
            Where to get tattooed in Whistler?
            </p>
            <p className={bodyStyles.text}>
            There are many great artists in Whistler. Please check my portfolio first & if my style doesn’t fit your ideas, I’d be happy to suggest another artist.
            </p>
            <br />
            <p className={bodyStyles.boldtext}>
            Where are you based?
            </p>
            <p className={bodyStyles.text}>
            I am based in Whistler, B.C. & operate from a private studio, alongside some other great artists. The location is open by appointment only, so provides a very relaxed atmosphere to get tattooed. We are located within Black Ohm Tattoos studio in Function Junction, just outside of the centre of Whistler. A great area to explore with walks, coffee shops & breweries.
            </p>
            <br />   
            <p className={bodyStyles.text}>
            The studio is not open to the public, so please <strong><a className={bodyStyles.tabhover} href="/contactbooking">
                contact
              </a></strong> me to discuss booking an appointment in advance.
            </p>
            <br />
            
            <p className={bodyStyles.boldtext}>
            How long is your waitlist?
            </p>
            <p className={bodyStyles.text}>
            It can be anywhere from a week to a month or more, depending on size of your tattoo & my schedule. If you’d like to get an accurate time frame contact me with your ideas!
            </p>
            <br />
            <p className={bodyStyles.boldtext}>
            What styles’s of tattoo do you offer?
            </p>
            <p className={bodyStyles.text}>
            I really love a variety of styles & although I mainly tattoo realistic imagery, I often will tattoo with a bolder outlined style, or maybe even mix styles to create something unique.
            </p>
            <br />
            <p className={bodyStyles.boldtext}>
            Do you do small tattoos?            </p>
            <p className={bodyStyles.text}>
            I have met some great people & been lucky enough to be their choice for their first tattoo. I’m always happy to start small & who knows, it may lead on to bigger things later!
            </p>
            <br />
            <p className={bodyStyles.boldtext}>I’m interested in a sleeve tattoo, where do I start?</p>
            <p className={bodyStyles.text}>
            All I really need to get started is a rough concept, then I’m happy to book a free consultation to discuss the possibilities with you. If you like my ideas, then the fun starts & we create your artwork!
            </p>
            <br />
            <p className={bodyStyles.boldtext}>How much does a sleeve tattoo cost?</p>
            <p className={bodyStyles.text}>
            A sleeve tattoo take multiple sessions & often takes around six days. This does depend on the artwork, so I can often work to a budget, or space out appointments to help spread the cost
            </p>
            <br />
            <p className={bodyStyles.text}>
            If you like what you have heard so far & would like to talk about an idea, please fill in a quick               <strong><a className={bodyStyles.tabhover} href="/contactbooking">
                Contact/Booking
              </a></strong> form & I’ll be in touch soon!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default FaqsBody;
