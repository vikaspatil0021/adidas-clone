import React from 'react'

const HamburgerContent = (props) => {
    const menu1 = {
        c1: [
            {
                main: "MEN",
                sub: [
                    {
                        main: "Footwear",
                        supersub: [
                            "All Men's Footwear",
                            "Running",
                            "Running Shoe Finder",
                            "Sneakers",
                            "Originals",
                            "Slides & Sandals",
                            "Football",
                            "Basketball",
                            "Tennis",
                            "Skateboarding",
                            "Swim",
                            "Hiking & Outdoor",
                            "Cricket",
                            'Walking',
                            "Shoes Under ₹5899"
                        ]

                    },
                    {
                        main: "Clothing",
                        supersub: [
                            "All Men's Clothing",
                            "T-Shirts & Tank Tops",
                            "Joggers & Track Pants",
                            "Originals",
                            "Football Jerseys & T-Shirts",
                            "Shorts",
                            "Jackets",
                            "Hoodies",
                            "Tracksuits",
                            "Sweatshirts",
                            "Swimwear",
                            "Clothing Under ₹2899"
                        ]

                    },
                    {
                        main: "Accessories",
                        supersub: [
                            "All Men's Clothing",
                            "Face covers",
                            "Socks",
                            "All Bags",
                            "Backpacks",
                            "Gym & Training Bags",
                            "Headwear",
                            "Gloves",
                            "Balls"
                        ]

                    },
                    {
                        main: "New Season",
                        supersub: [
                            "All Men's",
                            "Shoes",
                            "Clothing",
                            "Accessories"
                        ]

                    }, {
                        main: "Sustainable Materials",
                        supersub: [
                            "Made with Recycled Material",
                            "Vegan",
                            "Organic Cotton",
                            "All Sustainable Materials"

                        ]

                    }, {
                        main: "Featured",
                        supersub: [
                            "Originals",
                            "GAZELLE",
                            "Manchester United",
                            "Ultraboost",
                            "4DFWD",
                            "Stan Smith"
                        ]

                    }, {
                        main: "Outlet",
                        supersub: [
                            "All Men's",
                            "Shoes",
                            "Clothing",
                            "Accessories"
                        ]

                    }
                ]
            }
            ,
            {
                main: "WOMEN",
                sub: [
                    {
                        main: "Footwear",
                        supersub: [
                            "All Women's Footwear",
                            "Running",
                            "Running Shoe Finder",
                            "Sneakers",
                            "Originals",
                            "Slides & Sandals",
                            "Football",
                            "Basketball",
                            "Tennis",
                            "Skateboarding",
                            "Swim",
                            "Hiking & Outdoor",
                            "Cricket",
                            'Walking',
                            "Shoes Under ₹5899"
                        ]
                    },
                    {
                        main: "Clothing",
                        supersub: [
                            "All Men's Clothing",
                            "T-Shirts & Tank Tops",
                            "Joggers & Track Pants",
                            "Originals",
                            "Football Jerseys & T-Shirts",
                            "Shorts",
                            "Jackets",
                            "Hoodies",
                            "Tracksuits",
                            "Sweatshirts",
                            "Swimwear",
                            "Clothing Under ₹2899"
                        ]

                    },
                    {
                        main: "Accessories",
                        supersub: [
                            "All Men's Accessories",
                            "Face covers",
                            "Socks",
                            "All Bags",
                            "Backpacks",
                            "Gym & Training Bags",
                            "Headwear",
                            "Gloves",
                            "Balls"
                        ]

                    },
                    {
                        main: "New Arrivals",
                        supersub: [
                            "All Women's",
                            "Shoes",
                            "Clothing",
                            "Accessories"
                        ]

                    }, {
                        main: "Our Better Choices Range",
                        supersub: [
                            "Made with Recycled Material",
                            "Made With Vegan Materials",
                            "Made With Organic Cotton",
                            "Our Better Choices Range"
                        ]

                    }, {
                        main: "Featured",
                        supersub: [
                            "Originals",
                            "GAZELLE",
                            "Trending",
                            "Winter Shop",
                            "Black Trainers",
                            "Fleece Jackets"
                        ]

                    }, {
                        main: "Outlet",
                        supersub: [
                            "All Women's",
                            "Shoes",
                            "Clothing",
                            "Accessories"
                        ]

                    }
                ]
            },
            {
                main: "KIDS",
                sub: [
                    {
                        main: "Youth & Teens (8-16 years)",
                        supersub: [
                            "All Youth",
                            "Boys Shoes",
                            "Girls Shoes",
                            "Boys Clothing",
                            "Girls Clothing",
                            "Accessories"
                        ]
                    }, {
                        main: "Kids (4-8 years)",
                        supersub: [
                            "All Kids",
                            "Boys Shoes",
                            "Girls Shoes",
                            "Boys Clothing",
                            "Girls Clothing",
                            "Accessories"
                        ]
                    }, {
                        main: "Toddlers (0-4 years)",
                        supersub: [
                            "All Toddlers",
                            "Shoes",
                            "Clothing"
                        ]
                    }, {
                        main: "New Arrivals",
                        supersub: [
                            "All Kids",
                            "Shoes",
                            "Clothing",
                            "Accessories"
                        ]
                    }, {
                        main: "Featured",
                        supersub: [
                            "New Season",
                            "Trending",
                            "LEGO®",
                            "Winter Shop",
                            "Black Trainers"
                        ]
                    },{
                        main: "Outlet",
                        supersub: [
                            "All Kids",
                            "Shoes",
                            "Clothing",
                            "Accessories"
                        ]
                    }



                   
                ]
            }

        ],
        c2: [
            {
                main: "SPORTS",
                sub: ["Football", "Running", "Outdoor", "Gym & Training", "Other Sports"]
            },
            {
                main: "BRANDS",
                sub: ["Originals", "Adidas Sportswear", "Y-3", "adidas by Stella McCartney", "Our Better Choices Range"]
            },
            {
                main: "COLLECTIONS",
                sub: ["What's New?", "Collaborations", "Sports", "ORIGINALS"]
            }
        ],
        c3: ["Order Tracker", "My Profile", "Store finder", "Help & Customer Service", "Returns", "Signup"],
        c4: {
            main: "OUTLET",
            sub: ["Men", "Women", "Kids", "Collections"]
        }

    }


    const offCanvasSubmenu = (id) => {


        document.querySelector('#' + id).classList.toggle("openCanvas-submenu");


    }
    console.log(menu1.c1[0].sub[0].supersub[0]);
    return (
        <div className="" >
            <div className='px-4 py-3'>
                {
                    menu1.c1.map((each) => {
                        return (
                            <div>
                                <div role='button' className='d-flex justify-content-between my-3 fs-5 fw-bold' onClick={() => { offCanvasSubmenu(each.main) }}>
                                    {each.main}
                                    <i className='fa-solid fa-angle-right me-3 fs-6'></i>
                                </div>
                                <div id={each.main} className='offCanvas-submenu'>
                                    <div className='border-bottom mb-3'>
                                        <div role='button' className='fw-bold fs-6' onClick={() => { offCanvasSubmenu(each.main) }}>

                                            <i class="fa-solid fa-angle-left pt-2 pb-1 ps-2 my-3 me-3 ms-3 fs-5"></i>
                                            {each.main}
                                        </div>
                                        <div role='button' className='mb-3  ms-3 hamburger-closeButton' onClick={() => { props.openCanvasHamburger(); }}>
                                            <i class="fa-solid fa-xmark fs-2"></i>
                                        </div>
                                    </div>

                                    {each.sub.map((subEach) => {
                                        if (subEach.main === "Outlet") {
                                            return (
                                                <div>
                                                    <div role='button' className='d-flex text-danger justify-content-between ms-5 mb-3 fs-5' onClick={() => { offCanvasSubmenu(each.main + (subEach.main).substring(0,2)) }}>
                                                        {subEach.main}
                                                        <i className='fa-solid fa-angle-right me-5 fs-6'></i>
                                                    </div>
                                                    <div id={each.main + (subEach.main).substring(0,2)} className='offCanvas-submenu'>
                                                        <div className='border-bottom'>
                                                            <div role='button' className='fw-bold fs-6' onClick={() => { offCanvasSubmenu(each.main + (subEach.main).substring(0,2)) }}>

                                                                <i class="fa-solid fa-angle-left pt-2 pb-1 ps-2 my-3 me-3 ms-3 fs-5"></i>
                                                                {subEach.main}
                                                            </div>
                                                            <div role='button' className='mb-3  ms-3 hamburger-closeButton' onClick={() => { props.openCanvasHamburger(); }}>
                                                                <i class="fa-solid fa-xmark fs-2"></i>
                                                            </div>
                                                        </div>
                                                        <div className='scroll pt-3 pb-4'>
                                                            {subEach.supersub.map((SupersubEach) => {
                                                                return (
                                                                    <div role='button' className='d-flex justify-content-between ms-5 mb-3 fs-5' >
                                                                        {SupersubEach}
                                                                    </div>
                                                                )
                                                            })}
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        } else {

                                            return (
                                                <div>

                                                    <div role='button' className='d-flex justify-content-between ms-5 mb-3 fs-5' onClick={() => { offCanvasSubmenu(each.main + (subEach.main).substring(0,2)) }}>
                                                        {subEach.main}
                                                        <i className='fa-solid fa-angle-right me-5 fs-6'></i>
                                                    </div>
                                                    <div id={each.main + (subEach.main).substring(0,2)} className='offCanvas-submenu'>
                                                        <div className='border-bottom'>
                                                            <div role='button' className='fw-bold fs-6' onClick={() => { offCanvasSubmenu(each.main + (subEach.main).substring(0,2)) }}>

                                                                <i class="fa-solid fa-angle-left pt-2 pb-1 ps-2 my-3 me-3 ms-3 fs-5"></i>
                                                                {subEach.main}
                                                            </div>
                                                            <div role='button' className='mb-3  ms-3 hamburger-closeButton' onClick={() => { props.openCanvasHamburger(); }}>
                                                                <i class="fa-solid fa-xmark fs-2"></i>
                                                            </div>
                                                        </div>
                                                        <div className='scroll pt-3 pb-4'>
                                                            {subEach.supersub.map((SupersubEach) => {


                                                                return (
                                                                    <div role='button' className='d-flex justify-content-between ms-5 mb-3 fs-5' >
                                                                        {SupersubEach}
                                                                    </div>
                                                                )

                                                            })}

                                                        </div>
                                                    </div>

                                                </div>
                                            )
                                        }
                                    })}


                                </div>
                            </div>
                        );
                    })
                }
                {
                    menu1.c2.map((each) => {
                        return (

                            <div>
                                <div role='button' className='d-flex justify-content-between my-3 fs-5' onClick={() => { offCanvasSubmenu(each.main) }}>
                                    {each.main}
                                    <i className='fa-solid fa-angle-right me-3 fs-6'></i>
                                </div>
                                <div id={each.main} className='offCanvas-submenu'>
                                    <div className='border-bottom mb-3'>
                                        <div role='button' className='fw-bold fs-6' onClick={() => { offCanvasSubmenu(each.main) }}>

                                            <i class="fa-solid fa-angle-left pt-2 pb-1 ps-2 my-3 me-3 ms-3 fs-5"></i>
                                            {each.main}
                                        </div>
                                        <div role='button' className='mb-3  ms-3 hamburger-closeButton' onClick={() => { props.openCanvasHamburger(); }}>
                                            <i class="fa-solid fa-xmark fs-2"></i>
                                        </div>
                                    </div>

                                    {each.sub.map((subEach) => {

                                        return (
                                            <div role='button' className='d-flex justify-content-between ms-5 mb-3 fs-5' onClick={() => { offCanvasSubmenu(each) }}>
                                                {subEach}
                                                <i className='fa-solid fa-angle-right me-5 fs-6'></i>
                                            </div>
                                        )

                                    })}


                                </div>
                            </div>
                        );
                    })
                }

                <a href='' role='button' className='d-flex  my-3 fs-5'>
                    TERREX
                </a>
                <a href='' role='button' className='d-flex my-3 fs-5'>
                    ADIDAS SPORTSWEAR
                </a>
                <div>

                    <div role='button' className='d-flex justify-content-between my-3 fs-5 fw-bold text-danger' onClick={() => { offCanvasSubmenu(menu1.c4.main) }}>
                        {menu1.c4.main}
                        <i className='fa-solid fa-angle-right me-3 fs-6'></i>
                    </div>
                    <div id={menu1.c4.main} className='offCanvas-submenu'>
                        <div className='border-bottom mb-3'>
                            <div role='button' className='fw-bold fs-6' onClick={() => { offCanvasSubmenu(menu1.c4.main) }}>

                                <i class="fa-solid fa-angle-left pt-2 pb-1 ps-2 my-3 me-3 ms-3 fs-5"></i>
                                {menu1.c4.main}
                            </div>
                            <div role='button' className='mb-3  ms-3 hamburger-closeButton' onClick={() => { props.openCanvasHamburger(); }}>
                                <i class="fa-solid fa-xmark fs-2"></i>
                            </div>
                        </div>

                        {menu1.c4.sub.map((subEach) => {

                            return (
                                <div role='button' className='d-flex justify-content-between ms-5 mb-3 fs-5' >
                                    {subEach}
                                    <i className='fa-solid fa-angle-right me-5 fs-6'></i>
                                </div>
                            )

                        })}


                    </div>
                </div>
            </div>
            <div className='p-4 pb-5 border-top' >
                {
                    menu1.c3.map((each) => {
                        return (

                            <div role='button' className='d-flex justify-content-between my-3 fs-5'>
                                {each}
                            </div>
                        );
                    })
                }
            </div>

        </div>
    )
}

export default HamburgerContent;
