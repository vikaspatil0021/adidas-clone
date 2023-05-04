import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { addButtonClass } from '../../Repeaters/addButtonClass';
import { checkMark } from '../../Repeaters/AuthPages/checkMark';
import { labelAnimation } from '../../Repeaters/AuthPages/labelAnimation';
import { passwordValidation } from '../../Repeaters/AuthPages/passwordValidation';
import { showPass } from '../../Repeaters/AuthPages/showPass';















const AfterCheckUserLogin = (props) => {
  const [data, setData] = useState({
    Email: props.email,
    Password: ''
  });




  const passwordInputWarn = document.querySelector('#loginPasswordModal-warning');
  const passwordCheckIcon = document.querySelector('#loginPasswordModal-checkIcon i');
  useEffect(() => {

    if (data.Password != '') {
      passwordCheckIcon.classList.remove('d-none')

      document.querySelector('#loginPasswordModal').style.borderBottom = "3px solid green";
      passwordCheckIcon.classList.replace('fa-xmark', 'fa-check');
      passwordCheckIcon.classList.add('text-success');
      passwordInputWarn.classList.replace("text-danger", 'text-muted')

    } else {
      if (passwordCheckIcon && passwordCheckIcon.classList.contains('fa-check')) {
        document.querySelector('#loginPasswordModal').style.borderBottom = "3px solid red";

        passwordCheckIcon.classList.replace('fa-check', 'fa-xmark');
        passwordCheckIcon.classList.remove('text-success');
        passwordInputWarn.classList.replace("text-muted", 'text-danger')

      }
    }
  }, [data])


  useEffect(() => {

    const ele = document.querySelector('#lCheckInput01');
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

    const passwordInputWarn = document.querySelector('#loginPasswordModal-warning');
    const passwordCheckIcon = document.querySelector('#loginPasswordModal-checkIcon i');

    if (data.Password == '') {
      passwordInputWarn.classList.remove('d-none');
      document.querySelector('#loginPasswordModal').style.borderBottom = "3px solid red";
      passwordInputWarn.classList.replace("text-muted", 'text-danger');
      passwordCheckIcon.classList.remove('d-none')

    } else {
      await axios.post(process.env.REACT_APP_SERVER_URL + '/login', { email: data.Email, password: data.Password })
        .then((res) => {
          const passwordErr = document.querySelector("#warningPasswordError");
          console.log(res.data);
          if (res.data.message) {
            passwordErr.classList.remove('d-none')
          } else if (res.data.token) {
            passwordErr.classList.add('d-none');
            localStorage.setItem("Token01", res.data.token);
            localStorage.setItem("Email", data.Email);

            props.changeRe();
            props.toggleLoginModal()

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
  return (
    <div>
      <div className='fs-2 fw-bolder pe-5'>
        LOG IN
      </div>

      <div className='fs-6 fw-light py-1 pb-3'>
        Welcome back! Fill in your password to log in.
      </div>
      <div className='d-flex align-items-center mt-2'>

        <i id='showPassIcon' class="fa-regular fa-eye ms-auto"></i>
        <div className='mx-2 showPassBtn' onClick={()=>{showPass('loginPasswordModal')}}>
          SHOW

        </div>
      </div>
      <div className='inputGroup'>
        <input id='loginPasswordModal' type='password' value={data.Password} onChange={(e) => setData({
          Email: data.Email,
          Password: e.target.value
        })} onBlur={() => labelAnimation('loginPasswordModal', 'off',"passwordLogin" ,data)} onFocus={() => labelAnimation('loginPasswordModal', 'on','passwordLogin', data)} />
        <label id='loginPasswordModal-label' for='loginPassword'> Password *</label>
        <div id='loginPasswordModal-checkIcon' className='inputIcon'>
          <i class="fa-solid fa-xmark fs-4 d-none"></i>

        </div>
      </div>
      <div id='loginPasswordModal-warning' className='text-muted mx-3 fw-light d-none'>
        Please enter a password
      </div>
      <div id='warningPasswordError' className='text-danger mx-3 d-none'>
        Incorrect password – please check and retry
      </div>

      <div role='button' id='warningPasswordInput02' className='text-decoration-underline my-3 fw-light'>
        Reset your password
      </div>
      <div role='button' className="checkboxGroup" onClick={() => checkMark("CheckInputAfter01")}>
        <input id='CheckInputAfter01' type='checkbox' className='me-2' />
        <span>

          Keep me logged in. Applies to each option below. More info
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
  )
}





const AfterCheckUserRegister = (props) => {
  const [data, setData] = useState({
    Email: props.email,
    Password: ''
  });

  

  const passwordInputWarn = document.querySelector('#loginPasswordModal02-warning');
  const passwordCheckIcon = document.querySelector('#loginPasswordModal02-checkIcon i');
  useEffect(() => {

    if (data.Password != '' && passwordValidation(data) == 'good') {
      passwordCheckIcon.classList.remove('d-none')

      document.querySelector('#loginPasswordModal02').style.borderBottom = "3px solid green";
      passwordCheckIcon.classList.replace('fa-xmark', 'fa-check');
      passwordCheckIcon.classList.add('text-success');
      passwordInputWarn.classList.replace("text-danger", 'text-muted')

    } else {
      if (passwordCheckIcon && passwordCheckIcon.classList.contains('fa-check')) {
        document.querySelector('#loginPasswordModal02').style.borderBottom = "3px solid red";

        passwordCheckIcon.classList.replace('fa-check', 'fa-xmark');
        passwordCheckIcon.classList.remove('text-success');
        passwordInputWarn.classList.replace("text-muted", 'text-danger')

      }
    }
  }, [data])



  const registerValidator = () => {
    const arr = [];

    const passwordInputWarn = document.querySelector('#loginPasswordModal02-warning');
    const passwordInput = document.querySelector('#loginPasswordModal02');
    if (data.Password == '') {
      passwordInputWarn.classList.remove('d-none')
      passwordInput.style.borderBottom = "3px solid red";
      passwordInputWarn.textContent = "Please enter a password";
      passwordInputWarn.classList.replace("text-muted", 'text-danger')
    } else if (passwordValidation(data) == 'good') {

      arr.push('good');
      console.log(arr);
    }


    const check01 = document.querySelector('#checkInputR01');
    const check03 = document.querySelector('#checkInputR03');
    const checkwarn01 = document.querySelector('#checkInputR01-warning');
    const checkwarn03 = document.querySelector('#checkInputR03-warning');


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
  const midProcess = useRef(false);

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

    if (r == 3) {
      


      await axios.post(process.env.REACT_APP_SERVER_URL + '/register', { email: data.Email, password: data.Password })
        .then((res) => {
          console.log(res.data);

          if (res.data.token) {
            localStorage.setItem("Token01", res.data.token);
            localStorage.setItem("Email", data.Email);

            props.changeRe();
            props.toggleLoginModal();

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
  return (
    <div>
      <div className='fs-2 fw-bolder pe-5'>
        SIGN UP FOR FREE
      </div>

      <div className='fs-6 fw-light py-1 pb-3'>
        Looks like you are new here. Create a password to set up your adiClub account.
      </div>
      <div className='fs-5 fw-bold py-3 pb-3'>
        CREATE PASSWORD
      </div>

      <div className='d-flex align-items-center'>

        <i id='showPassIcon' class="fa-regular fa-eye ms-auto"></i>
        <div className='mx-2 showPassBtn' onClick={()=>showPass('loginPasswordModal02')}>
          SHOW

        </div>
      </div>
      <div className='inputGroup'>
        <input id='loginPasswordModal02' type='password' value={data.Password} onChange={(e) => setData({
          Email: data.Email,
          Password: e.target.value
        })} onBlur={() => labelAnimation('loginPasswordModal02', 'off', "passwordRegister",data)} onFocus={() => labelAnimation('loginPasswordModal02', 'on',"passwordRegister", data)} />
        <label id='loginPasswordModal02-label' for='signupPassword'> Password *</label>
        <div id='loginPasswordModal02-checkIcon' className='inputIcon'>
          <i class="fa-solid fa-xmark fs-4 d-none"></i>

        </div>
      </div>
      <div id='loginPasswordModal02-warning' className='text-muted mx-3 fw-light d-none'>
        Please enter a password
      </div>


      <div role='button' className="checkboxGroup" onClick={() => checkMark("checkInputR02")}>
        <input id='checkInputR02' type='checkbox' className='me-2' />
        <span>

          I would like to stay up to date with adidas. I agree to receive personalised marketing messages from adidas India Marketing Pvt. Ltd.
        </span>

        <div className='checkbox-mark'>
          <i class="fa-solid fa-check"></i>
        </div>
      </div>
      <div role='button' className="checkboxGroup" onClick={() => checkMark("checkInputR03")}>
        <input id='checkInputR03' type='checkbox' className='me-2' />
        <span>


          I have read and accepted the Terms & Conditions, the adiClub Terms & Conditions and the adidas Privacy Policy.                        </span>

        <div className='checkbox-mark'>
          <i class="fa-solid fa-check"></i>
        </div>
      </div>

      <div id='checkInputR03-warning' className='text-danger fw-light d-none'>
        Invalid value
      </div>
      <div role='button' className="checkboxGroup w-100" onClick={() => checkMark("checkInputR01")}>
        <input id='checkInputR01' type='checkbox' className='me-2' />
        <span>

          Yes, I am over 18 years old
        </span>
        <div className='checkbox-mark'>
          <i class="fa-solid fa-check"></i>
        </div>
      </div>
      <div id='checkInputR01-warning' className='text-danger fw-light d-none'>
        You are too young to register / order.
      </div>

      <div role='button' className="checkboxGroup" onClick={() => checkMark("checkInputR04")}>
        <input id='checkInputR04' type='checkbox' className='me-2' />
        <span>

          Keep me logged in. Applies to each option below. More info
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
  )
}

export { AfterCheckUserLogin, AfterCheckUserRegister };
