import React, { useEffect, useState } from 'react';
import { scrollEffect } from '../../Repeaters/scrollEffect';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Section06 = () => {
    const [currentData,setCurrentData] = useState([])
console.log(currentData);
    useEffect(()=>{
        axios.get(process.env.REACT_APP_SERVER_URL + '/men/All')
                .then((res) => {
                    var data = res.data.reverse().filter((each,index)=>{
                        if((each.category==='Footwear' || each.category==='Clothing')&&index<20){
                            return each;
                        }
                    })
                    setCurrentData(data)
                }).catch((err) => {
                    console.log(err);
                })
    },[])

   
    return (
        <div className='d-flex flex-wrap justify-content-center'>
            <div className='section06'>
                <div className='d-flex justify-content-between'>

                <div className="title06 paddingLeft">
                    <i class='bi bi-arrow-right fs-1 me-3' />
                    New Arrivals
                </div>
                <div className='arrowScroller'>

                    <button className='arrowBtn05' onClick={() => scrollEffect("left","section06-overflow")}>
                        <i class='fa fa-solid fa-angle-left' />
                    </button>
                    <button className='arrowBtn05' onClick={() => scrollEffect("right","section06-overflow")}>
                        <i class='fa fa-solid fa-angle-right' />

                    </button>
                </div>
                </div>


                <div className='paddingLeft section06-overflow'>
                    {currentData.map((each) => {
                        return (
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

                                    <div className='fw-light '>
                                        {each.name}
                                    </div>
                                    <span className='fw-light text-muted'>
                                        {each.tag}
                                    </span>
                                </div>
                                <div className='card06-heart'>
                                    <i className='fa-regular fa-heart' />
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

export default Section06;
