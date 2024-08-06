import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { tabBtn } from '../../Repeaters/My-Account/tabBtn';
import "./account.css"
import AccPasswordModal from './modals/acc-passwordModal';
import axios from 'axios';
import Address from './modals/address';
const Account = (props) => {
  const email01 = localStorage.getItem('Email')

  const [seed, setSeed] = useState('')
  const [timeOut, setTout] = useState(false);


  const [address, setAddress] = useState([])
  useEffect(() => {
    axios.get('https://adidas-clone-backend.vercel.app/address/' + email01,{headers:{
      "Authorization":"Bearer " + localStorage.getItem('Token01')
    }})
      .then((res) => {
        console.log(res.data);
        setAddress(res.data)
      }).catch((err) => {
        console.log(err);
      })
  }, [seed])

  useEffect(() => {

    if (window.location.pathname === '/my-account/profile') {
      tabBtn('Acc-profile01', 'active-Acc-btn')
    } else if (window.location.pathname === '/my-account/address-book') {
      tabBtn('Acc-addressBook01', 'active-Acc-btn');
      tabBtn('myAcc-account', 'active-tab')


    }
  }, []);


  const modalTrigger = (id) => {
    document.querySelector('#' + id).classList.toggle('d-none');
    setSeed(Math.random());

  }


  const logOutTrigger = () => {
    localStorage.removeItem('Token01');
    localStorage.removeItem("Email");


    props.changeRe()
    window.location.pathname = '/account-login'


  }


  var x = window.matchMedia("(max-width: 965px)");
  useEffect(() => {

    if (x.matches) {
      const con = document.querySelector('.acc-tabs-content')
      if (con) con.classList.add('d-none');
      setTimeout(() => {

        setTout(true)
      }, 1000)
    }
  }, [timeOut])
  const mobContentShow = () => {
    if (x.matches) {
      setTimeout(() => {
        document.querySelector('.acc-tabs-content').classList.toggle('d-none')
        document.querySelector('.acc-tabs').classList.toggle('d-none')


      }, 300)
    }

  }

  const deleteAccount = async () => {

    await axios.post('https://adidas-clone-backend.vercel.app/deleteAccount', { email: email01 },{headers:{
      "Authorization":"Bearer " + localStorage.getItem('Token01')
    }})
      .then((res) => {
        console.log(res.data);
      }).catch((err) => {
        console.log(err);
      })

    setTimeout(() => {

      localStorage.removeItem('Token01');
      localStorage.removeItem("Email");


      props.changeRe()
      window.location.pathname = '/account-register'
    }, 500)
  }


  const removeAddress = async (index) => {
    await axios.post('https://adidas-clone-backend.vercel.app/address/crud/remove', { email: email01, index:index},{headers:{
      "Authorization":"Bearer " + localStorage.getItem('Token01')
    }})
      .then((res) => {
        console.log(res.data);
        setSeed(Math.random())
      }).catch((err) => {
        console.log(err);
      })

  }


  if (x.matches && !timeOut) {
    return <div className='d-flex justify-content-center'><div class="pre-loader"></div></div>;
  } else {


    return (
      <div>
        <div className='acc-body'>
          <div className='acc-tabs'>
            <h5 id='acc-overview' className=''>

              ACCOUNT OVERVIEW
            </h5>
            <div className='bg-white d-flex flex-column mt-4'>
              <Link to='/my-account/profile' style={{ display: 'flex' }}>

                <button id='Acc-profile01' onClick={() => { tabBtn('Acc-profile01', 'active-Acc-btn'); mobContentShow() }}>
                  Personal Information
                  <div>

                    <i class="fa-solid fa-angle-right ms-4 fs-4 btn-icon"></i>
                  </div>

                </button>
              </Link>
              <Link to='/my-account/address-book' style={{ display: 'flex' }}>

                <button id='Acc-addressBook01' onClick={() => { tabBtn('Acc-addressBook01', 'active-Acc-btn'); mobContentShow() }}>
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

              <div role='button' className=' d-inline-flex align-items-center fs-4 fw-bold my-4' onClick={mobContentShow}>
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

                <button id='profile-EditBtn02' onClick={() => modalTrigger('Acc-passwordModal')}>
                  EDIT
                </button>
              </div>
              <div id='Acc-passwordModal' className='d-none'>

                <AccPasswordModal key={seed} email01={email01} modalTrigger={modalTrigger} />
              </div>


              <div className='fw-bolder mt-5 pt-4 fs-5'>
                LOG OUT FROM ALL WEB BROWSERS
              </div>
              <div className='fw-lighter my-3'>
                This will log you out from all web browsers you have used to access the adidas website. To log in again, you'll have to enter your credentials.
              </div>
              <button className='Acc-logout-Btn' onClick={logOutTrigger}>

                LOG ME OUT
                <i class="fa-solid fa-arrow-right ms-4 float-end  fs-4 "></i>

              </button>
              <div className='fw-bolder mt-3 mb-2 fs-5'>
                MANAGE ACCOUNT
              </div>
              <button className='Acc-logout-Btn' onClick={deleteAccount}>
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
                You have {address.length}/5 address slots remaining.
              </div>
              <div className='Acc-address'>

                <div role='button' className='Acc-card' onClick={() => modalTrigger('Acc-addressModal')}>
                  <div className='fw-light'>
                    New Address
                  </div>
                  <div>
                    <i class="fa-solid fa-plus fs-3"></i>
                  </div>
                </div>
                {address.map((each, index) => {
                  return (

                    <div id={'address' + index} className='Acc-card'>
                      <div className='fw-bold fs-5'>
                        {each.fullName}
                      </div>
                      <div>
                        <div>{each.street}</div>
                        <div>{each.landmark}</div>
                        <div>
                          <span>{each.city}</span>,
                          <span> {each.state}</span>,
                          <span> {each.pincode}</span>
                          , IN

                        </div>
                        <div>{each.mobile}</div>

                      </div>
                      <div>

                        <div role='button' className='removeAddBtn' onClick={() => removeAddress(index)}>
                          Remove
                        </div>
                      </div>

                    </div>
                  )
                }).reverse()}
              </div>
              <div id='Acc-addressModal' className='d-none'>

                <Address key={1 + seed} email01={email01} address={address} modalTrigger={modalTrigger} />
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Account
