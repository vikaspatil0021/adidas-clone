import React, { useEffect } from 'react';
import "./filter.css";
import { addButtonClass } from '../../Repeaters/addButtonClass';

const FilterProducts = (props) => {
    const containerToggle = (id) => {
        const eleI = document.querySelector('#i-' + id);
        const eleContent = document.querySelector('#option-content-' + id);
        if (eleI.classList.contains('fa-angle-down')) {

            eleI.classList.replace('fa-angle-down', 'fa-angle-up');
            eleContent.classList.remove('d-none')
        } else {
            eleI.classList.replace('fa-angle-up', 'fa-angle-down')
            eleContent.classList.add('d-none')

        }
    }

    const rangeInputs = document.querySelectorAll('.inputSlider');
    const progress = document.querySelector('.slider .progress');
    const priceLabel = document.querySelector('.priceLabel');

    useEffect(()=>{
        const rangeMin = document.querySelector('.range-min');
        const rangeMax = document.querySelector('.range-max');
        const progress = document.querySelector('.slider .progress');


        rangeMin.value = 10000;
        rangeMax.value = 50000;
        progress.style.left = (10000 / rangeMin.max) * 100 + '%';
                progress.style.right = 100 - (50000 / rangeMax.max) * 100 + '%'

    },[])
    
    rangeInputs.forEach(input => {
        input.addEventListener('input', (e) => {
            let minVal = parseInt(rangeInputs[0].value);
            let maxVal = parseInt(rangeInputs[1].value);
            priceLabel.innerHTML = '₹'+minVal +  '.00 - ₹' + maxVal+ '.00';
            if (maxVal - minVal < 10000) {
                if(e.target.className==='range-min'){
                    rangeInputs[0].value = maxVal - 10000;

                }else{
                    rangeInputs[1].value = minVal + 10000;

                }

                if(minVal>70000){
                    rangeInputs[0].value = 70000;
                }else if(maxVal<11000){
                    rangeInputs[1].value = 11000;

                }

            } else {


                progress.style.left = (minVal / rangeInputs[0].max) * 100 + '%';
                progress.style.right = 100 - (maxVal / rangeInputs[1].max) * 100 + '%'
            }


        })
    })
    return (
        <div>
            <div id='opacityBackColor' className='opacityBackColor d-none' onClick={() => props.filterModalToggle()} ></div>
            <div className='filter-modal' >
                <div className='border-bottom d-flex justify-content-between p-4'>
                    <div className='fw-bold fs-5'>Filter & Sort</div>
                    <div role='button' onClick={() => props.filterModalToggle()}>

                        <i class='fa-solid fa-xmark fs-3' />
                    </div>
                </div>
                <div className='filter-options'>
                    <div className='border-bottom'>

                        <div id='option-price' className='option' onClick={() => containerToggle('price')}>
                            PRICE
                            <i id='i-price' className='fa-solid fa-angle-down fs-4' />
                        </div>
                        <div id='option-content-price' className='option-Content d-none'>
                            <div className='d-flex justify-content-center'>

                            <div className='priceLabel'>
                                ₹10 000.00 - ₹50 000.00
                            </div>
                            </div>
                            <div className='slider'>
                                <div className='progress'></div>
                            </div>

                            <input type='range' min='400' max='80000' className='inputSlider range-min' />
                            <input type='range' min='400' max='80000' className='inputSlider range-max' />

                        </div>
                    </div>
                </div>
                <div className='px-3 footer-filter'>

                    <button id='applyFilterBtn' type='button' role='button' className='main-btn w-100 justify-content-between  my-3 m-0' onClick={() => {
                        // if (midProcess.current==false) {
                        addButtonClass("applyFilterBtn");
                        // }
                    }}>
                        APPLY
                        <div className='border-button'></div>
                        <i id='applyFilterBtnIcon' class="bi bi-arrow-right fs-4 "></i>


                    </button>
                </div>
            </div>

        </div>
    )
}

export default FilterProducts;
