import React from 'react'

const DropdownWomen = () => {
  // WOMEN DROPDOWN CONTENT+===========>

  const womenContentFootwear = [
    { a: '', content: "Originals" },
    { a: '', content: "Slides & Flip-Flops" },
    { a: '', content: "Sneakers" },

    { a: '', content: "Tennis" },
    { a: '', content: "Basketball" },
    { a: '', content: "Football" },
    { a: '', content: "Swim" },
    { a: '', content: "Walking" },
    { a: '', content: "Shoes Under ₹5299" }

  ]
  

  const womenContentClothing = [
    { a: '', content: "T-Shirts & Tops" },
    { a: '', content: "Tights & Leggings" },
    { a: '', content: "Joggers & Track Pants" },
    { a: '', content: "Sports Bras" },
    { a: '', content: "Sport Bra Guide" },
    { a: '', content: "Originals" },
    { a: '', content: "Shorts" },
    { a: '', content: "Jackets" },
    { a: '', content: "Hoodies" },
    { a: '', content: "Tracksuits" },
    { a: '', content: "Sweatshirts" },
    { a: '', content: "Skirts & Dresses" },
    { a: '', content: "Swimwear" },
    { a: '', content: "Clothing Under ₹2899" },

  ]
  const womenContentAccessories = [
    { a: '', content: "Face covers" },
    { a: '', content: "Socks" },
    { a: '', content: "All Bags" },

    { a: '', content: "Backpacks" },
    { a: '', content: "Gym & Training Bags" },
    { a: '', content: "Shoulder Bags" },
    { a: '', content: "Headwear" },
    { a: '', content: "Balls" }

  ]

  const womenContentSports = [
    { a: '', content: "Running" },
    { a: '', content: "Gym & Training" },
    { a: '', content: "Hiking & Outdoor" },
    { a: '', content: "Tennis" },
    { a: '', content: "Swim" },
    { a: '', content: "Football" },
    { a: '', content: "Yoga" },
    { a: '', content: "Basketball" },
    { a: '', content: "Golf" },
    { a: '', content: "Walking" }
    

  ]
  return (
    <div className="dropdown-content" >
      <div className='d-flex border-bottom px-5'>

        <div className='border-end col-3 ps-5 pt-4 pe-2'>
          <a className='drop-a'>FEATURED</a>
          <ul className='p-0 m-0'>
            <li className='mt-2'><a className='drop-lia'>
              New Arrivals
            </a></li>
            <li><a className='drop-lia'>
            Sport Bra Guide
            </a></li>
            <li><a className='drop-lia'>
              SAMBA
            </a></li>
            <li className='mt-4'><a className='drop-lia'>
              TERREX
            </a></li>
            <li><a className='drop-lia'>
              Adidas Sportswear
            </a></li>
            <li><a className='drop-lia'>
              WINTER SHOP
            </a></li>
            <li><a className='drop-lia text-danger fw-semibold'>
              Outlet

            </a></li>

          </ul>

        </div>
        <div className='d-flex col-9 pe-5 me-5'>
          <div className='col-3 ps-5 pt-4 pe-2'>
            <a className='drop-a'>FOOTWEAR</a>
            <ul className='p-0 m-0'>
              <li className='mt-2'><a className='drop-lia'>
                Running
              </a></li>
              <li><a className='drop-lia text-danger'>
                Running Shoe Finder
              </a></li>

              {womenContentFootwear.map((each) => {
                return (

                  <li><a href={each.a} className='drop-lia'>
                    {each.content}

                  </a></li>
                )
              })}

            </ul>

          </div>
          <div className='col-3 ps-5 pt-4 pe-2'>
            <a className='drop-a'>CLOTHING</a>
            <ul className='pt-2 p-0'>

              {womenContentClothing.map((each) => {
                return (
                  <li><a href={each.a} className='drop-lia'>
                    {each.content}

                  </a></li>
                )
              })}

            </ul>

          </div>
          <div className='col-3 ps-5 pt-4 pe-2'>
            <a className='drop-a'>ACCESSORIES </a>
            <ul className='pt-2 p-0'>
              {womenContentAccessories.map((each) => {

                return (<li className=''><a href={each.a} className='drop-lia'>
                  {each.content}
                </a></li>)
              })}

            </ul>
          </div>
          <div className='col-3 ps-5 pt-4 pe-2 pb-3'>
            <a className='drop-a'>SPORTS</a>
            <ul className='pt-2 p-0 m-0'>

              {womenContentSports.map((each) => {

                return (<li className=''><a href={each.a} className='drop-lia'>
                  {each.content}
                </a></li>)
              })}

              <a className='drop-a'>SUSTAINABLE MATERIALS</a>
              <ul className='p-0 m-0'>
                <li className='mt-2'><a className='drop-lia'>
                  Made with Recycled Material
                </a></li>
                <li><a className='drop-lia text-danger'>
                  Vegan
                </a></li>
                <li><a className='drop-lia'>
                  Organic Cotton


                </a></li>

              </ul>

            </ul>

          </div>

        </div>
      </div>
      <div className='border-bottom px-5 d-flex'>
        <div className='col-3 ps-5 py-2'>

          <a className='drop-a'>All Women's</a>
        </div>
        <div className='col-9 d-flex me-5 pe-5   align-items-center'>
          <div className='col-3  ps-5 pe-2'>

            <a className='drop-a'>All Women's Footwear</a>

          </div>
          <div className='col-3 ps-5 pe-2'>
            <a className='drop-a'>All Women's Clothing</a>

          </div>
          <div className='col-3 ps-5 pe-2'>
            <a className='drop-a'>All Women's Accessories</a>

          </div>
          <div className='col-3 ps-5 pe-2'>
            <a className='drop-a'>Women's All Sustainable</a>

          </div>

        </div>
      </div>

    </div>
  )
}


export default DropdownWomen;

