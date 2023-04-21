import React from 'react';
import "./cart.css";
import { useDispatch, useSelector } from 'react-redux';
import { REMOVE_FROM_CART } from '../../redux/actions/action';

const Cart = () => {
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state.cartreducer.cart);


  let totalQTY = 0;
  let totalPrice = 0;
  storeData.forEach((item) => {
    totalQTY += item.quantity;
    totalPrice += item.quantity * (parseInt(item.priceTag.replace(' ', '')));
  })

  var x = window.matchMedia("(max-width: 750px)");


  return (
    <div className='d-flex justify-content-center p-3'>
      <div className='cart-conatiner'>
        <div>
          <div className='cart-header'>
            YOUR BAG
          </div>
          <div className='mt-3 fs-5'>
            TOTAL [ {totalQTY} items ] <span className='fw-bold'> {"  ₹" + totalPrice}.00</span>
          </div>
          <div className='mt-2'>
            Items in your bag are not reserved — check out now to make them yours.

          </div>
          <div className='mt-4'>
            {storeData.map((each) => {
              return (

                <div className='cart-card'>
                  <div className='c01'>
                    <img src={each.img1} />
                  </div>
                  <div className='cardProduct-info'>
                <div className='info-header'>

                    <div className='fw-bold'>
                      {each.name}
                    </div>
                    <div className='padding-10'>
                      SIZE : {each.size}
                    </div>
                </div>
                    <div className='info-footer'>

                      <div className='padding-10'>
                        ₹ {each.quantity * (parseInt(each.priceTag.replace(' ', '')))}
                      </div>
                      <div className='cart-qty'>
                        <span>{(x.matches)?"Qty: ":''}{each.quantity}</span>
                        <i class='fa-solid fa-angle-down' />
                      </div>
                    </div>

                    <div className='rmItemBtn' onClick={()=>dispatch(REMOVE_FROM_CART(each))}>
                      <i class='fa-solid fa-xmark ' />
                    </div>

                  </div>

                </div>
              )
            })}

          </div>
        </div>
        <div>
          c
        </div>
      </div>
    </div>
  )
}

export default Cart;
