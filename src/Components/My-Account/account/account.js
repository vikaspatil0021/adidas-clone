import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { tabBtn } from '../../Repeaters/My-Account/tabBtn';
import "./account.css"
const Account = (props) => {
  const navigate = useNavigate();

  const defaultArr = ['NAME',"DATE OF BIRTH","GENDER"]

  useEffect(() => {

    if (window.location.pathname === '/my-account/profile') {
      tabBtn('Acc-profile01', 'active-Acc-btn')
    } else if (window.location.pathname === '/my-account/address-book') {
      tabBtn('Acc-addressBook01', 'active-Acc-btn');
      tabBtn('myAcc-account', 'active-tab')


    }
  }, [])


  const logOutTrigger = () => {
    localStorage.removeItem('Token01');

    props.changeRe()
    navigate('/account-login')

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

              <button id='Acc-profile01' onClick={() => tabBtn('Acc-profile01', 'active-Acc-btn')}>
                Personal Information
                <div>

                  <i class="fa-solid fa-angle-right ms-4 fs-4 btn-icon"></i>
                </div>

              </button>
            </Link>
            <Link to='/my-account/address-book' style={{ display: 'flex' }}>

              <button id='Acc-addressBook01' onClick={() => tabBtn('Acc-addressBook01', 'active-Acc-btn')}>
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
            {defaultArr.map((eachDetail)=>{

              return(
                <div className='fw-light mt-3'>
                  {eachDetail}
                </div>
              )
            })}
            <button id='profile-EditBtn'>
              EDIT
            </button>


            <h2 className='fw-bolder mt-5 pt-4'>
              LOGIN DETAILS
            </h2>
            <h5 className='fw-bolder mt-3'>
              EMAIL
            </h5>
            <div className='fs-5 mt-3' style={{letterSpacing:'1px'}}>
              VIKAS@GMAIL.COM
            </div>

            <h5 className='fw-bolder mt-5'>
              PASSWORD
            </h5>
            <div className='fs-5 mt-3' style={{letterSpacing:'1px'}}>
             ***********
            </div>
            <button id='profile-EditBtn'>
              EDIT
            </button>


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
            address
          </div>

        </div>
      </div>
    </div>
  )
}

export default Account
