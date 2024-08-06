import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./order.css"

const Orders = () => {
  const stage = localStorage.getItem('stage');
  const email01 = localStorage.getItem('Email');

  const [timeOut, setTout] = useState(false);
  var x = window.matchMedia("(max-width: 965px)");

  useEffect(() => {
    setTimeout(() => {

      setTout(true)
    }, 1000)


    if (stage === 'completed') {
      localStorage.removeItem('stage');

    }
  }, [])

  const [orders, setOrders] = useState([])

  useEffect(() => {
    axios.get('https://adidas-clone-backend.vercel.app/orders/' + email01, {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem('Token01')
      }
    })
      .then((res) => {
        console.log(res.data);
        setOrders(res.data.orders);
      }).catch((err) => {
        console.log(err);
      })
  },[])

  if (x.matches && !timeOut && orders.length===0) {
    return <div className='d-flex justify-content-center'><div class="pre-loader"></div></div>;
  } else {
    return (
      <div className='d-flex justify-content-center p-3'>
        <div className='orders-container py-3'>
          <div className='fw-bold fs-5 mb-3'>
            YOUR ORDERS
          </div>
          <div>
            {[...orders].reverse().map((each) => {
              return (
                <>
                <div>{each.date}</div>
                <div className='border order-grid mb-4'>
                <div>
                  {each.products.map((pro) => {
                    return (
                      <div className='d-flex'>
                        <img src={pro.img1} className='pro-img mb-1' />
                        <div className='p-2'>
                          <div className='fw-bold'>{pro.name}</div>
                          <div>₹{pro.priceTag}</div>
                          <div>Oty:{pro.quantity}</div>
                          <div>Size:{pro.size}</div>

                        </div>
                      </div>
                    )
                  })}
                  </div>
                  <div className='border p-2'>
                    <div className='fw-bold fs-5'>
                      {each.address.fullName}
                    </div>
                    <div>
                      <div>{each.address.street}</div>
                      <div>{each.address.landmark}</div>
                      <div>
                        <span>{each.address.city}</span>,
                        <span> {each.address.state}</span>,
                        <span> {each.address.pincode}</span>
                        , IN

                      </div>
                      <div>{each.address.mobile}</div>
                      <hr className='m-0 my-1' />
                      <div className='d-flex fw-bold'>
                      Total : ₹ {each.total}
                      </div>

                    </div>

                  </div>
                </div>
                </>
              )
            })}

          </div>

        </div>
      </div>
    )
  }
}

export default Orders
