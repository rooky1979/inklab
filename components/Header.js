import React from "react";
import headerStyles from "../styles/AftercareFAQs.module.css";
import { motion } from "framer-motion";

const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 2, delay: 1.5} },
};

const Header = ({ title, backgroundImage }) => {

const mainpageStyle = {
  backgroundImage: `url(${backgroundImage})`,
}

  return (
    <div className={headerStyles.mainpage}/*  style={mainpageStyle} */>
      <div className={headerStyles.container}>
        <div className={headerStyles.textcontainer}>
          <motion.p 
          initial="hidden"
          animate="visible"
          variants={fadeInVariant}
          className={headerStyles.header}>
            {title}
          </motion.p>
        </div>
      </div>
    </div>
  );
};
export default Header;
