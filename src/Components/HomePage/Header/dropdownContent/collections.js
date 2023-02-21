import React from 'react'
import dc1 from "./imgCollectionsJs/dc-1.png";
import dc2 from "./imgCollectionsJs/dc-2.png";
import dc3 from "./imgCollectionsJs/dc-3.png";
import dc4 from "./imgCollectionsJs/dc-4.png";

const DropdownCollections = () => {


    return (
        <div className="dropdown-content" >
            <div className='d-flex border-bottom px-5'>


                <div className='d-flex col-9 pe-5 me-5'>
                    <div className='col-4 ps-5 pt-4 pe-2'>
                        <a className='drop-a'>WHAT'S NEW?</a>
                        <ul className='pt-2 p-0 m-0'>
                            <img src={dc1} className="card-img mb-2" />
                            <li><a className='drop-lia'>
                                Impossible Is Nothing

                            </a></li>
                            <li><a className='drop-lia'>
                                New Arrivals

                            </a></li>
                            <li><a className='drop-lia'>
                                Stories
                            </a></li>
                            <li><a className='drop-lia '>
                                adiClub
                            </a></li>
                            <li><a className='drop-lia'>


                                Sports Bra Guide
                            </a></li>






                        </ul>

                    </div>
                    <div className='col-4 ps-5 pt-4 pe-2'>
                        <a className='drop-a'>COLLABORATIONS</a>
                        <ul className='pt-2 p-0'>
                            <img src={dc2} className="card-img mb-2" />
                            <li><a className='drop-lia'>
                                Pharrell
                            </a></li>
                            <li><a className='drop-lia'>
                                Karlie Kloss

                            </a></li>
                            <li ><a className='drop-lia'>
                                Spezial
                            </a></li>
                            <li><a className='drop-lia'>
                                Stella McCartney

                            </a></li>
                            <li><a className='drop-lia'>


                                Y-3
                                <li><a className='drop-lia'>
                                    Rohit Sharma
                                </a></li>
                            </a></li>


                        </ul>

                    </div>
                    <div className='col-4 ps-5 pt-4 pe-2'>
                        <a className='drop-a'>SPORTS </a>
                        <ul className='pt-2 p-0'>
                            <img src={dc3} className="card-img mb-2" />

                            <li><a className='drop-lia'>
                                Adizero
                            </a></li>
                            <li><a className='drop-lia'>
                                4D
                            </a></li>

                            <li ><a className='drop-lia'>
                                Ultraboost

                            </a></li>
                            <li ><a className='drop-lia'>



                                Predator
                                
                                
                                                          </a></li>
                            <li><a className='drop-lia'>
                            Copa
                            </a></li>
                            <li><a className='drop-lia'>
                            X
                            </a></li>

                            <li ><a className='drop-lia'>
                            Supernova  


                            </a></li>



                        </ul>
                    </div>
                    <div className='col-4 ps-5 pt-4 pe-2 pb-3'>
                        <a className='drop-a'>ORIGINALS</a>
                        <ul className='pt-2 p-0 m-0'>
                            <img src={dc4} className="card-img mb-2" />
                            <li><a className='drop-lia'>
                            GAZELLE
                            </a></li>
                            <li><a className='drop-lia'>
                            SAMBA
                            </a></li>
                            <li><a className='drop-lia'>
                            Superstar
                            </a></li>
                            <li><a className='drop-lia'>
                            FORUM
                            </a></li>
                            <li><a className='drop-lia'>
                            ZX
                            </a></li>
                            <li><a className='drop-lia'>
                            NMD
                            </a></li>
                            <li><a className='drop-lia'>
                            Stan Smith

                            </a></li>
                            <li><a className='drop-lia'>
                            Continental 80

                            </a></li>
                        </ul>

                    </div>

                </div>


            </div>
    
        </div>
    )
}


export default DropdownCollections;

