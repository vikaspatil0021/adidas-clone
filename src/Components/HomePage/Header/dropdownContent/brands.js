import React from 'react'
import db1 from "./imgBrandsJs/db-1.png" ;
import db2 from "./imgBrandsJs/db-2.png" ;
import db3 from "./imgBrandsJs/db-3.png" ;
import db4 from "./imgBrandsJs/db-4.png" ;
import db5 from "./imgBrandsJs/db-5.png" ;
import db01 from "./imgBrandsJs/db-01.png" ;
import db02 from "./imgBrandsJs/db-02.png" ;
import db03 from "./imgBrandsJs/db-03.png" ;
import db04 from "./imgBrandsJs/db-04.png" ;
import db05 from "./imgBrandsJs/db-05.png" ;


const DropdownBrands = () => {
  const menContentSports = [
    { a: '', content: "Cricket" },
    { a: '', content: "Tennis" },
    { a: '', content: "Basketball" },
    { a: '', content: "Yoga" },
    { a: '', content: "Swim" },
    { a: '', content: "Skateboarding" },
    { a: '', content: "Walking" },
    { a: '', content: "Golf" }


  ]
 
  return (
    <div className="dropdown-content" >
      <div className='d-flex border-bottom px-5'>

        
        <div className='d-flex justify-content-between col-10 pe-5 me-5'>
          <div className='col-3 ps-5 pt-4 pe-2'>
          <img src={db01} className="card-img mb-2" />
            <ul className='pt-2 mb-3 p-0 m-0'>
              <img src={db1} className="card-img mb-2" />
              <li><a className='drop-lia'>
              Shoes
                            </a></li>
              <li><a className='drop-lia'>
              Clothing
                            </a></li>
              <li className='mb-3'><a className='drop-lia'>
              Accessories
              </a></li>
              
              <li><a className='drop-lia'>
              FORUM
              </a></li>
              <li><a className='drop-lia'>
              Superstar              </a></li>
              <li><a className='drop-lia'>
              Stan Smith

              </a></li>
              <li><a className='drop-lia '>
              adicolor
                            </a></li>
                            
              

                            




            </ul>

          </div>
          <div className='col-3 ps-5 pt-4 pe-2'>
          <img src={db02} className="card-img mb-2" />
            <ul className='pt-2 p-0'>
              <img src={db2} className="card-img mb-2" />
              <li><a className='drop-lia'>
              Men Clothing
                            </a></li>
              <li><a className='drop-lia'>
              Women Clothing
                            </a></li>
              <li className='mb-3'><a className='drop-lia'>
              Accessories
              </a></li>
              <li><a className='drop-lia'>
ZNE                            </a></li>
              

            </ul>

          </div>
          <div className='col-3 ps-5 pt-4 pe-2'>
          <img src={db03} className="card-img mb-2" />
            <ul className='pt-2 p-0'>
            <img src={db3} className="card-img mb-2" />

            <li><a className='drop-lia'>
              Shoes
                            </a></li>
              <li><a className='drop-lia'>
              Clothing
                            </a></li>
              <li className='mb-3'><a className='drop-lia'>
              Accessories
              </a></li>
              
 


            </ul>
          </div>
          <div className='col-3 ps-5 pt-4 pe-2 pb-3'>
          <img src={db04} className="card-img mb-2" />
            <ul className='pt-2 p-0 m-0'>
              <img src={db4} className="card-img mb-2" />
              <li><a className='drop-lia'>
              Shoes
                            </a></li>
              <li><a className='drop-lia'>
              Clothing
                            </a></li>
              <li><a className='drop-lia'>
              Accessories
              </a></li>
              <li className='mt-3'><a className='drop-lia'>
              Gym & Training

                            </a></li>
              <li><a className='drop-lia'>
              Running
                            </a></li>
              <li><a className='drop-lia'>
              Yoga
              </a></li>


            </ul>

          </div>
          <div className='col-3 ps-5 pt-4 pe-2 pb-3'>
          <img src={db05} className="card-img mb-2" />
            <ul className='pt-2 p-0 m-0'>
              <img src={db5} className="card-img mb-2" />
              <li><a className='drop-lia'>
              Made with Recycled Content

                            </a></li>
              <li><a className='drop-lia'>
              Made with Vegan Materials

                            </a></li>
              <li><a className='drop-lia'>
              Primeblue
              </a></li>
              <li><a className='drop-lia'>
              Parley
              </a></li>
              <li><a className='drop-lia'>
              Run for the Oceans
              </a></li>
              


            </ul>

          </div>

        </div>
        
        
      </div>
      <div className='border-bottom px-5 d-flex'>
        
        <div className=' d-flex me-5 pe-5 py-2  col-10 align-items-center'>
          <div className='col-3 ps-5 pe-2'>

            <a className='drop-a'>All adidas Originals</a>

          </div>
          <div className='col-3 ps-5 pe-2'>
            <a className='drop-a'>All adidas Sportswear
</a>

          </div>
          <div className='col-3 ps-5 pe-2'>
            <a className='drop-a'>All Products
</a>

          </div>
          <div className='col-3 ps-5 pe-2'>
            <a className='drop-a'>All adidas by Stella McCartney
</a>

          </div>
          <div className='col-3 ps-5 pe-2' >
            <a className='drop-a'>Our Better Choices Range

</a>

          </div>

        </div>
        
      </div>

    </div>
  )
}


export default DropdownBrands;

