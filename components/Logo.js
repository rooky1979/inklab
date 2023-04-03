import landingStyles from "@/styles/Landing.module.css";

const Logo = () => {
  return (
    <div className={landingStyles.textcontainer}>
      <h1 className={landingStyles.inklabheading}>The ink Lab</h1>
      <h1 className={landingStyles.kretnameheading}>by Steve Kretz</h1>
      <p className={landingStyles.experienceheading}>
        PROVIDING THE BEST TATTOO EXPERIENCE
      </p>
    </div>
  );
};

export default Logo;
