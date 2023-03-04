import React from 'react';
import { menu1 } from '../../Header/mobileHamburger/menuArray';
const Section04 = () => {

    
  // accordian functionality=========>MAIN
  const accorordianTrigger01 = (id) => {
    const activeAccorMain = document.querySelector(".activeAccor");
    
    
    const clickedAccorMain = document.querySelector("#accor" + id);
    const clickedAccorDivMain = document.querySelector('#div' + id);
    const clickedAccorBtnMain = document.querySelector("#div" + id + " .accordianButton01");
    

    if (activeAccorMain && activeAccorMain!=clickedAccorMain) {
      const activeAccorBtnMain = document.querySelector('#div' + activeAccorMain.id.substring(5) + " .accordianButton01")


      activeAccorMain.classList.remove("activeAccor");
      activeAccorBtnMain.style.backgroundColor = "#ffffff";


    }
    if (clickedAccorMain.classList.contains('activeAccor')) {

      clickedAccorMain.classList.remove('activeAccor');
      clickedAccorBtnMain.style.backgroundColor = "#ffffff";

    } else {
      clickedAccorMain.classList.add('activeAccor');
      clickedAccorDivMain.scrollIntoView({ behavior: "smooth" });
      clickedAccorBtnMain.style.backgroundColor = "#eceff1";

    }


    // accordian functionality for submain accordian to close with active main accordian

    const activeAccorSUBMAIN = document.querySelector(".activeAccor02");
    if(activeAccorSUBMAIN){
      const activeAccorBtnSUBMAIN = document.querySelector('#div' + activeAccorSUBMAIN.id.substring(5) + " .accordianButton01")

      activeAccorSUBMAIN.classList.remove("activeAccor02");
      activeAccorBtnSUBMAIN.style.backgroundColor = "#ffffff";
    }

  }



  // accordian functionality=========>SUBMAIN

  const accorordianTrigger02 = (id) => {
    const activeAccorSUBMAIN = document.querySelector(".activeAccor02");

    const clickedAccorSUBMAIN = document.querySelector("#accor" + id);
    const clickedAccorDivSUBMAIN = document.querySelector('#div' + id);
    const clickedAccorBtnSUBMAIN = document.querySelector("#div" + id + " .accordianButton01");


    if (activeAccorSUBMAIN && activeAccorSUBMAIN != clickedAccorSUBMAIN) {
      const activeAccorBtnSUBMAIN = document.querySelector('#div' + activeAccorSUBMAIN.id.substring(5) + " .accordianButton01")

      activeAccorSUBMAIN.classList.remove("activeAccor02");
      activeAccorBtnSUBMAIN.style.backgroundColor = "#ffffff";

    }
    if (clickedAccorSUBMAIN.classList.contains('activeAccor02')) {

      clickedAccorSUBMAIN.classList.remove('activeAccor02');
      clickedAccorBtnSUBMAIN.style.backgroundColor = "#ffffff";

    } else {
      clickedAccorSUBMAIN.classList.add('activeAccor02');
      clickedAccorDivSUBMAIN.scrollIntoView({ behavior: "smooth" });
      clickedAccorBtnSUBMAIN.style.backgroundColor = "#eceff1";

    }
  }
  return (
    <div>
          {menu1.c1.map((each) => {
            return (
              <div id={'div' + each.main}>
                <div role='button' className='accordianButton01 fs-4 fw-bold' onClick={() => { accorordianTrigger01(each.main) }}>
                  {each.main}
                  <i className='fa-solid fa-angle-down me-3 fs-4'></i>
                </div>
                <div id={"accor" + each.main} className='d-none '>
                  {each.sub.map((subEach) => {
                    return (
                      <div id={'div' + each.main + (subEach.main).substring(0, 3)}>

                        <div role='button' className='accordianButton01 border-top fs-5 ms-1' onClick={() => { accorordianTrigger02(each.main + (subEach.main).substring(0, 3)) }}>
                          {subEach.main}
                          <i className='fa-solid fa-angle-down me-3 fs-4'></i>
                        </div>
                        <div id={'accor' + each.main + (subEach.main).substring(0, 3)} className='d-none'>
                          {subEach.supersub.map((superSubEach) => {
                            return (
                              <div role='button' className='accordianButton01 text-dark border-top fs-6 ms-2'>
                                {superSubEach}
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    )
                  })}


                </div>
              </div>
            )
          })}
          {menu1.c2.map((each) => {
            return (
              <div id={'div' + each.main}>
                <div role='button' className='accordianButton01 fs-4' onClick={() => { accorordianTrigger01(each.main) }}>
                  {each.main}
                  <i className='fa-solid fa-angle-down me-3 fs-4'></i>
                </div>
                <div id={"accor" + each.main} className='d-none'>
                  {each.sub.map((subEach) => {
                    return (

                      <div id={'div' + each.main + (subEach.main).substring(0, 3)}>

                        <div role='button' className='accordianButton01 border-top fs-5 ms-1' onClick={() => { accorordianTrigger02(each.main + (subEach.main).substring(0, 3)) }}>
                          {subEach.main}
                          <i className='fa-solid fa-angle-down me-3 fs-4'></i>
                        </div>
                        <div id={'accor' + each.main + (subEach.main).substring(0, 3)} className='d-none'>
                          {subEach.supersub.map((superSubEach) => {
                            return (
                              <div role='button' className='accordianButton01 text-dark border-top fs-6 ms-2'>
                                {superSubEach}
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )

          })}
          <div role='button' className='accordianButton01 fs-4'>
            TERREX
          </div>
          <div role='button' className='accordianButton01 fs-4'>
            ADIDAS SPORTSWEAR
          </div>
          <div id={'div' + menu1.c4.main}>

            <div role='button' className='accordianButton01 text-danger fs-4 fw-bold' onClick={() => { accorordianTrigger01(menu1.c4.main) }}>
              {menu1.c4.main}
              <i className='fa-solid fa-angle-down me-3 fs-4'></i>
            </div>
            <div id={"accor" + menu1.c4.main} className='d-none '>

              {menu1.c4.sub.map((subEach) => {
                return (

                  <div id={'div' + menu1.c4.main + (subEach.main).substring(0, 3)}>

                    <div role='button' className='accordianButton01 border-top fs-5 ms-1' onClick={() => { accorordianTrigger02(menu1.c4.main + (subEach.main).substring(0, 3)) }}>
                      {subEach.main}
                      <i className='fa-solid fa-angle-down me-3 fs-4'></i>
                    </div>
                    <div id={'accor' + menu1.c4.main + (subEach.main).substring(0, 3)} className='d-none'>
                      {subEach.supersub.map((superSubEach) => {
                        return (
                          <div role='button' className='accordianButton01 text-dark border-top fs-6 ms-2'>
                            {superSubEach}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

  )
}

export default Section04;
