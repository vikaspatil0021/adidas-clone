import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import './productPage.css'
import { addButtonClass } from '../Repeaters/addButtonClass'
import { useSelector, useDispatch } from 'react-redux';
import { ADD_TO_CART, REMOVE_FROM_CART } from '../../redux/actions/action';
const ProductPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
        document.getElementById('top-width').style.marginTop = 0;
        document.getElementById("sticky-top-header").classList.replace('fixed-top', 'position-sticky')

        document.getElementById("sticky-top-header").style.top = "auto !important";

    }, [])
   

    const [info, setInfo] = useState('');
    const [similarInfo, setSimilarInfo] = useState('')
    const [arrImg, setArrImg] = useState([])

    const url = window.location.pathname;
    const gender = (url.includes('/men')) ? "Men" : (url.includes('/women') ? "Women" : "Kids");
    const genderurl = (url.includes('/men')) ? "men" : (url.includes('/women') ? "women" : "kids")
    useEffect(() => {

        if (info !== '') {
            const imges = info.colors[0];
            setArrImg([imges.img1, imges.img2, imges.img3, imges.img4])

            axios.get(process.env.REACT_APP_SERVER_URL + '/' + genderurl + '/' + info.category)
                .then((res) => {
                    // console.log(res.data);


                    setSimilarInfo(res.data)
                }).catch((err) => {
                    console.log(err);
                })
        }
    }, [info])


    useEffect(() => {
        axios.get(process.env.REACT_APP_SERVER_URL + url)
            .then((res) => {
                // console.log(res.data);
                setInfo(res.data[0])
            }).catch((err) => {
                console.log(err);
            })
    }, [])


    const addActiveClass = (id) => {
        const activeEle = document.querySelector(".activeProductSize");
        if (activeEle) {
            activeEle.classList.remove('activeProductSize');
        }
        const ele = document.querySelector("#sizes-" + id);
        ele.classList.add('activeProductSize')
    }
    const addActiveClassColors = (id) => {
        const activeEle = document.querySelector(".active-colors");
        if (activeEle) {
            activeEle.classList.remove('active-colors');
        }
        const ele = document.querySelector("#colors-" + id);
        ele.classList.add('active-colors');

        const imges = info.colors[id];
        window.scrollTo(0, 0)
        setArrImg([imges.img1, imges.img2, imges.img3, imges.img4])


    }
    if (!document.querySelector(".active-colors")) {
        const ele = document.querySelector("#colors-0")
        if (ele) {

            ele.classList.add('active-colors')
        }
    }


    // description toggle
    const containerToggle = (id) => {
        const eleI = document.querySelector('#i-' + id);
        const eleContent = document.querySelector('#desc-content');
        if (eleI.classList.contains('fa-angle-down')) {

            eleI.classList.replace('fa-angle-down', 'fa-angle-up');
            eleContent.classList.remove('d-none')
        } else {
            eleI.classList.replace('fa-angle-up', 'fa-angle-down');
            eleContent.classList.add('d-none')

        }
    }
    // image click magnifying effect

    const imageManginfy = (e, action, divId) => {
        var mImg = document.querySelector("#" + divId + ' img');
        var div = document.querySelector('#' + divId)

        if (action === 'click') {

            if (mImg.style.transform === 'scale(1)') {
                mImg.style.transform = 'scale(2)';
                mImg.style.cursor = 'zoom-out'

            } else {
                mImg.style.transform = 'scale(1)';
                mImg.style.left = 0;
                mImg.style.top = 0;
                mImg.style.cursor = 'zoom-in'
            }
        } else if (action === 'enter') {


            if (mImg.style.transform === 'scale(2)') {

                var clientX = e.clientX - div.offsetLeft;
                var clientY = e.clientY - div.offsetTop + window.pageYOffset;
                var mWidth = div.offsetWidth;
                var mHeight = div.offsetHeight;

                clientX = clientX / mWidth * 100
                clientY = clientY / mHeight * 100




                mImg.style.left = 50 - clientX + '%';
                mImg.style.top = 50 - clientY + '%';

            }
        } else {
            mImg.style.transform = 'scale(1)';
            mImg.style.left = 0;
            mImg.style.top = 0;
            mImg.style.cursor = 'zoom-in'

        }
    }



    var colorsEle01 = document.querySelector("#colorsPosition");
    var prevTOP = useRef(0);
    useEffect(() => {

        if (colorsEle01) {

            var viewportOffset01 = colorsEle01.getBoundingClientRect();
            prevTOP.current = viewportOffset01.top;
        }
    }, [colorsEle01])

    var x = window.matchMedia("(max-width: 1100px)");

    window.onscroll = () => {
        if (!x.matches) {
            var currentScrollPos = window.pageYOffset;
            var colorsEle = document.querySelector("#colorsPosition");
            const colorsPos = document.querySelector('.option-colors');

            if (currentScrollPos < colorsPos.offsetTop + 30 - prevTOP.current) {
                colorsEle.classList.add('colors-Position')
            } else {
                colorsEle.classList.remove('colors-Position')

            }
        }
    }
    // redux store handling
    const storeData = useSelector((state) => state.cartreducer.cart)
    console.log(storeData);
    const dispatch = useDispatch();

    const midProcess = useRef(false)

    const AddToCart = (sizeId, btnId) => {
        const colorEle = document.querySelector('.active-colors');
        const sizeEle = document.querySelector('.activeProductSize');
        const sizeEleWarn = document.querySelector('#size-warning-' + sizeId);


        const btn = document.querySelector('#' + btnId);
        const arrowIcon = document.querySelector('#' + btnId + ' i');
        const loader = document.querySelector('#' + btnId + '-Loader');
        const btnContent = document.querySelector('#' + btnId + ' span')
        console.log(btnContent);
        if (sizeEle) {
            midProcess.current = true;
            sizeEleWarn.style.display = 'none';

            // btn animation
            btn.style.opacity = .6;
            btn.style.cursor = 'not-allowed';
            btnContent.innerHTML = "ADDING ..."
            arrowIcon.classList.add('d-none');
            loader.classList.remove('d-none');

            var pId = info.productId + '_' + colorEle.id.slice(7) + '_' + sizeEle.innerHTML
            var filArr = storeData.filter((item) => {
                if (pId === item.productId) {

                    return item
                }
            })
            if (filArr.length != 0) {
                dispatch(REMOVE_FROM_CART(filArr[0]))

                var dispathData = {
                    ...filArr[0],
                    quantity: filArr[0].quantity + 1
                }
            } else {

                dispathData = {
                    productId: pId,
                    img1: info.colors[colorEle.id.slice(7)].img1,
                    size: sizeEle.innerHTML,
                    quantity: 1,
                    name: info.name,
                    priceTag: info.priceTag
                }
            }

            setTimeout(() => {
                arrowIcon.classList.remove('d-none')
                arrowIcon.classList.replace("bi-arrow-right", "bi-check2")
                loader.classList.add('d-none');
                btnContent.innerHTML = "ADDED"
                
                dispatch(ADD_TO_CART(dispathData));

                setTimeout(() => {
                    btn.style.opacity = 1;
                    btn.style.cursor = 'pointer';
                    btnContent.innerHTML = "ADD TO BAG"
                    arrowIcon.classList.replace("bi-check2", "bi-arrow-right")

                    midProcess.current = false;
                }, 1000)
            }, 2000)

        } else {
            sizeEleWarn.style.display = 'block'
        }

    }
    if (info === '') {
        return <div className='d-flex justify-content-center'><div class="pre-loader"></div></div>;
    } else {
        return (
            <div className=''>
                <div className='pPage-box01'>
                    <div className='mob-box'>
                        <div>
                            {gender} • {info.tag.charAt(0).toUpperCase() + info.tag.slice(1)}
                        </div>
                        <div className='b02-name'>
                            {info.name}
                        </div>
                        <div className='priceDiv'>
                            ₹<div className='fw-bold'>{info.priceTag}</div><span> per pair</span>

                        </div>
                        <div>(Inclusive of all taxes)</div>
                    </div>
                    <div className='b01'>
                        <div className='img-container'>
                            {arrImg.map((img, index) => {
                                return (
                                    <div id={'div-' + index} onClick={(e) => imageManginfy(e, 'click', "div-" + index)} onMouseMove={(e) => imageManginfy(e, 'enter', "div-" + index)} onMouseLeave={(e) => imageManginfy(e, 'leave', "div-" + index)}>
                                        <img src={img} />
                                    </div>
                                )
                            })}

                        </div>
                        <div className='option-colors'>
                            <div id='colorsPosition' className={(x.matches) ? 'bg-white' : "colors-Position bg-white p-2"}>

                                <div className='colors-no pt-2'>
                                    {info.colors.length} colors available
                                </div>
                                <div className='d-flex'>


                                    {info.colors.map((each, index) => {
                                        return (
                                            <div >
                                                <img id={'colors-' + index} src={each.img1} onClick={() => addActiveClassColors(index)} role='button' />
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                        </div>
                        <div className='mob-sizes'>

                            <div className='fw-bold mt-lg-5'>Sizes</div>
                            <div className='product-sizes'>
                                <div id='sizes-mob-01' onClick={() => addActiveClass('mob-01')}>
                                    06
                                </div>

                                <div id='sizes-mob-02' onClick={() => addActiveClass('mob-02')}>
                                    07
                                </div>
                                <div id='sizes-mob-03' onClick={() => addActiveClass('mob-03')}>
                                    08
                                </div>

                                <div id='sizes-mob-04' onClick={() => addActiveClass('mob-04')}>
                                    09
                                </div>
                                <div id='sizes-mob-05' onClick={() => addActiveClass('mob-05')}>
                                    10
                                </div>

                                <div id='sizes-mob-06' onClick={() => addActiveClass('mob-06')}>
                                    11
                                </div>
                            </div>
                            <div id='size-warning-01' className='product-sizes-warning'>
                                Please select your size
                            </div>
                        </div>
                        <div className='mob-bag-btn'>

                            <button id='mobaddToCartBtn' type='button' role='button' className='main-btn w-100 justify-content-between' onClick={() => {
                                if (midProcess.current == false) {

                                    addButtonClass("mobaddToCartBtn");
                                    AddToCart('01', 'mobaddToCartBtn');
                                }
                            }} >
                                <span>ADD TO BAG</span>
                                <div className='border-button'></div>

                                <i class="bi bi-arrow-right fs-4 ms-3"></i>
                                <div id='mobaddToCartBtn-Loader' class="loader ms-3 d-none"></div>


                            </button>
                            <div className='regular-heart'>
                                <i class="fa-regular fa-heart fs-5"></i>
                            </div>
                        </div>
                        <div className='description'>
                            <div id='desc' className='desc-accor' onClick={() => containerToggle('desc')}>
                                Description
                                <i id='i-desc' className='fa-solid fa-angle-down fs-4' />
                            </div>
                            <div id='desc-content' className='desc-content d-none'>
                                {info.description}
                            </div>

                        </div>
                        <div className='similarProducts-name'>
                            YOU MAY ALSO LIKE
                        </div>
                        <div className='similarProducts-overflow'>

                            {(similarInfo != '') ?

                                similarInfo.filter((item) => {
                                    if (info.productId !== item.productId) {
                                        return item;
                                    }
                                }).map((each) => {
                                    return (
                                        <a href={'/' + genderurl + '/' + each.category + '/' + each.productId}>
                                            <div className='simPro-card'  >
                                                <picture >

                                                    <div className='position-relative' >

                                                        <img id={each.productId} src={each.colors[0].img1} decoding="async" loading="lazy" />
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
                                                <div className='card06-heart'>
                                                    <i className='fa-regular fa-heart' />
                                                </div>
                                            </div>
                                        </a>
                                    )
                                }) : null}

                        </div>
                    </div>
                    <div className='b02'>
                        <div>
                            {gender} • {info.tag.charAt(0).toUpperCase() + info.tag.slice(1)}
                        </div>
                        <div className='b02-name'>
                            {info.name}
                        </div>
                        <div className='priceDiv'>
                            ₹<div className='fw-bold'>{info.priceTag}</div><span> per pair</span>

                        </div>
                        <div>(Inclusive of all taxes)</div>
                        <div className='fw-bold mt-5'>Sizes</div>
                        <div className='product-sizes'>
                            <div id='sizes-01' onClick={() => addActiveClass('01')}>
                                06
                            </div>

                            <div id='sizes-02' onClick={() => addActiveClass('02')}>
                                07
                            </div>
                            <div id='sizes-03' onClick={() => addActiveClass('03')}>
                                08
                            </div>

                            <div id='sizes-04' onClick={() => addActiveClass('04')}>
                                09
                            </div>
                            <div id='sizes-05' onClick={() => addActiveClass('05')}>
                                10
                            </div>

                            <div id='sizes-06' onClick={() => addActiveClass('06')}>
                                11
                            </div>
                        </div>
                        <div id='size-warning-02' className='product-sizes-warning'>
                            Please select your size
                        </div>
                        <div className='bag-btn'>

                            <button id='addToCartBtn' type='button' role='button' className='main-btn w-100 justify-content-between' onClick={() => {
                                if (midProcess.current == false) {

                                    addButtonClass("addToCartBtn");
                                    AddToCart('02', 'addToCartBtn');
                                }
                            }}>
                                <span>ADD TO BAG</span>
                                <div className='border-button'></div>
                                <i class="bi bi-arrow-right fs-4 "></i>
                                <div id='addToCartBtn-Loader' class="loader ms-3 d-none"></div>

                            </button>
                            <div className='regular-heart'>
                                <i class="fa-regular fa-heart fs-5"></i>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        )
    }
}

export default ProductPage;
