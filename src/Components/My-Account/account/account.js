import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { tabBtn } from '../../Repeaters/My-Account/tabBtn';
import "./account.css"
import AccPasswordModal from './modals/acc-passwordModal';
const Account = (props) => {
  const email01 = localStorage.getItem('Email')
  const navigate = useNavigate();

  const defaultArr = ['NAME', "DATE OF BIRTH", "GENDER"];
  const [seed, setSeed] = useState('')

  useEffect(() => {

    if (window.location.pathname === '/my-account/profile') {
      tabBtn('Acc-profile01', 'active-Acc-btn')
    } else if (window.location.pathname === '/my-account/address-book') {
      tabBtn('Acc-addressBook01', 'active-Acc-btn');
      tabBtn('myAcc-account', 'active-tab')


    }
  }, []);


  const modalEditPassword = () => {
    document.querySelector('#Acc-passwordModal').classList.toggle('d-none');
    setSeed(Math.random());

  }


  const logOutTrigger = () => {
    localStorage.removeItem('Token01');
    localStorage.removeItem("Email");


    props.changeRe()
    window.location.pathname = '/account-login'


  }


  var x = window.matchMedia("(max-width: 965px)");
  useEffect(()=>{

    if(x.matches){
      document.querySelector('.acc-tabs-content').classList.add('d-none')
    }
  },[])
  const mobContentShow = ()=>{
    if(x.matches){

    document.querySelector('.acc-tabs-content').classList.toggle('d-none')
    document.querySelector('.acc-tabs').classList.toggle('d-none')
    }

  }
  return (
    <div>
      <div className='acc-body'>
        <div className='acc-tabs'>
          <h5 id='acc-overview' className=''>

            ACCOUNT OVERVIEW
          </h5>
          <div className='bg-white d-flex flex-column mt-4'>
            <Link to='/my-account/profile' style={{ display: 'flex' }}>

              <button id='Acc-profile01' onClick={() => {tabBtn('Acc-profile01', 'active-Acc-btn'); mobContentShow() }}>
                Personal Information
                <div>

                  <i class="fa-solid fa-angle-right ms-4 fs-4 btn-icon"></i>
                </div>

              </button>
            </Link>
            <Link to='/my-account/address-book' style={{ display: 'flex' }}>

              <button id='Acc-addressBook01' onClick={() => {tabBtn('Acc-addressBook01', 'active-Acc-btn'); mobContentShow()}}>
                Address Book
                <div>

                  <i class="fa-solid fa-angle-right ms-4  fs-4 btn-icon"></i>
                </div>

              </button>
            </Link>
            <div style={{ display: 'flex' }}>

              <button id='Acc-logout01' onClick={logOutTrigger}>
                Log out


              </button>
            </div>


          </div>


        </div>




        <div className='acc-tabs-content'>
          <div id='mobile-backBtn'>

            <div role='button' className=' d-inline-flex align-items-center fs-4 fw-bold mb-4' onClick={mobContentShow}>
              <i class="fa-solid fa-arrow-left me-3 fs-4"></i>
              Back
            </div>
          </div>
          <div id='Acc-profile01-content' className='d-none d-flex flex-column'>
            <h2 className='fw-bolder'>
              MY DETAILS
            </h2>
            <span className='fw-light'>
              Feel free to edit any of your details below so your account is up to date.
            </span>


            <h2 className='fw-bolder mt-5 pt-4'>
              DETAILS
            </h2>
            {defaultArr.map((eachDetail) => {

              return (
                <div className='fw-light mt-3'>
                  {eachDetail}
                </div>
              )
            })}
            <div>

              <button id='profile-EditBtn01'>
                EDIT
              </button>
            </div>


            <h2 className='fw-bolder mt-5 pt-4'>
              LOGIN DETAILS
            </h2>
            <h5 className='fw-bolder mt-3'>
              EMAIL
            </h5>
            <div className='fs-5 mt-3' style={{ letterSpacing: '1px' }}>
              {email01}
            </div>

            <h5 className='fw-bolder mt-5'>
              PASSWORD
            </h5>
            <div className='fs-5 mt-3' style={{ letterSpacing: '1px' }}>
              ***********
            </div>
            <div>

              <button id='profile-EditBtn02' onClick={modalEditPassword}>
                EDIT
              </button>
            </div>
            <div id='Acc-passwordModal' className='d-none'>

              <AccPasswordModal key={seed} email01={email01} modalEditPassword={modalEditPassword} />
            </div>


            <div className='fw-bolder mt-5 pt-4 fs-5'>
              LOG OUT FROM ALL WEB BROWSERS
            </div>
            <div className='fw-lighter my-3'>
              This will log you out from all web browsers you have used to access the adidas website. To log in again, you'll have to enter your credentials.
            </div>
            <button className='Acc-logout-Btn'>

              LOG ME OUT
              <i class="fa-solid fa-arrow-right ms-4 float-end  fs-4 "></i>

            </button>
            <div className='fw-bolder mt-3 mb-2 fs-5'>
              MANAGE ACCOUNT
            </div>
            <button className='Acc-logout-Btn'>
              DELETE  ACCOUNT
              <i class="fa-solid fa-arrow-right ms-4 float-end fs-4"></i>

            </button>
            <div className='fw-lighter mt-3'>
              This will log you out from all web browsers you have used to access the adidas website. To log in again, you'll have to enter your credentials.
            </div>

          </div>
          <div id='Acc-addressBook01-content' className='d-none'>
            <h2 className='fw-bolder'>
              ADDRESS BOOK
            </h2>
            <div>
              You have 5/5 address slots remaining.
            </div>
            <div className='Acc-address'>

              <div role='button' className='Acc-card'>
                <div className='fw-light'>
                  New Address
                </div>
                <div>
                  <i class="fa-solid fa-plus fs-3"></i>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Account
