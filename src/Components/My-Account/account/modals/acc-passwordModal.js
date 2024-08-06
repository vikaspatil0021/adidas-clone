import axios from 'axios';
import React, { useState } from 'react'
import { addButtonClass } from '../../../Repeaters/addButtonClass';
import { labelAnimation } from '../../../Repeaters/AuthPages/labelAnimation'
import { passwordValidation } from '../../../Repeaters/AuthPages/passwordValidation';

const AccPasswordModal = (props) => {
    const [data, setData] = useState({
        Password: '',
        newPassword: ''
    })

    const passwordCheckIcon = document.querySelector('#signupPasswordModal-checkIcon i');
    const passwordInputWarn = document.querySelector('#signupPasswordModal-warning');
    if (data.Password != '') {
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

    const passwordCheckIcon02 = document.querySelector('#changePass-Modal-checkIcon i');
    const passwordInputWarn02 = document.querySelector('#changePass-Modal-warning');


    if (passwordValidation({ Password: data.newPassword }) == 'good') {
        passwordCheckIcon02.classList.remove('d-none')

        document.querySelector('#changePass-Modal').style.borderBottom = "3px solid green";
        passwordCheckIcon02.classList.replace('fa-xmark', 'fa-check');
        passwordCheckIcon02.classList.add('text-success');
        passwordInputWarn02.classList.replace("text-danger", 'text-muted')

    } else {
        if (passwordCheckIcon02 && passwordCheckIcon02.classList.contains('fa-check')) {
            document.querySelector('#changePass-Modal').style.borderBottom = "3px solid red";

            passwordCheckIcon02.classList.replace('fa-check', 'fa-xmark');
            passwordCheckIcon02.classList.remove('text-success');
            passwordInputWarn02.classList.replace("text-muted", 'text-danger')

        }
    }

    const saveNewPassword = async () => {
        const passwordCheckIcon = document.querySelector('#signupPasswordModal-checkIcon i');
        const passwordInputWarn = document.querySelector('#signupPasswordModal-warning');

        const passwordCheckIcon02 = document.querySelector('#changePass-Modal-checkIcon i');
        const passwordInputWarn02 = document.querySelector('#changePass-Modal-warning');

        const arr = [];
        if (data.Password == '') {
            document.querySelector('#signupPasswordModal').style.borderBottom = "3px solid red";
            passwordCheckIcon.classList.replace('fa-check', 'fa-xmark');
            passwordCheckIcon.classList.remove('text-success');
            passwordInputWarn.classList.replace("text-muted", 'text-danger')
        } else {
            arr.push('good')
        }
        if (data.newPassword == '' || passwordValidation({ Password: data.newPassword }) != 'good') {
            document.querySelector('#changePass-Modal').style.borderBottom = "3px solid red";

            passwordCheckIcon02.classList.replace('fa-check', 'fa-xmark');
            passwordCheckIcon02.classList.remove('text-success');
            passwordInputWarn02.classList.replace("text-muted", 'text-danger')
        } else {
            arr.push('good')

        }
        console.log(arr);
        if (arr.length === 2) {
            await axios.post('https://adidas-clone-backend.vercel.app/matchPassword', { email: props.email01, password: data.Password }, {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem('Token01')
                }
            })
                .then((res) => {
                    if (res.data == 'good') {

                        arr.push('good');
                    } else {
                        document.querySelector('#signupPasswordModal').style.borderBottom = "3px solid red";
                        passwordCheckIcon.classList.replace('fa-check', 'fa-xmark');
                        passwordCheckIcon.classList.remove('text-success');
                        passwordInputWarn.classList.replace("text-muted", 'text-danger')
                        passwordInputWarn.classList.remove('d-none')
                        passwordInputWarn.innerHTML = 'The Old Password is not correct'
                    }
                }).catch((err) => {
                    console.log(err);
                })


            if (arr.length === 3) {
                console.log(arr);
                await axios.post('https://adidas-clone-backend.vercel.app/changePassword', { email: props.email01, password: data.newPassword }, {
                    headers: {
                        "Authorization": "Bearer " + localStorage.getItem('Token01')
                    }
                })
                    .then((res) => {
                        if (res.data == 'good') {
                            props.modalTrigger('Acc-passwordModal');
                        }
                    })

            }

        }
    }


    return (
        <div>
            <div className='opacityBackColor'></div>
            <div className='Acc-passModal'>
                <div id='Acc-passModal-content' className='modalBox-passModal'>
                    <h2 className='fw-bolder mb-4'>
                        EDIT YOUR PASSWORD
                    </h2>
                    <div className='inputGroup'>
                        <input id='signupPasswordModal' type='password' value={data.Password} onChange={(e) => setData({
                            Password: e.target.value,
                            newPassword: data.newPassword
                        })} onBlur={() => labelAnimation('signupPasswordModal', 'off', 'passwordLogin', data)} onFocus={() => labelAnimation('signupPasswordModal', 'on', "passwordLogin", data)} />
                        <label id='signupPasswordModal-label' for='signupPasswordModal'>Old Password *</label>
                        <div id='signupPasswordModal-checkIcon' className='inputIcon'>
                            <i class="fa-solid fa-xmark fs-4 d-none"></i>
                        </div>
                    </div>
                    <div id='signupPasswordModal-warning' className='text-muted mx-3 fw-light'>
                        Please enter your Old Password
                    </div>
                    <div className='inputGroup mt-4'>
                        <input id='changePass-Modal' type='password' value={data.newPassword} onChange={(e) => setData({
                            Password: data.Password,
                            newPassword: e.target.value
                        })} onBlur={() => labelAnimation('changePass-Modal', 'off', 'passwordRegister', { Password: data.newPassword })} onFocus={() => labelAnimation('changePass-Modal', 'on', "passwordRegister", { Password: data.newPassword })} />
                        <label id='changePass-Modal-label' for='changePass-Modal'>New Password *</label>
                        <div id='changePass-Modal-checkIcon' className='inputIcon'>
                            <i class="fa-solid fa-xmark fs-4 d-none"></i>
                        </div>
                    </div>
                    <div id='changePass-Modal-warning' className='text-muted mx-3 fw-light'>
                        Minimum 8 characters with at least one uppercase, one lowercase, one special character and a number.
                    </div>
                    <div id='rBtn' className='registerBtn my-5'>

                        <button id='saveChangesBtn' type='button' role='button' className='main-btn  my-3 m-0' onClick={() => {
                            // if (midProcess.current==false) {
                            addButtonClass("saveChangesBtn");
                            saveNewPassword()
                            // }
                        }}>
                            SAVE CHANGES
                            <div className='border-button'></div>
                            <div>

                                <i id='saveChangesBtnIcon' class="bi bi-arrow-right fs-4 ms-3"></i>
                                <div id='saveChangesBtnLoader' class="loader ms-3 d-none"></div>
                            </div>

                        </button>
                    </div>
                </div>
                <div role='button' className='EditPassword-modal' onClick={() => { props.modalTrigger('Acc-passwordModal'); }}>
                    <i class="fa-solid fa-xmark fs-2"></i>

                </div>
            </div>

        </div>
    )
}

export default AccPasswordModal;
