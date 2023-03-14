import React, { useEffect, useState } from 'react'
import "./registerModal.css";
import axios from "axios";

const RegisterModal = (props) => {
    const [data, setData] = useState({
        Email: '',
        Password: ''
    });


    const addButtonClass = (id) => {
        document.querySelector("#" + id).classList.toggle('main-btn-onClick');
        document.querySelector("#" + id + " .border-button").classList.toggle('border-button-onClick');

        setTimeout(() => {
            document.querySelector("#" + id).classList.toggle('main-btn-onClick');
            document.querySelector("#" + id + " .border-button").classList.toggle('border-button-onClick');

        }, 150);
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
        const emailInput = document.querySelector('#signupEmail');
        const emailCheckIcon = document.querySelector('#emailCheckIcon i');

        const passwordInputWarn = document.querySelector('#warningPasswordInput01');
        const passwordInput = document.querySelector('#signupPassword');
        const passwordCheckIcon = document.querySelector('#passwordCheckIcon i');
        if (state == 'on') {
            ele.classList.add("inputLabelAni");


            if ("labelEmail" == id) {

                emailInputWarn.classList.add('d-none');
            } else {
                passwordInputWarn.innerHTML = 'Minimum 8 characters with at least one uppercase, one lowercase, one special character and a number.'
            }


        } else {



            if ("labelEmail" == id) {
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

    if ((data.Email).includes('@gmail.com')) {
        emailCheckIcon.classList.remove('d-none')


        document.querySelector('#signupEmail').style.borderBottom = "3px solid green";
        emailCheckIcon.classList.replace('fa-xmark', 'fa-check');
        emailCheckIcon.classList.add('text-success');


    } else {
        if (emailCheckIcon && emailCheckIcon.classList.contains('fa-check')) {
            document.querySelector('#signupEmail').style.borderBottom = "3px solid red";

            emailCheckIcon.classList.replace('fa-check', 'fa-xmark');
            emailCheckIcon.classList.remove('text-success');
        }
    }

    if (passwordValidation() == 'good') {
        passwordCheckIcon.classList.remove('d-none')

        document.querySelector('#signupPassword').style.borderBottom = "3px solid green";
        passwordCheckIcon.classList.replace('fa-xmark', 'fa-check');
        passwordCheckIcon.classList.add('text-success');
        passwordInputWarn.classList.replace("text-danger", 'text-muted')

    } else {
        if (passwordCheckIcon && passwordCheckIcon.classList.contains('fa-check')) {
            document.querySelector('#signupPassword').style.borderBottom = "3px solid red";

            passwordCheckIcon.classList.replace('fa-check', 'fa-xmark');
            passwordCheckIcon.classList.remove('text-success');
            passwordInputWarn.classList.replace("text-muted", 'text-danger')

        }
    }



    const checkMark = (id) => {
        const ele = document.querySelector('#' + id)
        const warningEle = document.querySelector('#warning' + id)

        if (ele.checked) {
            ele.checked = false;
            ele.style.backgroundColor = 'white';

            warningEle.classList.remove('d-none')


        } else {
            ele.checked = true;
            ele.style.backgroundColor = 'black';
            warningEle.classList.add('d-none')

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

    const registerValidator = () => {
        const arr = [];

        const emailInputWarn = document.querySelector('#warningEmailInput01');
        const emailInput = document.querySelector('#signupEmail');

        if (data.Email == '') {
            emailInputWarn.classList.remove('d-none');
            emailInput.style.borderBottom = "3px solid red";
            emailInputWarn.textContent = "Please enter a valid e-mail address";

        } else if (!(data.Email).includes('@gmail.com')) {
            emailInputWarn.textContent = "The email address is invalid.";
        } else {
            arr.push('good');
            console.log(arr);
        }

        const passwordInputWarn = document.querySelector('#warningPasswordInput01');
        const passwordInput = document.querySelector('#signupPassword');
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

    const registerAccount = async() => {
        const r = registerValidator()
        if(r==4){
            const emailCheckIcon = document.querySelector('#emailCheckIcon i');

            const emailInputWarn = document.querySelector('#warningEmailInput01');
            const emailInput = document.querySelector('#signupEmail');


            await axios.post('https://adidas-clone-backend.vercel.app/register',{email:data.Email,password:data.Password})
            .then((res)=>{
                console.log(res.data);

                if(res.data.error){
                    emailInputWarn.classList.remove('d-none');
                    emailInputWarn.innerHTML=res.data.error;
                    emailInput.style.borderBottom = "3px solid red";

                    emailCheckIcon.classList.replace('fa-check', 'fa-xmark');
                    emailCheckIcon.classList.remove('text-success');


                }else if(res.data.token){
                    localStorage.setItem("Token01", res.data.token);
                    props.toggleRegisterModal();

                }
            }).catch((err)=>{
                console.log(err);
            })
        }

    }
    // useEffect(()=>{
    //     var token01 = localStorage.getItem("Token01");
    //     if(token01){
    //         axios.get('https://adidas-clone-backend.vercel.app/secret',{headers:{'Authorization':"Bearer " + token01 }})
    //         .then((res)=>{
    //             console.log(res.data);
    //         }).catch((err)=>{
    //             console.log(err);
    //         })
    //     }
    // },[])
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
                        <input id='signupEmail' type='email' value={data.Email} onChange={(e) => setData({
                            Email: e.target.value,
                            Password: data.Password
                        })} onBlur={() => labelAni("labelEmail", 'off')} onFocus={() => labelAni("labelEmail", 'on')} autoComplete='off' />
                        <label id='labelEmail' for='signupEmail' className=''>Email *</label>
                        <div id='emailCheckIcon' className='inputIcon'>
                            <i class="fa-solid fa-xmark fs-4 d-none"></i>

                        </div>
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
                        <input id='signupPassword' type='password' value={data.Password} onChange={(e) => setData({
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

                    <button id='registerModalBtn' role='button' className='main-btn my-3 m-0' onClick={() => { addButtonClass("registerModalBtn"); registerAccount() }}>
                        REGISTER
                        <i class="bi bi-arrow-right fs-4 ms-3"></i>
                        <div className='border-button'>

                        </div>
                    </button>





                </div>
                <div role='button' className='closeRegisterModal' onClick={() => { props.toggleRegisterModal(); }}>
                    <i class="fa-solid fa-xmark fs-2"></i>

                </div>
            </div>
        </div>

    )
}

export default RegisterModal;
