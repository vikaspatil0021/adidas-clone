import React, { useEffect } from 'react'
import './stock.css'
import { Link } from 'react-router-dom';

const Stock = () => {
    useEffect(() => {
        document.querySelector('#category-All').classList.add('categoryOption-active')
    }, [])
    const activeCategoryOption = (id) => {
        const activeoption = document.querySelector('.categoryOption-active');
        if (activeoption) {
            activeoption.classList.remove('categoryOption-active');
        }

        document.querySelector('#category-' + id).classList.add('categoryOption-active')
    }

    var x = window.matchMedia("(max-width: 965px)");
    const arr = [1,2,3,4,5,6,7]
    return (
        <div className='d-flex justify-content-center p-3 pb-0'>
            <div className='container-stock'>
                {(x.matches) ? null : <div className='pb-4'>
                    <Link to='/' className='quickLink'>
                        Home

                    </Link>
                    /
                    <Link to='/men' className='quickLink'>
                        Men

                    </Link>
                </div>}
                <div className='d-flex justify-content-between align-items-center'>

                    <h1 className='my-3'>
                        <em>MEN</em>
                    </h1>
                    <div>
                        {(x.matches) ?
                            <div role='button' className='filterBtn-mobile'>

                                <i class="bi bi-filter fs-1"></i>
                            </div> : null}
                    </div>
                </div>

                <div className='categoryAndFilter-Box'>
                    <div className='categoryOption'>
                        <div id='category-All' onClick={() => activeCategoryOption('All')}>
                            All
                        </div>
                        <div id='category-Footwear' onClick={() => activeCategoryOption('Footwear')}>
                            Footwear
                        </div>
                        <div id='category-Clothing' onClick={() => activeCategoryOption('Clothing')}>
                            Clothing
                        </div>
                        <div id='category-Sports' onClick={() => activeCategoryOption('Sports')}>
                            Sports
                        </div>
                        <div id='category-Featured' onClick={() => activeCategoryOption('Featured')}>
                            Featured
                        </div>
                        <div id='category-Originals' onClick={() => activeCategoryOption('Originals')}>
                            Originals
                        </div>
                    </div>
                    <div role='button' className='filterBtn'>

                        Filter & Sort
                        <i class="bi bi-filter fs-4 ms-2"></i>
                    </div>
                </div>
                <div className='products-grid'>
                        {arr.map((each)=>{
                            return(

                         
                    <div className='product-card' role='button'>
                        <picture >
                            <div className='position-relative'>

                                <img src="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/cb218f4ba9d440f99d72ac5a0159d131_9366/samba-vegan-shoes.jpg" decoding="async" loading="lazy" />
                                <div className='product-priceTag'>
                                    each.priceTag
                                </div>
                            </div>
                        </picture>
                        <div className='pb-4 p-2'>

                            <div className='fw-light '>
                                each.t1
                            </div>
                            <span className='fw-light text-muted'>
                                each.t2
                            </span>
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

export default Stock;
