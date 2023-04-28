import React from 'react'

const DropdownWomen = () => {
  
  return (
    <div className="dropdown-content" >

      <div className='d-flex border-bottom px-5'>

        
        <div className=' d-flex w-100 fw-bold'>
          <a href='/women/All' className='aLink py-5 col-3'>All</a>

          <a href='/women/Footwear' className='aLink py-5 col-3'>FOOTWEAR</a>

          <a href='/women/Clothing' className='aLink py-5 col-3'>CLOTHING</a>


          <a href='/women/Accessories' className='aLink py-5 col-3'>ACCESSORIES </a>


        </div>
      </div>


    </div>
  )
}


export default DropdownWomen;

