import React from 'react'
import  './kaftan.css';
import  product from "../Assets/data";
import Item from '../item/Item';
import {Link} from 'react-router-dom';
function Kaftan() {
  return (
      
     <div className='container'>
         <div className='header'>
        <h1>KAFTAN</h1>
        </div>
        <div className="kaftan">
        {product.map((item,i)=>{
        return(
         <Item key={i} id={item.id}  image={item.image}/>
        )
      })}
        </div>
        <div className='more'>
        <span><Link to='./kaftan'>SEE MORE KAFTAN</Link></span>
        </div>
    </div>
  )
}

export default Kaftan