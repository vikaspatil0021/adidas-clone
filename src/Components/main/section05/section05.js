import React from 'react'

const Section05 = () => {

    
    const ToggleDNONE = ()=>{
        document.querySelector("#beforeClick").classList.add("d-none");
        document.querySelector("#afterClick").classList.remove("d-none");

    }

    const triggerMovingArrow = (clickedId) =>{
        const activeBtn = document.querySelector(".opacity05");
        const clickedBtn = document.querySelector("#section05-" + clickedId);

        
        
        if(activeBtn && activeBtn!=clickedBtn){
            activeBtn.classList.remove("opacity05");
            activeBtn.style.marginLeft = "20px"
        }
        
        
        clickedBtn.classList.add("opacity05");
        clickedBtn.style.marginLeft = "50px";
        
        
        var x = window.matchMedia("(max-width: 965px)")

        if(x.matches){
            if(clickedId=="men"){
               var val = "10";
           }else if(clickedId=="women"){
               val = "90";
           }else{
               val = "185";
           }
        }else{

            if(clickedId=="men"){
                 val = "10";
            }else if(clickedId=="women"){
                val = "120";
            }else{
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
                        <picture role='button' onClick={()=>{triggerMovingArrow("men"); ToggleDNONE()}}>
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
                        <picture role='button' onClick={()=>{triggerMovingArrow("women"); ToggleDNONE()}}>
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
                        <picture role='button' onClick={()=>{triggerMovingArrow("kids"); ToggleDNONE()}}>
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
                <div className='d-flex justify-content-between'>
                    <div className='position-relative d-flex align-items-center'>
                        <div id='section05-movingArrow' className='position-absolute section05-movingArrow'>
                            <i class='fa fa-solid fa-arrow-right fs-2' />
                        </div>

                        <button id='section05-men' className='opacity05' style={{marginLeft:"50px"}} onClick={()=>triggerMovingArrow("men")}>
                            MEN
                        </button>
                        <button id='section05-women' onClick={()=>triggerMovingArrow("women")}>
                            WOMEN
                        </button>
                        <button id='section05-kids' onClick={()=>triggerMovingArrow("kids")}>
                            KIDS
                        </button>

                    </div>
                    <div>

                        <button>
                            <i class='fa fa-solid fa-angle-left' />
                        </button>
                        <button>
                            <i class='fa fa-solid fa-angle-right' />

                        </button>
                    </div>

                </div>
                <div>

                </div>

            </div>

        </div>
    )
}

export default Section05;
