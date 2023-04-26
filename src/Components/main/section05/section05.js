import React, { useEffect, useState } from 'react'
import { scrollEffect } from '../../Repeaters/scrollEffect';
import axios from 'axios';
import { Link } from 'react-router-dom';



const Section05 = () => {


    const [selectedTab, setSelectedTab] = useState([]);
    const [currentGenData, setCurrentData] = useState([])
    const [gender, setGender] = useState('');

    console.log(selectedTab);
    console.log(currentGenData);

    useEffect(() => {
        if (gender != '') {

            axios.get(process.env.REACT_APP_SERVER_URL + '/' + gender + '/All')
                .then((res) => {
                    console.log(res.data);
                    setCurrentData(res.data)
                }).catch((err) => {
                    console.log(err);
                })
        }
    }, [gender])


    useEffect(() => {
        if (currentGenData.length != 0) {
            setSelectedTab(() => [
                {
                    categoryTitle: "ALL FOOTWEAR",
                    arr: currentGenData.map((each) => {
                        if (each.category === 'Footwear') {
                            return {
                                img1: each.colors[0].img1,
                                tag: each.tag,
                                path: '/' + gender + '/All/' + each.productId
                            }
                        }
                    }).filter((each) => each != undefined)
                },
                {
                    categoryTitle: "ALL CLOTHING",
                    arr: currentGenData.map((each) => {
                        if (each.category === 'Clothing') {
                            return {
                                img1: each.colors[0].img1,
                                tag: each.tag,
                                path: '/' + gender + '/All/' + each.productId
                            }
                        }
                    }).filter((each) => each != undefined)
                },
                {
                    categoryTitle: "ALL ACCESSORIES",
                    arr: currentGenData.map((each) => {
                        if (each.category === 'Accessories') {
                            return {
                                img1: each.colors[0].img1,
                                tag: each.tag,
                                path: '/' + gender + '/All/' + each.productId
                            }
                        }
                    }).filter((each) => each != undefined)

                }
            ])

        }
    }, [currentGenData])


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
            // setSelectedTab([])
            setGender('men');
        } else if (clickedId == "women") {
            // setSelectedTab([])

            setGender('women');

        } else {
            // setSelectedTab([])

            setGender('kids')
        }



        var x = window.matchMedia("(max-width: 965px)")

        if (x.matches) {
            var section05scrollBar = document.querySelectorAll('.mobileScroller');

            section05scrollBar.forEach((each) => {
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

        setSelectedTab([])

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

                        <button className='arrowBtn05' onClick={() => scrollEffect("left", "scrollBar")}>
                            <i class='fa fa-solid fa-angle-left' />
                        </button>
                        <button className='arrowBtn05' onClick={() => scrollEffect("right", 'scrollBar')}>
                            <i class='fa fa-solid fa-angle-right' />

                        </button>
                    </div>

                </div>
                <div className=''>

                    <div className='afterClick-Content scrollBar paddingLeft'>
                        {(selectedTab.length === 0) ?
                            <div className='d-flex justify-content-center w-100'><div class="pre-loader"></div></div>

                            : selectedTab.map((each) => {
                                return (
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
                                        {each.arr.map((subEach,index) => {
                                            if(index<6){

                                            return (
                                                <Link to={subEach.path}>

                                                    <div className='card05' role='button'>
                                                        <picture>
                                                            <img src={subEach.img1} decoding="async" loading="lazy" />
                                                        </picture>
                                                        <div className='card-title05'>
                                                            {subEach.tag}
                                                        </div>
                                                    </div>
                                                </Link>
                                            )
                                            }
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
