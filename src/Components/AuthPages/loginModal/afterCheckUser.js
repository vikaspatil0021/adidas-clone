import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';




const labelAni = (id, state, data) => {
  console.log(data);
  const ele = document.querySelector('#' + id);

  const passwordInputWarn = document.querySelector('#warningPasswordInput02');
  const passwordInput = document.querySelector('#loginPassword');
  const passwordCheckIcon = document.querySelector('#passwordCheckIconl i');
  if (state == 'on') {
    ele.classList.add("inputLabelAni");
    passwordInputWarn.classList.add('d-none')




  } else {
    // ele.classList.remove("inputLabelAni");

    passwordCheckIcon.classList.remove('d-none')


    if (data.Password == '') {
      passwordInputWarn.classList.remove('d-none')
      passwordInput.style.borderBottom = "3px solid red";


      ele.classList.remove("inputLabelAni");
      passwordInputWarn.classList.replace("text-muted", 'text-danger')

    } else {

      passwordInput.style.borderBottom = "3px solid green";
      passwordInputWarn.classList.replace("text-danger", 'text-muted')



    }


  }
}
const showPass = () => {
  const ele = document.querySelector('#loginPassword');
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









const AfterCheckUserLogin = (props) => {
  const [data, setData] = useState({
    Email: props.email,
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

  const passwordInputWarn = document.querySelector('#warningPasswordInput02');
  const passwordCheckIcon = document.querySelector('#passwordCheckIconl i');
  useEffect(() => {

    if (data.Password != '') {
      passwordCheckIcon.classList.remove('d-none')

      document.querySelector('#loginPassword').style.borderBottom = "3px solid green";
      passwordCheckIcon.classList.replace('fa-xmark', 'fa-check');
      passwordCheckIcon.classList.add('text-success');
      passwordInputWarn.classList.replace("text-danger", 'text-muted')

    } else {
      if (passwordCheckIcon && passwordCheckIcon.classList.contains('fa-check')) {
        document.querySelector('#loginPassword').style.borderBottom = "3px solid red";

        passwordCheckIcon.classList.replace('fa-check', 'fa-xmark');
        passwordCheckIcon.classList.remove('text-success');
        passwordInputWarn.classList.replace("text-muted", 'text-danger')

      }
    }
  }, [data])

  const checkMark = (id) => {
    const ele = document.querySelector('#' + id)

    if (ele.checked) {
      ele.checked = false;
      ele.style.backgroundColor = 'white';
    } else {
      ele.checked = true;
      ele.style.backgroundColor = 'black';
    }
  }
  useEffect(()=>{

    const ele = document.querySelector('#lCheckInput01');
    if(ele){
      
      ele.checked = true;
      ele.style.backgroundColor = 'black';
    }
    
  },[])


  const midProcess = useRef(false)
const loginAccount = async()=>{
  midProcess.current = true;
  const loginBtn = document.querySelector('#loginModalBtn');
  const loginArrowIcon = document.querySelector('#loginModalBtn i');
  const loginLoader = document.querySelector('#loginLoader');

  loginBtn.style.opacity = .6;
  loginBtn.style.cursor = 'not-allowed';
  loginArrowIcon.classList.add('d-none');
  loginLoader.classList.remove('d-none');



  if(data.Password==''){
    passwordInputWarn.classList.remove('d-none');
    document.querySelector('#loginPassword').style.borderBottom = "3px solid red";
    passwordInputWarn.classList.replace("text-muted", 'text-danger');
    passwordCheckIcon.classList.remove('d-none')

}else  {
    await axios.post('https://adidas-clone-backend.vercel.app/login', {email:data.Email,password:data.Password} )
        .then((res) => {
          const passwordErr = document.querySelector("#warningPasswordError");
            console.log(res.data);
            if(res.data.message){
              passwordErr.classList.remove('d-none')
            }else if(res.data.token){
              passwordErr.classList.add('d-none');
              localStorage.setItem("Token01", res.data.token);
              props.toggleLoginModal()
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
  midProcess.current=false;



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
        <div className='mx-2 showPassBtn' onClick={showPass}>
          SHOW

        </div>
      </div>
      <div className='inputGroup'>
        <input id='loginPassword' type='password' value={data.Password} onChange={(e) => setData({
          Email: data.Email,
          Password: e.target.value
        })} onBlur={() => labelAni('labelLoginPassword', 'off', data)} onFocus={() => labelAni('labelLoginPassword', 'on', data)} />
        <label id='labelLoginPassword' for='loginPassword'> Password *</label>
        <div id='passwordCheckIconl' className='inputIcon'>
          <i class="fa-solid fa-xmark fs-4 d-none"></i>

        </div>
      </div>
      <div id='warningPasswordInput02' className='text-muted mx-3 fw-light d-none'>
        Please enter a password
      </div>
      <div id='warningPasswordError' className='text-danger mx-3 d-none'>
      Incorrect password – please check and retry
      </div>

      <div role='button' id='warningPasswordInput02' className='text-decoration-underline my-3 fw-light'>
        Reset your password
      </div>
      <div role='button' className="checkboxGroup" onClick={() => checkMark("lCheckInput01")}>
        <input id='lCheckInput01' type='checkbox' className='me-2' />
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




    </div>
  )
}

const AfterCheckUserRegister = (props) => {
  return (
    <div>
      <div>
        <h1>hi</h1>
        <p>register</p>
      </div>

    </div>
  )
}

export { AfterCheckUserLogin, AfterCheckUserRegister };
