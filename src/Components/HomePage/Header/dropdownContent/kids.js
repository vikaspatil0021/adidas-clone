
import React from 'react'

const DropdownKids = () => {

    return (
        <div className="dropdown-content" >
            <div className='d-flex border-bottom px-5'>

                <div className='border-end col-3 ps-5 pt-5 pe-2'>
                    <a className='drop-a'>FEATURED</a>
                    <ul className='p-0 m-0'>
                        <li className='mt-2'><a className='drop-lia'>
                            New Arrivals
                        </a></li>
                        <li><a className='drop-lia'>
                            LEGO®
                        </a></li>
                        <li className=' mt-3'><a className='drop-lia'>
                            WINTER SHOP
                        </a></li>

                        <li className=' mt-3'><a className='drop-lia text-danger fw-semibold'>
                            Outlet

                        </a></li>

                    </ul>

                </div>
                <div className='d-flex col-9 pe-5 me-5'>
                    <div className='col-4 ps-5 pt-5 pe-2'>
                        <a className='drop-a'>YOUTH 8 - 16 YEARS</a>
                        <ul className='p-0 m-0'>
                            <li className='mt-2'><a className='drop-lia'>
                                Boys Shoes

                            </a></li>
                            <li><a className='drop-lia'>
                                Girls Shoes
                            </a></li>

                            <li className='mt-2'><a className='drop-lia'>
                                Boys Clothing
                            </a></li>
                            <li><a className='drop-lia'>
                                Girls Clothing
                            </a></li>
                            <li className=' mt-3'><a className='drop-lia'>
                                Accessories
                            </a></li>


                        </ul>

                    </div>
                    <div className='col-4 ps-5 pt-5 pe-2 pb-3'>
                        <a className='drop-a'>KIDS 4 - 8 YEARS</a>
                        <ul className='pt-2 p-0'>
                            <li className='mt-2'><a className='drop-lia'>
                                Boys Shoes

                            </a></li>
                            <li><a className='drop-lia'>
                                Girls Shoes
                            </a></li>

                            <li className='mt-2'><a className='drop-lia'>
                                Boys Clothing
                            </a></li>
                            <li><a className='drop-lia'>
                                Girls Clothing
                            </a></li>
                            <li className=' mt-3'><a className='drop-lia'>
                                Accessories
                            </a></li>

                        </ul>

                    </div>
                    <div className='col-4 ps-5 pt-5 pe-2'>
                        <a className='drop-a'>TODDLERS 0 - 4 YEARS</a>
                        <ul className='pt-2 p-0'>
                            <li><a className='drop-lia'>
                                Shoes
                            </a></li>
                            <li className=' mb-3'><a className='drop-lia'>
                                Clothing
                            </a></li>

                        </ul>
                    </div>


                </div>
            </div>
            <div className='border-bottom px-5 d-flex'>
                <div className='col-3 ps-5 py-3'>

                    <a className='drop-a'>All Kids</a>
                </div>
                <div className='col-9 d-flex me-5 pe-5   align-items-center'>
                    <div className='col-4  ps-5 pe-2'>

                        <a className='drop-a'>All Youth</a>

                    </div>
                    <div className='col-4 ps-5 pe-2'>
                        <a className='drop-a'>All Kids</a>

                    </div>
                    <div className='col-4 ps-5 pe-2'>
                        <a className='drop-a'>All Toddlers</a>

                    </div>
                    

                </div>
            </div>

        </div>
    )
}


export default DropdownKids;
