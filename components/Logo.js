import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import landingStyles from "@/styles/Landing.module.css";

const Logo = () => {
  return (
    <div className={landingStyles.textcontainer}>
      <h1 className={landingStyles.inklabheading}>The ink Lab</h1>
      <p className={landingStyles.kretnameheading}>by Steve Kretz</p>
      <p className={landingStyles.experienceheading}>
        PROVIDING THE BEST TATTOO EXPERIENCE
      </p>
      <div className={landingStyles.socialicons}>
      <FontAwesomeIcon icon="fa-brands fa-youtube" />
      <FontAwesomeIcon icon="fa-brands fa-instagram" />
      <FontAwesomeIcon icon="fa-brands fa-facebook" />
      <FontAwesomeIcon icon="fa-brands fa-tiktok" />
      </div>
    </div>
  );
};

export default Logo;
