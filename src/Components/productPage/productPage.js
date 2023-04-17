import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './productPage.css'
import { addButtonClass } from '../Repeaters/addButtonClass'
const ProductPage = () => {

    useEffect(() => {

        document.getElementById('top-width').style.marginTop = 0;
        document.getElementById("sticky-top-header").classList.replace('fixed-top', 'position-sticky')

        document.getElementById("sticky-top-header").style.top = "auto !important";

    }, [])

    const [info, setInfo] = useState('');
    if(info!==''){

        var imges = info.colors[0];
        var arrImg = [imges.img1,imges.img2,imges.img3,imges.img4]
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

    const addActiveClass =(id)=>{
        const activeEle = document.querySelector(".activeProductSize");
        if(activeEle){
            activeEle.classList.remove('activeProductSize');
        }
        const ele = document.querySelector("#sizes-" + id);
        ele.classList.add('activeProductSize')
    }
    if(info===''){
        return <div className='d-flex justify-content-center'><div class="pre-loader"></div></div>;
    }else{

    
    return (
        <div className=''>
            <div className='pPage-box01'>
                <div className='b01'>
                    <div className='img-container'>
                        {arrImg.map((img)=>{
                            return (
                                <div>
                                    <img src={img} className='w-100' />
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
                            <div id='sizes-01' onClick={()=>addActiveClass('01')}>
                                10
                            </div>

                            <div id='sizes-02' onClick={()=>addActiveClass('02')}>
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
