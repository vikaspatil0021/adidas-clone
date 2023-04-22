import React, { useEffect } from 'react';
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
// setting initing value of all selects
  useEffect(()=>{
    storeData.forEach((each,index)=>{
      let selectEle= document.querySelector('#select-Qty-' + index);
      selectEle.value = each.quantity;
    })
  },[])

  return (
    <div className='d-flex justify-content-center p-3'>
      <div className='cart-conatiner'>
        <div>
          <div className='cart-header'>
            YOUR BAG
          </div>
          <div className='mt-3 fs-5'>
            TOTAL [ {totalQTY} items ] <span className='fw-bold'> {"  ₹" + totalPrice}</span>
          </div>
          <div className='mt-2'>
            Items in your bag are not reserved — check out now to make them yours.

          </div>
          <div className='mt-4'>
            {storeData.map((each,index) => {
               
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
                      <div>

                        <div className='cart-qty'>
                          <span>{(x.matches) ? "Qty: " : ''}</span>
                          <div className='select-div'>

                          <select name="Oty" id={"select-Qty-" + index}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>

                          </select>
                          <i  class='fa-solid fa-angle-down cart-Oty-i' />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='rmItemBtn' onClick={() => dispatch(REMOVE_FROM_CART(each))}>
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
