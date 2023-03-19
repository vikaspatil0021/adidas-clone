import React, { useState } from 'react'
import { scrollEffect } from '../../Repeaters/scrollEffect';

const afterClickArray = {
    men: [
        {
            categoryTitle: "ALL FOOTWEAR",
            arr: [
                {
                    link: "https://assets.adidas.com/images/w_500,h_500,f_auto,q_auto,fl_lossy,c_fill,g_auto/f49bc6d367c94ceb95fbaf510159dc99_9366/js-bones-campus-80-shoes.jpg",
                    title: "ORIGINAL SHOES"
                },
                {
                    link: "https://assets.adidas.com/images/w_500,h_500,f_auto,q_auto,fl_lossy,c_fill,g_auto/023ce8be333449efa7f3af9000d9101f_9366/ultraboost-light-shoes.jpg",
                    title: "RUNNING SHOES"
                },
                {
                    link: "https://assets.adidas.com/images/w_500,h_500,f_auto,q_auto,fl_lossy,c_fill,g_auto/a717c5a2b2c64164be4caf7900e04330_9366/predator-accuracy-paul-pogba.1-low-firm-ground-boots.jpg",
                    title: "FOOTBALL BOOTS"
                },
                {
                    link: "https://assets.adidas.com/images/w_500,h_500,f_auto,q_auto,fl_lossy,c_fill,g_auto/0fbed4646c1d46e0aae0af6901301ff4_9366/ultraboost-light-shoes.jpg",
                    title: "ULTRABOOST"
                },
                {
                    link: "https://assets.adidas.com/images/w_500,h_500,f_auto,q_auto,fl_lossy,c_fill,g_auto/b00a682997bd40d3bdfaaed70181d5b6_9366/vulc-raid3r-lifestyle-skateboarding-slip-on-canvas-shoes.jpg",
                    title: "SALE SHOES"
                }
            ]
        },
        {
            categoryTitle: "CLOTHING",
            arr: [
                {
                    link: "https://assets.adidas.com/images/w_500,h_500,f_auto,q_auto,fl_lossy,c_fill,g_auto/7090f137ede740539616ae76013315df_9366/adicolor-neuclassics-track-jacket.jpg",
                    title: "TRACKSUITS"
                },
                {
                    link: "https://assets.adidas.com/images/w_500,h_500,f_auto,q_auto,fl_lossy,c_fill,g_auto/01991a8a07da4c4599eaae8e00fa03f5_9366/disney-graphic-tee.jpg",
                    title: "T-SHIRTS"
                },
                {
                    link: "https://assets.adidas.com/images/w_500,h_500,f_auto,q_auto,fl_lossy,c_fill,g_auto/28a4f95f15d943d2a859adf500624e69_9366/ultimate365-tapered-pants.jpg",
                    title: "JOGGERS & TRACKSUIT BOTTOMS"
                },
                {
                    link: "https://assets.adidas.com/images/w_500,h_500,f_auto,q_auto,fl_lossy,c_fill,g_auto/fbf60ee451b843dbb924af8100bc8c36_9366/adidas-by-stella-mccartney-sportswear-sweatshirt-gender-neutral.jpg",
                    title: "HOODIES & SWEATSHIRTS"
                },
                {
                    link: "https://assets.adidas.com/images/w_500,h_500,f_auto,q_auto,fl_lossy,c_fill,g_auto/cf4b0ce40ed44ece9546ace100a72832_9366/arsenal-21-22-home-jersey.jpg",
                    title: "SALE CLOTHING"
                }
            ]
        },
        {
            categoryTitle: "ALL ACCESSORIES",
            arr: [
                {
                    link: "https://assets.adidas.com/images/w_500,h_500,f_auto,q_auto,fl_lossy,c_fill,g_auto/71a35aac6e3f4ccaae44af4f00a3398c_9366/performance-cushioned-crew-socks-3-pairs.jpg",
                    title: "SOCKS"
                },
                {
                    link: "https://assets.adidas.com/images/w_500,h_500,f_auto,q_auto,fl_lossy,c_fill,g_auto/d534111ceefb43c6ab14af2c00d50007_9366/y-3-holdall.jpg",
                    title: "BAGS"
                },
                {
                    link: "https://assets.adidas.com/images/w_500,h_500,f_auto,q_auto,fl_lossy,c_fill,g_auto/6189f6bf98b74d98bcf8af2c00d31c48_9366/y-3-classic-bucket-hat.jpg",
                    title: "HEADWEAR"
                },
                {
                    link: "https://assets.adidas.com/images/w_500,h_500,f_auto,q_auto,fl_lossy,c_fill,g_auto/a0543e5f0bb34bff93d8ae680086dba1_9366/al-rihla-competition-ball.jpg",
                    title: "SALE ACCESSORIES"
                }
            ]
        }
    ],
    women: [
        {
            categoryTitle: "ALL SHOES",
            arr: [
                {
                    link: "https://assets.adidas.com/images/w_500,h_500,f_auto,q_auto,fl_lossy,c_fill,g_auto/4f804358759448f99e17af61016c7d68_9366/stan-smith-bonega-shoes.jpg",
                    title: "ORIGINAL SHOES"
                },
                {
                    link: "https://assets.adidas.com/images/w_500,h_500,f_auto,q_auto,fl_lossy,c_fill,g_auto/023ce8be333449efa7f3af9000d9101f_9366/ultraboost-light-shoes.jpg",
                    title: "RUNNING SHOES"
                },
                {
                    link: "https://assets.adidas.com/images/w_500,h_500,f_auto,q_auto,fl_lossy,c_fill,g_auto/0fbed4646c1d46e0aae0af6901301ff4_9366/ultraboost-light-shoes.jpg",
                    title: "ULTRABOOST"
                },
                {
                    link: "https://assets.adidas.com/images/w_500,h_500,f_auto,q_auto,fl_lossy,c_fill,g_auto/b00a682997bd40d3bdfaaed70181d5b6_9366/vulc-raid3r-lifestyle-skateboarding-slip-on-canvas-shoes.jpg",
                    title: "SALE SHOES"
                }
            ]
        },
        {
            categoryTitle: "ALL CLOTHING",
            arr: [
                {
                    link: "https://assets.adidas.com/images/w_500,h_500,f_auto,q_auto,fl_lossy,c_fill,g_auto/c64348879ddd41beaaf0af3100f52ab4_9366/dailyrun-3-stripes-five-inch-short-leggings.jpg",
                    title: "TIGHTS"
                },
                {
                    link: "https://assets.adidas.com/images/w_500,h_500,f_auto,q_auto,fl_lossy,c_fill,g_auto/25462e5f56a14ecb9ce2af9b0139c164_faec/lightweight-puffer-coat-all-gender.jpg",
                    title: "JACKETS"
                },
                {
                    link: "https://assets.adidas.com/images/w_500,h_500,f_auto,q_auto,fl_lossy,c_fill,g_auto/ea63b64d8a27437197e6aec300dddb0f_9366/loose-loungewear-tee.jpg",
                    title: "T-SHIRTS"
                },
                {
                    link: "https://assets.adidas.com/images/w_500,h_500,f_auto,q_auto,fl_lossy,c_fill,g_auto/f004a3d9aaf143c08128aeca00ec6da7_9366/velvet-straight-pants.jpg",
                    title: "JOGGERS & TRACKSUIT BOTTOMS"
                },
                {
                    link: "https://assets.adidas.com/images/w_500,h_500,f_auto,q_auto,fl_lossy,c_fill,g_auto/5bcaada69aa6447cbb13af5500c1ee88_9366/tch-slk-zip-hd.jpg",
                    title: "HOODIES"
                },
                {
                    link: "https://assets.adidas.com/images/w_500,h_500,f_auto,q_auto,fl_lossy,c_fill,g_auto/fe194bc661f4419d889daf4d00b746d3_9366/coreflow-medium-support-bra.jpg",
                    title: "BRAS"
                },
                {
                    link: "https://assets.adidas.com/images/w_500,h_500,f_auto,q_auto,fl_lossy,c_fill,g_auto/28accc6bf9cd432aa82faea700f01715_9366/yoga-studio-light-support-bra.jpg",
                    title: "SALE CLOTHING"
                }
            ]
        },
        {
            categoryTitle: "ALL ACCESSORIES",
            arr: [
                {
                    link: "https://assets.adidas.com/images/w_500,h_500,f_auto,q_auto,fl_lossy,c_fill,g_auto/b6064d1a011f49f39a4fafab010d387f_9366/collective-power-mid-cut-crew-length-socks-3-pairs.jpg",
                    title: "SOCKS"
                },
                {
                    link: "https://assets.adidas.com/images/w_500,h_500,f_auto,q_auto,fl_lossy,c_fill,g_auto/d534111ceefb43c6ab14af2c00d50007_9366/y-3-holdall.jpg",
                    title: "BAGS"
                },
                {
                    link: "https://assets.adidas.com/images/w_500,h_500,f_auto,q_auto,fl_lossy,c_fill,g_auto/9f176a1f4ddf49709edbaf1e010f6b2c_9366/y-3-utility-tote.jpg",
                    title: "SALE ACCESSORIES"
                }
            ]
        }
    ],
    kids: [
        {
            categoryTitle: "ALL KIDS",
            arr: [
                {
                    link: "https://assets.adidas.com/images/w_500,h_500,f_auto,q_auto,fl_lossy,c_fill,g_auto/fe9b33ac8f9541939ec3ac3701601bb1_9366/samba-og-shoes.jpg",
                    title: "KIDS SHOES"
                },
                {
                    link: "https://assets.adidas.com/images/w_500,h_500,f_auto,q_auto,fl_lossy,c_fill,g_auto/b7a707c8e9a04ae0a513aefc00b475a3_9366/arkd3-cargo-pants.jpg",
                    title: "KIDS CLOTHING"
                },
                {
                    link: "https://assets.adidas.com/images/w_500,h_500,f_auto,q_auto,fl_lossy,c_fill,g_auto/33c61a20d7134071a590af8000c4a41d_9366/adidas-x-lego-play-bucket-hat.jpg",
                    title: "KIDS ACCESSORIES"
                },
                {
                    link:"https://assets.adidas.com/images/w_500,h_500,f_auto,q_auto,fl_lossy,c_fill,g_auto/52201b7d85164f449c5dad6601064c2b_9366/tensaur-run-shoes.jpg",
                    title:'KIDS SALE'
                }
            ]
        }

    ]
}





const Section05 = () => {


    const [selectedTab,setSelectedTab] = useState([]);


    const ToggleDNONE = () => {
        document.querySelector("#beforeClick").classList.add("d-none");
        document.querySelector("#afterClick").classList.remove("d-none");

    }

    const triggerMovingArrow = (clickedId) => {
        const activeBtn = document.querySelector(".opacity05");
        const clickedBtn = document.querySelector("#section05-" + clickedId);



        if (activeBtn && activeBtn != clickedBtn) {
            activeBtn.classList.remove("opacity05");
            activeBtn.style.marginLeft = "20px"
        }


        clickedBtn.classList.add("opacity05");
        clickedBtn.style.marginLeft = "50px";






        
        if (clickedId == "men") {
            setSelectedTab(afterClickArray.men);
            
        } else if (clickedId == "women") {
            setSelectedTab(afterClickArray.women);
        } else {
            setSelectedTab(afterClickArray.kids);
        }



        var x = window.matchMedia("(max-width: 965px)")

        if (x.matches) {
            var section05scrollBar = document.querySelectorAll('.mobileScroller');

            section05scrollBar.forEach((each)=>{
                each.scrollLeft = 0;
            })

            if (clickedId == "men") {
                var val = "10";
            } else if (clickedId == "women") {
                val = "90";
            } else {
                val = "185";
            }
        } else {
            section05scrollBar = document.querySelector('.scrollBar');
            section05scrollBar.scrollLeft = 0;

            if (clickedId == "men") {
                val = "10";
            } else if (clickedId == "women") {
                val = "120";
            } else {
                val = "280";
            }
        }


        document.querySelector('#section05-movingArrow').style.transform = "translateX(" + val + "px)";
    }


    
    return (
        <div className='d-flex flex-wrap justify-content-center'>
            <div id='beforeClick' className='section05'>

                <div className="my-4 fw-bolder mx-3 pe-3" style={{ fontSize: "40px", fontWeight: "700" }}>
                    WHO ARE YOU SHOPPING FOR?
                </div>
                <div className='section05-grid'>
                    <div>
                        <picture role='button' onClick={() => { triggerMovingArrow("men"); ToggleDNONE() }}>
                            <source media="(min-width: 960px)" srcset="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enIN/Images/evergreen-homepage-gender-navigation-men-dt_tcm209-761437.jpg" />
                            <source media="(min-width: 600px)" srcset="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enIN/Images/evergreen-homepage-gender-navigation-men-tb_tcm209-761432.jpg" />
                            <source srcset="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enIN/Images/evergreen-homepage-gender-navigation-men-mb_tcm209-761438.jpg" />
                            <img class="high-res-picture___3SJ41 loaded___3ltPt img___zgj1u ps-3" id="tcm:209-761453" src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enIN/Images/evergreen-homepage-gender-navigation-men-dt_tcm209-761437.jpg" decoding="async" loading="lazy" />
                        </picture>
                        <div className='fw-bold fs-5 m-2 ms-3'>
                            MEN
                        </div>
                    </div>
                    <div>
                        <picture role='button' onClick={() => { triggerMovingArrow("women"); ToggleDNONE() }}>
                            <source media="(min-width: 960px)" srcset="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enIN/Images/womens_1_tcm209-792193.png" />
                            <source media="(min-width: 600px)" srcset="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enIN/Images/womens_3_tcm209-792187.png" />
                            <source srcset="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enIN/Images/womens_2_tcm209-792186.png" />
                            <img class="high-res-picture___3SJ41 loaded___3ltPt img___zgj1" id="tcm:209-761452" src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enIN/Images/womens_1_tcm209-792193.png" decoding="async" loading="lazy" />
                        </picture>
                        <div className='fw-bold fs-5 m-2 ms-3'>
                            WOMEN
                        </div>
                    </div>
                    <div>
                        <picture role='button' onClick={() => { triggerMovingArrow("kids"); ToggleDNONE() }}>
                            <source media="(min-width: 960px)" srcset="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enIN/Images/kids_1_tcm209-792188.png" />
                            <source media="(min-width: 600px)" srcset="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enIN/Images/kids_3_tcm209-792189.png" />
                            <source srcset="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enIN/Images/kids_2_tcm209-792185.png" />
                            <img class="high-res-picture___3SJ41 loaded___3ltPt img___zgj1 pe-3" id="tcm:209-761454" src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enIN/Images/kids_1_tcm209-792188.png" decoding="async" loading="lazy" />
                        </picture>
                        <div className='fw-bold fs-5 m-2 ms-3'>
                            KIDS
                        </div>
                    </div>

                </div>
            </div>
            <div id='afterClick' className='section05-afterClick d-none'>
                <div className='d-flex justify-content-between paddingLeft pb-3'>
                    <div className='position-relative d-flex align-items-center'>
                        <div id='section05-movingArrow' className='position-absolute section05-movingArrow'>
                            <i class='fa fa-solid fa-arrow-right fs-2' />
                        </div>

                        <button id='section05-men' className='mBtns opacity05' style={{ marginLeft: "50px" }} onClick={() => triggerMovingArrow("men")}>
                            MEN
                        </button>
                        <button id='section05-women' className='mBtns' onClick={() => triggerMovingArrow("women")}>
                            WOMEN
                        </button>
                        <button id='section05-kids' className='mBtns' onClick={() => triggerMovingArrow("kids")}>
                            KIDS
                        </button>


                    </div>
                    <div className='arrowScroller'>

                        <button className='arrowBtn05' onClick={()=>scrollEffect("left","scrollBar")}>
                            <i class='fa fa-solid fa-angle-left' />
                        </button>
                        <button className='arrowBtn05' onClick={()=>scrollEffect("right",'scrollBar')}>
                            <i class='fa fa-solid fa-angle-right' />

                        </button>
                    </div>

                </div>
                <div className=''>

                    <div className='afterClick-Content scrollBar paddingLeft'>
                    {selectedTab.map((each)=>{
                        return(
                            <div className='d-flex mobileScroller'>

                            <div className='card05-category'>
                                <div className='category-title'>
                                    {each.categoryTitle}
                                </div>
                                <div role="button" className='category-button'>
                                    DISCOVER
                                    <i class='bi bi-arrow-right float-end fs-4' />

                                </div>
                            </div>
                            {each.arr.map((subEach)=>{
                                return(

                            <div className='card05' role='button'>
                                <picture>
                                    <img src={subEach.link} decoding="async" loading="lazy" />
                                </picture>
                                <div className='card-title05'>
                                    {subEach.title}
                                </div>
                            </div>
                                )
                            })}
                            

                        </div>

                        )
                    })}
                        
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Section05;
