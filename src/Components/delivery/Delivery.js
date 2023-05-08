import React, { useEffect, useRef, useState } from 'react'
import Address from '../My-Account/account/modals/address';
import axios from 'axios';
import './delivery.css'
import { useDispatch, useSelector } from 'react-redux';
import { addButtonClass } from '../Repeaters/addButtonClass';
const Delivery = () => {
    const email01 = localStorage.getItem('Email');
    const stage = localStorage.getItem('stage');

    const cartData = useSelector((state) => state.cart);
    const dispatch = useDispatch()
    const [timeOut, setTimeOut] = useState(false)
    let totalQTY = 0;
    let totalPrice = 0;
    cartData.forEach((item) => {
        totalQTY += parseInt(item.quantity);
        totalPrice += parseInt(item.quantity) * (parseInt(item.priceTag.replace(' ', '')));
    })

    const [seed, setSeed] = useState('')
    const [address, setAddress] = useState([])
    useEffect(() => {
        axios.get(process.env.REACT_APP_SERVER_URL + '/address/' + email01, {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem('Token01')
            }
        })
            .then((res) => {
                console.log(res.data);
                setAddress(res.data)
            }).catch((err) => {
                console.log(err);
            })
    }, [seed])


    const modalTrigger = (id) => {
        document.querySelector('#' + id).classList.toggle('d-none');
        setSeed(Math.random());

    }
    useEffect(() => {
        setTimeout(() => {
            setTimeOut(true)
        }, 3000)
    }, [])

    const midProcess = useRef(false)

    const placeOrderTrigger = async (btnId) => {
        const radioBtn0 = document.querySelector('#radio0');

        const radioBtn = document.querySelector('input[type="radio"]:checked');

        const btn = document.querySelector('#placeOrderBtn' + btnId);
        const arrowIcon = document.querySelector('#placeOrderBtn' + btnId + ' i');
        const loader = document.querySelector('#placeOrderBtn' + btnId + '-Loader');
        const btnContent = document.querySelector('#placeOrderBtn' + btnId + ' span');
        const border = document.querySelector('#placeOrderBtn' + btnId + ' .border-button')

        if (!radioBtn) {
            radioBtn0.scrollIntoView()
            document.querySelector('#address-warning').classList.remove('d-none')
        } else {
            midProcess.current = true;

            // btn animation
            btn.style.opacity = .6;
            btn.style.cursor = 'not-allowed';
            btnContent.innerHTML = "PLACING ORDER ..."
            arrowIcon.classList.add('d-none');
            loader.classList.remove('d-none');


            document.querySelector('#address-warning').classList.add('d-none');
            const index = radioBtn.id.replace('radio', '');

            var currentDate = new Date()
            var day = currentDate.getDate()
            var month = currentDate.getMonth() + 1
            var year = currentDate.getFullYear()

            const sendData = {
                email: email01,
                products: cartData,
                address: address[index],
                date:  day + "/" + month + "/" + year,
                total: totalPrice
            }
            await axios.post(process.env.REACT_APP_SERVER_URL + '/orders', { order: sendData }, {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem('Token01')
                }
            }).then((res) => {
                console.log(res.data);

                setTimeout(() => {
                    arrowIcon.classList.remove('d-none')
                    arrowIcon.classList.replace("bi-arrow-right", "bi-check2")
                    loader.classList.add('d-none');
                    btn.classList.add('bg-success');
                    border.classList.add('border-success')
                    btnContent.innerHTML = "ORDER PLACED"
                    btn.style.opacity = 1;

                    localStorage.setItem('stage', 'completed')
                    setTimeout(() => {
                        btn.style.cursor = 'pointer';
                        btnContent.innerHTML = "REDIRECTING..."
                        arrowIcon.classList.replace("bi-check2", "bi-arrow-right")
                        midProcess.current = false;
                        dispatch({ type: 'EMPTY_CART' })

                    }, 1000)
                }, 2000)
            }).catch((err) => {
                console.log(err.message);
            })
        }
    }


    if (!email01) {
        window.location.pathname = '/';

    } else if (stage == 'completed') {
        window.location.pathname = '/my-account/order-history';

    } else if (stage !== 'delivery' || cartData.length === 0) {

        window.location.pathname = '/cart';

    } else {
        return (
            <div className='d-flex justify-content-center p-3'>
                {(!timeOut) ? <div className='d-flex justify-content-center'><div class="pre-loader"></div></div>
                    :
                    <div className='container-delivery py-3'>

                        <div className='pe-3'>

                            <div id='Acc-addressBook01-content' className=''>

                                <h3 className='fw-bolder'>
                                    <span className='badge bg-dark rounded-5 me-2'>2</span>
                                    SELECT YOUR ADDRESS
                                </h3>
                                <div className='ms-5'>
                                    You have {address.length}/5 address slots remaining.
                                </div>
                                <div className='Acc-address-delivery'>

                                    <div role='button' className='Acc-card' onClick={() => modalTrigger('Acc-addressModal')}>
                                        <div className='fw-light'>
                                            New Address
                                        </div>
                                        <div>
                                            <i class="fa-solid fa-plus fs-3"></i>
                                        </div>
                                    </div>
                                    {address.map((each, index) => {
                                        return (

                                            <div id={'address' + index} className='Acc-card-delivery py-4'>
                                                <div className='radioBtn-delivery m-0 me-3 mt-2' >
                                                    <input type="radio" id={'radio' + index} role='button' name="gender" value="MALE" />
                                                </div>
                                                <div>
                                                    <div className='fw-bold fs-5'>
                                                        {each.fullName}
                                                    </div>
                                                    <div>
                                                        <div>{each.street}</div>
                                                        <div>{each.landmark}</div>
                                                        <div>
                                                            <span>{each.city}</span>,
                                                            <span> {each.state}</span>,
                                                            <span> {each.pincode}</span>
                                                            , IN

                                                        </div>
                                                        <div>{each.mobile}</div>

                                                    </div>

                                                </div>
                                            </div>
                                        )
                                    }).reverse()}
                                </div>
                                <div id='address-warning' className='d-none mx-3 text-danger'>
                                    Please select your address
                                </div>
                                <div id='Acc-addressModal' className='d-none'>

                                    <Address key={1 + seed} email01={email01} address={address} modalTrigger={modalTrigger} />
                                </div>
                            </div>
                            <h3 className='fw-bolder'>
                                <span className='badge bg-dark rounded-5 mt-5 me-2'>3</span>
                                PAYMENT METHOD
                            </h3>
                            <div className='p-3 border border-3 mb-3  fw-semibold'>
                                CASH ON DELIVERY
                            </div>
                            <div className='poBtn'>

                                <button id='placeOrderBtn01' role='button' className='main-btn my-4 m-0' onClick={() => {
                                    if (midProcess.current == false) {

                                        addButtonClass("placeOrderBtn01");
                                        placeOrderTrigger('01');
                                    }
                                }}>
                                    <span>PLACE ORDER</span>
                                    <div className='border-button'></div>

                                    <i class="bi bi-arrow-right fs-4 ms-3"></i>
                                    <div id='placeOrderBtn01-Loader' class="loader ms-3 d-none"></div>


                                </button>
                            </div>

                        </div>
                        <div className='p-3'>
                            <div>
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
                            </div>
                            <div className='poBtn'>

                                <button id='placeOrderBtn02' role='button' className='main-btn my-4 m-0' onClick={() => {
                                    if (midProcess.current == false) {

                                        addButtonClass("placeOrderBtn02");
                                        placeOrderTrigger('02');
                                    }
                                }}>
                                    <span>PLACE ORDER</span>
                                    <div className='border-button'></div>

                                    <i class="bi bi-arrow-right fs-4 ms-3"></i>
                                    <div id='placeOrderBtn02-Loader' class="loader ms-3 d-none"></div>


                                </button>
                            </div>
                            <div className='mt-4'>
                                {cartData.map((each, index) => {

                                    return (

                                        <div className='cart-card border-0'>
                                            <div className='c01'>
                                                <img src={each.img1} />
                                            </div>
                                            <div className='cardProduct-info p-0 px-3'>
                                                <div className='info-header'>

                                                    <div className='fw-bold'>
                                                        {each.name}
                                                    </div>
                                                    <div className='padding-10'>
                                                        SIZE : {each.size}
                                                    </div>
                                                </div>
                                                <div className='d-flex fw-bold justify-content-between'>

                                                    <div className='padding-10'>
                                                        ₹ {each.quantity * (parseInt(each.priceTag.replace(' ', '')))}
                                                    </div>
                                                    <div>

                                                        Qty:{each.quantity}
                                                    </div>
                                                </div>



                                            </div>

                                        </div>
                                    )
                                })}

                            </div>
                        </div>

                    </div>}
            </div>
        )
    }

}

export default Delivery;
