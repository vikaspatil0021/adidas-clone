import React from 'react'
import "./pnf.css";
const PageNotFound = () => {
    return (
        <div className='d-flex justify-content-center p-3 pb-0'>
            <div className='notfound-box py-5 px-3'>
                <div className='nf-header'>
                Page Not Found
                </div>
                <div className='fs-5'>
                    Return to the
                    <a href='/'>

                     <span  className='fs-4 mx-2 fw-normal text-decoration-underline'>HOMEPAGE</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default PageNotFound;
