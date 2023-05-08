import React from 'react';
import { scrollEffect } from '../../Repeaters/scrollEffect';


const arr = [
    {
        video: 'https://brand.assets.adidas.com/video/upload/q_auto,vc_auto,c_scale,w_0.5/video/upload/horizontal-ss23-collective-power-global-launch-dotcom-hp-teaser-carousel-d_enynci.mp4',
        c1: 'Collective Power',
        c2: 'We’re even better together. Tap into the collective connection.',
        url:'/women/All'

    },
    {
        img: 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enIN/Images/IN-BL-LOCAL-HP-C-IMAGE_tcm209-1002459.jpg',
        c1: 'BE SUPPORTED. BE YOU',
        c2: 'MOVE SUPPORTED AND FREE FROM DISTRACTIONS',
        url:'/women/Clothing'

    },
    {
        img: 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enIN/Images/IN-SS23-UB-LIGHT-ROHIT-IMAGE-M_tcm209-996414.jpg',
        c1: 'EPIC ENERGY. LIGHTEST EVER',
        c2: 'Our lightest Ultraboost ever',
        url:'/men/Footwear'

    },
    {
        video: 'https://brand.assets.adidas.com/video/upload/q_auto,vc_auto,c_scale,w_0.5/video/upload/global%20brand%20publishing/DTC/ss23-dtc-monofit-kids/core-ss23-monofit-global-launch-hp-tcc-disney-d.mp4',
        c1: 'Inspiring independent play',
        c2: 'Created symmetrical so no more left and right shoes. Introducing Monofit. Only at adidas.',
        url:'/kids/All'

    },
    {
        img: 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enIN/Images/UB-RAFFLE-HP-TC-IMAGE_tcm209-988475.jpg',
        c1: 'WIN ROHIT SHARMA SIGNED MERCH',
        c2: 'Shop for the New Ultraboost Light & stand a chance to win!',
        url:'/women/Footwear'

    },
    {
        video: 'https://brand.assets.adidas.com/video/upload/q_auto,vc_auto,c_scale,w_0.5/video/upload/asmc-ss23-planet-sport-launch-homepage-tcc-d_e9ta2t.mp4',
        c1: 'ADIDAS BY STELLA MCCARTNEY SS23',
        c2: 'Designed for everyone, coloured with care.',
        url:'/men/Clothing'

    },
    {
        img: 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enIN/Images/in-ss23-nat-geo-hp-tc-image-d_tcm209-998592.jpg',
        c1: 'adidas TERREX x ©National Geographic',
        c2: 'Celebrate the feeling of being outdoors with hiking apparel featuring unique prints',
        url:'/men/All'

    }
]

const Section07 = () => {

    return (
        <div className='paddingLeft section07'>
            <div className='header07'>
                WHAT'S HOT
            </div>
            <div className='scroller07'>
                <div className='d-flex'>

                    {arr.map((each) => {
                        return (
                            <a href={each.url}>

                                <div role='button' className='card07'>
                                    {(each.video) ?
                                        <video loop autoPlay playsInline muted src={each.video}></video> :
                                        <img src={each.img}></img>}
                                    <div className='p-2'>
                                        <h6 className='fw-bold mb-3'>
                                            {each.c1}
                                        </h6>
                                        <div className='mb-3 fw-light'>
                                            {each.c2}


                                        </div>
                                        <button className='btn07'>
                                            SHOP NOW
                                        </button>
                                    </div>

                                </div>
                            </a>

                        )
                    })}


                </div>

            </div>
            <button role='button' className='arrow-btn07-left' onClick={() => scrollEffect("left", "scroller07")}>
                <i className='fa-solid fa-arrow-left fs-3' />

            </button>
            <button role='button' className='arrow-btn07-right' onClick={() => scrollEffect("right", "scroller07")}>
                <i className='fa-solid fa-arrow-right fs-3' />

            </button>

        </div>
    )
}

export default Section07;
