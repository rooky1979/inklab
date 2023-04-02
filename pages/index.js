import landingStyles from "@/styles/Landing.module.css";

export default function Landing() {
  return (
    <>
      <video autoPlay controls loop className={landingStyles.video}>
        <source src="./inklabLanding.mp4" type="video/mp4" />
      </video>
      <h1 className={landingStyles.heading}>The Ink Lab</h1>
    </>
  );
}
