import React from "react";
import headerStyles from "../styles/AftercareFAQs.module.css";

const Header = ({ title, backgroundImage }) => {

const mainpageStyle = {
  backgroundImage: `url(${backgroundImage})`,
}

  return (
    <div className={headerStyles.mainpage} style={mainpageStyle}>
      <div className={headerStyles.container}>
        <div className={headerStyles.textcontainer}>
          <p className={headerStyles.header}>
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Header;
