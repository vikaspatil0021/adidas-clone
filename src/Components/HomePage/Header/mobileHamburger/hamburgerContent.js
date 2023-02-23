import React from 'react'

const HamburgerContent = () => {
    const menu1 = {
        c1: ["MEN", "WOMEN", "KIDS"],
        c2: ["SPORTS", "BRANDS", "COLLECTIONS"],
        c3: ["Order Tracker", "My Profile", "Store finder", "Help & Customer Service", "Returns", "Signup"]
    }
    return (
        <div  className="" >
            <div className='px-4 py-3'>
                {
                    menu1.c1.map((each) => {
                        return (

                            <div role='button' className='d-flex justify-content-between my-3 fs-5 fw-bold'>
                                {each}
                                <i className='fa-solid fa-angle-right me-3 fs-6'></i>
                            </div>
                        );
                    })
                }
                {
                    menu1.c2.map((each) => {
                        return (

                            <div role='button' className='d-flex justify-content-between my-3 fs-5'>
                                {each}
                                <i className='fa-solid fa-angle-right me-3  fs-6'></i>
                            </div>
                        );
                    })
                }
                
                <a href='' role='button' className='d-flex  my-3 fs-5'>
                    TERREX
                </a>
                <a href='' role='button' className='d-flex my-3 fs-5'>
                    ADIDAS SPORTSWEAR
                </a>
                <div role='button' className='d-flex justify-content-between my-3 fs-5 fw-bold text-danger'>
                    OUTLET
                    <i className='fa-solid fa-angle-right me-3 fs-6'></i>
                </div>
            </div>
            <div className='p-4 pb-5 border-top' >
                {
                    menu1.c3.map((each) => {
                        return (

                            <div role='button' className='d-flex justify-content-between my-3 fs-5'>
                                {each}
                                <i className='fa-solid fa-angle-right me-3  fs-6'></i>
                            </div>
                        );
                    })
                }
            </div>

        </div>
    )
}

export default HamburgerContent;
