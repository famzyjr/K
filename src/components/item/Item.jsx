import React from 'react'
import './item.css';
import { CiHeart } from "react-icons/ci";
function Item(props) {
  return (
    <div>
     <div className="item-container">
     <img src={props.image} alt="" />
       {/* <p>{props.desc}</p> */}
      <div className='item-con'>
       <CiHeart className='icon'/>
      <a href="">CAll NOW</a>
      </div>
     </div>
    </div>
  )
}

export default Item