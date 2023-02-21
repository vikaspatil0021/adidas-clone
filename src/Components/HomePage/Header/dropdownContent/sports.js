import React from 'react'
import ds1 from "./imgSportsJs/ds-1.jpg" ;
import ds2 from "./imgSportsJs/ds-2.jpg" ;
import ds3 from "./imgSportsJs/ds-3.png" ;
import ds4 from "./imgSportsJs/ds-4.png" ;

const DropdownSports = () => {
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

        
        <div className='d-flex col-9 pe-5 me-5'>
          <div className='col-3 ps-5 pt-5 pe-2'>
            <a className='drop-a'>FOOTBALL</a>
            <ul className='pt-2 p-0 m-0'>
              <img src={ds1} className="card-img mb-2" />
              <li><a className='drop-lia'>
              Boots
              </a></li>
              <li><a className='drop-lia'>
              Training Wear
              </a></li>
              <li><a className='drop-lia'>
              Jerseys
              </a></li>
              <li className='mb-3'><a className='drop-lia '>
              All Accessories
              </a></li>
              <li><a className='drop-lia'>
              Italia 2023 Kits

              </a></li>
              <li><a className='drop-lia'>
              Manchester United
              </a></li>
              <li><a className='drop-lia'>
              Real Madrid

              </a></li>
              <li><a className='drop-lia '>
              Arsenal
                            </a></li>
                            <li className='mb-3'><a className='drop-lia '>
                            Predator
                            </a></li>
              




            </ul>

          </div>
          <div className='col-3 ps-5 pt-5 pe-2'>
            <a className='drop-a'>RUNNING</a>
            <ul className='pt-2 p-0'>
              <img src={ds2} className="card-img mb-2" />
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
              Everyday
                            </a></li>
              <li><a className='drop-lia'>
              Racing
                            </a></li>
              <li><a className='drop-lia'>
              Ultraboost
              </a></li>
              <li><a className='drop-lia'>
              adidas Runners

                            </a></li>
              <li className='mb-3'><a className='drop-lia text-danger'>
              Running Shoe Finder

              </a></li>

            </ul>

          </div>
          <div className='col-3 ps-5 pt-5 pe-2'>
            <a className='drop-a'>OUTDOOR </a>
            <ul className='pt-2 p-0'>
            <img src={ds3} className="card-img mb-2" />

            <li><a className='drop-lia'>
              Shoes
                            </a></li>
              <li><a className='drop-lia'>
              Clothing
                            </a></li>

              <li className='mt-3'><a className='drop-lia'>
              Terrex

              </a></li>
              <li className='mb-3'><a className='drop-lia'>
              United By Summit
              </a></li>
 


            </ul>
          </div>
          <div className='col-3 ps-5 pt-5 pe-2 pb-3'>
            <a className='drop-a'>GYM & TRAINING</a>
            <ul className='pt-2 p-0 m-0'>
              <img src={ds4} className="card-img mb-2" />
              <li><a className='drop-lia'>
              Shoes
                            </a></li>
              <li><a className='drop-lia'>
              Clothing
                            </a></li>
              <li><a className='drop-lia'>
              Accessories
              </a></li>
              




              

            </ul>

          </div>

        </div>
        
        <div className='col-5 ps-5 pt-5 pe-2 pb-3'>
            <a className='drop-a'>OTHER SPORTS</a>
            <ul className='pt-2 p-0 m-0'>

              {menContentSports.map((each) => {

                return (<li className=''><a href={each.a} className='drop-lia'>
                  {each.content}
                </a></li>)
              })}

            

            </ul>

          </div>
      </div>
      <div className='border-bottom px-5 d-flex'>
        
        <div className='col-9 d-flex me-5 pe-5 py-2   align-items-center'>
          <div className='col-3  ps-5 pe-2'>

            <a className='drop-a'>All Football</a>

          </div>
          <div className='col-3 ps-5 pe-2'>
            <a className='drop-a'>All Running</a>

          </div>
          <div className='col-3 ps-5 pe-2'>
            <a className='drop-a'>All Outdoor</a>

          </div>
          <div className='col-3 ps-5 pe-2'>
            <a className='drop-a'>All Gym & Training</a>

          </div>

        </div>
        
      </div>




    </div>
  )
}


export default DropdownSports;

