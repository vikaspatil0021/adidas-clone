import React, { useEffect } from 'react';
import "./filter.css";
import { addButtonClass } from '../../Repeaters/addButtonClass';
import { checkMark } from '../../Repeaters/AuthPages/checkMark';

const FilterProducts = (props) => {
    
    const containerToggle = (id) => {
        const eleI = document.querySelector('#i-' + id);
        const eleContent = document.querySelector('#option-content-' + id);
        if (eleI.classList.contains('fa-angle-down')) {

            eleI.classList.replace('fa-angle-down', 'fa-angle-up');
            eleContent.classList.remove('d-none')
        } else {
            eleI.classList.replace('fa-angle-up', 'fa-angle-down');
            eleContent.classList.add('d-none')

        }
    }

    
    
    useEffect(() => {
        const rangeMin = document.querySelector('.range-min');
        const rangeMax = document.querySelector('.range-max');
        const progress = document.querySelector('.slider .progress');


        rangeMin.value = 600;
        rangeMax.value = 70000;
        progress.style.left = (600 / rangeMin.max) * 100 + '%';
        progress.style.right = 100 - (70000 / rangeMax.max) * 100 + '%'

    }, [])

    const onChangeInput =(e)=>{
        const rangeMin = document.querySelector('.range-min');
        const rangeMax = document.querySelector('.range-max');
        const progress = document.querySelector('.slider .progress');
        const priceLabel = document.querySelector('.priceLabel');


        let minVal = parseInt(rangeMin.value);
        let maxVal = parseInt(rangeMax.value);
        console.log(minVal,maxVal);
        priceLabel.innerHTML = '₹' + minVal + '.00 - ₹' + maxVal + '.00';
            if (maxVal - minVal < 10000) {
                if (e.target.className === 'range-min') {
                    rangeMin.value = maxVal - 10000;

                } else {
                    rangeMax.value = minVal + 10000;

                }

                if (minVal > 70000) {
                    rangeMin.value = 70000;
                } else if (maxVal < 11000) {
                    rangeMax.value = 11000

                }

            } else {


                progress.style.left = (minVal / rangeMin.max) * 100 + '%';
                progress.style.right = 100 - (maxVal / rangeMax.max) * 100 + '%'
            }
        }




    const applyFilterArray = () => {
// filter stocks based on price 
        const filterOnPrice = props.requestedData.filter(each => {
            const rangeMin = document.querySelector('.range-min');
            const rangeMax = document.querySelector('.range-max');

            let priceTag = parseInt(each.priceTag.replace(' ', ''));
            if (rangeMin.value < priceTag && priceTag < rangeMax.value) {
                return each;
            }
        }); 
        // filter stocks based on collection after priceFilter
        const checkedArr = []
        const checkBoxs = document.querySelectorAll('.option-Content input[type="checkbox"]');
        checkBoxs.forEach(check => {
            if (check.checked === true) {
                checkedArr.push(check.id.substring(11))
            }
        })
        let filterOnCollection = filterOnPrice.filter(each => {
            if(checkedArr.includes(each.tag)){
                return each;
            }
            
        })
    
        if(checkedArr.length!==0){

            var finalArr = filterOnCollection
        }else{
            var finalArr = filterOnPrice
        }
        props.setProductData(finalArr);
        props.filterModalToggle()
    }

    const clearAllFilters = () => {
        props.setProductData(props.requestedData);
        props.setSeed(Math.random());
        props.filterModalToggle()

    }
    return (
        <div>
            <div id='opacityBackColor' className='opacityBackColor d-none' onClick={() => props.filterModalToggle()} ></div>
            <div className='filter-modal' >
                <div className='border-bottom d-flex justify-content-between p-4'>
                    <div className='fw-bold fs-5'>Filter & Sort</div>
                    <div className='d-flex'>
                        <div className='clear-all' onClick={clearAllFilters}>
                            Clear All
                        </div>
                        <div role='button' onClick={() => props.filterModalToggle()}>

                            <i class='fa-solid fa-xmark fs-3' />
                        </div>
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
                                    ₹600.00 - ₹70 000.00
                                </div>
                            </div>
                            <div className='slider'>
                                <div className='progress'></div>
                            </div>

                            <input type='range' min='400' max='80000' className='inputSlider range-min' onInput={(e)=>onChangeInput(e)} />
                            <input type='range' min='400' max='80000' className='inputSlider range-max' onInput={(e)=>onChangeInput(e)} />

                        </div>
                    </div>
                    <div className='border-bottom'>

                        <div id='option-collection' className='option' onClick={() => containerToggle('collection')}>
                            COLLECTION
                            <i id='i-collection' className='fa-solid fa-angle-down fs-4' />
                        </div>
                        <div id='option-content-collection' className='option-Content d-none'>
                            <div className='w-100'>

                                <div role='button' className="checkboxGroup" onClick={() => checkMark("collection-originals")}>
                                    <input id='collection-originals' type='checkbox' className='me-2' />
                                    <span>
                                        ORIGINALS
                                    </span>

                                    <div className='checkbox-mark'>
                                        <i class="fa-solid fa-check"></i>
                                    </div>
                                </div>
                            </div>
                            <div className='w-100'>

                                <div role='button' className="checkboxGroup" onClick={() => checkMark("collection-running")}>
                                    <input id='collection-running' type='checkbox' className='me-2' />
                                    <span>
                                        RUNNING
                                    </span>

                                    <div className='checkbox-mark'>
                                        <i class="fa-solid fa-check"></i>
                                    </div>
                                </div>
                            </div>
                            <div className='w-100'>

                                <div role='button' className="checkboxGroup" onClick={() => checkMark("collection-lifestyle")}>
                                    <input id='collection-lifestyle' type='checkbox' className='me-2' />
                                    <span>
                                        LIFESTYLE
                                    </span>

                                    <div className='checkbox-mark'>
                                        <i class="fa-solid fa-check"></i>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='px-3 footer-filter'>

                    <button id='applyFilterBtn' type='button' role='button' className='main-btn w-100 justify-content-between  my-3 m-0' onClick={() => {
                        // if (midProcess.current==false) {
                        addButtonClass("applyFilterBtn");
                        applyFilterArray()
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
