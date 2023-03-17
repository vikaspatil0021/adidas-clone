import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
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

    const addButtonClass = (id) => {
        document.querySelector("#" + id).classList.toggle('main-btn-onClick');
        document.querySelector("#" + id + " .border-button").classList.toggle('border-button-onClick');

        setTimeout(() => {
            document.querySelector("#" + id).classList.toggle('main-btn-onClick');
            document.querySelector("#" + id + " .border-button").classList.toggle('border-button-onClick');

        }, 150);
    }

    const checkMark = (id) => {
        const ele = document.querySelector('#' + id)
        const warningEle = document.querySelector('#warning' + id)

        if (ele.checked) {
            ele.checked = false;
            ele.style.backgroundColor = 'white';
            if (warningEle) {

                warningEle.classList.remove('d-none')
            }




        } else {
            ele.checked = true;
            ele.style.backgroundColor = 'black';

            if (warningEle) {

                warningEle.classList.add('d-none');
            }

        }


    }



    const showPass = () => {
        const ele = document.querySelector('#signupPassword');
        const clickedBtn = document.querySelector('.showPassBtn');
        const showPassIcon = document.querySelector('#showPassIcon');
        if (ele.type == "password") {
            ele.type = "text";
            clickedBtn.textContent = 'HIDE';
            showPassIcon.classList.replace('fa-eye', 'fa-eye-slash')
        } else {
            ele.type = "password";
            clickedBtn.textContent = 'SHOW';
            showPassIcon.classList.replace('fa-eye-slash', 'fa-eye')


        }

    }
    const passwordValidation = () => {
        if (data.Password.length >= 8 && data.Password.match(/[0-9]/g) && data.Password.match(/[A-Z]/g) && data.Password.match(/[a-z]/g) && data.Password.match(/[^A-Za-z0-9]/g)) {
            return "good";
        } else {
            return "bad"
        }
    }
    const labelAni = (id, state) => {
        const ele = document.querySelector('#' + id);

        const emailInputWarn = document.querySelector('#warningEmailInput01');
        const emailInput = document.querySelector('#signupEmail01');
        const emailCheckIcon = document.querySelector('#emailCheckIcon i');

        const passwordInputWarn = document.querySelector('#warningPasswordInput01');
        const passwordInput = document.querySelector('#signupPassword01');
        const passwordCheckIcon = document.querySelector('#passwordCheckIcon i');

        const fNameInputWarn = document.querySelector('#warningFname');
        const fNameInput = document.querySelector('#signupFname');
        const fNameCheckIcon = document.querySelector('#fnameCheckIcon i');

        const lNameInputWarn = document.querySelector('#warningLname');
        const lNameInput = document.querySelector('#signupLname');
        const lNameCheckIcon = document.querySelector('#lnameCheckIcon i');

        if (state == 'on') {
            ele.classList.add("inputLabelAni");


            if ("labelEmail" == id) {

                emailInputWarn.classList.add('d-none');
            } else if ("labelFname" == id) {
                fNameInputWarn.classList.add('d-none');

            } else if ("labelLname" == id) {
                lNameInputWarn.classList.add('d-none');

            } else {
                passwordInputWarn.innerHTML = 'Minimum 8 characters with at least one uppercase, one lowercase, one special character and a number.'
            }


        } else {

            if ("labelFname" == id) {
                fNameCheckIcon.classList.remove('d-none');

                if (fullName.fname == '') {
                    fNameInputWarn.classList.remove('d-none')
                    fNameInput.style.borderBottom = "3px solid red";


                    ele.classList.remove("inputLabelAni");
                } else {
                    fNameInput.style.borderBottom = "3px solid green";

                }
            } else if ("labelLname" == id) {
                lNameCheckIcon.classList.remove('d-none')

                if (fullName.lname == '') {
                    lNameInputWarn.classList.remove('d-none')
                    lNameInput.style.borderBottom = "3px solid red";


                    ele.classList.remove("inputLabelAni");
                } else {
                    lNameInput.style.borderBottom = "3px solid green";

                }
            }



            if ("labelEmail" == id) {
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
            } else if ("labelPassword" == id) {
                // ele.classList.remove("inputLabelAni");

                passwordCheckIcon.classList.remove('d-none')


                if (data.Password == '') {
                    passwordInputWarn.classList.remove('d-none')
                    passwordInput.style.borderBottom = "3px solid red";


                    ele.classList.remove("inputLabelAni");
                    passwordInputWarn.textContent = "Please enter a password";
                    passwordInputWarn.classList.replace("text-muted", 'text-danger')

                } else {
                    // password validation
                    const r = passwordValidation()
                    if (r == "good") {

                        passwordInput.style.borderBottom = "3px solid green";
                        passwordInputWarn.classList.replace("text-danger", 'text-muted')

                    } else {
                        passwordInput.style.borderBottom = "3px solid red";
                        passwordInputWarn.classList.replace("text-muted", 'text-danger')
                    }

                }

            }


        }


    }

    const emailCheckIcon = document.querySelector('#emailCheckIcon i');
    const passwordCheckIcon = document.querySelector('#passwordCheckIcon i');
    const passwordInputWarn = document.querySelector('#warningPasswordInput01');

    if ((data.Email).includes('@gmail.com') && !(data.Email).includes(' ')) {
        emailCheckIcon.classList.remove('d-none')


        document.querySelector('#signupEmail01').style.borderBottom = "3px solid green";
        emailCheckIcon.classList.replace('fa-xmark', 'fa-check');
        emailCheckIcon.classList.add('text-success');


    } else {
        if (emailCheckIcon && emailCheckIcon.classList.contains('fa-check')) {
            document.querySelector('#signupEmail01').style.borderBottom = "3px solid red";

            emailCheckIcon.classList.replace('fa-check', 'fa-xmark');
            emailCheckIcon.classList.remove('text-success');
        }
    }

    if (passwordValidation() == 'good') {
        passwordCheckIcon.classList.remove('d-none')

        document.querySelector('#signupPassword01').style.borderBottom = "3px solid green";
        passwordCheckIcon.classList.replace('fa-xmark', 'fa-check');
        passwordCheckIcon.classList.add('text-success');
        passwordInputWarn.classList.replace("text-danger", 'text-muted')

    } else {
        if (passwordCheckIcon && passwordCheckIcon.classList.contains('fa-check')) {
            document.querySelector('#signupPassword01').style.borderBottom = "3px solid red";

            passwordCheckIcon.classList.replace('fa-check', 'fa-xmark');
            passwordCheckIcon.classList.remove('text-success');
            passwordInputWarn.classList.replace("text-muted", 'text-danger')

        }
    }

    const fNameCheckIcon = document.querySelector('#fnameCheckIcon i');
    const lNameCheckIcon = document.querySelector('#lnameCheckIcon i');
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

        const fNameCheckIcon = document.querySelector('#fnameCheckIcon i');
        const lNameCheckIcon = document.querySelector('#lnameCheckIcon i');
        const fNameInput = document.querySelector('#signupFname');
        const lNameInput = document.querySelector('#signupLname');
        const fNameInputWarn = document.querySelector('#warningFname');
        const lNameInputWarn = document.querySelector('#warningLname');


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

        const emailInputWarn = document.querySelector('#warningEmailInput01');
        const emailInput = document.querySelector('#signupEmail01');

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

        const passwordInputWarn = document.querySelector('#warningPasswordInput01');
        const passwordInput = document.querySelector('#signupPassword01');
        if (data.Password == '') {
            passwordInputWarn.classList.remove('d-none')
            passwordInput.style.borderBottom = "3px solid red";
            passwordInputWarn.textContent = "Please enter a password";
            passwordInputWarn.classList.replace("text-muted", 'text-danger')
        } else if (passwordValidation() == 'good') {

            arr.push('good');
            console.log(arr);
        }


        const check01 = document.querySelector('#checkInput01');
        const check03 = document.querySelector('#checkInput03');
        const checkwarn01 = document.querySelector('#warningcheckInput01');
        const checkwarn03 = document.querySelector('#warningcheckInput03');


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
        const registerBtn = document.querySelector('#registerModalBtn');
        const registerArrowIcon = document.querySelector('#registerModalBtn i');
        const registerLoader = document.querySelector('#registerLoader');


        registerBtn.style.opacity = .6;
        registerBtn.style.cursor = 'not-allowed';
        registerArrowIcon.classList.add('d-none');
        registerLoader.classList.remove('d-none');

        var r = registerValidator()

        if (r == 7) {
            const emailCheckIcon = document.querySelector('#emailCheckIcon i');

            const emailInputWarn = document.querySelector('#warningEmailInput01');
            const emailInput = document.querySelector('#signupEmail01');


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
                        navigate('/')

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
                        })} onBlur={() => { labelAni("labelFname", 'off'); }} onFocus={() => labelAni("labelFname", 'on')} autoComplete='off' />
                        <label id='labelFname' for='signupEmail' className=''>First Name *</label>
                        <div id='fnameCheckIcon' className='inputIcon'>
                            <i class="fa-solid fa-xmark fs-4 d-none"></i>

                        </div>
                    </div>
                    <div id='warningFname' className='text-danger fw-light ms-3 d-none'>
                        Please enter your first name
                    </div>
                    <div className='inputGroup mt-3'>
                        <input id='signupLname' type='email' value={fullName.lname} onChange={(e) => setFullName({
                            fname: fullName.fname,
                            lname: e.target.value
                        })} onBlur={() => { labelAni("labelLname", 'off'); }} onFocus={() => labelAni("labelLname", 'on')} autoComplete='off' />
                        <label id='labelLname' for='signupEmail' className=''>Last Name *</label>
                        <div id='lnameCheckIcon' className='inputIcon'>
                            <i class="fa-solid fa-xmark fs-4 d-none"></i>

                        </div>
                    </div>
                    <div id='warningLname' className='text-danger fw-light ms-3 d-none'>
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
                        <input id='signupEmail01' type='email' value={data.Email} onChange={(e) => setData({
                            Email: e.target.value,
                            Password: data.Password
                        })} onBlur={() => { labelAni("labelEmail", 'off'); ifLoginAction() }} onFocus={() => labelAni("labelEmail", 'on')} autoComplete='off' />
                        <label id='labelEmail' for='signupEmail' className=''>Email *</label>
                        <div id='emailCheckIcon' className='inputIcon'>
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

                    <div id='warningEmailInput01' className='text-danger fw-light ms-3 d-none'>
                        Please enter a valid e-mail address
                    </div>


                    <div className='d-flex align-items-center mt-2'>

                        <i id='showPassIcon' class="fa-regular fa-eye ms-auto"></i>
                        <div className='mx-2 showPassBtn' onClick={showPass}>
                            SHOW

                        </div>
                    </div>
                    <div className='inputGroup'>
                        <input id='signupPassword01' type='password' value={data.Password} onChange={(e) => setData({
                            Email: data.Email,
                            Password: e.target.value
                        })} onBlur={() => labelAni('labelPassword', 'off')} onFocus={() => labelAni('labelPassword', 'on')} />
                        <label id='labelPassword' for='signupPassword'> Password *</label>
                        <div id='passwordCheckIcon' className='inputIcon'>
                            <i class="fa-solid fa-xmark fs-4 d-none"></i>

                        </div>
                    </div>
                    <div id='warningPasswordInput01' className='text-muted mx-3 fw-light'>
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
                    <div id='warningcheckInput01' className='text-danger fw-light d-none'>
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

                    <div id='warningcheckInput03' className='text-danger fw-light d-none'>
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

                        <button id='registerModalBtn' type='button' role='button' className='main-btn  my-3 m-0' onClick={() => {
                            if (midProcess.current == false) {
                                addButtonClass("registerModalBtn");
                                registerAccount()
                            }
                        }}>
                            REGISTER
                            <div className='border-button'></div>
                            <div>

                                <i id='registerArrowIcon' class="bi bi-arrow-right fs-4 ms-3"></i>
                                <div id='registerLoader' class="loader ms-3 d-none"></div>
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
    )
                    }
                    
}

export default AccountRegister;
