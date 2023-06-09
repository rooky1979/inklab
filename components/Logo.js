import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import landingStyles from "@/styles/Landing.module.css";
import buttonStyles from "@/styles/Buttons.module.css";

const Logo = () => {
  return (
    <div className={landingStyles.textcontainer}>
      <h1 className={landingStyles.inklabheading}>The ink Lab</h1>
      <p className={landingStyles.kretnameheading}>by Steve Kretz</p>
      <p className={landingStyles.experienceheading}>
        PROVIDING THE BEST TATTOO EXPERIENCE
      </p>
      <div className={landingStyles.socialicons}>
        <Link href="https://www.youtube.com/@TheInkLab">
          <FontAwesomeIcon
            className={landingStyles.icon}
            icon={faYoutube}
            style={{ fontSize: 50, color: "red" }}
          />
        </Link>
        <Link href="https://www.facebook.com/skretztattoo">
        <FontAwesomeIcon
          className={landingStyles.icon}
          icon={faFacebook}
          style={{ fontSize: 50, color: "dodgerblue" }}
        /></Link>
        <Link href="https://www.instagram.com/skretztattoo">
        <FontAwesomeIcon
          className={landingStyles.icon}
          icon={faInstagram}
          style={{ fontSize: 50, color: "orchid" }}
        /></Link>
        <FontAwesomeIcon
          className={landingStyles.icon}
          icon={faTiktok}
          style={{ fontSize: 50, color: "gold" }}
        />
      </div>
      <Link href="./home" className={buttonStyles.primarybtn}>
        Enter
      </Link>
    </div>
  );
};

export default Logo;
