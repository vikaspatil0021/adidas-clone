import React from 'react';
import { menu1 } from "./menuArray";
import { Link } from 'react-router-dom';
const HamburgerContent = (props) => {
    var token01 = localStorage.getItem("Token01");


    const offCanvasSubmenu = (id) => {


        document.querySelector('#' + id).classList.toggle("openCanvas-submenu");


    }
    return (
        <div className="" >
            <div className='px-4 py-3'>
                {
                    menu1.c1.map((each) => {
                        return (
                            <div>
                                <div role='button' className='d-flex justify-content-between align-items-center my-3 fs-5 fw-bold' onClick={() => { offCanvasSubmenu(each.main) }}>
                                    {each.main}
                                    <i className='fa-solid fa-angle-right me-3 fs-6'></i>
                                </div>
                                <div id={each.main} className='offCanvas-submenu'>
                                    <div className='border-bottom mb-3'>
                                        <div role='button' className='fw-bold fs-6' onClick={() => { offCanvasSubmenu(each.main) }}>

                                            <i class="fa-solid fa-angle-left pt-2 pb-1 ps-2 my-3 me-3 ms-3 fs-5"></i>
                                            {each.main}
                                        </div>
                                        <div role='button' className='mb-3  ms-3 hamburger-closeButton' onClick={() => { props.openCanvasHamburger(); }}>
                                            <i class="fa-solid fa-xmark fs-2"></i>
                                        </div>
                                    </div>

                                    {each.sub.map((subEach) => {


                                        return (
                                            <div>

                                                <div role='button' className='d-flex justify-content-between align-items-center ms-5 mb-3 fs-5' onClick={() => { offCanvasSubmenu(each.main + (subEach.main).substring(0, 2)) }}>
                                                    {subEach.main}
                                                    <i className='fa-solid fa-angle-right me-5 fs-6'></i>
                                                </div>
                                                <div id={each.main + (subEach.main).substring(0, 2)} className='offCanvas-submenu'>
                                                    <div className='border-bottom'>
                                                        <div role='button' className='fw-bold fs-6' onClick={() => { offCanvasSubmenu(each.main + (subEach.main).substring(0, 2)) }}>

                                                            <i class="fa-solid fa-angle-left pt-2 pb-1 ps-2 my-3 me-3 ms-3 fs-5"></i>
                                                            {subEach.main}
                                                        </div>
                                                        <div role='button' className='mb-3  ms-3 hamburger-closeButton' onClick={() => { props.openCanvasHamburger(); }}>
                                                            <i class="fa-solid fa-xmark fs-2"></i>
                                                        </div>
                                                    </div>
                                                    <div className='scroll pt-3 pb-4'>
                                                        {subEach.supersub.map((SupersubEach) => {


                                                            return (
                                                                <a href={'/' + each.main.toLowerCase() + '/' + subEach.main}>

                                                                    <div role='button' className='d-flex justify-content-between ms-5 mb-3 fs-5' >
                                                                        {SupersubEach}
                                                                    </div>
                                                                </a>
                                                            )

                                                        })}

                                                    </div>
                                                </div>

                                            </div>
                                        )

                                    })}


                                </div>
                            </div>
                        );
                    })
                }
            </div>
            <div className='p-4 pb-5 border-top' >
            {(token01)?<>

            <a href='/my-account/profile'>

                <div role='button' className='d-flex justify-content-between my-3 fs-5'>
                    My Account
                </div>
            </a>
           
            <a href='/my-account/order-history'>

                <div role='button' className='d-flex justify-content-between my-3 fs-5'>
                    My Orders
                </div>
            </a>
            </>:<>

            <a href='/account-login'>

                <div role='button' className='d-flex justify-content-between my-3 fs-5'>
                    Login
                </div>
            </a>
            <a href='/account-register'>


                <div role='button' className='d-flex justify-content-between my-3 fs-5'>
                    Signup
                </div>
            </a>
            </>}


            </div>

        </div>
    )
}

export default HamburgerContent;
