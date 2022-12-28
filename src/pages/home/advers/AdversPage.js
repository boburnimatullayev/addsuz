import React from 'react'
import "./adverspage.scss"
import img1 from "../advers/img2.png"
import img2 from "../advers/img1.png"


const AdversPage = () => {
  return (
    <>
      <div className="advers">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
      </div>
    </>
  )
}

export default AdversPage