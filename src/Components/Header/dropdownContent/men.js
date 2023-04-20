import React, { useState } from 'react'
import './drop.css'
const DropdownMen = () => {


  return (
    <div className="dropdown-content" >

      <div className='d-flex border-bottom px-5'>

        <div className='border-end col-3 ps-5 py-4 pe-2'>
          <a className='drop-a'>FEATURED</a>
          <ul className='p-0 m-0'>
            <li className='mt-2'><a className='drop-lia'>
              Originals
            </a></li>
            <li><a className='drop-lia'>
              Running
            </a></li>
            <li><a className='drop-lia pb-3'>
              Lifestyle
            </a></li>


          </ul>

        </div>
        <div className=' d-flex col-9 fw-bold'>
          <a href='/men/All' className='aLink col-3'>All</a>

          <a href='/men/Footwear' className='aLink col-3'>FOOTWEAR</a>

          <a href='/men/Clothing' className='aLink col-3'>CLOTHING</a>


          <a href='/men/Accessories' className='aLink col-3'>ACCESSORIES </a>


        </div>
      </div>


    </div>
  )
}


export default DropdownMen;

