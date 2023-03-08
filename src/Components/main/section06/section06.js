import React from 'react';

const arr = [
    {
        link: "https://assets.adidas.com/images/w_600,f_auto,q_auto/f49bc6d367c94ceb95fbaf510159dc99_9366/JS_Bones_Campus_80_Shoes_Black_HQ4493_01_standard.jpg",
        priceTag: 'Sold out',
        t1: 'JS Bones Campus 80 Shoes',
        t2: 'Men Lifestyle'
    },
    {
        link: "https://assets.adidas.com/images/w_600,f_auto,q_auto/7a7455f439cc439588f3af5101555f2c_9366/JS_Bones_Campus_80_Shoes_Black_HQ4494_01_standard.jpg",
        priceTag: '₹13 999.00',
        t1: 'JS Bones Campus 80 Shoes',
        t2: 'Men Lifestyle',
        new: "new"
    },
    {
        link: "https://assets.adidas.com/images/w_600,f_auto,q_auto/4f804358759448f99e17af61016c7d68_9366/Stan_Smith_Bonega_Shoes_White_IE4758_01_standard.jpg",
        priceTag: '₹11 999.00',
        t1: 'Stan Smith Bonega Shoes',
        t2: 'Women Lifestyle',
        new: "new"
    },
    {
        link: "https://assets.adidas.com/images/w_600,f_auto,q_auto/88ab041b45354c3c8a2eaf9c0060f874_9366/Superstar_Bonega_Shoes_White_IE4756_01_standard.jpg",
        priceTag: '₹11 999.00',
        t1: 'Superstar Bonega Shoes',
        t2: 'Women Lifestyle',
        new: "new"
    },
    {
        link: "https://assets.adidas.com/images/w_600,f_auto,q_auto/abd58b3af81148bf8decaf9b00f8aeff_9366/Forum_Bonega_Shoes_White_IE4753_01_standard.jpg",
        priceTag: '₹10 999.00',
        t1: 'Forum Bonega Shoes',
        t2: 'Women Basketball',
        new: "new"
    },
    {
        link: "https://assets.adidas.com/images/w_600,f_auto,q_auto/e379b7ef6eb94e3a9394af51000a8af1_9366/Forum_Low_Shoes_White_IE4745_01_standard.jpg",
        priceTag: '₹8 999.00',
        t1: 'Forum Low Shoes',
        t2: 'Men Basketball',
        new: "new"
    },
    {
        link: "https://assets.adidas.com/images/w_600,f_auto,q_auto/2f44f104e3f44415bf34af51000a3d7c_9366/Forum_Low_Shoes_White_IE4744_01_standard.jpg",
        priceTag: '₹8 999.00',
        t1: 'Forum Low Shoes',
        t2: 'Men Basketball',
        new: "new"
    },
    {
        link: "https://assets.adidas.com/images/w_600,f_auto,q_auto/38debae04ae44d63aa88af2301524e7d_9366/NMD_S1_RYAT_Shoes_Green_IE4686_01_standard.jpg",
        priceTag: '₹24 999.00',
        t1: 'NMD S1 RYAT Shoes',
        t2: 'Originals',
        new: "new"
    },
    {
        link: "https://assets.adidas.com/images/w_600,f_auto,q_auto/adfba03941a745f9ac18af8900d2d553_9366/Stan_Smith_x_Moomin_Shoes_White_ID6646_01_standard.jpg",
        priceTag: '₹10 999.00',
        t1: 'Stan Smith & Moomin Shoes',
        t2: 'Women Lifestyle',
        new: "new"
    },
    {
        link: "https://assets.adidas.com/images/w_600,f_auto,q_auto,t_ivy/374c2db3afd8415ba3cbaf8e000838e4_faec/IVY_PARK_TOP_TEN_2000_White_ID5107_HM16.jpg",
        priceTag: '₹19 999.00',
        t1: 'IVY PARK TOP TEN 2000',
        t2: 'Ivy Park',
    },
    {
        link: "https://assets.adidas.com/images/w_600,f_auto,q_auto,t_ivy/59f3c66ffa0844078c6eaf8e00078339_faec/Top_Ten_2000_Shoes_Orange_ID5105_HM16.jpg",
        priceTag: '₹19 999.00',
        t1: 'Forum Low Shoes',
        t2: 'Ivy Park',
    },
    {
        link: "https://assets.adidas.com/images/w_600,f_auto,q_auto,t_ivy/f0efb47a51fe4abcad47af8e0006d9d3_faec/Nite_Jogger_Shoes_Grey_ID5101_HM16.jpg",
        priceTag: '₹16 999.00',
        t1: 'NMD S1 RYAT Shoes',
        t2: 'Ivy Park',
    }

]

const Section06 = () => {

    const scrollEffect = (whichSide) => {

        const section06scrollBar = document.querySelector('.section06-overflow');
        if (whichSide == 'right') {
            section06scrollBar.scrollLeft += 1500;
        } else {
            section06scrollBar.scrollLeft -= 1500;

        }

    }
    return (
        <div className='d-flex flex-wrap justify-content-center'>
            <div className='section06'>
                <div className='d-flex justify-content-between'>

                <div className="title06 paddingLeft">
                    <i class='bi bi-arrow-right fs-1 me-3' />
                    New Arrivals
                </div>
                <div className='arrowScroller'>

                    <button className='arrowBtn05' onClick={() => scrollEffect("left")}>
                        <i class='fa fa-solid fa-angle-left' />
                    </button>
                    <button className='arrowBtn05' onClick={() => scrollEffect("right")}>
                        <i class='fa fa-solid fa-angle-right' />

                    </button>
                </div>
                </div>


                <div className='paddingLeft section06-overflow'>
                    {arr.map((each) => {
                        return (

                            <div className='card06' role='button'>
                                <picture >
                                    <div className='position-relative'>

                                        <img src={each.link} decoding="async" loading="lazy" />
                                        <div className='price-tag'>
                                            {each.priceTag}
                                        </div>
                                    </div>
                                </picture>
                                <div className='pb-4 p-2'>

                                    <div className='fw-light '>
                                        {each.t1}
                                    </div>
                                    <span className='fw-light text-muted'>
                                        {each.t2}
                                    </span>
                                    {(each.new) ? (<div>{each.new}</div>) : null}
                                </div>
                                <div className='card06-heart'>
                                    <i className='fa-regular fa-heart' />
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
