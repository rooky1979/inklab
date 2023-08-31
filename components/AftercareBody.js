import React from "react";
import bodyStyles from "../styles/AftercareFAQs.module.css";

const AftercareBody = ({backgroundImage}) => {
  const mainpageStyle = {
    backgroundImage: `url(${backgroundImage})`,
  }
  return (
    <>
      <div className={bodyStyles.mainpage} style={mainpageStyle}>
        <div className={bodyStyles.bodycontainer}>
          <div>
            <p className={bodyStyles.boldtext}>
              Follow these important steps to heal your Tattoo:
            </p>
            <p className={bodyStyles.text}>
              Your tattoo will be bandaged with an adhesive dressing to keep
              bacteria away from the open wound. Infections won’t happen through
              the tattoo process and it is up to you to care for your tattoo
              while it heals.
            </p>
            <br />
            <p className={bodyStyles.boldtext}>
              Adhesive Clear Bandage Instructions:
            </p>
            <p className={bodyStyles.text}>
              The adhesive bandage provides a water resistant seal over your
              tattoo, providing the best conditions to start healing. I suggest
              wearing the adhesive bandage for between 3-5 days. If you suffer
              any irritation it can be removed sooner. The occasional ink bubble
              is ok, but if ink and plasma is spreading over the tattoo, please
              remove the bandage and wash it with soap and warm water. If a
              second piece of bandage was provided it can be applied, or you can
              move to the next step in the healing instructions.
            </p>
            <br />
            <p className={bodyStyles.boldtext}>
              Conventional Bandage (Taped or wrapped to tattoo):
            </p>
            <p className={bodyStyles.text}>
              If you are likely to react to the adhesive bandage, or you have a
              large tattoo, I may cover with a conventional bandage. I normally
              suggest keeping this on for the first night. In the morning wash
              your tattoo gently with fragrance free soap and warm water, until
              any slimy feeling has gone.
            </p>
            <br />
            <p className={bodyStyles.boldtext}>
              After removing your bandage:
            </p>
            <p className={bodyStyles.text}>
              Once you remove the bandage you will need to wash your tattoo well
              every few hours. Use mild soap (unscented is best) and warm water,
              followed by a cold rinse, then pat it dry with a clean towel.
            </p>
            <br />
            <p className={bodyStyles.text}>
              After a day or two your skin will normally start to dry out. When
              this happens you can apply a thin coat of moisturizer to the
              tattoo. I recommend using an unscented moisturizer. Only use
              enough to make it shine. Too much ointment can trap germs which
              can potentially lead to infection.
            </p>
            <br />
            <p className={bodyStyles.text}>
              Avoid swimming, taking long showers or baths until your tattoo is
              healed and the skin is no longer dry. Do not pick dry skin, as it
              is helping your tattoo to heal correctly. Also try to keep it
              protected from the sun, but don’t apply any sun screen until after
              it has healed.
            </p>
            <br />
            <p className={bodyStyles.boldtext}>Follow up appointments:</p>
            <p className={bodyStyles.text}>
              I take pride in making my Tattoos as perfect as possible. The way
              the body heals is out of my hands, so whenever possible I like to
              book a follow up appointment to check everything has healed
              correctly. I charge a flat rate for these appointments based on
              the size of your Tattoo.
            </p>
            <br />
            <p className={bodyStyles.text}>
              I would really appreciate if you could send me photos at 3-4
              weeks, then we can book a follow up at around 6 weeks healed. A
              short follow up can make all the difference and we can be sure
              your Tattoo will look amazing for the years to come!
            </p>
            <br />
            <p className={bodyStyles.text}>
              If you have any questions, or concerns while healing please get in
              touch!
            </p>
            <br />
            <p className={bodyStyles.text}>
              <strong>Email:</strong> stevek.tattoo@gmail.com or contact me
              through the{" "}
              <a className={bodyStyles.tabhover} href="/contactbooking">
                Contact/Booking
              </a>
              tab.
            </p>
            <br />
            <p className={bodyStyles.boldtext}>
              Happy healing, enjoy your new Tattoo and I look forward to working
              with you again in the future!!! Sk.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default AftercareBody;
