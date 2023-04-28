import React, { useEffect, useState } from 'react'

const Orders = () => {
  const [timeOut, setTout] = useState(false);
  var x = window.matchMedia("(max-width: 965px)");

  useEffect(()=>{
    setTimeout(()=>{

      setTout(true)
    },1000)
    },[])
  if(x.matches && !timeOut){
    return <div className='d-flex justify-content-center'><div class="pre-loader"></div></div>; 
  }else{
  return (
    <div>
      orders
    </div>
  )
  }
}

export default Orders
