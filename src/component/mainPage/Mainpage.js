import React from 'react'
import Brandes from './controlPage/brandes/Brandes'
import LayoutControl from './controlPage/control/LayoutControl'
import RoutePage from './RoutePage'
import "./mainpage.scss"


const Mainpage = () => {
  return (
    <>
     <div className="main-con container-site">
     <div className="control">
        <LayoutControl />
        <Brandes />
     </div>
     <div className="routes">
        <RoutePage />
    
     </div>
     </div>
    </>
  )
}

export default Mainpage