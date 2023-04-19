import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import './productPage.css'
import { addButtonClass } from '../Repeaters/addButtonClass'
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

            axios.get(process.env.REACT_APP_SERVER_URL +'/'+genderurl +'/' + info.category)
            .then((res) => {
                console.log(res.data);
                
                
                setSimilarInfo(res.data)
            }).catch((err) => {
                console.log(err);
            })
        }
    }, [info])
  

    useEffect(() => {
         axios.get(process.env.REACT_APP_SERVER_URL + url)
            .then((res) => {
                console.log(res.data);
                setInfo(res.data[0])
            }).catch((err) => {
                console.log(err);
            })
        },[])
   

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
        setArrImg([imges.img1, imges.img2, imges.img3, imges.img4])

        window.scrollTo(0, 0)

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
    if (colorsEle01) {

        var viewportOffset01 = colorsEle01.getBoundingClientRect();
        var prevTOP = viewportOffset01.top;
    }

    var x = window.matchMedia("(max-width: 1100px)");

    window.onscroll = () => {
        if (!x.matches) {
            var currentScrollPos = window.pageYOffset;
            var colorsEle = document.querySelector("#colorsPosition");
            const colorsPos = document.querySelector('.option-colors');


            if (currentScrollPos < colorsPos.offsetTop + 30 - prevTOP) {
                colorsEle.classList.add('colors-Position')
            } else {
                colorsEle.classList.remove('colors-Position')

            }
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
                                <div id='sizes-mob01' onClick={() => addActiveClass('mob01')}>
                                    10
                                </div>

                                <div id='sizes-mob02' onClick={() => addActiveClass('mob02')}>
                                    11
                                </div>
                            </div>
                        </div>
                        <div className='mob-bag-btn'>

                            <button id='mobaddToCartBtn' type='button' role='button' className='main-btn w-100 justify-content-between' onClick={() => {
                                addButtonClass("mobaddToCartBtn");

                            }}>
                                ADD TO BAG
                                <div className='border-button'></div>
                                <i id='addToCartBtnIcon' class="bi bi-arrow-right fs-4 "></i>


                            </button>
                            <div>
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
                            
                            {(similarInfo!='')?

                            similarInfo.filter((item)=>{
                                if(info.productId!==item.productId){
                                    return item;
                                }
                            }).map((each)=>{
                                return(
                                <a href={'/' + genderurl + '/' + each.category +'/'+each.productId}>
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
                            }):null}

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
                                10
                            </div>

                            <div id='sizes-02' onClick={() => addActiveClass('02')}>
                                11
                            </div>
                        </div>
                        <div className='bag-btn'>

                            <button id='addToCartBtn' type='button' role='button' className='main-btn w-100 justify-content-between' onClick={() => {
                                addButtonClass("addToCartBtn");

                            }}>
                                ADD TO BAG
                                <div className='border-button'></div>
                                <i id='addToCartBtnIcon' class="bi bi-arrow-right fs-4 "></i>


                            </button>
                            <div>
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
