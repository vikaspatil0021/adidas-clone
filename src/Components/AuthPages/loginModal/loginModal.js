import axios from 'axios';
import React, { useRef, useState } from 'react';
import { AfterCheckUserLogin, AfterCheckUserRegister } from './afterCheckUser';
import "./loginModal.css"

const LoginModal = (props) => {
    const [data, setData] = useState({
        Email: ''
    });

    const [showAfterCheck, setShowAfterCheck] = useState({ login: false, register: false });

    const addButtonClass = (id) => {
        document.querySelector("#" + id).classList.toggle('main-btn-onClick');
        document.querySelector("#" + id + " .border-button").classList.toggle('border-button-onClick');

        setTimeout(() => {
            document.querySelector("#" + id).classList.toggle('main-btn-onClick');
            document.querySelector("#" + id + " .border-button").classList.toggle('border-button-onClick');

        }, 150);
    }

    const labelAni = (id, state) => {
        const ele = document.querySelector('#' + id);

        const emailInputWarn = document.querySelector('#loginWarningEmailInput01');
        const emailInput = document.querySelector('#loginEmail');
        const emailCheckIcon = document.querySelector('#loginEmailCheckIcon i');

   
        if (state == 'on') {
            ele.classList.add("inputLabelAni");
            if ("loginlabelEmail" == id) {

                emailInputWarn.classList.add('d-none');
            }



        } else {

            if ("loginlabelEmail" == id) {
                emailCheckIcon.classList.remove('d-none')


                if (data.Email == '') {
                    emailInputWarn.classList.remove('d-none')
                    emailInput.style.borderBottom = "3px solid red";


                    ele.classList.remove("inputLabelAni");
                    emailInputWarn.textContent = "Please enter a valid e-mail address";

                } else {
                    if ((data.Email).includes('@gmail.com')) {
                        emailInput.style.borderBottom = "3px solid green";


                    } else {
                        emailInputWarn.classList.remove('d-none')
                        emailInput.style.borderBottom = "3px solid red";

                        emailInputWarn.textContent = "The email address is invalid.";

                    }
                }
            }
        }
    }
    const emailCheckIcon = document.querySelector('#loginEmailCheckIcon i');

    if ((data.Email).includes('@gmail.com')) {
        if (emailCheckIcon) {

            emailCheckIcon.classList.remove('d-none')


            document.querySelector('#loginEmail').style.borderBottom = "3px solid green";
            emailCheckIcon.classList.replace('fa-xmark', 'fa-check');
            emailCheckIcon.classList.add('text-success');

        }

    } else {
        if (emailCheckIcon && emailCheckIcon.classList.contains('fa-check')) {
            document.querySelector('#loginEmail').style.borderBottom = "3px solid red";

            emailCheckIcon.classList.replace('fa-check', 'fa-xmark');
            emailCheckIcon.classList.remove('text-success');
        }
    }

    const midProcess = useRef(false)

    const checkUserAccount = async () => {
        const emailInputWarn = document.querySelector('#loginWarningEmailInput01');

        midProcess.current = true;
        const continueBtn = document.querySelector('#continueModalBtn');
        const continueArrowIcon = document.querySelector('#continueModalBtn i');
        const continueLoader = document.querySelector('#continueLoader');

        continueBtn.style.opacity = .6;
        continueBtn.style.cursor = 'not-allowed';
        continueArrowIcon.classList.add('d-none');
        continueLoader.classList.remove('d-none');
        if(data.Email==''){
            emailInputWarn.classList.remove('d-none')

        }else if ((data.Email).includes('@gmail.com')) {
            await axios.post('https://adidas-clone-backend.vercel.app/checkUser', { email: data.Email })
                .then((res) => {
                    const modalContent = document.querySelector('#loginModalBox-content')
                    console.log(res.data);

                    modalContent.innerHTML = '';
                    if (res.data.user) {
                        setShowAfterCheck({ login: true, register: false })
                    } else {

                        setShowAfterCheck({ login: false, register: true })

                    }
                }).catch((err) => {
                    console.log(err);
                })

        }
        setTimeout(() => {

            continueBtn.style.opacity = 1;
            continueArrowIcon.classList.remove('d-none')
            continueLoader.classList.add('d-none');
            continueBtn.style.cursor = 'pointer';
            midProcess.current=false;



        }, 300)
    }
    return (
        <div>
            <div className='opacityBackColor'></div>
            <div className='loginModal'>
                <div id='loginModalBox-content' className='modalBoxLogin'>
                    <div className='fs-3 fw-bolder pe-5'>
                        ENJOY ADICLUB BENEFITS WHEN YOU LOG IN
                    </div>
                    <div className='fs-6 fw-light pt-3  d-flex align-items-center'>
                        <i className='fa-solid fa-check fs-4 me-2' />
                        Unlock  <span className='mx-1 text-info'>  discount vouchers</span>
                    </div>
                    <div className='fs-6 fw-light pt-3 d-flex align-items-center'>
                        <i className='fa-solid fa-check fs-4 me-2' />
                        Get  <span className='mx-1 text-info'>free shipping</span>
                    </div>
                    <div className='fs-6 fw-light pt-3 d-flex align-items-center'>
                        <i className='fa-solid fa-check fs-4 me-2' />
                        Gain access to  <span className='mx-1 text-info'>exclusive products </span>
                    </div>

                    <div className='fs-5 fw-bolder mt-4 pt-2'>
                        LOG IN
                    </div>
                    <div className='fs-6 fw-light py-1 pb-3'>
                        Let's check if you already have an account
                    </div>

                    <div className='inputGroup'>
                        <input id='loginEmail' type='email' value={data.Email} onChange={(e) => setData({
                            Email: e.target.value
                        })} onBlur={() => labelAni("loginlabelEmail", 'off')} onFocus={() => labelAni("loginlabelEmail", 'on')} />
                        <label id='loginlabelEmail' for='loginEmail' className=''>Email *</label>
                        <div id='loginEmailCheckIcon' className='loginInputIcon'>
                            <i class="fa-solid fa-xmark fs-4 d-none"></i>

                        </div>
                    </div>
                    <div id='loginWarningEmailInput01' className='text-danger fw-light ms-3 d-none'>
                        Please enter a valid e-mail address
                    </div>
                    <div className='loginBtn'>
                        <button id='continueModalBtn' role='button' className='main-btn my-3 m-0' onClick={() => {
                            if (midProcess.current == false) {
                                addButtonClass("continueModalBtn");
                                checkUserAccount()
                            }
                        }}>
                            CONTINUE
                            <div className='border-button'>

                            </div>
                            <div>

                                <i class="bi bi-arrow-right fs-4 ms-3"></i>
                                <div id='continueLoader' class="loader ms-3 d-none"></div>
                            </div>

                        </button>
                    </div>
                    {(showAfterCheck.login) ? <AfterCheckUserLogin changeRe={props.changeRe} toggleLoginModal={props.toggleLoginModal} email={data.Email} /> : null}
                    {(showAfterCheck.register) ? <AfterCheckUserRegister changeRe={props.changeRe} toggleLoginModal={props.toggleLoginModal} email={data.Email} /> : null}



                </div>
                <div className='closeModalDiv'>

                    <div role='button' className='closeLoginModal' onClick={() => { props.toggleLoginModal(); }}>
                        <i class="fa-solid fa-xmark fs-2"></i>

                    </div>
                </div>
            </div>

        </div >
    )
}

export default LoginModal;
