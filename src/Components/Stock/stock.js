import React, { useEffect, useState } from 'react'
import './stock.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import FilterProducts from './filter/filterProducts';

const Stock = () => {

    const [productData, setProductData] = useState([]);
    const [categoryUrl,setUrl] = useState(window.location.pathname.substring(5));
    
    useEffect(() => {
        axios.get(process.env.REACT_APP_SERVER_URL +'/men/' +  categoryUrl)
        .then((res) => {
            setProductData(res.data)
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
        setUrl(id);
        window.scrollTo(0, 0)
    }

        useEffect(()=>{

            activeCategoryOption(window.location.pathname.substring(5))
        },[productData])

    var x = window.matchMedia("(max-width: 965px)");


    const changeImgOnHover = (productId,action) => {
        const filterArr = productData.filter((each) => {
            if (productId === each.productId) {
                return each;
            }
        })

        const info = filterArr[0];

        const ele = document.querySelector('#'+ productId);
        if(action=='enter'){
            ele.src = info.colors[0].img2
        }else{
            ele.src = info.colors[0].img1

        }

    }

    const displayColors = (productId,action)=>{
        if(!x.matches){

        
        const ele = document.querySelector('#hoverImg' + productId);
        if(action==='enter'){
            ele.classList.remove('d-none');
        }else{
            ele.classList.add('d-none');

        }
    }
    }

    const filterModalToggle =()=>{
        document.querySelector('#opacityBackColor').classList.toggle('d-none');
        document.querySelector('.filter-modal').classList.toggle('width-filterModal')
    }
    if(window.location.pathname=='/men' || window.location.pathname=='/men/'){
        window.location.pathname='/men/All';
    }else{

    
    return (

        <div className='d-flex justify-content-center p-3 pb-0'>
            <div className='container-stock'>
                
                <div className='d-flex justify-content-between align-items-center'>

                    <h1 className='my-3'>
                        <em>MEN [{productData.length}]</em>
                    </h1>
                    <div>
                        {(x.matches) ?
                            <div role='button' className='filterBtn-mobile'  onClick={filterModalToggle}>

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

                <FilterProducts filterModalToggle={filterModalToggle} />
                {(productData.length===0)?<div className='d-flex justify-content-center'><div class="pre-loader"></div></div>:
                <div className='products-grid'>

                    {productData.map((each) => {
                        return (

                            <div className='product-card' onMouseEnter={()=>displayColors(each.productId,'enter')} onMouseLeave={()=>displayColors(each.productId,'leave')} >
                                <picture >
                                    <div className='position-relative' >

                                        <img id={each.productId} src={each.colors[0].img1} decoding="async" loading="lazy"  onMouseEnter={() => changeImgOnHover(each.productId,'enter')} onMouseLeave={() => changeImgOnHover(each.productId,'leave')} />
                                        <div className='product-priceTag'>
                                        ₹{each.priceTag}
                                            
                                        </div>
                                    </div>
                                </picture>

                                <div id={'hoverImg'+ each.productId} className='hoverImg-grid d-none'>
                                {each.colors.map((subEach)=>{
                                    return(

                                <div>
                                <img id={"hoverImg" + each.productId} src={subEach.img1} decoding="async" loading="lazy" />

                                </div>
                                    )
                                })}
                                </div>

                                <div className='pb-4 p-2 fs'>

                                    <div className='fw-light '>
                                        {each.name}
                                    </div>
                                    <span className='fw-light text-muted'>
                                        {each.tag}
                                    </span>
                                    <div className='fw-light text-muted'>
                                        {each.colors.length + " colors"}
                                    </div>
                                </div>
                                <div className='card06-heart'>
                                    <i className='fa-regular fa-heart' />
                                </div>
                            </div>
                        )
                    })}
                </div>}

            </div>
        </div>
    )
                }
}

export default Stock;
