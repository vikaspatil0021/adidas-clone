import React, { useEffect } from 'react'
import { Link, Navigate, Outlet } from 'react-router-dom';
import { tabBtn } from '../Repeaters/My-Account/tabBtn';
import './myAccount.css'
const MyAccount = () => {
    var token01 = localStorage.getItem("Token01");

    const needHelpArr = [
        "Products",
        "Ordering & Payments",
        "Delivery",
        "Promotions & Vouchers",
        "Return & Refund",
        "Account & Newsletter",
        "Company information"
    ]
    useEffect(() => {

        document.getElementById('top-width').style.marginTop = 0;
        document.getElementById("sticky-top-header").classList.replace('fixed-top', 'position-sticky')

        document.getElementById("sticky-top-header").style.top = "auto !important";


    }, [])







    useEffect(() => {

        if (window.location.pathname === '/my-account/profile') {
            tabBtn('myAcc-account', 'active-tab')

        } else if (window.location.pathname === '/my-account/order-history') {
            tabBtn('myAcc-orders', 'active-tab')

        }
    }, [])

    if (window.location.pathname === '/my-account' || window.location.pathname === '/my-account/') {
        window.location.pathname = '/my-account/profile'


    } else if (!token01) {
        return (<Navigate to='/' />)
    } else {


        return (
            <div >
                <div className='myAcc-header'>
                    <ul className='p-0'>
                        <Link to='order-history'>

                            <li id='myAcc-orders' role='button' onClick={() => tabBtn("myAcc-orders", 'active-tab')} >ORDERS</li>
                        </Link>
                        <Link to='profile'>

                            <li id='myAcc-account' role='button' onClick={() => tabBtn('myAcc-account', 'active-tab')}>ACCOUNT</li>
                        </Link>
                    </ul>

                </div>
                <div className='bgColor'>

                    <Outlet />
                    <div className='needHelp'>
                    <div>


                        <h5 className='d-inline fw-bold mx-3'>
                            NEED HELP?
                        </h5>
                        <div className='need-help-box mt-3'>
                            {needHelpArr.map((each) => {
                                return (
                                    <div>
                                        {each}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    </div>
                </div>


            </div>
        )
    }

}

export default MyAccount;
