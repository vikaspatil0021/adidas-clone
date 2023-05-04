import React, { useEffect, useRef, useState } from 'react'
import './stock.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import FilterProducts from './filter/filterProducts';
import wishlistTrigger from '../Repeaters/WishList/WishListTrigger';

const Stock = () => {
    const email01 = localStorage.getItem('Email') || null;

    const url = window.location.pathname;

    const [seed, setSeed] = useState(0)

    const [productData, setProductData] = useState([]);
    const [requestedData, setrequestedData] = useState([]);

    const [categoryUrl, setUrl] = useState((url.includes('/men')) ? url.substring(5) : (url.includes('/kids')) ? url.substring(6) : url.substring(7));
    const gender = (url.includes('/men')) ? "/men/" : (url.includes('/kids')) ? "/kids/" : "/women/";
    useEffect(() => {
        axios.get(process.env.REACT_APP_SERVER_URL + '/stock' + gender + categoryUrl)
            .then((res) => {
                setProductData(res.data);
                setrequestedData(res.data);

            })
    }, [categoryUrl])
    useEffect(() => {

        document.getElementById('top-width').style.marginTop = 0;
        document.getElementById("sticky-top-header").classList.replace('fixed-top', 'position-sticky')

        document.getElementById("sticky-top-header").style.top = "auto !important";

    }, [])

    const activeCategoryOption = (id) => {
        const activeoption = document.querySelector('.categoryOption-active');
        if (activeoption) {
            activeoption.classList.remove('categoryOption-active');
        }

        document.querySelector('#category-' + id).classList.add('categoryOption-active');
        setSeed(Math.random())
        setUrl(id);

        window.scrollTo(0, 0)
    }

    useEffect(() => {
        if (url.includes('/men')) {
            var st = url.substring(5);
        } else if (url.includes('/women')) {
            st = url.substring(7);

        } else {
            st = url.substring(6);

        }

        activeCategoryOption(st);

    }, [])

    var x = window.matchMedia("(max-width: 965px)");


    const changeImgOnHover = (productId, action) => {
        const filterArr = productData.filter((each) => {
            if (productId === each.productId) {
                return each;
            }
        })

        const info = filterArr[0];

        const ele = document.querySelector('#' + productId);
        if (action == 'enter') {
            ele.src = info.colors[0].img2
        } else if (action === 'leave') {
            ele.src = info.colors[0].img1
        } else {
            ele.src = action;
        }
    }


    const displayColors = (productId, action) => {
        if (!x.matches) {
            const ele = document.querySelector('#hoverImg' + productId);
            if (action === 'enter') {
                ele.classList.remove('d-none');
            } else {
                ele.classList.add('d-none');
            }
        }
    }

    const filterModalToggle = () => {
        document.querySelector('#opacityBackColor').classList.toggle('d-none');
        document.querySelector('.filter-modal').classList.toggle('width-filterModal')
    }

    const [selectVal, setSelectVal] = useState(1);
    const [pos, setPos] = useState({ firstElement: 0, lastElement: 12 })
    const noOfOptions = Math.ceil(productData.length / 12)



    console.log(pos, selectVal);

    useEffect(() => {
        setPos({ firstElement: selectVal * 12 - 12, lastElement: selectVal * 12 })


    }, [selectVal])

    useEffect(() => {

        var selectDiv = document.querySelector('.select-div-stock select');
        if (selectDiv) {
            selectDiv.value = 1
        }
        setSelectVal(1)
        setPos({ firstElement: 0, lastElement: 12 })

    }, [productData]);

// wishlist icon check
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





    if (url == '/men' || url == '/men/') {
        window.location.pathname = '/men/All';
    } else if (url == '/women' || url === '/women/') {
        window.location.pathname = '/women/All';

    } else if (url == '/kids' || url === '/kids/') {
        window.location.pathname = '/kids/All';

    } else {


        return (

            <div className='d-flex justify-content-center p-3 pb-0'>
                <div className='container-stock'>

                    <div className='d-flex justify-content-between align-items-center'>

                        <h1 className='my-3'>
                            <em>{(url.includes('/men')) ? "MEN" : (url.includes('/kids')) ? "KIDS" : "WOMEN"} [{productData.length}]</em>
                        </h1>
                        <div>
                            {(x.matches) ?
                                <div role='button' className='filterBtn-mobile' onClick={filterModalToggle}>

                                    <i class="bi bi-filter fs-1"></i>
                                </div> : null}
                        </div>
                    </div>

                    <div className='categoryAndFilter-Box pt-2'>
                        <div className='categoryOption'>
                            <Link to='All'>

                                <div id='category-All' onClick={() => activeCategoryOption('All')}>
                                    All
                                </div>
                            </Link>
                            <Link to='Footwear'>


                                <div id='category-Footwear' onClick={() => activeCategoryOption('Footwear')}>
                                    Footwear
                                </div>
                            </Link>
                            <Link to='Clothing'>

                                <div id='category-Clothing' onClick={() => activeCategoryOption('Clothing')}>
                                    Clothing
                                </div>
                            </Link>
                            <Link to='Accessories'>

                                <div id='category-Accessories' onClick={() => activeCategoryOption('Accessories')}>
                                    Accessories
                                </div>
                            </Link>


                        </div>
                        <div role='button' className='filterBtn' onClick={filterModalToggle}>
                            Filter & Sort
                            <i class="bi bi-filter fs-4 ms-2"></i>
                        </div>

                    </div>
                    <div key={seed}>

                        <FilterProducts setProductData={setProductData} requestedData={requestedData} filterModalToggle={filterModalToggle} setSeed={setSeed} />
                    </div>
                    {(productData.length === 0) ? <div className='d-flex justify-content-center'><div className='fs-3 p-5'>No products available</div></div> : null}
                    {(requestedData.length === 0) ? <div className='d-flex justify-content-center'><div class="pre-loader"></div></div> :
                        <div className='products-grid'>
                            {productData.slice(pos.firstElement, pos.lastElement).map((each) => {


                                return (
                                    <div className='position-relative'>
                                        <Link to={url + '/' + each.productId}>

                                            <div className='product-card' onMouseEnter={() => displayColors(each.productId, 'enter')} onMouseLeave={() => displayColors(each.productId, 'leave')} >
                                                <picture >
                                                    <div className='position-relative' >

                                                        <img id={each.productId} src={each.colors[0].img1} decoding="async" loading="lazy" onMouseEnter={() => changeImgOnHover(each.productId, 'enter')} onMouseLeave={() => changeImgOnHover(each.productId, 'leave')} />
                                                        <div className='product-priceTag'>
                                                            ₹{each.priceTag}

                                                        </div>
                                                    </div>
                                                </picture>

                                                <div id={'hoverImg' + each.productId} className='hoverImg-grid d-none'>
                                                    {each.colors.map((subEach) => {
                                                        return (

                                                            <div>
                                                                <img id={"hoverImg" + each.productId} src={subEach.img1} className='colors-optionImg' decoding="async" loading="lazy" onMouseEnter={() => changeImgOnHover(each.productId, subEach.img1)} onMouseLeave={() => changeImgOnHover(each.productId, 'leave')} />

                                                            </div>
                                                        )
                                                    })
                                                    }
                                                </div>

                                                <div className='pb-4 p-2 fs'>

                                                    <div className='fw-light fw-bold'>
                                                        {each.name}
                                                    </div>
                                                    <span className='fw-light text-muted'>
                                                        {each.tag}
                                                    </span>
                                                    <div className='fw-light text-muted'>
                                                        {each.colors.length + " colors"}
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                        <div id={'heart' + each.productId} className='stock-heartIcon' onClick={() => wishlistTrigger({
                                            productId: each.productId,
                                            name: each.name,
                                            img1: each.colors[0].img1,
                                            priceTag: each.priceTag,
                                            url: url + '/' + each.productId
                                        })}>

                                            {(each.wishlist)?<i className='fa-solid fa-heart' />:<i id={'i'+ each.productId} className='fa-regular fa-heart' />
                                                
                                              }
                                        </div>
                                    </div>

                                )

                            })}
                        </div>}
                    <div className='d-flex justify-content-center'>

                        <div className='select-div-stock'>
                            <select onChange={(e) => {
                                setSelectVal(parseInt(e.target.value));
                                window.scrollTo(0, 0)
                            }}>

                                {
                                    [...Array(noOfOptions).keys()].map((each) => {
                                        return <option>{each + 1}</option>

                                    })
                                }
                            </select>
                            <i class='fa-solid fa-angle-down cart-Oty-i' />
                        </div>

                    </div>



                </div>
            </div>
        )
    }
}

export default Stock;
