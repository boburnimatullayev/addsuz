import React from 'react'
import Search from './search/Search'
import "./navbar.scss"
import SaveButton from './navbar-button/save-button/SaveButton'
import UserButton from './navbar-button/user-button/UserButton'

const Navbar = () => {
  return (
    <div className='fixed' >
        <div className=" navbar container-site ">
            <div className="navbar-con">
              <div className="logo">
                <h1>logo</h1>
              </div>
              <div className="navbar-serch">
                  <Search />
              </div>
              <div className="navbar-button">
                <div className="save-button">
                   <SaveButton />
                </div>
                <div className="user-button">
                      <UserButton />
                </div>
              </div>
            </div>
        </div>
    </div>
  )  
}

export default Navbar