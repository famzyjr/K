import React from 'react'
import './Agbada.css'
import product_2 from '../Assets/data_2';
import Item from '../item/Item';
import { Link } from 'react-router-dom';
function Agbada() {
  return (
    <div className='container'>
        <div className='header'>
        <h1>AGBADA</h1>
        </div>
        <div className='agbada'>
        {product_2.map((item,i)=>{
        return <Item key={i} id={item.id} image={item.image} />
      })}
        </div>
        <div className='more'>
        <span><Link to='./Agbada'>SEE MORE AGBADA</Link></span>
        </div>
    </div>
  )
}

export default Agbada