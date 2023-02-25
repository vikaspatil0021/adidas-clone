import React from 'react'
import "./main.css"
const Main = () => {

  const discountOfferTrigger = () => {
    document.querySelector('#discount10').classList.add("d-none");
  }
  return (
    <div>
      <div id='discount10' className='d-flex justify-content-center align-items-center pe-5 p-md-2' style={{ backgroundColor: "#007bc6" }}>
        <div className='text-white fw-semibold text-center ps-4 pe-2 py-2 ms-3'>

          UP TO 60% OFF. MEMBERS GET EXTRA 10% OFF
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
            UP TO 60% OFF
          </div>
          <div className='fs-5 pb-2'>

            EXTRA 10% FOR MEMBERS
          </div>
          <div className=''>
            <button role='button' className='main-btn'>

              SHOP MEN
              <i class="bi bi-arrow-right fs-4 ms-3"></i>
            <div className='border-button'>

            </div>
            </button>
            <button role='button' className='main-btn'>
              SHOP WOMEN
              <i class="bi bi-arrow-right fs-4 ms-3"></i>
              <div className='border-button'>

</div>
            </button>
            <button role='button' className='main-btn'>
              SHOP KIDS
              <i class="bi bi-arrow-right fs-4 ms-3"></i>
              <div className='border-button'>

</div>
            </button>
            </div>

          </div>
        </div>
      </section>
      <div style={{height:"1000px"}}>
        
      </div>


    </div>
  )
}

export default Main;
