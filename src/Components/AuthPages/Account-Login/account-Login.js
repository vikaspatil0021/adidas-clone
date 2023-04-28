import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { addButtonClass } from '../../Repeaters/addButtonClass';
import { checkMark } from '../../Repeaters/AuthPages/checkMark';
import { labelAnimation } from '../../Repeaters/AuthPages/labelAnimation';
import { showPass } from '../../Repeaters/AuthPages/showPass';
import "./accountLogin.css"
const AccountLogin = (props) => {
    const navigate = useNavigate();
    var token01 = localStorage.getItem("Token01");



    const [data, setData] = useState({
        Email: '',
        Password: ''
    });

    

    const labelAni = (id, state) => {
        const ele = document.querySelector('#' + id);

        const emailInputWarn = document.querySelector('#loginWarningEmail1');
        const emailInput = document.querySelector('#loginEmail01');
        const emailCheckIcon = document.querySelector('#loginEmailCheckIcon01 i');

        const passwordInputWarn = document.querySelector('#warningPasswordInput02');
        const passwordInput = document.querySelector('#loginPassword01');
        const passwordCheckIcon = document.querySelector('#passwordCheckIcon02 i');
        if (state == 'on') {
            ele.classList.add("inputLabelAni");


            if ("loginlabelEmail01" == id) {

                emailInputWarn.classList.add('d-none');
            } else {
                passwordInputWarn.classList.add('d-none')

            }


        } else {



            if ("loginlabelEmail01" == id) {
                emailCheckIcon.classList.remove('d-none')


                if (data.Email == '') {
                    emailInputWarn.classList.remove('d-none')
                    emailInput.style.borderBottom = "3px solid red";


                    ele.classList.remove("inputLabelAni");
                    emailInputWarn.textContent = "Please enter a valid e-mail address";

                } else {
                    if ((data.Email).includes('@gmail.com') && !(data.Email).includes(' ')) {
                        emailInput.style.borderBottom = "3px solid green";


                    } else {
                        emailInputWarn.classList.remove('d-none')
                        emailInput.style.borderBottom = "3px solid red";

                        emailInputWarn.textContent = "The email address is invalid.";

                    }
                }

                // document.querySelector('#warningEmailInput01').textContent = "The email address is invalid.";
            } else if ("labelLoginPassword01" == id) {
                // ele.classList.remove("inputLabelAni");

                passwordCheckIcon.classList.remove('d-none')


                if (data.Password == '') {
                    passwordInputWarn.classList.remove('d-none')
                    passwordInput.style.borderBottom = "3px solid red";


                    ele.classList.remove("inputLabelAni");
                    passwordInputWarn.textContent = "Please enter a password";
                    passwordInputWarn.classList.replace("text-muted", 'text-danger')

                } else {


                    passwordInput.style.borderBottom = "3px solid green";
                    passwordInputWarn.classList.replace("text-danger", 'text-muted')



                }

            }


        }


    }

    const emailCheckIcon = document.querySelector('#loginEmailAcc-checkIcon i');
    const passwordCheckIcon = document.querySelector('#loginPasswordAcc-checkIcon i');
    const passwordInputWarn = document.querySelector('#loginPasswordAcc-warning');

    if ((data.Email).includes('@gmail.com') && !(data.Email).includes(' ')) {
        emailCheckIcon.classList.remove('d-none')


        document.querySelector('#loginEmailAcc').style.borderBottom = "3px solid green";
        emailCheckIcon.classList.replace('fa-xmark', 'fa-check');
        emailCheckIcon.classList.add('text-success');


    } else {
        if (emailCheckIcon && emailCheckIcon.classList.contains('fa-check')) {
            document.querySelector('#loginEmailAcc').style.borderBottom = "3px solid red";

            emailCheckIcon.classList.replace('fa-check', 'fa-xmark');
            emailCheckIcon.classList.remove('text-success');
        }
    }


    if (data.Password != '') {
        passwordCheckIcon.classList.remove('d-none')

        document.querySelector('#loginPasswordAcc').style.borderBottom = "3px solid green";
        passwordCheckIcon.classList.replace('fa-xmark', 'fa-check');
        passwordCheckIcon.classList.add('text-success');
        passwordInputWarn.classList.replace("text-danger", 'text-muted')

    } else {
        if (passwordCheckIcon && passwordCheckIcon.classList.contains('fa-check')) {
            document.querySelector('#loginPasswordAcc').style.borderBottom = "3px solid red";

            passwordCheckIcon.classList.replace('fa-check', 'fa-xmark');
            passwordCheckIcon.classList.remove('text-success');
            passwordInputWarn.classList.replace("text-muted", 'text-danger')

        }
    }



    useEffect(() => {

        const ele = document.querySelector('#checkInput01');
        if (ele) {

            ele.checked = true;
            ele.style.backgroundColor = 'black';
        }

    }, [])

    const midProcess = useRef(false)
    const loginAccount = async () => {
        midProcess.current = true;
        const loginBtn = document.querySelector('#loginModalBtn');
        const loginArrowIcon = document.querySelector('#loginModalBtn i');
        const loginLoader = document.querySelector('#loginLoader');

        loginBtn.style.opacity = .6;
        loginBtn.style.cursor = 'not-allowed';
        loginArrowIcon.classList.add('d-none');
        loginLoader.classList.remove('d-none');

        const passwordCheckIcon = document.querySelector('#loginPasswordAcc-checkIcon i');
        const passwordInputWarn = document.querySelector('#loginPasswordAcc-warning');
        const emailInputWarn = document.querySelector('#loginEmailAcc-warning');
        const arr = [];
        if (data.Email == '' || !(data.Email).includes('@gmail.com') || (data.Email).includes(' ')) {
            document.querySelector('#loginEmailAcc').style.borderBottom = "3px solid red";
            
            emailInputWarn.classList.remove('d-none');
            arr.push('bad');

        }
        if (data.Password == '') {
            passwordInputWarn.classList.remove('d-none');
            document.querySelector('#loginEmailAcc').style.borderBottom = "3px solid red";
            passwordInputWarn.classList.replace("text-muted", 'text-danger');
            passwordCheckIcon.classList.remove('d-none')
            arr.push('bad');

        }
        if (arr.length == 0) {
            await axios.post(process.env.REACT_APP_SERVER_URL + '/login', { email: data.Email, password: data.Password })
                .then((res) => {
                    const passwordErr = document.querySelector("#warningPasswordError01");
                    console.log(res.data);
                    if (res.data.message) {
                        passwordErr.classList.remove('d-none');
                    } else if (res.data.token) {
                        passwordErr.classList.add('d-none');
                        localStorage.setItem("Token01", res.data.token);
                        localStorage.setItem("Email", data.Email);

                        navigate('/my-account/profile');
                        props.changeRe();

                    }


                }).catch((err) => {
                    console.log(err);
                })

        }
        setTimeout(() => {

            loginBtn.style.opacity = 1;
            loginArrowIcon.classList.remove('d-none')
            loginLoader.classList.add('d-none');
            loginBtn.style.cursor = 'pointer';
            midProcess.current = false;



        }, 300)
    }
    if (token01) {
        return (<Navigate to='/' />)
    } else {
        return (
            <div className='d-flex justify-content-center'>

                <div className='loginPageContainer'>
                    <div className='box01'>
                        <h1>LOG IN</h1>

                        <div role='button' className='forgottenBtn'>
                            Forgotten Your Password?
                        </div>
                        <div className='inputGroup mt-3'>
                            <input id='loginEmailAcc' type='email' value={data.Email} onChange={(e) => setData({
                                Email: e.target.value,
                                Password: data.Password
                            })} onBlur={() => labelAnimation("loginEmailAcc", 'off','email',data)} onFocus={() => labelAnimation("loginEmailAcc", 'on',"email",data)} />
                            <label id='loginEmailAcc-label' for='loginEmail01' className=''>Email *</label>
                            <div id='loginEmailAcc-checkIcon' className='loginInputIcon'>
                                <i class="fa-solid fa-xmark fs-4 d-none"></i>

                            </div>
                        </div>
                        <div id='loginEmailAcc-warning' className='text-danger fw-light ms-3 d-none'>
                            Please enter a valid e-mail address
                        </div>

                        <div className='d-flex align-items-center mt-2'>

                            <i id='showPassIcon' class="fa-regular fa-eye ms-auto"></i>
                            <div className='mx-2 showPassBtn' onClick={()=>showPass('loginPasswordAcc')}>
                                SHOW

                            </div>
                        </div>
                        <div className='inputGroup'>
                            <input id='loginPasswordAcc' type='password' value={data.Password} onChange={(e) => setData({
                                Email: data.Email,
                                Password: e.target.value
                            })} onBlur={() => labelAnimation('loginPasswordAcc', 'off',"passwordLogin",data)} onFocus={() => labelAnimation('loginPasswordAcc', 'on',"passwordLogin",data)} />
                            <label id='loginPasswordAcc-label' for='loginPassword'> Password *</label>
                            <div id='loginPasswordAcc-checkIcon' className='inputIcon'>
                                <i class="fa-solid fa-xmark fs-4 d-none"></i>

                            </div>
                        </div>
                        <div id='loginPasswordAcc-warning' className='text-muted mx-3 fw-light d-none'>
                            Please enter a password
                        </div>
                        <div id='warningPasswordError01' className='text-danger mx-3 d-none'>
                            Incorrect email/password – please check and retry
                        </div>

                        <div role='button' className="checkboxGroup mt-3" onClick={() => checkMark("checkInput01")}>
                            <input id='checkInput01' type='checkbox' className='me-2' />
                            <span>

                                Keep me logged in. More info
                            </span>
                            <div className='checkbox-mark'>
                                <i class="fa-solid fa-check"></i>
                            </div>
                        </div>
                        <div className='lBtn'>
                            <button id='loginModalBtn' role='button' className='main-btn my-3 m-0' onClick={() => {
                                if (midProcess.current == false) {
                                    addButtonClass("loginModalBtn");
                                    loginAccount()
                                }
                            }}>
                                LOG IN
                                <div className='border-button'>

                                </div>
                                <div>

                                    <i class="bi bi-arrow-right fs-4 ms-3"></i>
                                    <div id='loginLoader' class="loader ms-3 d-none"></div>
                                </div>

                            </button>
                        </div>
                        <div>
                            By clicking "LOG IN", I agree to the Terms & Conditions, the adiClub Terms & Conditions and the adidas Privacy Policy.
                        </div>
                    </div>
                    <div className='box02'>
                        <h1>
                            JOIN THE CLUB. GET REWARDED.
                        </h1>
                        <div role='button' className='fs-5 fw-light'>
                            JOIN ADICLUB. GET REWARDED TODAY.
                        </div>
                        <div className='fs-6 fw-light pt-3  d-flex align-items-center'>
                            <i className='fa-solid fa-check fs-4 me-2' />
                            Free delivery
                        </div>
                        <div className='fs-6 fw-light pt-3  d-flex align-items-center'>
                            <i className='fa-solid fa-check fs-4 me-2' />
                            A 15% off voucher for your next purchase
                        </div>
                        <div className='fs-6 fw-light pt-3  d-flex align-items-center'>
                            <i className='fa-solid fa-check fs-4 me-2' />
                            Access to Members Only products and sales
                        </div>
                        <div className='fs-6 fw-light pt-3  d-flex align-items-center'>
                            <i className='fa-solid fa-check fs-4 me-2' />
                            Access to adidas Running and Training apps
                        </div>
                        <div className='fs-6 fw-light pt-3  d-flex align-items-center'>
                            <i className='fa-solid fa-check fs-4 me-2' />
                            Special offers and promotions
                        </div>
                        <div role='button' className='fs-5 fw-light mt-2'>
                            Join now to start earning points, reach new levels and unlock more rewards and benefits from adiClub.
                        </div>
                        <a href='/account-register'>
                            <div className='lBtn'>
                                <button id='joinTheClubBtn' role='button' className='main-btn my-3 m-0' onClick={() => {
                                    addButtonClass("joinTheClubBtn");
                                }}>
                                    JOIN THE CLUB
                                    <div className='border-button'>

                                    </div>

                                    <i class="bi bi-arrow-right fs-4 ms-3"></i>

                                </button>
                            </div>
                        </a>
                        <div>
                            <img src="https://www.adidas.co.in/glass/react/d5e2a4e/assets/img/adiClub-account-register.jpeg" alt="adiClub teaser" height="100%" width="100%" />
                        </div>

                    </div>


                </div>
            </div>

        )
    }
}

export default AccountLogin;
