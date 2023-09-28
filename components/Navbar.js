import { useState } from "react";
import navStyles from "@/styles/Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const MobileMenu = () => {
  return (
    <div className={navStyles.mobilemenu}>
      <a href="/bio">Bio</a>
      <a href="/portfolio">Portfolio</a>
      <a href="/availableart">Available Art</a>
      <a href="/blog">Blog</a>
      <a href="/contactbooking">Contact/Booking</a>
      <a href="/mailing">Secret Club</a>
      <a href="/aftercare">Aftercare</a>
      <a href="/faqs">FAQs</a>
    </div>
  );
};

const Navbar = () => {
  const [isShown, setIsShown] = useState(false);
  const toggleMobileMenu = () => {
    setIsShown(!isShown);
  };

  return (
    <>
      <div className={navStyles.topnav}>
      <div className={navStyles.socialicons}>
        <a href="/dashboard">
          <p className={navStyles.logo}>The ink Lab by Steve Kretz</p>
        </a>
          <Link href="https://www.youtube.com/@TheInkLab">
            <FontAwesomeIcon
              className={navStyles.icon}
              icon={faYoutube}
              style={{ fontSize: 25, color: "red" }}
            />
          </Link>
          <Link href="https://www.facebook.com/skretztattoo">
            <FontAwesomeIcon
              className={navStyles.icon}
              icon={faFacebook}
              style={{ fontSize: 25, color: "dodgerblue" }}
            />
          </Link>
          <Link href="https://www.instagram.com/skretztattoo">
            <FontAwesomeIcon
              className={navStyles.icon}
              icon={faInstagram}
              style={{ fontSize: 25, color: "orchid" }}
            />
          </Link>
          <Link href="https://www.tiktok.com" >
          <FontAwesomeIcon
            className={navStyles.icon}
            icon={faTiktok}
            style={{ fontSize: 25, color: "gold" }}
          />
          </Link>
        </div>
        {/* Desktop Menu, which only appears on large screens */}
        <div className={navStyles.menu}>
          <a href="/bio">Bio</a>
          <a href="/portfolio">Portfolio</a>
          <a href="/availableart">Available Art</a>
          <a href="/blog">Blog</a>
          <a href="/contactbooking">Contact/Booking</a>
          <a href="/mailing">Secret Club</a>
          <a href="/aftercare">Aftercare</a>
          <a href="/faqs">FAQs</a>
        </div>

        {/* This button only shows up on small screens. It is used to open the mobile menu */}
        <button
          className={navStyles.showmobilemenubutton}
          onClick={toggleMobileMenu}
        >
          &#8801;
        </button>
      </div>

      {/* The mobile menu and the close button */}
      {isShown && <MobileMenu />}
      {isShown && (
        <button
          className={navStyles.closemobilemenubutton}
          onClick={toggleMobileMenu}
        >
          &times;
        </button>
      )}
    </>
  );
};

export default Navbar;
