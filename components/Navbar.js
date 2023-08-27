import { useState } from "react";
import navStyles from "@/styles/Navbar.module.css";

const MobileMenu = () => {
  return (
    <div className={navStyles.mobilemenu}>
      <a href="/bio">
            Bio
          </a>
          <a href="/portfolio">Portfolio</a>
          <a href="/available">Available Art</a>
          {<a href="/blog">Blog</a>}
          <a href="/contact">Contact/Booking</a>
          <a href="/mailing">Secret Club</a>
          <a href="/aftercare">Aftercare</a>
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
        <a href="/home">
        <img src="/inkLogo.png" className={navStyles.logo}/>
        </a>
          

        {/* Desktop Menu, which only appears on large screens */}
        <div className={navStyles.menu}>
          <a href="/bio">
            Bio
          </a>
          <a href="/portfolio">Portfolio</a>
          <a href="/available">Available Art</a>
          {<a href="/blog">Blog</a>}
          <a href="/contact">Contact/Booking</a>
          <a href="/mailing">Secret Club</a>
          <a href="/aftercare">Aftercare</a>
        </div>

        {/* This button only shows up on small screens. It is used to open the mobile menu */}
        <button className={navStyles.showmobilemenubutton} onClick={toggleMobileMenu}>
          &#8801;
        </button>
      </div>

      {/* The mobile menu and the close button */}
      {isShown && <MobileMenu />}
      {isShown && (
        <button className={navStyles.closemobilemenubutton} onClick={toggleMobileMenu}>
          &times;
        </button>
      )}
    </>
  );
};

export default Navbar;
