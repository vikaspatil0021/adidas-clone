import React, { useEffect, useRef } from 'react';
import "./cart.css";
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART } from '../../redux/actions/action';
import { addButtonClass } from '../Repeaters/addButtonClass';

const Cart = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart);
  useEffect(() => {
    window.scrollTo(0, 0)
    document.getElementById('top-width').style.marginTop = 0;
    document.getElementById("sticky-top-header").classList.replace('fixed-top', 'position-sticky')

    document.getElementById("sticky-top-header").style.top = "auto !important";

  }, [])

  let totalQTY = 0;
  let totalPrice = 0;
  cartData.forEach((item) => {
    totalQTY += parseInt(item.quantity);
    totalPrice += parseInt(item.quantity) * (parseInt(item.priceTag.replace(' ', '')));
  })

  var x = window.matchMedia("(max-width: 750px)");
  // setting initing value of all selects
  useEffect(() => {
    cartData.forEach((each, index) => {
      let selectEle = document.querySelector('#select-Qty-' + index);
      selectEle.value = each.quantity;
    })
  }, [cartData])

  // change the cart based on Qty changed
  const changeOTY = (eachItem, qtyVAl) => {

    var dispathData = {
      productId: eachItem.productId,
      quantity: qtyVAl
    }
    dispatch(UPDATE_CART(dispathData))

  }
  var prevTOP = useRef(0);
  useEffect(() => {
    var btnEle = document.querySelector('#checkOutBtn02');

    if (btnEle) {

      var viewportOffset01 = btnEle.getBoundingClientRect();
      prevTOP.current = viewportOffset01.top;
    }

  }, [])

  window.onscroll = () => {
    var currentScrollPos = window.pageYOffset;
    const btnPosChange = document.querySelector('.mob-checkOutBtn-div');
    const forBtnPosition = document.querySelector('#forBtnPosition')


    const nonFixedPos = forBtnPosition.offsetTop + forBtnPosition.offsetHeight
    if ((currentScrollPos + prevTOP.current + 70) < nonFixedPos) {
      btnPosChange.classList.add('checkoutBtn-position')
    } else {
      btnPosChange.classList.remove('checkoutBtn-position')

    }
  }
  return (
    <div className='d-flex justify-content-center p-3'>
      <div className='cart-conatiner'>
        <div className='pe-lg-4'>
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
            {cartData.map((each, index) => {

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

                            <select name="Oty" id={"select-Qty-" + index} onChange={(e) => { changeOTY(each, e.target.value) }}>
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
                            <i class='fa-solid fa-angle-down cart-Oty-i' />
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
        {(totalPrice !== 0) ?
          <div id='forBtnPosition' className='px-lg-3'>
            <div className='checkOutBtn-div'>

              <button id='checkOutBtn01' type='button' role='button' className='main-btn w-100 justify-content-between' onClick={() => {

                addButtonClass("checkOutBtn01");

              }} >
                <span>CHECKOUT</span>
                <div className='border-button'></div>

                <i class="bi bi-arrow-right fs-4 ms-3"></i>


              </button>
            </div>
            <div className='mt-5 mb-4 fw-bold fs-5'>
              ORDER SUMMARY
            </div>
            <div className='d-flex justify-content-between'>
              <div>{totalQTY} items</div>
              <div>{"  ₹" + totalPrice}</div>
            </div>
            <div className='d-flex justify-content-between mt-2'>
              <div>Delivery</div>
              <div>FREE</div>
            </div>
            <div className='d-flex justify-content-between mt-2'>
              <div>Discount</div>
              <div>-  ₹500</div>
            </div>
            <hr />
            <div className='d-flex justify-content-between mt-2 fw-bold'>
              <div>
                Total
                <div className='fw-normal'>

                  ( Inclusive of all taxes )
                </div>
              </div>
              <div>₹{totalPrice - 500}</div>
            </div>
            <hr />
            <div style={{ height: '50px' }}>

              <div className='mob-checkOutBtn-div checkoutBtn-position'>

                <button id='checkOutBtn02' type='button' role='button' className='main-btn w-100 justify-content-between' onClick={() => {

                  addButtonClass("checkOutBtn02");

                }} >
                  <span>CHECKOUT</span>
                  <div className='border-button'></div>

                  <i class="bi bi-arrow-right fs-4 ms-3"></i>


                </button>
              </div>
            </div>

          </div> : null}
      </div>
    </div>
  )
}

export default Cart;
