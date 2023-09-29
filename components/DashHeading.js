import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import dashheadingStyles from "../styles/Dashheading.module.css";

const DashHeading = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1 }}
    >
      <div>
        <div className={dashheadingStyles.headingcontainer}>
          <p className={dashheadingStyles.heading}>
            The ink Lab by Steve Kretz
          </p>
        </div>
        <div className={dashheadingStyles.subheadingcontainer}>
          <p className={dashheadingStyles.subheading}>
            PROVIDING THE BEST TATTOO EXPERIENCE
          </p>
        </div>
        <div className={dashheadingStyles.subheadingcontainer}>
          <Link href="https://www.youtube.com/@TheInkLab">
            <FontAwesomeIcon
              className={dashheadingStyles.icon}
              icon={faYoutube}
              style={{ fontSize: 25, color: "red" }}
            />
          </Link>
          <Link href="https://www.facebook.com/skretztattoo">
            <FontAwesomeIcon
              className={dashheadingStyles.icon}
              icon={faFacebook}
              style={{ fontSize: 25, color: "dodgerblue" }}
            />
          </Link>
          <Link href="https://www.instagram.com/skretztattoo">
            <FontAwesomeIcon
              className={dashheadingStyles.icon}
              icon={faInstagram}
              style={{ fontSize: 25, color: "orchid" }}
            />
          </Link>
          <Link href="https://www.tiktok.com">
            <FontAwesomeIcon
              className={dashheadingStyles.icon}
              icon={faTiktok}
              style={{ fontSize: 25, color: "gold" }}
            />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default DashHeading;
