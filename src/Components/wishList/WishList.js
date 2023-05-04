import React, { useEffect, useState } from 'react'
import './wishlist.css'
import axios from 'axios'
import { Link } from 'react-router-dom';
const WishList = () => {
    const email01 = localStorage.getItem('Email') || null;

    const [wlData, setWLData] = useState([])

    useEffect(() => {
        axios.get(process.env.REACT_APP_SERVER_URL + '/wishlist/' + email01, {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem('Token01')
            }
        })
            .then((res) => {
                console.log(res.data);
                setWLData(res.data)
            }).catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <div className='d-flex justify-content-center p-3'>
            <div className='wishList-container'>
                <div className='cart-header'>
                    MY WISHLIST
                </div>
                <div className='my-3 fs-5'>
                    {wlData.length} items
                </div>

                <div className='products-grid'>
                {wlData.map((each)=>{
                    return(
                        <Link to={each.url} >

                     
                    <div className='position-relative'>

                        <div className='product-card' >
                            <picture >
                                <div className='position-relative' >

                                    <img src={each.img1} decoding="async" loading="lazy" />
                                    <div className='product-priceTag'>
                                        ₹{each.priceTag}

                                    </div>
                                </div>
                            </picture>

                            <div className='pb-4 p-2 fs'>

                                <div className='fw-light fw-bold'>
                                    {each.name}
                                </div>

                            </div>
                            <div className='stock-heartIcon'>
                                <i className='fa-solid fa-heart' />
                            </div>
                        </div>
                    </div>

                    </Link>
                    )
                })}


                </div>
            </div>
        </div>
    )
}

export default WishList
