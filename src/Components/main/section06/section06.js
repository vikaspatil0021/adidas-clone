import React from 'react'

const Section06 = () => {
    return (
        <div className='d-flex flex-wrap justify-content-center'>
            <div className='section06'>

                <div className="title06">
                    <i class='bi bi-arrow-right fs-1 me-3' />
                    New Arrivals
                </div>


                <div>
                    <div className='card06' role='button'>
                        <picture >
                        <div className='position-relative'>

                            <img  src="https://assets.adidas.com/images/w_600,f_auto,q_auto/f49bc6d367c94ceb95fbaf510159dc99_9366/JS_Bones_Campus_80_Shoes_Black_HQ4493_01_standard.jpg" decoding="async" loading="lazy" />
                            <div className='price-tag'>
Sold out
                            </div>
                        </div>
                        </picture>
                        <div className='pb-5 p-2'>

                            <div className=''>

                                JS Bones Campus 80 Shoes
                            </div>
                            <span className='text-muted'>
                                Mens Lifestyle
                            </span>
                        </div>
                        <div className='card06-heart'>
                            <i className='bi bi-heart fw-bolder fs-5' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section06;
