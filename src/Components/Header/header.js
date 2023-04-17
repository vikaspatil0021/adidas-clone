import React, { useEffect, useRef, useState } from 'react';

import "./header.css";
import DropdownMen from "./dropdownContent/men";
import DropdownWomen from "./dropdownContent/women";
import DropdownKids from "./dropdownContent/kids";
import DropdownOutlet from "./dropdownContent/outlet";
import DropdownSports from "./dropdownContent/sports";
import DropdownBrands from "./dropdownContent/brands";
import DropdownCollections from "./dropdownContent/collections"
import HamburgerContent from './mobileHamburger/hamburgerContent';

import LoginModal from '../AuthPages/loginModal/loginModal';


const Header = (props) => {

  var token01 = localStorage.getItem("Token01");
  const [auth, setAuth] = useState(false);
  useEffect(() => {

    (token01) ? setAuth(true) : setAuth(false);
    console.log(auth);

  }
    , [token01])

  // Fading effectr in the discount header==============>
  const [seed, setSeed] = useState('');
  const dHeaderContent = ["SIGNUP & GET 15% OFF", "FREE DELIVERY", "UPI & NET BANKING AVAILABLE"]

  setInterval(() => {
    document.getElementById("dis-header").style.opacity = 0;
  }, 4920)
  let count = 1;
  setInterval(() => {
    document.getElementById("dis-header").style.opacity = 1;
    document.getElementById("dis-headerContent").innerHTML = dHeaderContent[count];
    count++;
    if (count >= dHeaderContent.length) {
      count = 0;
    }



  }, 5000)

  // offCanvas toggle 
  const disHeaderOffcanvas = () => {
    document.querySelector(".offCanvas").classList.toggle("openCanvas")

  }

  // offCanvas hamburger ---- mobile version
  const openCanvasHamburger = () => {
    document.querySelector(".offCanvas-hamburger").classList.toggle("openCanvas-hamburger");


  }

  // offCanvas mobile search ---- mobile version
  const openCanvasMobileSearch = () => {
    document.querySelector(".mobile-search-offcanvas").classList.toggle("openCanvas-mobile-search");

  }

  const path = window.location.pathname;
  const result = path.includes('/men') || path.includes('/my-account') || path.includes('/women')
  // header animation 
  if (!result) {

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("sticky-top-header").style.top = "0";
      } else {
        document.getElementById("sticky-top-header").style.top = "-155px";
      }
      prevScrollpos = currentScrollPos;
    }

  }

  const toggleLoginModal = () => {

    const loginBadge = document.querySelector('#loginBadge')
    setTimeout(() => {
      if (loginBadge) {

        loginBadge.classList.add('d-none')
      }

      document.querySelector('#loginModal').classList.toggle("d-none");
      setSeed(Math.random());

    }, 500);
  }

  return (
    <header id='sticky-top-header' className="fixed-top bg-white border-bottom">
      <div>
        <div onClick={disHeaderOffcanvas} className='d-flex justify-content-center  discount-header'>
          <div id='dis-header' className='my-2 d-flex align-items-center'>
            <div id='dis-headerContent'>
              SIGNUP & GET 15% OFF
            </div>
            <i class="fa-solid fa-angle-down mx-3 dis-arrowDown fs-6"></i>
          </div>


        </div>
        {/* discount header offCanvas */}
        <div className='offCanvas p-4'>
          <div className='d-flex justify-content-end'>

            <div className=' close-button mb-3' onClick={disHeaderOffcanvas}>
              <i class="fa-solid fa-xmark fs-4"></i>

            </div>
          </div>

          <div className='offCanvas-content'>
            <div className='px-lg-4 px-1'>
              <h6 className='offcanvash6'>
                SIGNUP & GET 15% OFF
              </h6>
              <p >Members get more! Like a 15% discount voucher
                , early access to the sale and access to limited edition products. Sign up now!
              </p>
              <a href=''>
                <h6 className="offcanvas-linkh6">
                  SIGNUP & GET 15% OFF

                </h6>
              </a>
            </div>
            <div className='px-lg-4 px-2'>
              <h6 className='offcanvash6'>

                FREE DELIVERY
              </h6>
              <p>
                For all orders, shipping is offered for free.

                Check out our delivery
                <a href='' className="offcanvas-linkh6 mx-2">Terms & Conditions</a>
                for more details.
              </p>
              <a href=''>
                <h6 className="offcanvas-linkh6">
                  FREE DELIVERY

                </h6>
              </a>
            </div>
            <div className=' px-lg-4 px-2'>
              <h6 className='offcanvash6'>
                UPI & NET BANKING AVAILABLE
              </h6>
              <p>
                UPI & NET BANKING AVAILABLE


              </p>
              <a href=''>
                <h6 className="offcanvas-linkh6">
                  UPI & NET BANKING AVAILABLE

                </h6>
              </a>
            </div>

          </div>
        </div>
        <div className='mx-xl-5 mx-2'>
          <div className='header-top'>
            <ul className='d-flex justify-content-between p-0 m-0'>
              <li><a href=''>help</a></li>
              <li><a href=''>returns</a></li>
              <li><a href=''>order tracker</a></li>
              <li><a href=''>sign up</a></li>
              <li><a href=''>log in</a></li>

            </ul>
          </div>
          <div className='header-bottom'>
            <div className='mobile-menu'>

              <div role='button' className='d-flex align-items-center mx-3' onClick={openCanvasHamburger}>
                <i class="fa-solid fa-bars fs-4"></i>
              </div>
              <div className='offCanvas-hamburger'>

                <div role='button' className='mb-3 hamburger-closeButton' onClick={openCanvasHamburger}>
                  <i class="fa-solid fa-xmark fs-2"></i>
                </div>
                <div className='d-flex border-bottom py-3 justify-content-center'>

                  <a href='/'>
                    <div className='adidas-icon-hamburger'>

                      <svg viewBox="100 100 50 32" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M 150.07 131.439 L 131.925 100 L 122.206 105.606 L 137.112 131.439 L 150.07 131.439 Z M 132.781 131.439 L 120.797 110.692 L 111.078 116.298 L 119.823 131.439 L 132.781 131.439 Z M 109.718 121.401 L 115.509 131.439 L 102.551 131.439 L 100 127.007 L 109.718 121.401 Z" fill="black"></path></svg>
                    </div>

                  </a>
                </div>
                <div className='scroll'>

                  <HamburgerContent openCanvasHamburger={openCanvasHamburger} />
                </div>


                <div className='position-fixed bottom-0 w-100 bg-white px-4 border-top py-2'>
                  <h5 className='fw-normal'>
                    India
                  </h5>
                </div>
              </div>
              <div className='d-flex align-items-center me-3 ms-1'>
                <i class="fa-regular fa-heart fs-4"></i>
              </div>
            </div>
            <a href='/'>
              <div className='adidas-icon'>

                <svg viewBox="100 100 50 32" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M 150.07 131.439 L 131.925 100 L 122.206 105.606 L 137.112 131.439 L 150.07 131.439 Z M 132.781 131.439 L 120.797 110.692 L 111.078 116.298 L 119.823 131.439 L 132.781 131.439 Z M 109.718 121.401 L 115.509 131.439 L 102.551 131.439 L 100 127.007 L 109.718 121.401 Z" fill="black"></path></svg>
              </div>

            </a>
            <div className='dropMENU'>

              <ul className='d-flex'>

                <li className='dropdown'><a href='/men/All' className='fw-bold'>MEN                </a>
                  <DropdownMen />

                </li>



                <li className='dropdown'><a href='/women/All' className='fw-bold'>WOMEN                </a>

                  <DropdownWomen />

                </li>


                <li className='dropdown'><a href='' className='fw-bold'>KIDS                </a>

                  <DropdownKids />

                </li>


                <li className='dropdown'><a href='' className=''>SPORTS                </a>

                  <DropdownSports />
                </li>


                <li className='dropdown'><a href='' >BRANDS                </a>

                  <DropdownBrands />
                </li>


                <li className='dropdown'><a href='' className=''>COLLECTIONS                </a>

                  <DropdownCollections />

                </li>


                <li className='dropdown' style={{ borderColor: "#dc3545" }}><a href='' className='text-danger fw-bold '>OUTLET                </a>

                  <DropdownOutlet />
                </li>


              </ul>





            </div>
            <div className='d-flex mb-lg-1'>
              <div className='search-group'>
                <input type="text" className='search fw-semibold' placeholder='Search' />
                <div className='d-flex align-items-center  search-icon'>

                  <i class="fa-solid fa-magnifying-glass fs-5 mx-2"></i>
                </div>
              </div>

              <div role='button' className='d-flex align-items-center mx-3 position-relative' onClick={(auth) ? () => { window.location.pathname = '/my-account/profile' } : toggleLoginModal}>
                <i class="fa-regular fa-user fs-5"></i>
                {(auth) ? null :
                  <span id='loginBadge' className='badge text-bg-warning rounded-circle position-absolute translate-middle top-0 start-100'>1</span>}
              </div>
              <div id='loginModal' className='d-none'>

                <LoginModal key={seed} changeRe={props.changeRe} toggleLoginModal={toggleLoginModal} />
              </div>

              <div role='button' className='mobile-search-icon' onClick={openCanvasMobileSearch}>

                <i class="fa-solid fa-magnifying-glass fs-5 me-3 ms-2"></i>
              </div>
              <div className="mobile-search-offcanvas">
                <div className='d-flex ' style={{ backgroundColor: "#eceff1" }}>
                  <div role='button' onClick={openCanvasMobileSearch}>

                    <i class="fa-solid fa-angle-left m-3 pt-2 ps-2 mx-4 fs-5"></i>
                  </div>

                  <input placeholder='Search' className='search-mobile-input' />
                </div>
              </div>

              <div className='me-3 ms-2 desktop-heart-icon'>
                <i class="fa-regular fa-heart fs-4"></i>
              </div>

              <div className='dropdown me-3 ms-2 mb-1'>
                <i class="bi bi-cart2 fs-4"></i>
                <div className='dropdown-content-cart mx-xl-5 mx-2'>
                  <h4 className='d-block py-3 px-5 fw-bold'>

                    YOUR CART IS EMPTY
                  </h4>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
