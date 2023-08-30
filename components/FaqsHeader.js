import React from 'react'
import aftercareStyles from "../styles/Aftercare.module.css";

const FaqsHeader = () => {
  return (
    <div className={aftercareStyles.mainpage}>
    <div className={aftercareStyles.topcontainer}>
{/*       <div className={aftercareStyles.leftcontainer}>
        <img className={aftercareStyles.kretpic} src="steve6.jpg" />
      </div>
      <div className={aftercareStyles.middlecontainer}>
        <p className={aftercareStyles.header}>Aftercare</p>
      </div> */}
      <div className={aftercareStyles.rightcontainer}>
      <p className={aftercareStyles.header}>FAQS</p>
      </div>
    </div>
  </div>
  )
}

export default FaqsHeader
