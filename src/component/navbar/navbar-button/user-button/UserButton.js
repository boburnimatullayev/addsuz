import React from "react";
import { Link } from "react-router-dom";

import UseIcon from "../../../icon/Icon";
import "./user-button.scss";

const UserButton = () => {
  return (

 <Link to="rigister"> <div className="user">
 <div className="user-con">
   <UseIcon />
 </div>
 <div className="massage-con">
   <div className="massage">
     
   </div>
 </div>
</div></Link>
   
  )
}

export default UserButton;
