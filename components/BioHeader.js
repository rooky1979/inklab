import React from "react";
import { motion } from "framer-motion";
import bioStyles from "../styles/Bio.module.css";

const BioHeader = () => {
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5,
      },
    },
  };

  return (
    <motion.div
      className={bioStyles.mainpage}
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >
      <div className={bioStyles.topcontainer}>
        <div className={bioStyles.leftcontainer}>
          <img className={bioStyles.kretpic} src="steve5.jpeg" />
        </div>
        <div className={bioStyles.rightcontainer}>
          <motion.p className={bioStyles.header}>Steve Kretz -</motion.p>
          <motion.p className={bioStyles.subheader1}>Realistic Tattoo Artist.</motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default BioHeader;
