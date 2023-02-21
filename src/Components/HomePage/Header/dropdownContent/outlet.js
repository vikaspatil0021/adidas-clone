import React from 'react'

const DropdownOutlet = () => {

    return (
        <div className="dropdown-content" >
            <div className='d-flex border-bottom px-5'>

                <div className='border-end col-3 ps-5 pt-5 pe-2'>
                    <a className='drop-a'>MEN</a>
                    <ul className='p-0 m-0'>
                        <li className='mt-2'><a className='drop-lia'>
                            All Men's
                        </a></li>
                        <li><a className='drop-lia'>
                            Footwear
                        </a></li>

                        <li><a className='drop-lia'>
                            Clothing
                        </a></li>
                        <li><a className='drop-lia'>
                            Accessories
                        </a></li>

                    </ul>

                </div>
                <div className='d-flex col-9 pe-5 me-5'>
                    <div className='col-4 ps-5 pt-5 pe-2'>
                        <a className='drop-a'>WOMEN</a>
                        <ul className='p-0 m-0'>
                            <li className='mt-2'><a className='drop-lia'>
                                All Women's
                            </a></li>
                            <li><a className='drop-lia'>
                                Footwear
                            </a></li>

                            <li><a className='drop-lia'>
                                Clothing
                            </a></li>
                            <li><a className='drop-lia'>
                                Accessories
                            </a></li>



                        </ul>

                    </div>
                    <div className='col-3 ps-5 pt-5 pe-2'>
                        <a className='drop-a'>KIDS</a>
                        <ul className='pt-2 p-0'>
                            <li ><a className='drop-lia'>
                                All Kid's
                            </a></li>
                            <li><a className='drop-lia'>
                                Footwear
                            </a></li>

                            <li><a className='drop-lia'>
                                Clothing
                            </a></li>
                            <li><a className='drop-lia'>
                                Accessories
                            </a></li>


                        </ul>

                    </div>
                    <div className='col-3 ps-5 pt-5 pe-2 pb-3'>
                        <a className='drop-a'>COLLECTIONS </a>
                        <ul className='pt-2 p-0'>






                            <li><a className='drop-lia'>
                                Originals
                            </a></li>
                            <li><a className='drop-lia'>
                                Ultraboost
                            </a></li>

                            <li><a className='drop-lia'>
                                Superstar
                            </a></li>
                            <li><a className='drop-lia'>
                                NMD
                            </a></li>
                            <li><a className='drop-lia'>
                                Adilette
                            </a></li>
                        </ul>
                    </div>


                </div>
            </div>

        </div>
    )
}


export default DropdownOutlet;

