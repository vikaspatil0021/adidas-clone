import React, { useState } from 'react'
import './drop.css'
const DropdownMen = () => {


  return (
    <div className="dropdown-content" >

      <div className='d-flex border-bottom px-5'>

        <div className=' d-flex w-100 fw-bold'>
          <a href='/men/All' className='aLink py-5 col-3'>All</a>

          <a href='/men/Footwear' className='aLink py-5 col-3'>FOOTWEAR</a>

          <a href='/men/Clothing' className='aLink py-5 col-3'>CLOTHING</a>


          <a href='/men/Accessories' className='aLink py-5 col-3'>ACCESSORIES </a>


        </div>
      </div>


    </div>
  )
}


export default DropdownMen;

