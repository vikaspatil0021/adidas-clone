import React, { useEffect, useState } from 'react';
import { scrollEffect } from '../../Repeaters/scrollEffect';
import axios from 'axios';
import { Link } from 'react-router-dom';

const arr = [
    {
        link: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/61fe3434be124b81ad49ab0600c31d43_9366/EG1758_01_standard.jpg",
        priceTag: '₹2 299.00',
        t1: 'Adilette Aqua Slides',
        t2: 'Sportswear'
    },
    {
        link: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/bf50b13715c94496bb2dab3a01050a38_9366/GD3576_03_standard.jpg",
        priceTag: '₹1 299.00',
        t1: 'MID-CUT CREW SOCKS - 3 PAIRS',
        t2: 'Originals'
    },
    {
        link: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/e7b20808b5204cac9e2cad1101648f2f_9366/GT8937_21_model.jpg",
        priceTag: '₹2 999.50',
        t1: 'adidas Own The Run Astro Pants',
        t2: 'Performance'

    },
    {
        link: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/fe27764fa46e41aaade8af5d010e80da_9366/HT7122_21_model.jpg",
        priceTag: '₹5 299.00',
        t1: 'Jamaica 23 Home Jersey',
        t2: 'Performance'
    },
    {
        link: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/97f86eede1374615a058a81700a27444_9366/CQ2809_01_standard.jpg",
        priceTag: '₹10 999.00',
        t1: 'Gazelle Shoes',
        t2: 'Originals'
    },
    {
        link: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/44423d034a8b43a79331af3a00eb8e07_9366/IA6329_21_model.jpg",
        priceTag: '₹5 599.00',
        t1: 'Adicolor Classics Firebird Track Pants',
        t2: 'Originals'
    },
    {
        link: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/9846b43f6434426b84faaef900bafa2c_9366/GY7338_01_standard.jpg",
        priceTag: '₹10 999.00',
        t1: 'Gazelle Shoes',
        t2: 'Originals'
    },
    {
        link: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/fd828302cc254e0d8d8ead6500ac3040_9366/GZ5922_01_standard.jpg",
        priceTag: '₹2 399.00',
        t1: 'Adilette Shower Slides',
        t2: 'Sportswear'
    },
    {
        link: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/7dbf2ba45c1e4207a1fdae1900c6b6bd_9366/H35903_21_model.jpg",
        priceTag: '₹4 999.00',
        t1: 'ARSENAL 22/23 HOME JERSEY',
        t2: 'Performance'
    },
    {
        link: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/89d4add00c924298848dad6b00708830_9366/GW0342_01_standard.jpg",
        priceTag: '₹1959.50',
        t1: 'Adilette Sandals',
        t2: 'Sportswear',
    }

]

const Section08 = () => {

    const [currentData, setCurrentData] = useState([])
    console.log(currentData);
    useEffect(() => {
        axios.get(process.env.REACT_APP_SERVER_URL + '/women/All')
            .then((res) => {
                var data = res.data.filter((each, index) => {
                    if ((each.category === 'Footwear' || each.category === 'Clothing') && index < 20) {
                        return each;
                    }
                }).reverse()
                setCurrentData(data)
            }).catch((err) => {
                console.log(err);
            })
    }, [])
    // css in this section is same same as section06 
    return (
        <div className='d-flex flex-wrap justify-content-center'>
            <div className='section08'>
                <div className='d-flex justify-content-between'>

                    <div className="title08 paddingLeft">
                        BESTSELLERS
                    </div>
                    <div className='arrowScroller'>

                        <button className='arrowBtn05' onClick={() => scrollEffect("left", "section08-overflow")}>
                            <i class='fa fa-solid fa-angle-left' />
                        </button>
                        <button className='arrowBtn05' onClick={() => scrollEffect("right", "section08-overflow")}>
                            <i class='fa fa-solid fa-angle-right' />

                        </button>
                    </div>
                </div>


                <div className='paddingLeft section08-overflow'>
                    {currentData.map((each) => {
                        return (
                            <Link to={'/women/All/' + each.productId}>

                            <div className='card06' role='button'>
                                {/* card css is same same as card in section06 */}
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

export default Section08;
