import React, { useEffect, useState } from 'react';
import { scrollEffect } from '../../Repeaters/scrollEffect';
import axios from 'axios';
import { Link } from 'react-router-dom';
import wishlistTrigger from '../../Repeaters/WishList/WishListTrigger';
import { useDispatch } from 'react-redux';


const Section06 = () => {

    const email01 = localStorage.getItem('Email') || null;
    const dispatch = useDispatch();

    const [currentData, setCurrentData] = useState([])
    console.log(currentData);
    useEffect(() => {
        axios.get('https://adidas-clone-backend.vercel.app/stock/men/All')
            .then((res) => {
                var data = res.data.reverse().filter((each, index) => {
                    if ((each.category === 'Footwear' || each.category === 'Clothing') && index < 20) {
                        return each;
                    }
                })
                setCurrentData(data)
            }).catch((err) => {
                console.log(err);
            })
    }, [])

    // wishlist icon check
    const [wlData, setWLData] = useState([])

    useEffect(() => {
        axios.get('https://adidas-clone-backend.vercel.app/wishlist/' + email01, {
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
        <div className='d-flex flex-wrap justify-content-center'>
            <div className='section06'>
                <div className='d-flex justify-content-between'>

                    <div className="title06 paddingLeft">
                        <i class='bi bi-arrow-right fs-1 me-3' />
                        New Arrivals
                    </div>
                    <div className='arrowScroller'>

                        <button className='arrowBtn05' onClick={() => scrollEffect("left", "section06-overflow")}>
                            <i class='fa fa-solid fa-angle-left' />
                        </button>
                        <button className='arrowBtn05' onClick={() => scrollEffect("right", "section06-overflow")}>
                            <i class='fa fa-solid fa-angle-right' />

                        </button>
                    </div>
                </div>


                <div className='paddingLeft section06-overflow'>
                    {currentData.map((each) => {
                        return (
                            <div className='position-relative'>
                                <Link to={'/men/All/' + each.productId}>

                                    <div className='card06' role='button'>
                                        <picture >
                                            <div className='position-relative'>

                                                <img src={each.colors[0].img1} decoding="async" loading="lazy" />
                                                <div className='price-tag'>
                                                    {each.priceTag}
                                                </div>
                                            </div>
                                        </picture>
                                        <div className='pb-4 p-2'>

                                            <div className='fw-bold '>
                                                {each.name}
                                            </div>
                                            <span className='fw-light text-muted'>
                                                {each.tag}
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                                <div id={'heart' + each.productId} className='stock-heartIcon m-2 mt-1 pt-2' onClick={() => {
                                    wishlistTrigger({
                                        productId: each.productId,
                                        name: each.name,
                                        img1: each.colors[0].img1,
                                        priceTag: each.priceTag,
                                        url: '/men/All/' + each.productId
                                    })
                                    setTimeout(() => {

                                        dispatch({ type: "CHANGE" });
                                    }, 800)
                                }}>
                                    {(wlData.map((wlEach) => {
                                        return wlEach.productId

                                    }).includes(each.productId)) ? <i id={'i' + each.productId} className='fa-solid fa-heart' /> : <i id={'i' + each.productId} className='fa-regular fa-heart' />

                                    }
                                </div>
                            </div>

                        )
                    })}


                </div>
            </div>
        </div>
    )
}

export default Section06;
