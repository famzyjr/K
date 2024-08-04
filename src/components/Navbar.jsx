import React, { useState } from "react";
import { FaBluetooth } from "react-icons/fa";
import "./NavbarStyles.css";
import logo from "../imgs/logo.png"
import logo2 from "../imgs/logo2.png"
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
function Navbar() {
  const [clicked, setClicked] = useState(false)
  const handleClick=()=>{
    setClicked(clicked => !clicked)
  }
  
  return (
    <>
      <nav>
        <a href="index.html">
          <img className="logo" src={logo2} alt="" />
        </a>
        <div>
          <ul id="navbar" className={clicked ? "navbar active" : "navbar"}>
            <li>
            <Link className="active" to='/'>Home</Link>
            </li>
            <li>
             <Link to='/Kaftan'>Kaftan</Link>
            </li>
            <li>
            <Link to='/Agbada'>Agbada</Link>
            </li>
            <li>
            <Link  to='/h'>Contact</Link>
            </li>
          </ul>
        </div>
        <div id="mobile" onClick={handleClick}>
            {clicked ? <IoClose /> :  <FaBars />}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
