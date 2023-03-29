import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { addButtonClass } from '../../Repeaters/addButtonClass';
import { checkMark } from '../../Repeaters/AuthPages/checkMark';
import { labelAnimation } from '../../Repeaters/AuthPages/labelAnimation';
import { passwordValidation } from '../../Repeaters/AuthPages/passwordValidation';
import { showPass } from '../../Repeaters/AuthPages/showPass';
import "./accountRegister.css"
const AccountRegister = (props) => {
    const navigate = useNavigate()
    var token01 = localStorage.getItem("Token01");

    const [data, setData] = useState({
        Email: '',
        Password: ''
    });
    const [fullName, setFullName] = useState({
        fname: '',
        lname: ''
    })


    const emailCheckIcon = document.querySelector('#signupEmailAcc-checkIcon i');
    const passwordCheckIcon = document.querySelector('#signupPasswordAcc-checkIcon i');
    const passwordInputWarn = document.querySelector('#signupPasswordAcc-warning');

    if ((data.Email).includes('@gmail.com') && !(data.Email).includes(' ')) {
        emailCheckIcon.classList.remove('d-none')


        document.querySelector('#signupEmailAcc').style.borderBottom = "3px solid green";
        emailCheckIcon.classList.replace('fa-xmark', 'fa-check');
        emailCheckIcon.classList.add('text-success');


    } else {
        if (emailCheckIcon && emailCheckIcon.classList.contains('fa-check')) {
            document.querySelector('#signupEmailAcc').style.borderBottom = "3px solid red";

            emailCheckIcon.classList.replace('fa-check', 'fa-xmark');
            emailCheckIcon.classList.remove('text-success');
        }
    }

    if (passwordValidation(data) == 'good') {
        passwordCheckIcon.classList.remove('d-none')

        document.querySelector('#signupPasswordAcc').style.borderBottom = "3px solid green";
        passwordCheckIcon.classList.replace('fa-xmark', 'fa-check');
        passwordCheckIcon.classList.add('text-success');
        passwordInputWarn.classList.replace("text-danger", 'text-muted')

    } else {
        if (passwordCheckIcon && passwordCheckIcon.classList.contains('fa-check')) {
            document.querySelector('#signupPasswordAcc').style.borderBottom = "3px solid red";

            passwordCheckIcon.classList.replace('fa-check', 'fa-xmark');
            passwordCheckIcon.classList.remove('text-success');
            passwordInputWarn.classList.replace("text-muted", 'text-danger')

        }
    }

    const fNameCheckIcon = document.querySelector('#signupFname-checkIcon i');
    const lNameCheckIcon = document.querySelector('#signupLname-checkIcon i');
    const fNameInput = document.querySelector('#signupFname');
    const lNameInput = document.querySelector('#signupLname');
    useEffect(() => {
        if (fNameCheckIcon) {

            fNameCheckIcon.classList.remove('d-none');
        }

        if (fullName.fname != '') {


            fNameInput.style.borderBottom = "3px solid green";
            fNameCheckIcon.classList.replace('fa-xmark', 'fa-check')
            fNameCheckIcon.classList.add('text-success')

        } else {
            if (fNameCheckIcon) {

                fNameCheckIcon.classList.replace('fa-check', 'fa-xmark')
                fNameCheckIcon.classList.remove('text-success')
            }
            if (fNameInput) {
                fNameInput.style.borderBottom = "3px solid red";
            }
        }
    }, [fullName.fname])
    useEffect(() => {
        if (lNameCheckIcon) {

            lNameCheckIcon.classList.remove('d-none');
        }
        if (fullName.lname != '') {

            lNameInput.style.borderBottom = "3px solid green";
            lNameCheckIcon.classList.replace('fa-xmark', 'fa-check')
            lNameCheckIcon.classList.add('text-success')

        } else {
            if (lNameCheckIcon) {

                lNameCheckIcon.classList.replace('fa-check', 'fa-xmark')
                lNameCheckIcon.classList.remove('text-success');
            }
            if (lNameInput) {
                lNameInput.style.borderBottom = "3px solid red";
            }
        }
    }, [fullName.lname])


    useEffect(() => {

        const ele = document.querySelector('#checkInput04');
        if (ele) {

            ele.checked = true;
            ele.style.backgroundColor = 'black';
        }

    }, [])


    const registerValidator = () => {
        const arr = [];

        const fNameCheckIcon = document.querySelector('#signupFname-checkIcon i');
        const lNameCheckIcon = document.querySelector('#signupLname-checkIcon i');
        const fNameInput = document.querySelector('#signupFname');
        const lNameInput = document.querySelector('#signupLname');
        const fNameInputWarn = document.querySelector('#signupFname-warning');
        const lNameInputWarn = document.querySelector('#signupLname-warning');


        if (fullName.fname == '') {

            fNameCheckIcon.classList.replace('fa-check', 'fa-xmark')
            fNameCheckIcon.classList.remove('text-success')

            fNameInput.style.borderBottom = "3px solid red";
            fNameCheckIcon.classList.remove('d-none');

            fNameInputWarn.classList.remove('d-none')
        } else {
            arr.push('good');
            console.log(arr);
        }

        if (fullName.lname == '') {

            lNameCheckIcon.classList.replace('fa-check', 'fa-xmark')
            lNameCheckIcon.classList.remove('text-success')

            lNameInput.style.borderBottom = "3px solid red";
            lNameCheckIcon.classList.remove('d-none');

            lNameInputWarn.classList.remove('d-none')
        } else {
            arr.push('good');
            console.log(arr);
        }

        const activeRadioBtn = document.querySelector('input[name="gender"]:checked');
        const warningRadio = document.querySelector('#warningInvalidRadio');
        if (activeRadioBtn) {
            arr.push('good');
            console.log(arr);
            warningRadio.classList.add('d-none')

        } else {
            warningRadio.classList.remove('d-none')
        }

        const emailInputWarn = document.querySelector('#signupEmailAcc-warning');
        const emailInput = document.querySelector('#signupEmailAcc');

        if (data.Email == '') {
            emailInputWarn.classList.remove('d-none');
            emailInput.style.borderBottom = "3px solid red";
            emailInputWarn.textContent = "Please enter a valid e-mail address";

        } else if (!(data.Email).includes('@gmail.com')) {
            emailInputWarn.textContent = "The email address is invalid.";
        }
        else if ((data.Email).includes(' ')) {
            emailInputWarn.textContent = "The email address is invalid.";
        }

        else {
            arr.push('good');
            console.log(arr);
        }

        const passwordInputWarn = document.querySelector('#signupPasswordAcc-warning');
        const passwordInput = document.querySelector('#signupPasswordAcc');
        if (data.Password == '') {
            passwordInputWarn.classList.remove('d-none')
            passwordInput.style.borderBottom = "3px solid red";
            passwordInputWarn.textContent = "Please enter a password";
            passwordInputWarn.classList.replace("text-muted", 'text-danger')
        } else if (passwordValidation(data) == 'good') {

            arr.push('good');
            console.log(arr);
        }


        const check01 = document.querySelector('#checkInput01');
        const check03 = document.querySelector('#checkInput03');
        const checkwarn01 = document.querySelector('#checkInput01-warning');
        const checkwarn03 = document.querySelector('#checkInput03-warning');


        if (check01.checked) {
            arr.push('good');
            console.log(arr);

        } else {
            checkwarn01.classList.remove('d-none')
        }

        if (check03.checked) {
            arr.push('good');
            console.log(arr);

        } else {
            checkwarn03.classList.remove('d-none')
        }


        return arr.length;


    }
    const midProcess = useRef(false)
    const registerAccount = async () => {
        midProcess.current = true;
        const registerBtn = document.querySelector('#registerAccBtn');
        const registerArrowIcon = document.querySelector('#registerAccBtn i');
        const registerLoader = document.querySelector('#registerAccLoader');


        registerBtn.style.opacity = .6;
        registerBtn.style.cursor = 'not-allowed';
        registerArrowIcon.classList.add('d-none');
        registerLoader.classList.remove('d-none');

        var r = registerValidator()

        if (r == 7) {
            const emailCheckIcon = document.querySelector('#signupEmailAcc-checkIcon i');

            const emailInputWarn = document.querySelector('#signupEmailAcc-warning');
            const emailInput = document.querySelector('#signupEmailAcc');


            await axios.post(process.env.REACT_APP_SERVER_URL + '/register', { email: data.Email, password: data.Password })
                .then((res) => {
                    console.log(res.data);

                    if (res.data.error) {
                        emailInputWarn.classList.remove('d-none');
                        emailInputWarn.innerHTML = res.data.error;
                        emailInput.style.borderBottom = "3px solid red";

                        emailCheckIcon.classList.replace('fa-check', 'fa-xmark');
                        emailCheckIcon.classList.remove('text-success');


                    } else if (res.data.token) {
                        localStorage.setItem("Token01", res.data.token);
                        props.changeRe()
                        navigate('/my-account/profile');

                    }

                }).catch((err) => {
                    console.log(err);
                })
        }
        setTimeout(() => {

            registerBtn.style.opacity = 1;
            registerArrowIcon.classList.remove('d-none')
            registerLoader.classList.add('d-none');
            registerBtn.style.cursor = 'pointer';
            midProcess.current = false;

        }, 300)

    }

    const ifLoginAction = async () => {
        const ifL = document.querySelector('#ifLogin');
        await axios.post(process.env.REACT_APP_SERVER_URL + '/checkUser', { email: data.Email })
            .then((res) => {
                console.log(res.data);
                if (res.data.user) {
                    ifL.classList.remove('d-none')
                } else {
                    ifL.classList.add('d-none')
                }
            }).catch((err) => {
                console.log(err);
            })

    }
    if (token01) {
        return (<Navigate to='/' />)
    }else{
    return (
        <div className='d-flex justify-content-center'>
            <div className='registerPageContainer'>
                <div className='box01'>
                    <h1 className='mb-3'>REGISTER</h1>

                    <div className='fw-semibold fs-5 mt-4'>
                        YOUR NAME
                    </div>
                    <div className='inputGroup'>
                        <input id='signupFname' type='email' value={fullName.fname} onChange={(e) => setFullName({
                            fname: e.target.value,
                            lname: fullName.lname
                        })} onBlur={() => { labelAnimation("signupFname", 'off',"fullName",fullName); }} onFocus={() => labelAnimation("signupFname", 'on',"fullName",fullName)} autoComplete='off' />
                        <label id='signupFname-label' for='signupEmail' className=''>First Name *</label>
                        <div id='signupFname-checkIcon' className='inputIcon'>
                            <i class="fa-solid fa-xmark fs-4 d-none"></i>

                        </div>
                    </div>
                    <div id='signupFname-warning' className='text-danger fw-light ms-3 d-none'>
                        Please enter your first name
                    </div>
                    <div className='inputGroup mt-3'>
                        <input id='signupLname' type='email' value={fullName.lname} onChange={(e) => setFullName({
                            fname: fullName.fname,
                            lname: e.target.value
                        })} onBlur={() => { labelAnimation("signupLname", 'off',"fullName",fullName); }} onFocus={() => labelAnimation("signupLname", 'on','fullName',fullName)} autoComplete='off' />
                        <label id='signupLname-label' for='signupEmail' className=''>Last Name *</label>
                        <div id='signupLname-checkIcon' className='inputIcon'>
                            <i class="fa-solid fa-xmark fs-4 d-none"></i>

                        </div>
                    </div>
                    <div id='signupLname-warning' className='text-danger fw-light ms-3 d-none'>
                        Please enter your last name
                    </div>

                    <div className='fw-semibold fs-5 mt-4'>
                        GENDER
                    </div>
                    <div className='d-flex'>

                        <div className='radioBtn' >
                            <input type="radio" id="gender01" role='button' name="gender" value="MALE" />
                            <label for="gender01" role='button'>Male</label>
                        </div>
                        <div for='gender02' className='radioBtn' >

                            <input type="radio" id="gender02" role='button' name="gender" value="FEMALE" />
                            <label for="gender02" role='button'>Female</label>
                        </div>
                        <div className='radioBtn' >

                            <input type="radio" role='button' id="gender03" name="gender" value="OTHER" />
                            <label for="gender03" role='button'>Other</label>
                        </div>
                    </div>
                    <div id='warningInvalidRadio' className='text-danger fw-light d-none'>
                        Invalid value
                    </div>



                    <div className='fw-semibold fs-5 mt-4'>
                        LOGIN DETAILS
                    </div>

                    <div className='inputGroup'>
                        <input id='signupEmailAcc' type='email' value={data.Email} onChange={(e) => setData({
                            Email: e.target.value,
                            Password: data.Password
                        })} onBlur={() => { labelAnimation("signupEmailAcc", 'off',"email",data); ifLoginAction() }} onFocus={() => labelAnimation("signupEmailAcc", 'on','email',data)} autoComplete='off' />
                        <label id='signupEmailAcc-label' for='signupEmail' className=''>Email *</label>
                        <div id='signupEmailAcc-checkIcon' className='inputIcon'>
                            <i class="fa-solid fa-xmark fs-4 d-none"></i>

                        </div>
                    </div>
                    <div id='ifLogin' className='ifLogin d-none'>
                        <h6 className='fw-light'>Looks like you already have an account.</h6>
                        <a href='/account-login'>
                        <button id='loginModalBtn' role='button' className='main-btn my-3 m-0' onClick={() => {
                            addButtonClass("loginModalBtn");
                        }}>
                            LOG IN
                            <div className='border-button'>

                            </div>

                            <i class="bi bi-arrow-right fs-4 ms-3"></i>


                        </button>
                        </a>

                    </div>

                    <div id='signupEmailAcc-warning' className='text-danger fw-light ms-3 d-none'>
                        Please enter a valid e-mail address
                    </div>


                    <div className='d-flex align-items-center mt-2'>

                        <i id='showPassIcon' class="fa-regular fa-eye ms-auto"></i>
                        <div className='mx-2 showPassBtn' onClick={()=>showPass('signupPasswordAcc')}>
                            SHOW

                        </div>
                    </div>
                    <div className='inputGroup'>
                        <input id='signupPasswordAcc' type='password' value={data.Password} onChange={(e) => setData({
                            Email: data.Email,
                            Password: e.target.value
                        })} onBlur={() => labelAnimation('signupPasswordAcc', 'off',"passwordRegister",data)} onFocus={() => labelAnimation('signupPasswordAcc', 'on',"passwordRegister",data)} />
                        <label id='signupPasswordAcc-label' for='signupPasswordAcc'> Password *</label>
                        <div id='signupPasswordAcc-checkIcon' className='inputIcon'>
                            <i class="fa-solid fa-xmark fs-4 d-none"></i>

                        </div>
                    </div>
                    <div id='signupPasswordAcc-warning' className='text-muted mx-3 fw-light'>
                        Minimum 8 characters with at least one uppercase, one lowercase, one special character and a number.
                    </div>


                    <div role='button' className="checkboxGroup" onClick={() => checkMark("checkInput01")}>
                        <input id='checkInput01' type='checkbox' className='me-2' />
                        <span>

                            Yes, I am over 18 years old
                        </span>
                        <div className='checkbox-mark'>
                            <i class="fa-solid fa-check"></i>
                        </div>
                    </div>
                    <div id='checkInput01-warning' className='text-danger fw-light d-none'>
                        You are too young to register / order.
                    </div>


                    <div role='button' className="checkboxGroup" onClick={() => checkMark("checkInput02")}>
                        <input id='checkInput02' type='checkbox' className='me-2' />
                        <span>

                            I would like to stay up to date with adidas. I agree to receive personalised marketing messages from adidas India Marketing Pvt. Ltd.
                        </span>

                        <div className='checkbox-mark'>
                            <i class="fa-solid fa-check"></i>
                        </div>
                    </div>
                    <div role='button' className="checkboxGroup" onClick={() => checkMark("checkInput03")}>
                        <input id='checkInput03' type='checkbox' className='me-2' />
                        <span>


                            I have read and accepted the Terms & Conditions, the adiClub Terms & Conditions and the adidas Privacy Policy.                        </span>

                        <div className='checkbox-mark'>
                            <i class="fa-solid fa-check"></i>
                        </div>
                    </div>

                    <div id='checkInput03-warning' className='text-danger fw-light d-none'>
                        Invalid value
                    </div>
                    <div role='button' className="checkboxGroup mt-3" onClick={() => checkMark("checkInput04")}>
                        <input id='checkInput04' type='checkbox' className='me-2' />
                        <span>

                            Keep me logged in. More info
                        </span>
                        <div className='checkbox-mark'>
                            <i class="fa-solid fa-check"></i>
                        </div>
                    </div>
                    <div id='rBtn' className='registerBtn py-1'>

                        <button id='registerAccBtn' type='button' role='button' className='main-btn  my-3 m-0' onClick={() => {
                            if (midProcess.current == false) {
                                addButtonClass("registerAccBtn");
                                registerAccount()
                            }
                        }}>
                            REGISTER
                            <div className='border-button'></div>
                            <div>

                                <i id='registerArrowIcon' class="bi bi-arrow-right fs-4 ms-3"></i>
                                <div id='registerAccLoader' class="loader ms-3 d-none"></div>
                            </div>

                        </button>
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

                    <div className='mt-3'>
                        <img src="https://www.adidas.co.in/glass/react/d5e2a4e/assets/img/adiClub-account-register.jpeg" alt="adiClub teaser" height="100%" width="100%" />
                    </div>    
                                    </div>
            </div>
        </div>
    )}
                    
}

export default AccountRegister;
