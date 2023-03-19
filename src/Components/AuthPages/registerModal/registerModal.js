import React, { useEffect, useRef, useState } from 'react'
import "./registerModal.css";
import axios from "axios";
import { addButtonClass } from '../../Repeaters/addButtonClass';
import { showPass } from '../../Repeaters/AuthPages/showPass';
import { checkMark } from '../../Repeaters/AuthPages/checkMark';
import { labelAnimation } from '../../Repeaters/AuthPages/labelAnimation';
import { passwordValidation } from '../../Repeaters/AuthPages/passwordValidation';

const RegisterModal = (props) => {
    const [data, setData] = useState({
        Email: '',
        Password: ''
    });

   
    const emailCheckIcon = document.querySelector('#signupEmailModal-checkIcon i');
    const passwordCheckIcon = document.querySelector('#signupPasswordModal-checkIcon i');
    const passwordInputWarn = document.querySelector('#signupPasswordModal-warning');

    if ((data.Email).includes('@gmail.com') && !(data.Email).includes(' ')) {
        emailCheckIcon.classList.remove('d-none')


        document.querySelector('#signupEmailModal').style.borderBottom = "3px solid green";
        emailCheckIcon.classList.replace('fa-xmark', 'fa-check');
        emailCheckIcon.classList.add('text-success');


    } else {
        if (emailCheckIcon && emailCheckIcon.classList.contains('fa-check')) {
            document.querySelector('#signupEmailModal').style.borderBottom = "3px solid red";

            emailCheckIcon.classList.replace('fa-check', 'fa-xmark');
            emailCheckIcon.classList.remove('text-success');
        }
    }

    if (passwordValidation(data) == 'good') {
        passwordCheckIcon.classList.remove('d-none')

        document.querySelector('#signupPasswordModal').style.borderBottom = "3px solid green";
        passwordCheckIcon.classList.replace('fa-xmark', 'fa-check');
        passwordCheckIcon.classList.add('text-success');
        passwordInputWarn.classList.replace("text-danger", 'text-muted')

    } else {
        if (passwordCheckIcon && passwordCheckIcon.classList.contains('fa-check')) {
            document.querySelector('#signupPasswordModal').style.borderBottom = "3px solid red";

            passwordCheckIcon.classList.replace('fa-check', 'fa-xmark');
            passwordCheckIcon.classList.remove('text-success');
            passwordInputWarn.classList.replace("text-muted", 'text-danger')

        }
    }



   

    const registerValidatorModal = () => {
        const arr = [];

        const emailInputWarn = document.querySelector('#signupEmailModal-warning');
        const emailInput = document.querySelector('#signupEmailModal');

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

        const passwordInputWarn = document.querySelector('#signupPasswordModal-warning');
        const passwordInput = document.querySelector('#signupPasswordModal');
        if (data.Password == '') {
            passwordInputWarn.classList.remove('d-none')
            passwordInput.style.borderBottom = "3px solid red";
            passwordInputWarn.textContent = "Please enter a password";
            passwordInputWarn.classList.replace("text-muted", 'text-danger')
        } else if (passwordValidation(data) == 'good') {

            arr.push('good');
            console.log(arr);
        }


        const check01 = document.querySelector('#checkInputModal01');
        const check03 = document.querySelector('#checkInputModal03');
        const checkwarn01 = document.querySelector('#checkInputModal01-warning');
        const checkwarn03 = document.querySelector('#checkInputModal03-warning');


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
    const registerAccountModal = async () => {
        midProcess.current=true;
        const registerBtn = document.querySelector('#registerModalBtn');
        const registerArrowIcon = document.querySelector('#registerModalBtn i');
        const registerLoader = document.querySelector('#registerLoader');


        registerBtn.style.opacity = .6;
        registerBtn.style.cursor = 'not-allowed';
        registerArrowIcon.classList.add('d-none');
        registerLoader.classList.remove('d-none');

        var r = registerValidatorModal()

        if (r == 4) {
            const emailCheckIcon = document.querySelector('#signupEmailModal-checkIcon i');

            const emailInputWarn = document.querySelector('#signupEmailModal-warning');
            const emailInput = document.querySelector('#signupEmailModal');


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
                        props.toggleRegisterModal();
                        props.changeRe()

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
            midProcess.current=false;



        }, 300)


    }
   
    return (
        <div>

            <div className='opacityBackColor'></div>

            <div className='signupModal'>
                <div className='modalBox'>
                    <div className='fs-2 fw-bolder me-5 pe-5'>
                        CREATE YOUR ACCOUNT
                    </div>
                    <div className='fs-6 fw-light py-1 pb-3'>
                        Sign up now and get 15% off your first order.
                    </div>
                    <div className='inputGroup'>
                        <input id='signupEmailModal' type='email' value={data.Email} onChange={(e) => setData({
                            Email: e.target.value,
                            Password: data.Password
                    })} onBlur={() => labelAnimation("signupEmailModal", 'off',"email",data)} onFocus={() => labelAnimation("signupEmailModal", 'on',"email",data)} autoComplete='off' />
                        <label id='signupEmailModal-label' for='signupEmail' className=''>Email *</label>
                        <div id='signupEmailModal-checkIcon' className='inputIcon'>
                            <i class="fa-solid fa-xmark fs-4 d-none"></i>

                        </div>
                    </div>

                    <div id='signupEmailModal-warning' className='text-danger fw-light ms-3 d-none'>
                        Please enter a valid e-mail address
                    </div>


                    <div className='d-flex align-items-center mt-2'>

                        <i id='showPassIcon' class="fa-regular fa-eye ms-auto"></i>
                        <div className='mx-2 showPassBtn' onClick={()=>{showPass('signupPasswordModal')}}>
                            SHOW

                        </div>
                    </div>
                    <div className='inputGroup'>
                        <input id='signupPasswordModal' type='password' value={data.Password} onChange={(e) => setData({
                            Email: data.Email,
                            Password: e.target.value
                        })} onBlur={() => labelAnimation('signupPasswordModal', 'off','passwordRegister',data)} onFocus={() => labelAnimation('signupPasswordModal', 'on',"passwordRegister",data)} />
                        <label id='signupPasswordModal-label' for='signupPasswordModal'> Password *</label>
                        <div id='signupPasswordModal-checkIcon' className='inputIcon'>
                            <i class="fa-solid fa-xmark fs-4 d-none"></i>

                        </div>
                    </div>
                    <div id='signupPasswordModal-warning' className='text-muted mx-3 fw-light'>
                        Minimum 8 characters with at least one uppercase, one lowercase, one special character and a number.
                    </div>

                    <div role='button' className="checkboxGroup" onClick={() => checkMark("checkInputModal01")}>
                        <input id='checkInputModal01' type='checkbox' className='me-2' />
                        <span>

                            Yes, I am over 18 years old
                        </span>
                        <div className='checkbox-mark'>
                            <i class="fa-solid fa-check"></i>
                        </div>
                    </div>
                    <div id='checkInputModal01-warning' className='text-danger fw-light d-none'>
                        You are too young to register / order.
                    </div>




                    <div role='button' className="checkboxGroup" onClick={() => checkMark("checkInputModal02")}>
                        <input id='checkInputModal02' type='checkbox' className='me-2' />
                        <span>

                            I would like to stay up to date with adidas. I agree to receive personalised marketing messages from adidas India Marketing Pvt. Ltd.
                        </span>

                        <div className='checkbox-mark'>
                            <i class="fa-solid fa-check"></i>
                        </div>
                    </div>
                    <div role='button' className="checkboxGroup" onClick={() => checkMark("checkInputModal03")}>
                        <input id='checkInputModal03' type='checkbox' className='me-2' />
                        <span>


                            I have read and accepted the Terms & Conditions, the adiClub Terms & Conditions and the adidas Privacy Policy.                        </span>

                        <div className='checkbox-mark'>
                            <i class="fa-solid fa-check"></i>
                        </div>
                    </div>

                    <div id='checkInputModal03-warning' className='text-danger fw-light d-none'>
                        Invalid value
                    </div>
                    <div id='rBtn' className='registerBtn py-1'>

                        <button id='registerModalBtn' type='button' role='button' className='main-btn  my-3 m-0' onClick={() => {
                            if (midProcess.current==false) {
                            addButtonClass("registerModalBtn");
                            registerAccountModal()
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
                <div role='button' className='closeRegisterModal' onClick={() => { props.toggleRegisterModal(); }}>
                    <i class="fa-solid fa-xmark fs-2"></i>

                </div>
            </div>
        </div>

    )
}

export default RegisterModal;
