import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './search.css'
import { Link } from 'react-router-dom';
import wishlistTrigger from '../Repeaters/WishList/WishListTrigger';
import { useDispatch } from 'react-redux';

const Search = () => {
    const dispatch = useDispatch();
    const email01 = localStorage.getItem('Email') || null;


    const query = localStorage.getItem('searchQuery');
    const [searchResult, setSearchResult] = useState([])


    useEffect(() => {
        if (query) {

            axios.post(process.env.REACT_APP_SERVER_URL + '/search', { query })
                .then((res) => {
                    setSearchResult((res.data.length === 0) ? '' : res.data)
                }).catch((err) => {
                    console.log(err);
                    setSearchResult('')
                })
        } else {
            setSearchResult('')

        }
    }, [])

    const changeImgOnHover = (productId, action) => {
        const filterArr = searchResult.filter((each) => {
            if (productId === each.productId) {
                return each;
            }
        })

        const info = filterArr[0];

        const ele = document.querySelector('#' + productId);
        if (action == 'enter') {
            ele.src = info.colors[0].img2
        } else if (action === 'leave') {
            ele.src = info.colors[0].img1
        } else {
            ele.src = action;
        }
    }

    // wishlist icon check
    const [wlData, setWLData] = useState([])

    useEffect(() => {
        axios.get(process.env.REACT_APP_SERVER_URL + '/wishlist/' + email01, {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem('Token01')
            }
        })
            .then((res) => {
                console.log(res.data);
                setWLData(res.data)
            }).catch((err) => {
                console.log(err);
            })
    }, [])
    return (
        <div className='d-flex justify-content-center p-3 pb-0'>
            <div className='container-stock'>
                {(query) ?<><div className='mt-3 mb-2'>
                    You Search result for :
                </div>
                <h1 className='fw-bold mb-4'>
                    <em>
                        “ {query.toUpperCase()} ” [{searchResult.length}]
                    </em>
                </h1></>:null}

            {
                (searchResult === '') ? <div className='d-flex flex-column align-items-center py-4'><div class="fs-4 fw-semibold ">NO RESULTS FOUND</div><div class="fs-5 ">Try again</div></div> :
                    (searchResult.length === 0) ? <div className='d-flex justify-content-center'><div class="pre-loader"></div></div> :
                        <div className='products-grid'>
                            {searchResult.map((each) => {


                                return (
                                    <div className='position-relative'>
                                        <Link to={each.url}>

                                            <div className='product-card' >
                                                <picture >
                                                    <div className='position-relative' >

                                                        <img id={each.productId} src={each.colors[0].img1} decoding="async" loading="lazy" onMouseEnter={() => changeImgOnHover(each.productId, 'enter')} onMouseLeave={() => changeImgOnHover(each.productId, 'leave')} />
                                                        <div className='product-priceTag'>
                                                            ₹{each.priceTag}

                                                        </div>
                                                    </div>
                                                </picture>

                                                <div id={'hoverImg' + each.productId} className='hoverImg-grid d-none'>
                                                    {each.colors.map((subEach) => {
                                                        return (

                                                            <div>
                                                                <img id={"hoverImg" + each.productId} src={subEach.img1} className='colors-optionImg' decoding="async" loading="lazy" onMouseEnter={() => changeImgOnHover(each.productId, subEach.img1)} onMouseLeave={() => changeImgOnHover(each.productId, 'leave')} />

                                                            </div>
                                                        )
                                                    })
                                                    }
                                                </div>

                                                <div className='pb-4 p-2 fs'>

                                                    <div className='fw-light fw-bold'>
                                                        {each.name}
                                                    </div>
                                                    <span className='fw-light text-muted'>
                                                        {each.tag}
                                                    </span>
                                                    <div className='fw-light text-muted'>
                                                        {each.colors.length + " colors"}
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                        <div id={'heart' + each.productId} className='stock-heartIcon' onClick={() => {
                                            wishlistTrigger({
                                                productId: each.productId,
                                                name: each.name,
                                                img1: each.colors[0].img1,
                                                priceTag: each.priceTag,
                                                url: each.url
                                            });
                                            setTimeout(() => {

                                                dispatch({ type: "CHANGE" });
                                            }, 800)
                                        }}>

                                            {(wlData.map((wlEach) => {
                                                return wlEach.productId

                                            }).includes(each.productId)) ? <i id={'i' + each.productId} className='fa-solid fa-heart' /> : <i id={'i' + each.productId} className='fa-regular fa-heart' />

                                            }
                                        </div>
                                    </div>

                                )

                            })}
                        </div>}
        </div>
        </div >
    )
}

export default Search
