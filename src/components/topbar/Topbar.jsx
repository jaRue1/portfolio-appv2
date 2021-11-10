import React from 'react'
import { Person , Mail} from '@material-ui/icons';
import "./topbar.scss"
function Topbar( {menuOpen , setMenuOpen }) {
  return (                      // if menuOpen true add the active class
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">expert.</a>
          <div className="itemContainer">
            <Person className="icon"/>
            <span>+ 555-555-5555</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon"/>
            <span>expert@majorlinkx.io</span>
          </div>
        </div>
        <div className="right">
            <div className="hamburger" onClick={()=> setMenuOpen (!menuOpen)}>
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div>
          </div>
      </div> 
    </div>
  )
}

export default Topbar
