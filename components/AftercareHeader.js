import React from 'react'
import aftercareStyles from "../styles/Aftercare.module.css";

const AftercareHeader = () => {
  return (
    <div className={aftercareStyles.mainpage}>
    <div className={aftercareStyles.container}>
{/*       <div className={aftercareStyles.leftcontainer}>
        <img className={aftercareStyles.kretpic} src="steve6.jpg" />
      </div>
      <div className={aftercareStyles.middlecontainer}>
        <p className={aftercareStyles.header}>Aftercare</p>
      </div> */}
      <div className={aftercareStyles.textcontainer}>
      <p className={aftercareStyles.header}>Aftercare</p>
      </div>
    </div>
  </div>
  )
}

export default AftercareHeader
