import React from "react";
import { motion } from "framer-motion";
import bioStyles from "../styles/Bio.module.css";

const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 2, delay: 2.5} },
};

const BioBody = () => {
  return (
    <>
      <div className={bioStyles.mainpage}>
        <div className={bioStyles.container}>
          <div className={bioStyles.leftcontainer}>
            <motion.img
              initial="hidden"
              animate="visible"
              variants={fadeInVariant}
              className={bioStyles.graffitipic}
              src="graffiti.jpg"
              alt="Graffiti"
            />
          </div>
          <div className={bioStyles.rightcontainer}>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeInVariant}
              className={bioStyles.text}
            >
              After establishing a successful design career in the U.K. over a
              decade, I felt a calling for change. Despite enjoying design, an
              unshakeable sense of something more led me to depart. Commencing
              my design journey at 19, while peers travelled, I eventually left
              my job and ventured to New York.
            </motion.p>
            <br />
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeInVariant}
              className={bioStyles.text}
            >
              Infatuated with Hip Hop culture, I had a penchant for graffiti
              from an early age. New York's rich tapestry of music, art, and
              people rejuvenated this passion. A month-long stay inspired me
              profoundly, guiding my path towards Auckland, New Zealand.
            </motion.p>
          </div>
        </div>
      </div>
      <div className={bioStyles.mainpage}>
        <div className={bioStyles.middlecontainer}>
          <div className={bioStyles.rightcontainer}>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeInVariant}
              className={bioStyles.text}
            >
              Auckland{'\u0027'}s vibrant tattoo culture captivated me, especially the prominence of Māori art. Despite unemployment, I immersed myself in creating art, gradually merging it with my newfound fascination with cultural Polynesian tattoos and Moko (traditional Māori tattoo). A year later, in Queenstown, I met Melissa, my future wife who is Canadian. After navigating a series of moves, we both decided to make the move to her home of Canada, more importantly her hometown of Whistler.
            </motion.p>
          </div>
          <div className={bioStyles.leftcontainer}>
            <motion.img
              initial="hidden"
              animate="visible"
              variants={fadeInVariant}
              className={bioStyles.mokopic}
              src="moko.jpg"
              alt="Moko"
            />
          </div>
        </div>
      </div>
      <div className={bioStyles.mainpage}>
        <div className={bioStyles.container}>
          <div className={bioStyles.leftcontainer}>
            <motion.img
              initial="hidden"
              animate="visible"
              variants={fadeInVariant}
              className={bioStyles.graffitipic}
              src="steve1.png"
              alt="Steve1"
            />
          </div>
          <div className={bioStyles.rightcontainer}>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeInVariant}
              className={bioStyles.text}
            >
              My yearning to learn tattooing persisted, but apprenticeships remained elusive. Undeterred, I embarked on a self-taught journey, tattooing fruits and myself while meticulously documenting my progress (I don{'\u0027'}t recommend this method). By 2017, I helped Dave Petko of Black Ohm Tattoos on a “Trees for BC” fundraiser organized by Kelsey Bareham, owner of The Whistler Tattoo Company. After a successful fundraiser, Dave offered me a permanent place in his studio. Thus began my journey as a tattoo artist.
            </motion.p>
          </div>
        </div>
      </div>
      <div className={bioStyles.mainpage}>
        <div className={bioStyles.middlecontainer}>
          <div className={bioStyles.rightcontainer}>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeInVariant}
              className={bioStyles.text}
            >
              My style & techniques are constantly evolving. I still take notes on every tattoo and refine my process in every way to ensure I am creating the best tattoos, with the least possible damage to the skin. This is all part of my aim to provide the best possible tattoo experience. This also includes the way I approach conversations, emails, consultations, and the whole tattoo design process. The serene backdrop of Whistler, coupled with the support of clients worldwide, brought my dream to fruition.
            </motion.p>
          </div>
          <div className={bioStyles.leftcontainer}>
            <motion.img
              initial="hidden"
              animate="visible"
              variants={fadeInVariant}
              className={bioStyles.graffitipic}
              src="tattoos.png"
              alt="Tattoos"
            />
          </div>
        </div>
      </div>
      <div className={bioStyles.mainpage}>
        <div className={bioStyles.bottomcontainer}>
          <div className={bioStyles.leftcontainer}>
            <motion.img
              initial="hidden"
              animate="visible"
              variants={fadeInVariant}
              className={bioStyles.graffitipic}
              src="whistler.jpg"
              alt="Whistler"
            />
          </div>
          <div className={bioStyles.rightcontainer}>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeInVariant}
              className={bioStyles.text}
            >
              Now, waking up surrounded by my family, I find solace in the mountains of Whistler. My days are dedicated to creating art for clients across the globe, merging design with tattoos. This journey embodies embracing change and realizing dreams through persistent pursuit, echoing the transformative power of artistic passion.
            </motion.p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BioBody;
