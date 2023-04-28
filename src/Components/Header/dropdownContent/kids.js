
import React from 'react'

const DropdownKids = () => {

    return (
        <div className="dropdown-content" >

      <div className='d-flex border-bottom px-5'>

        
        <div className=' d-flex w-100 fw-bold'>
          <a href='/kids/All' className='aLink  py-5 col-3'>All</a>

          <a href='/kids/Footwear' className='aLink py-5 col-3'>FOOTWEAR</a>

          <a href='/kids/Clothing' className='aLink py-5 col-3'>CLOTHING</a>


          <a href='/kids/Accessories' className='aLink py-5 col-3'>ACCESSORIES </a>


        </div>
      </div>


    </div>
    )
}


export default DropdownKids;
