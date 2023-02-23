import React, { useState } from 'react';
import "./header.css";
import DropdownMen from "./dropdownContent/men";
import DropdownWomen from "./dropdownContent/women";
import DropdownKids from "./dropdownContent/kids";
import DropdownOutlet from "./dropdownContent/outlet";
import DropdownSports from "./dropdownContent/sports";
import DropdownBrands from "./dropdownContent/brands";
import DropdownCollections from "./dropdownContent/collections"



const Header = () => {

  // Fading effectr in the discount header==============>
  const [DisHeader, setDisHeader] = useState({ no: 1, content: "SIGNUP & GET 15% OFF" });

  setTimeout(() => {
    document.getElementById("dis-header").style.opacity = 0
  }, 4800)

  setTimeout(() => {
    document.getElementById("dis-header").style.opacity = 1

    if (DisHeader.no === 1) {

      setDisHeader({ no: 2, content: "FREE DELIVERY" })
    } else if (DisHeader.no === 2) {
      setDisHeader({ no: 3, content: "UPI & NET BANKING AVAILABLE" })
    } else if (DisHeader.no === 3) {
      setDisHeader({ no: 1, content: "SIGNUP & GET 15% OFF" })
    }
  }, 5000)

  // offCanvas toggle 
  const disHeaderOffcanvas = () => {
    document.querySelector(".offCanvas").classList.toggle("openCanvas")

  }








































  return (
    <header className="border-bottom">
      <div>
        <div onClick={disHeaderOffcanvas} className='d-flex justify-content-center bg-dark  discount-header'>
          <div id='dis-header' className='my-2 d-flex align-items-center'>
            {DisHeader.content}
            <i class="fa-solid fa-angle-down mx-3 dis-arrowDown fs-6"></i>
          </div>


        </div>
        {/* discount header offCanvas */}
        <div className='offCanvas p-4'>
          <div className='d-flex justify-content-end'>

            <div className='border-1 close-button mb-3' onClick={disHeaderOffcanvas}>
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

              <div className='mx-2'>
                <i class="fa-solid fa-bars fs-4"></i>
              </div>
              <div className='d-flex align-items-center mx-2'>
                <i class="fa-regular fa-heart fs-5"></i>
              </div>
            </div>
            <a href='/'>
              <div className='adidas-icon'>

                <svg viewBox="100 100 50 32" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M 150.07 131.439 L 131.925 100 L 122.206 105.606 L 137.112 131.439 L 150.07 131.439 Z M 132.781 131.439 L 120.797 110.692 L 111.078 116.298 L 119.823 131.439 L 132.781 131.439 Z M 109.718 121.401 L 115.509 131.439 L 102.551 131.439 L 100 127.007 L 109.718 121.401 Z" fill="black"></path></svg>
              </div>

            </a>
            <div className='dropMENU'>

              <ul className='d-flex'>

                <li className='dropdown'><a href='/men' className='fw-bold'>MEN                </a>
                  <DropdownMen />

                </li>



                <li className='dropdown'><a href='/women' className='fw-bold'>WOMEN                </a>

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
            <div className='d-flex mb-2'>
              <div className='search-group'>
                <input type="text" className='search fw-semibold' placeholder='Search' />
                <div className='d-flex align-items-center  search-icon'>

                  <i class="fa-solid fa-magnifying-glass fs-5 mx-2"></i>
                </div>
              </div>
              <div className='d-flex align-items-center mx-2'>
                <i class="fa-regular fa-user fs-5"></i>
              </div>
              <div className='mobile-search-icon'>

                <i class="fa-solid fa-magnifying-glass fs-5 mx-2"></i>
              </div>
              <div className='mx-2 desktop-heart-icon'>
                <i class="fa-regular fa-heart fs-5"></i>
              </div>
              <div className='dropdown mx-2'>
                <i class="bi bi-cart2 fs-4"></i>
                <div className='dropdown-content-cart mx-xl-5 mx-2'>
                  <h4 className='d-block py-3 px-5'>

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
