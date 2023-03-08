import React from 'react'
import "./footer.css";


const arr = [
    {
        main: 'PRODUCTS',
        sub: [
            "Footwear",
            "Clothing",
            "Accessories",
            "Outlet – Sale",
            "New Arrivals",
            "Special Offer"
        ]
    },
    {
        main: 'SPORTS',
        sub: [
            "Running",
            "Football",
            "Gym/Training",
            "Tennis",
            "Outdoor",
            "Basketball",
            "Swimming",
            "Skateboarding"
        ]
    },
    {
        main: 'COLLECTIONS',
        sub: [
            "Ultraboost",
            "Superstar",
            "NMD",
            "Stan Smith",
            "Sustainability",
            "Predator",
            "Parley",
            "adicolor"
        ]
    },
    {
        main: 'SUPPORT',
        sub: [
            "Help",
            "Customer Services",
            "Returns & Exchanges",
            "Shipping",
            "Order Tracker",
            "Store Locator",
            "Running Shoe Finder",
            "Bra Fit Guide",
            "adiclub",
            "adiclub Terms and conditions"
        ]
    },
    {
        main: 'COMPANY INFO',
        sub: [
            "About Us",
            "adidas stories",
            "adidas Apps",
            "Entity Details",
            "Press",
            "Careers"
        ]
    }
]
const Footer = () => {
    // button click animation------------------>
    const addButtonClass = (id) => {
        document.querySelector("#" + id).classList.toggle('main-btn-onClick');
        document.querySelector("#" + id + " .border-button").classList.toggle('border-button-onClick');

        setTimeout(() => {
            document.querySelector("#" + id).classList.toggle('main-btn-onClick');
            document.querySelector("#" + id + " .border-button").classList.toggle('border-button-onClick');

        }, 150);
    }
    return (
        <section>
            <div role='button' className='py-3 backtoTop' onClick={() => window.scrollTo(0, 0)}>
                <i className='fa-solid fa-angle-up fs-4 mx-3 ' />
                BACK TO TOP

            </div>
            <div className='py-3 mobile-options' >
                <div >
                    <span role='button'>

                        LOGIN
                    </span>
                </div>
                <div >
                    <span role='button'>

                        YOUR BAG(0)
                    </span>
                </div>

            </div>

            <div className='d-flex flex-wrap justify-content-center pt-5 pb-4 align-items-center' style={{ backgroundColor: "#ede734" }}>
                <div className='fs-2 mb-4 mx-5 fw-bolder text-center'>
                    JOIN OUR ADICLUB & GET 15% OFF
                </div>
                <button id='footerBtn01' role='button' className=' main-btn mb-4 m-0' onClick={() => addButtonClass("footerBtn01")}>
                    SIGN UP FOR FREE
                    <i class="bi bi-arrow-right fs-4 ms-3"></i>
                    <div className='border-button'>

                    </div>
                </button>
            </div>
            <div className='d-flex justify-content-center'>
                <div className='footer-quicklinks'>
                    {arr.map((each) => {
                        return (

                            <div className=''>
                                <div className='fw-bold fs-5 mb-2'>
                                    {each.main}
                                </div>

                                {each.sub.map((subEach) => {
                                    return (
                                        <div role='button' className='fw-light under-line'>
                                            {subEach}
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                    <div className=''>
                        <div className='fw-bold fs-5 mb-2'>
                            FOLLOW US
                        </div>
                        <div role='button' className='d-inline-flex rounded-5 bg-dark p-2 opacity-75'>
                            <i class="fa-brands fa-instagram fs-5 text-white"></i>

                        </div>
                    </div>

                </div>
                <div className='footer-quicklinks-mobile'>
                    <div>
                        <div role='button' className=''>

                            Delivery


                        </div>

                        <div role='button' className=''>

                            Order Tracker
                        </div>
                        <div role='button' className=''>

                            Store Finder

                        </div>
                        <div role='button' className=''>

                            adiclub terms and conditions
                        </div>
                    </div>
                    <div>


                        <div role='button' className=''>

                            Returns & Refunds
                        </div>


                        <div role='button' className=''>

                            Help
                        </div>
                        <div role='button' className=''>

                            adiclub
                        </div>


                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-center bg-dark'>
                <div className='lastPart'>
                    <div className='content01 py-4'>
                        <div role='button' className='mx-3'>

                            Cookie Settings
                        </div>
                        <div className='symbol'>
                            |
                        </div>

                        <div role='button' className='mx-3'>

                            Privacy Policy
                        </div>
                        <div className='symbol'>
                            |
                        </div>

                        <div role='button' className='mx-3'>

                            Terms and Conditions
                        </div>
                        <div className='symbol'>
                            |
                        </div>

                        <div role='button' className='mx-3'>

                            Cookies
                        </div>

                    </div>
                    <div className='text-white fs-6 fw-lighter d-flex justify-content-center '>
                        ©2021 adidas India Marketing Pvt. Ltd
                    </div>
                </div>
            </div>






        </section>
    )
}

export default Footer;
