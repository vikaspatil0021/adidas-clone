import axios from 'axios'
import React, { useEffect, useState } from 'react'
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
    if (info !== '') {

        var imges = info.colors[0];
        var arrImg = [imges.img1, imges.img2, imges.img3, imges.img4]
    }

    const url = window.location.pathname;
    const gender = (url.includes('men')) ? "Men" : (url.includes('women') ? "Women" : "Kids")
    useEffect(() => {
        axios.get(process.env.REACT_APP_SERVER_URL + url)
            .then((res) => {
                console.log(res.data);
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
    // image click magnifying effect
    const [imgClicked, setImgClicked] = useState(false)

    const imageManginfy = (e, action, divId) => {
        var mImg = document.querySelector("#" + divId + ' img');
        var div = document.querySelector('#' + divId)

        if(action==='click'){

            if(mImg.style.transform === 'scale(1)'){
                mImg.style.transform ='scale(2)';
                mImg.style.cursor = 'zoom-out'
                
            }else{
                mImg.style.transform = 'scale(1)';
                mImg.style.left = 0;
            mImg.style.top = 0;
                mImg.style.cursor = 'zoom-in'
            }
        }else if (action === 'enter') {


            if(mImg.style.transform === 'scale(2)'){

            var clientX = e.clientX - div.offsetLeft;
            var clientY = e.clientY - div.offsetTop + window.pageYOffset;
            var mWidth = div.offsetWidth;
            var mHeight = div.offsetHeight;

            clientX = clientX / mWidth * 100
            clientY = clientY / mHeight * 100



                console.log(window.pageYOffset)
                
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

    // mDiv.forEach(div => {

    //     if (imgClicked) {
    //         div.addEventListener('mousemove', (e) => {

    //             var clientX = e.clientX - div.offsetLeft;
    //             var clientY = e.clientY - div.offsetTop + window.pageYOffset;
    //             var mWidth = div.offsetWidth;
    //             var mHeight = div.offsetHeight;

    //             clientX = clientX / mWidth * 100
    //             clientY = clientY / mHeight * 100



    //             console.log(window.pageYOffset)
    //             mImg.style.transform = 'scale(2)';

    //             mImg.style.left = 50 - clientX + '%';
    //             mImg.style.top = 50 - clientY + '%';

    //         });
    //     }

    //     div.addEventListener('mouseleave', () => {
    //         mImg.style.transform = 'scale(1)';
    //         mImg.style.left = 0;
    //         mImg.style.top = 0;
    //         setImgClicked(false)
    //     })
    // })

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
                                        <img src={img} onClick={() => setImgClicked(true)} />
                                    </div>
                                )
                            })}

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
