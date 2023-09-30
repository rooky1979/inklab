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
      <Link href="/bio">Bio</Link>
      <Link href="/portfolio">Portfolio</Link>
      <Link href="/availableart">Available Art</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/contactbooking">Contact/Booking</Link>
      <Link href="/mailing">Secret Club</Link>
      <Link href="/aftercare">Aftercare</Link>
      <Link href="/faqs">FAQs</Link>
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
        <Link href="/dashboard">
          <p className={navStyles.logo}>The ink Lab by Steve Kretz</p>
        </Link>
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
          <Link href="/bio">Bio</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/availableart">Available Art</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contactbooking">Contact/Booking</Link>
          <Link href="/mailing">Secret Club</Link>
          <Link href="/aftercare">Aftercare</Link>
          <Link href="/faqs">FAQs</Link>
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
