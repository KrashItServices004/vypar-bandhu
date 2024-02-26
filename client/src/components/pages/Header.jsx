import React, { useEffect, useState } from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";

import logo1 from '../images/logo3-removebg-preview.png'
import { Link } from 'react-router-dom';
const Header = () => {

    console.log(process.env.REACT_APP_PORT, `${process.env.REACT_APP_PORT}/admin/service/list`)
    const [active, setActive] = useState("Start Business");
    const [serviceList, setServiceList] = useState()
    const [startBusiness, setStartBusiness] = useState()
    const [license, setLicense] = useState()
    const [ipr, setIpr] = useState()
    const [taxation, setTaxation] = useState()
    const [iso, setIso] = useState()
    const [compliance, setCompliance] = useState()
    const [other, setOther] = useState()



    const getList = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_PORT}/admin/service/list`);
            const data = await response.json();
            if (response.status === 200) {
                setServiceList(data)
            }
            const responseData = await fetch(`${process.env.REACT_APP_PORT}/admin/category/alldata`);
            const data2 = await responseData.json();
            if (responseData.status === 200) {
                data2?.map((data, index) => {
                    if (data.name === "Start Business") {
                        setStartBusiness(data.subcategories)
                    }
                    if (data.name === "License/Registration") {
                        setLicense(data.subcategories)
                    }
                    if (data.name === "IPR") {
                        setIpr(data.subcategories)
                    }
                    if (data.name === "Taxation") {
                        setTaxation(data.subcategories)
                    }
                    if (data.name === "Compliance") {
                        setCompliance(data.subcategories)
                    }
                    if (data.name === "ISO/ISI") {
                        setIso(data.subcategories)
                    }
                    if (data.name === "Other Services") {
                        setOther(data.subcategories)
                    }

                })

            }
        } catch (e) {
            console.log(e, 'error')
        }

    }

    useEffect(() => {
        getList()
    }, [])



    console.log(serviceList, 'service')
    // console.log(startBusiness, 'categoryList')


    return (
        <div>
            <div style={{ background: "#198754" }}>
                <div className="container text-white">
                    <div className='textSize py-2 d-md-flex  justify-content-center'>

                        <span className='cursor_p mr_20 '> <Link to="/documents" style={{ color: "white", textDecoration: "none" }}>Document Formats</Link> </span>


                        <span className='mr_20'>|</span>

                        <span className='cursor_p mr_20'> Franchise </span>
                        <span className='mr_20'>|</span>

                        <span className='cursor_p mr_20'> Knowledge Hub</span>

                        <span className='mr_20'>|</span>

                        <span style={{ display: "flex", alignItems: "center" }} className='cursor_p mr_20'><FaWhatsapp /><IoCallOutline />+91-8077425868</span>

                        <span className='mr_20'>|</span>

                        <span className='cursor_p mr_20'>Call Back</span>
                        <span className='mr_20'>|</span>


                        <span className='cursor_p mr_20'><button type="button" class="btn btn-warning btn-sm" style={{ width: '82px' }}>Log-in</button></span>


                        <span className='cursor_p mr_20'><button type="button" class="btn btn-warning btn-sm" style={{ width: '82px' }}>Sign-Up</button></span>


                    </div>
                </div>
            </div>
            <div className='bg-light'>
                <div className='container'>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                        <div className="container-fluid textSize">
                            <a className="navbar-brand" href="/" style={{ width: "70px" }}><img src={logo1} className='img-fluid' /></a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item ps-4 pe-3 dropdown">
                                        <a className={`nav-link  ${active === "Start Business" && "header_active"} `} onClick={() => { setActive("Start Business") }}><b>Start Business</b></a>

                                        {startBusiness?.length !== 0
                                            &&
                                            <div class="dropdown-content" style={{ padding: "10px" }} >
                                                {
                                                    startBusiness?.map((mainData, index) => {

                                                        return (
                                                            <>
                                                                {
                                                                    mainData.innerCategories.length !== 0 ?
                                                                        <>
                                                                            {
                                                                                serviceList?.map((data, index) => {
                                                                                    {/* console.log(data , mainData.name) */ }

                                                                                    return (
                                                                                        <>{
                                                                                            mainData.name === data.subCategoryName &&

                                                                                            <div className="dropdownList">{mainData.name}</div>
                                                                                        }
                                                                                            {
                                                                                                data.subCategoryName === mainData.name &&

                                                                                                <Link to="/servicePage" state={data._id}

                                                                                                >{data.innerCategoryName}</Link>
                                                                                            }
                                                                                        </>
                                                                                    )
                                                                                })
                                                                            }
                                                                        </>
                                                                        : <>
                                                                            NO Data
                                                                        </>
                                                                }
                                                            </>
                                                        )
                                                    })
                                                }

                                            </div>
                                        }
                                    </li>
                                    <li className="nav-item ps-4 pe-3 dropdown">
                                        <a className={`nav-link  ${active === "Licence | Registration" && "header_active"} `} onClick={() => { setActive("Licence | Registration") }}><b>Licence | Registration</b></a>
                                        {license?.length !== 0
                                            &&

                                            <div class="dropdown-content" style={{ padding: "10px" }} >
                                                {
                                                    license?.map((mainData, index) => {
                                                        return (
                                                            <>
                                                                {
                                                                    mainData.innerCategories.length !== 0 ?
                                                                        <>
                                                                            {
                                                                                serviceList?.map((data, index) => {
                                                                                    return (
                                                                                        <>
                                                                                            {
                                                                                                mainData.name === data.subCategoryName ?

                                                                                                    <div className="dropdownList">{mainData.name}</div>
                                                                                                    :
                                                                                                    ""
                                                                                            }
                                                                                            {
                                                                                                data.subCategoryName === mainData.name &&

                                                                                                <Link to="/servicePage" state={data._id}

                                                                                                >{data.innerCategoryName}</Link>
                                                                                            }
                                                                                        </>
                                                                                    )
                                                                                })
                                                                            }
                                                                        </>
                                                                        : <>
                                                                            NO Data
                                                                        </>
                                                                }
                                                            </>
                                                        )
                                                    })
                                                }

                                            </div>
                                        }
                                    </li>
                                    <li className="nav-item ps-4 pe-3 dropdown">
                                        <a className={`nav-link  ${active === "IPR" && "header_active"} `} onClick={() => { setActive("IPR") }}><b>IPR</b></a>


                                        {ipr?.length !== 0
                                            &&
                                            <div class="dropdown-content" style={{ padding: "10px" }} >
                                                {
                                                    ipr?.map((mainData, index) => {
                                                        return (
                                                            <>
                                                                {
                                                                    mainData.innerCategories.length !== 0 ?
                                                                        <>
                                                                            {
                                                                                serviceList?.map((data, index) => {
                                                                                    return (
                                                                                        <>           {
                                                                                            mainData.name === data.subCategoryName ?

                                                                                                <div className="dropdownList">{mainData.name}</div>
                                                                                                :
                                                                                                <div className='text-center'>No data</div>
                                                                                        }
                                                                                            {
                                                                                                data.subCategoryName === mainData.name &&

                                                                                                <Link to="/servicePage" state={data._id}

                                                                                                >{data.innerCategoryName}</Link>
                                                                                            }
                                                                                        </>
                                                                                    )
                                                                                })
                                                                            }
                                                                        </>
                                                                        : <>
                                                                            NO Data
                                                                        </>
                                                                }

                                                            </>
                                                        )
                                                    })
                                                }

                                            </div>
                                        }

                                    </li>
                                    <li className="nav-item ps-4 pe-3 dropdown">
                                        <a className={`nav-link  ${active === "Taxation" && "header_active"} `} onClick={() => { setActive("Taxation") }}><b>Taxation</b></a>

                                        {taxation?.length !== 0
                                            &&
                                            <div class="dropdown-content" style={{ padding: "10px" }} >
                                                {
                                                    taxation?.map((mainData, index) => {
                                                        return (
                                                            <>
                                                                {
                                                                    mainData.innerCategories.length !== 0 ?
                                                                        <>
                                                                            {
                                                                                serviceList?.map((data, index) => {
                                                                                    return (
                                                                                        <>           {
                                                                                            mainData.name === data.subCategoryName ?

                                                                                                <div className="dropdownList">{mainData.name}</div>
                                                                                                :
                                                                                                <div className='text-center'>No data</div>
                                                                                        }
                                                                                            {
                                                                                                data.subCategoryName === mainData.name &&

                                                                                                <Link to="/servicePage" state={data._id}

                                                                                                >{data.innerCategoryName}</Link>
                                                                                            }
                                                                                        </>
                                                                                    )
                                                                                })
                                                                            }
                                                                        </>
                                                                        : <>
                                                                            NO Data
                                                                        </>
                                                                }
                                                            </>
                                                        )
                                                    })
                                                }

                                            </div>
                                        }
                                    </li>
                                    <li className="nav-item ps-4 pe-3 dropdown">
                                        <a className={`nav-link  ${active === "ISO | ISI" && "header_active"} `} onClick={() => { setActive("ISO | ISI") }}><b>ISO | ISI</b></a>

                                        {iso?.length !== 0
                                            &&
                                            <div class="dropdown-content" style={{ padding: "10px" }} >
                                                {
                                                    iso?.map((mainData, index) => {
                                                        return (
                                                            <>
                                                                {
                                                                    mainData.innerCategories.length !== 0 ?
                                                                        <>
                                                                            {
                                                                                serviceList?.map((data, index) => {
                                                                                    return (
                                                                                        <>           {
                                                                                            mainData.name === data.subCategoryName ?

                                                                                                <div className="dropdownList">{mainData.name}</div>
                                                                                                :
                                                                                                <div className='text-center'>No data</div>
                                                                                        }
                                                                                            {
                                                                                                data.subCategoryName === mainData.name &&

                                                                                                <Link to="/servicePage" state={data._id}

                                                                                                >{data.innerCategoryName}</Link>
                                                                                            }
                                                                                        </>
                                                                                    )
                                                                                })
                                                                            }
                                                                        </>
                                                                        : <>
                                                                            NO Data
                                                                        </>
                                                                }
                                                            </>
                                                        )
                                                    })
                                                }

                                            </div>
                                        }
                                    </li>
                                    <li className="nav-item ps-4 pe-3 dropdown">
                                        <a className={`nav-link  ${active === "Compliance" && "header_active"} `} onClick={() => { setActive("Compliance") }}><b>Compliance</b></a>

                                        {compliance?.length !== 0
                                            &&
                                            <div class="dropdown-content" style={{ padding: "10px" }} >
                                                {
                                                    compliance?.map((mainData, index) => {
                                                        return (
                                                            <>
                                                                {
                                                                    mainData.innerCategories.length !== 0 ?
                                                                        <>
                                                                            {
                                                                                serviceList?.map((data, index) => {
                                                                                    return (
                                                                                        <>           {
                                                                                            mainData.name === data.subCategoryName ?

                                                                                                <div className="dropdownList">{mainData.name}</div>
                                                                                                :
                                                                                                <div className='text-center'>No data</div>
                                                                                        }
                                                                                            {
                                                                                                data.subCategoryName === mainData.name &&

                                                                                                <Link to="/servicePage" state={data._id}

                                                                                                >{data.innerCategoryName}</Link>
                                                                                            }
                                                                                        </>
                                                                                    )
                                                                                })
                                                                            }
                                                                        </>
                                                                        : <>
                                                                            NO Data
                                                                        </>
                                                                }
                                                            </>
                                                        )
                                                    })
                                                }

                                            </div>
                                        }
                                    </li>
                                    <li className="nav-item ps-4 pe-3 dropdown">
                                        <a className={`nav-link  ${active === "Other Services" && "header_active"} `} onClick={() => { setActive("Other Services") }}><b>Other Services</b></a>
                                        {compliance?.length !== 0
                                            &&
                                            <div class="dropdown-content" style={{ padding: "10px" }} >
                                                {
                                                    other?.map((mainData, index) => {
                                                        return (
                                                            <>
                                                                {
                                                                    mainData.innerCategories.length !== 0 ?
                                                                        <>
                                                                            {
                                                                                serviceList?.map((data, index) => {
                                                                                    return (
                                                                                        <>           {
                                                                                            mainData.name === data.subCategoryName ?

                                                                                                <div className="dropdownList">{mainData.name}</div>
                                                                                                :
                                                                                                <div className='text-center'>No data</div>
                                                                                        }
                                                                                            {
                                                                                                data.subCategoryName === mainData.name &&

                                                                                                <Link to="/servicePage" state={data._id}

                                                                                                >{data.innerCategoryName}</Link>
                                                                                            }
                                                                                        </>
                                                                                    )
                                                                                })
                                                                            }
                                                                        </>
                                                                        : <>
                                                                            NO Data
                                                                        </>
                                                                }
                                                            </>
                                                        )
                                                    })
                                                }

                                            </div>
                                        }

                                    </li>





                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>

    )
}

export default Header
