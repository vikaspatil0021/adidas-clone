import React, { useState } from 'react'
import { addButtonClass } from '../../../Repeaters/addButtonClass';
import { labelAnimation } from '../../../Repeaters/AuthPages/labelAnimation';
import axios from 'axios';

const Address = (props) => {
    const email01 = localStorage.getItem('Email')

    const [data, setData] = useState({
        fname: '',
        lname: '',
        street: '',
        landmark: '',
        city: '',
        pincode: '',
        state: "",
        mobile: ''
    })
    var errTrigger = (id) => {
        const input = document.querySelector('#' + id);
        const inputWarn = document.querySelector("#" + id + '-warning')
        input.style.borderBottom = "3px solid red";
        inputWarn.classList.remove('d-none')
        inputWarn.classList.replace("text-muted", 'text-danger')

    }
    const verifyData = () => {

        const arr = [];

        (data.fname === '') ? errTrigger('addressFname') : arr.push('good');
        (data.lname === '') ? errTrigger('addressLname') : arr.push('good');
        (data.street === '') ? errTrigger('addressStreet') : arr.push('good');
        (data.landmark === '') ? errTrigger('addressLmark') : arr.push('good');
        (data.city === '') ? errTrigger('addressCity') : arr.push('good');
        (data.pincode === '') ? errTrigger('addressPin') : arr.push('good');
        (data.state === '') ? errTrigger('addressState') : arr.push('good');
        (data.mobile === '') ? errTrigger('addressMobile') : arr.push('good');


        return arr.length


    }

    const saveAddress = async () => {

        const sendData = {
            fullName: data.fname + ' ' + data.lname,
            street: data.street,
            landmark: data.landmark,
            city: data.city,
            pincode: data.pincode,
            mobile: data.mobile,
            state: data.state
        }
        if (verifyData() === 8 && props.address.length < 5) {
            await axios.post(process.env.REACT_APP_SERVER_URL + '/address/crud/add', { email: email01, address: sendData }, {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem('Token01')
                }
            })
                .then((res) => {
                    console.log(res.data);
                    props.modalTrigger('Acc-addressModal')
                }).catch((err) => {
                    console.log(err);
                })
        } else {
            if(verifyData()!==8){
                console.log("Fill all blanks");
            }else{

                props.modalTrigger('Acc-addressModal')
                
                window.alert('Only 5 address can be saved')
            }
        }

    }


    return (
        <div>
            <div className='opacityBackColor'></div>
            <div className='Acc-passModal'>
                <div id='Acc-passModal-content' className='modalBox-passModal' style={{ maxHeight: '70%', height: '70%' }}>
                    <h2 className='fw-bolder mb-4'>
                        ADD NEW ADDRESS
                    </h2>
                    <div className='d-flex'>
                        <div className='inputGroup col-6 pe-1'>
                            <input id='addressFname' type='text' value={data.fname} onChange={(e) => setData({
                                fname: e.target.value,
                                lname: data.lname,
                                street: data.street,
                                landmark: data.landmark,
                                city: data.city,
                                pincode: data.pincode,
                                mobile: data.mobile,
                                state: data.state

                            })} onBlur={() => labelAnimation('addressFname', 'off', 'address', data.fname)} onFocus={() => labelAnimation('addressFname', 'on', "address", data.fname)} />
                            <label id='addressFname-label' for='addressFname'>First Name *</label>
                            <div id='addressFname-checkIcon' className='inputIcon'>
                                <i class="fa-solid fa-xmark fs-4 d-none"></i>
                            </div>
                        </div>
                        <div className='inputGroup col-6 ps-1'>
                            <input id='addressLname' type='text' value={data.lname} onChange={(e) => setData({
                                lname: e.target.value,
                                fname: data.fname,
                                street: data.street,
                                landmark: data.landmark,
                                city: data.city,
                                pincode: data.pincode,
                                mobile: data.mobile,
                                state: data.state



                            })} onBlur={() => labelAnimation('addressLname', 'off', 'address', data.lname)} onFocus={() => labelAnimation('addressLname', 'on', "address", data.lname)} />
                            <label id='addressLname-label' for='addressLname'>Last Name *</label>
                            <div id='addressLname-checkIcon' className='inputIcon'>
                                <i class="fa-solid fa-xmark fs-4 d-none"></i>
                            </div>
                        </div>
                    </div>
                    <div class='d-flex'>
                        <div className='col-6'>

                            <div id='addressFname-warning' className=' text-muted fw-light d-none'>
                                Please enter your first name
                            </div>
                        </div>
                        <div className='col-6 ps-2'>

                            <div id='addressLname-warning' className=' text-muted  fw-light d-none'>
                                Please enter your last name
                            </div>
                        </div>
                    </div>
                    <div className='inputGroup mt-2'>
                        <input id='addressStreet' type='text' value={data.street} onChange={(e) => setData({
                            street: e.target.value,
                            fname: data.fname,
                            lname: data.lname,
                            landmark: data.landmark,
                            city: data.city,
                            pincode: data.pincode,
                            mobile: data.mobile,
                            state: data.state

                        })} onBlur={() => labelAnimation('addressStreet', 'off', 'address', data.street)} onFocus={() => labelAnimation('addressStreet', 'on', "address", data.street)} />
                        <label id='addressStreet-label' for='addressStreet'>Street Address *</label>
                        <div id='addressStreet-checkIcon' className='inputIcon'>
                            <i class="fa-solid fa-xmark fs-4 d-none"></i>
                        </div>
                    </div>
                    <div id='addressStreet-warning' className='text-muted mx-3 fw-light d-none'>
                        Please enter your Street Address
                    </div>
                    <div className='inputGroup mt-2'>
                        <input id='addressLmark' type='text' value={data.landmark} onChange={(e) => setData({
                            landmark: e.target.value,
                            fname: data.fname,
                            lname: data.lname,
                            street: data.street,
                            city: data.city,
                            pincode: data.pincode,
                            mobile: data.mobile,
                            state: data.state



                        })} onBlur={() => labelAnimation('addressLmark', 'off', 'address', data.landmark)} onFocus={() => labelAnimation('addressLmark', 'on', "address", data.landmark)} />
                        <label id='addressLmark-label' for='addressLmark'>Land Mark *</label>
                        <div id='addressLmark-checkIcon' className='inputIcon'>
                            <i class="fa-solid fa-xmark fs-4 d-none"></i>
                        </div>
                    </div>
                    <div id='addressLmark-warning' className='text-muted mx-3 fw-light d-none'>
                        Please enter your Land Mark
                    </div>

                    <div className='d-flex mt-2'>
                        <div className='inputGroup col-6 pe-1'>
                            <input id='addressCity' type='text' value={data.city} onChange={(e) => setData({
                                city: e.target.value,
                                fname: data.fname,
                                lname: data.lname,
                                street: data.street,
                                landmark: data.landmark,
                                pincode: data.pincode,
                                mobile: data.mobile,
                                state: data.state


                            })} onBlur={() => labelAnimation('addressCity', 'off', 'address', data.city)} onFocus={() => labelAnimation('addressCity', 'on', "address", data.city)} />
                            <label id='addressCity-label' for='addressCity'>City *</label>
                            <div id='addressCity-checkIcon' className='inputIcon'>
                                <i class="fa-solid fa-xmark fs-4 d-none"></i>
                            </div>
                        </div>
                        <div className='inputGroup col-6 ps-1'>
                            <input id='addressPin' type='number' value={data.pincode} onChange={(e) => setData({
                                pincode: e.target.value,
                                fname: data.fname,
                                lname: data.lname,
                                street: data.street,
                                landmark: data.landmark,
                                city: data.city,
                                mobile: data.mobile,
                                state: data.state



                            })} onBlur={() => labelAnimation('addressPin', 'off', 'address', data.pincode)} onFocus={() => labelAnimation('addressPin', 'on', "address", data.pincode)} />
                            <label id='addressPin-label' for='addressPin'>Pincode *</label>
                            <div id='addressPin-checkIcon' className='inputIcon'>
                                <i class="fa-solid fa-xmark fs-4 d-none"></i>
                            </div>
                        </div>
                    </div>
                    <div class='d-flex '>
                        <div className='col-6'>

                            <div id='addressCity-warning' className=' text-muted fw-light d-none'>
                                Please enter your City
                            </div>
                        </div>
                        <div className='col-6 ps-2'>

                            <div id='addressPin-warning' className=' text-muted  fw-light d-none'>
                                Please enter your Pincode
                            </div>
                        </div>
                    </div>

                    <div className='d-flex mt-2'>
                        <div className='inputGroup col-6 pe-1'>
                            <input id='addressState' type='text' value={data.state} onChange={(e) => setData({
                                state: e.target.value,
                                city: data.city,
                                fname: data.fname,
                                lname: data.lname,
                                street: data.street,
                                landmark: data.landmark,
                                pincode: data.pincode,
                                mobile: data.mobile

                            })} onBlur={() => labelAnimation('addressState', 'off', 'address', data.state)} onFocus={() => labelAnimation('addressState', 'on', "address", data.state)} />
                            <label id='addressState-label' for='addressState'>State *</label>
                            <div id='addressState-checkIcon' className='inputIcon'>
                                <i class="fa-solid fa-xmark fs-4 d-none"></i>
                            </div>
                        </div>
                        <div className='inputGroup col-6 ps-1'>
                            <input id='addressMobile' type='number' value={data.mobile} onChange={(e) => setData({
                                mobile: e.target.value,
                                pincode: data.pincode,
                                fname: data.fname,
                                lname: data.lname,
                                street: data.street,
                                landmark: data.landmark,
                                city: data.city,
                                state: data.state

                            })} onBlur={() => labelAnimation('addressMobile', 'off', 'address', data.mobile)} onFocus={() => labelAnimation('addressMobile', 'on', "address", data.mobile)} />
                            <label id='addressMobile-label' for='addressMobile'>Mobile *</label>
                            <div id='addressMobile-checkIcon' className='inputIcon'>
                                <i class="fa-solid fa-xmark fs-4 d-none"></i>
                            </div>
                        </div>
                    </div>
                    <div class='d-flex'>
                        <div className='col-6'>

                            <div id='addressState-warning' className=' text-muted fw-light d-none'>
                                Please enter your State
                            </div>
                        </div>
                        <div className='col-6 ps-2'>

                            <div id='addressMobile-warning' className=' text-muted  fw-light d-none'>
                                Please enter your Mobile Number
                            </div>
                        </div>
                    </div>

                    <div className='mt-3 fs-5 fw-bold'>
                        India (IN)
                    </div>

                    <div id='rBtn' className='registerBtn my-3'>

                        <button id='addressBtn' type='button' role='button' className='main-btn  my-3 m-0' onClick={() => {
                            // if (midProcess.current==false) {
                            addButtonClass("addressBtn");
                            saveAddress()
                            // }
                        }}>
                            SAVE
                            <div className='border-button'></div>
                            <div>

                                <i id='saveChangesBtnIcon' class="bi bi-arrow-right fs-4 ms-3"></i>
                                <div id='saveChangesBtnLoader' class="loader ms-3 d-none"></div>
                            </div>

                        </button>
                    </div>
                </div>
                <div role='button' className='saveAddress-modal' onClick={() => { props.modalTrigger('Acc-addressModal'); }}>
                    <i class="fa-solid fa-xmark fs-2"></i>

                </div>
            </div>
        </div>
    )
}

export default Address
