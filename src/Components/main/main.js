import React, { useEffect, useState } from 'react'
import { addButtonClass } from '../Repeaters/addButtonClass';
import "./main.css"
import Section04 from './section04/section04';
import Section05 from './section05/section05';
import Section06 from './section06/section06';
import Section07 from './section07/section07';
import Section08 from './section08/section08';
import { useSelector } from 'react-redux';

const Main = () => {

  const rvItemsData = useSelector((state) => state.recentViewedItems);
  const [showContent, setShow] = useState(false)


  const discountOfferTrigger = () => {
    document.querySelector('#discount10').classList.add("d-none");
  }
  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 2000)
  }, [])



  if (!showContent) {
    return (
      <div className='d-flex justify-content-center'><div class="pre-loader"></div></div>
    )
  } else {


    return (
      <div>
        {/* {(productData.length===0)?<div className='d-flex justify-content-center'><div class="pre-loader"></div></div>: */}

        <div id='discount10' className='d-flex justify-content-center align-items-center pe-5 p-md-2' style={{ backgroundColor: "#007bc6" }}>
          <div className='text-white text-center ps-4 pe-2 py-2 ms-3'>

            UP TO 80% OFF. MEMBERS GET EXTRA 20% OFF
            <a href='' className='text-decoration-underline px-2 fs-6 text-white'>SHOP NOW</a>
          </div>
          <div role='button' className='text-white position-absolute end-0 me-4' onClick={discountOfferTrigger} >
            <i class="fa-solid fa-xmark fs-4"></i>
          </div>
        </div>
        <section className='position-relative'>
          <picture >
            <source media="(min-width: 960px)" srcset="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/enIN/Images/IN-SS23-EXTRA-10-HP-MH-IMAGE_tcm209-996851.jpg" />
            <source media="(min-width: 600px)" srcset="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_960,w_960/enIN/Images/IN-SS23-EXTRA-10-HP-MH-IMAGE-T_tcm209-996853.jpg" />
            <source srcset="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_600,w_600/enIN/Images/IN-SS23-EXTRA-10-HP-MH-IMAGE-D_tcm209-996852.jpg" />
            <img width='100%' src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/enIN/Images/IN-SS23-EXTRA-10-HP-MH-IMAGE_tcm209-996851.jpg" />
          </picture>
          <div className='button-container pe-md-5'>
            <div className='mb-lg-4 pb-lg-4  me-md-5 pe-md-5'>

              <div className='fs-1 fw-bolder'>
                UP TO 80% OFF
              </div>
              <div className='fs-5 pb-2'>

                EXTRA 20% FOR MEMBERS
              </div>
              <div className=''>
                <a href='/men/All' className='a-button'>

                  <button id='b01' role='button' className='main-btn' onClick={() => addButtonClass("b01")} >

                    SHOP MEN
                    <i class="bi bi-arrow-right fs-4 ms-3"></i>
                    <div className='border-button'>

                    </div>
                  </button>
                </a>
                <a href='/women/All' className='a-button'>

                  <button id='b02' role='button' className='main-btn' onClick={() => addButtonClass("b02")}>
                    SHOP WOMEN
                    <i class="bi bi-arrow-right fs-4 ms-3"></i>
                    <div className='border-button'>

                    </div>
                  </button>
                </a>
                <a href='/kids/All' className='a-button'>

                  <button id='b03' role='button' className='main-btn' onClick={() => addButtonClass("b03")}>
                    SHOP KIDS
                    <i class="bi bi-arrow-right fs-4 ms-3"></i>
                    <div className='border-button'>

                    </div>
                  </button>
                </a>
              </div>

            </div>
          </div>
        </section>
        {/* there is no section 02 */}
        <section className='d-flex justify-content-center'>
          <div className='section03'>
            {(rvItemsData.length !== 0) ? <div>

              <div className='similarProducts-name'>
                RECENTLY VIEWED ITEMS
              </div>
              <div className='similarProducts-overflow'>

                {[...rvItemsData].reverse().map((each) => {
                  return (
                    <a href={each.path}>
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
                        
                      </div>
                    </a>
                  )
                })}

              </div>
            </div> : null}
          </div>

        </section>
        <section className='section04'>
          <Section04 />
        </section>
        <section >
          <Section05 />


        </section>
        <section >
          <Section06 />


        </section>
        <section>
          <Section07 />
        </section>
        <section >
          <Section08 />


        </section>
        <section>
          <div className='section09 '>
            <div>
              <h1 className=''>
                STORIES, STYLES AND SPORTSWEAR AT ADIDAS, SINCE 1949
              </h1>
              <div >

                <p>
                  Sport keeps us fit. Keeps you mindful. Brings us together. Through sport we have the power to change lives. Whether it is through stories of inspiring athletes. Helping you to get up and get moving. Sportswear featuring the latest technologies, to up your performance. Beat your PB. adidas offers a home to the runner, the basketball player, the soccer kid, the fitness enthusiast. The weekend hiker that loves to escape the city. The yoga teacher that spreads the moves. The 3-Stripes are seen in the music scene. On stage, at festivals. Our sports clothing keeps you focused before that whistle blows. During the race. And at the finish lines. We’re here to support creators. Improve their game. Their lives. And change the world.
                </p>
                <p>
                  adidas is about more than sportswear and workout clothes. We partner with the best in the industry to co-create. This way we offer our fans the sports apparel and style that match their athletic needs, while keeping sustainability in mind. We’re here to support creators. Improve their game. Create change. And we think about the impact we have on our world.
                </p>
              </div>
            </div>
            <div>
              <h1 className=''>
                WORKOUT CLOTHES, FOR ANY SPORT
              </h1>
              <div >

                <p>
                  adidas designs for and with athletes of all kinds. Creators, who love to change the game. Challenge conventions. Break the rules and define new ones. Then break them again. We supply teams and individuals with athletic clothing pre-match. To stay focussed. We design sports apparel that get you to the finish line. To win the match. We support women, with bras and tights made for purpose. From low to high support. Maximum comfort. We design, innovate and itterate. Testing new technologies in action. On the pitch, the tracks, the court, the pool. Retro workout clothes inspire new streetwear essentials. Like NMD, Ozweego and our Firebird tracksuits. Classic sports models are brought back to life. Like Stan Smith. And Superstar. Now seen on the streets and the stages.
                </p>
                <p>
                  Through our collections we blur the borders between high fashion and high performance. Like our adidas by Stella McCartney athletic clothing collection – designed to look the part inside and outside of the gym. Or some of our adidas Originals lifestyle pieces, that can be worn as sportswear too. Our lives are constantly changing. Becoming more and more versatile. And adidas designs with that in mind.
                </p>
              </div>
            </div>

          </div>

        </section>



      </div>
    )
  }
}

export default Main;
