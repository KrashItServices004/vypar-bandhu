import React, { useEffect, useState } from 'react'
import { Link, json } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import Header from './Header'
import Footer from './Footer';
import Step1 from './serviceSteps/Step1';
import Step2 from './serviceSteps/Step2';
import Step3 from './serviceSteps/Step3';
import Step4 from './serviceSteps/Step4';
import Step5 from './serviceSteps/Step5';
import Step6 from './serviceSteps/Step6';
import Step7 from './serviceSteps/Step7';
import Step8 from './serviceSteps/Step8';


const Service = () => {


    const [open, setOpen] = useState(false)
    const [tabName, setTabName] = useState([{ id: "1", name: "Heading" }, { id: "2", name: "Section 2" }, { id: "3", name: "Section 3" }, { id: "4", name: "Section 4" }, { id: "5", name: "Documents" }, { id: "6", name: "Packages" }, { id: "7", name: "Link" }, { id: "8", name: "Faq" },])
    const [activeTab, setActiveTab] = useState()
    const [serviceList, setServiceList] = useState()
    const [addServiceOpen, setAddServiceOpen] = useState(false)
    const [allData, setAllData] = useState()
    const [allSubcategory, setAllSubCategory] = useState();
    const [allInnercategory, setAllInnerCategory] = useState();
    const [category, setCategory] = useState()
    const [subCategoryValue, setSubCategoryValue] = useState()
    const [innerCategory, setInnerCategory] = useState();
    const [bgImg, setBgImg] = useState();
    const [heading, setHeading] = useState();
    const [Details, setDetails] = useState('');
    const [selectServicedata, setSelectServiceData] = useState()

    const getList = async () => {
        try {
            const response = await fetch('http://localhost:5000/admin/service/list');
            const data = await response.json();
            if (response.status === 200) {
                setServiceList(data)
            }

        } catch (e) {
            console.log(e, 'error')
        }

    }


    const getData = async () => {
        try {
            const response = await fetch('http://localhost:5000/admin/category/alldata');
            const data = await response.json();
            if (response.status === 200) {
                setAllData(data)
            }

        } catch (e) {
            console.log(e, 'error')
        }

    }
    useEffect(() => {
        getList();
        getData();
    }, [])



    const getById = async (dataId) => {
        try {
            let url = "http://localhost:5000/admin/service/getbyid";

            const response = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ dataId: dataId })
            });
            const data = await response.json();
            if (response.status === 200) {
                setSelectServiceData(data)

            }


        } catch (e) {
            toast.error(`! ${e}`)
            console.log(e, 'error')
        }

    }



    const DeleteData = async (dataId) => {
        console.log(dataId);
        let url = "http://localhost:5000/admin/service/delete";
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ dataId: dataId })
            });
            if (response.status === 200) {
                toast.success("Delete service Sucesfully!")

                getList();

            }
        } catch (e) {
            toast.error(`! ${e}`)

            console.log(e, 'error')
        }

    }

    const CreateService = async () => {
        console.log(category, subCategoryValue, innerCategory, bgImg, heading, Details)
        if (category && subCategoryValue && innerCategory && bgImg && heading) {
            let url = "http://localhost:5000/admin/service/create";

            const myForm = new FormData();
            myForm.append('file', bgImg)
            myForm.append('mainCategoryName', category)
            myForm.append('subCategoryName', subCategoryValue)
            myForm.append('innerCategoryName', innerCategory)
            myForm.append('heading', heading)
            myForm.append('details', Details)
            try {
                const response = await fetch(url, { method: "POST", body: myForm });
                if (response.status === 200) {
                    toast.success("Create New service Sucesfully!")
                    getList();
                    setAddServiceOpen(false)
                    setOpen(false)
                    setAllSubCategory();
                    setAllInnerCategory();
                    setCategory()
                    setSubCategoryValue()
                    setInnerCategory();
                    setBgImg()
                    setDetails()
                    setHeading()
                } else {
                    let error = await response.json()
                    toast.error(error.error)

                }
            } catch (e) {
                toast.error(`! ${e}`)
                console.log(e, 'error')
            }




        } else {
            toast.error("Please fill all required filled!")

        }


    }

    console.log(serviceList, 'servicelist')

    return (
        <>
            <Header />
            <main id='main' className='main'>
                <div className='pagetitle'>
                    <h1>Service</h1>



                    <nav>
                        <ol className='breadcrumb'>
                            <li className='breadcrumb-item'>
                                <Link to='/'>

                                    Home
                                </Link>
                            </li>
                            <li className='breadcrumb-item'>

                                Data Pages
                            </li>
                            <li className='breadcrumb-item active'>Service</li>
                        </ol>
                    </nav>
                    {
                        open &&

                        <div style={{ display: 'flex', justifyContent: 'end' }}>

                            <h5 className='card-title'><button type="button" className="btn btn-outline-danger" onClick={() => { setOpen(!open); setActiveTab('') }} >Cancel</button></h5>
                        </div>
                    }
                </div>
                <section className='section'>
                    <div className='row'>

                        <div className='card'>
                            <div className='card-body'>
                                {
                                    !open &&
                                    <>
                                        <div style={{ display: 'flex', justifyContent: 'end' }}>

                                            <h5 className='card-title'><button type="button" className="btn btn-outline-primary" onClick={() => {

                                                setAddServiceOpen(!addServiceOpen)

                                            }} >Add Service</button></h5>
                                        </div>

                                        {
                                            !addServiceOpen &&

                                            <table className='table'>
                                                <thead>
                                                    <tr>

                                                        <th scope='scol'> MainCategory Name</th>
                                                        <th scope='col'> SubCategory Name</th>
                                                        <th scope='col'> InnerCategory Name</th>
                                                        <th scope='col'>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        serviceList?.length === 0 &&
                                                        <tr>
                                                            <td colSpan={4} className='text-center'>No data</td>
                                                        </tr>
                                                    }
                                                    {
                                                        serviceList?.map((list, index) => {
                                                            return (
                                                                <>


                                                                    <tr key={index}>

                                                                        <td>{list.mainCategoryName}</td>
                                                                        <td>{list.subCategoryName}</td>
                                                                        <td>{list.innerCategoryName}</td>

                                                                        <td>
                                                                            <div className="">

                                                                                <button type="button" className="btn btn-sm btn-primary" style={{ marginRight: "3px" }} onClick={() => {
                                                                                    getById(list._id)
                                                                                    setOpen(!open); setActiveTab('1')

                                                                                }}>Edit</button>

                                                                                <button type="button" className="btn btn-sm btn-danger" onClick={() => { DeleteData(list._id) }} ><i className="bi bi-trash"></i></button>
                                                                            </div>
                                                                        </td>



                                                                    </tr>
                                                                </>
                                                            )
                                                        })
                                                    }


                                                </tbody>

                                            </table>
                                        }
                                        {
                                            addServiceOpen &&
                                            <>
                                                <div className='row mb-3'>
                                                    <label for='inputEmail' className='col-sm-2 col-form-label'>Main Category <span style={{ color: "red" }}>*</span></label>
                                                    <div className='col-sm-10'>
                                                        <select className='form-select' onChange={(e) => {
                                                            setCategory(e.target.value);
                                                            let data = allData.filter((item) => {
                                                                if (

                                                                    item.name === e.target.value
                                                                ) {

                                                                    setAllSubCategory(item.subcategories);
                                                                }
                                                                // console.log(item)
                                                            });
                                                        }}>
                                                            <option value='0' >Choose..</option>

                                                            {
                                                                allData && allData.map((item, index) => {
                                                                    return (
                                                                        <>
                                                                            <option value={item.name} >{item.name}</option>

                                                                        </>
                                                                    )

                                                                })
                                                            }

                                                        </select>
                                                    </div>
                                                </div>
                                                {
                                                    allSubcategory &&

                                                    <div className='row mb-3'>
                                                        <label for='inputEmail' className='col-sm-2 col-form-label'>Sub Category <span style={{ color: "red" }}>*</span></label>
                                                        <div className='col-sm-10'>
                                                            <select className='form-select' onChange={(e) => {
                                                                setSubCategoryValue(e.target.value);
                                                                let data = allSubcategory.filter((item) => {
                                                                    if (
                                                                        item.name === e.target.value
                                                                    ) {
                                                                        setAllInnerCategory(item.innerCategories);
                                                                    }
                                                                });
                                                            }}>
                                                                <option value='0' >{allSubcategory.length ? "Choose.." : "No Options"}</option>

                                                                {
                                                                    allSubcategory && allSubcategory.map((item, index) => {
                                                                        return (
                                                                            <>
                                                                                <option value={item.name} >{item.name}</option>

                                                                            </>
                                                                        )

                                                                    })
                                                                }

                                                            </select>
                                                        </div>
                                                    </div>
                                                }
                                                {
                                                    allInnercategory &&

                                                    <div className='row mb-3'>
                                                        <label for='inputEmail' className='col-sm-2 col-form-label'>Inner Category <span style={{ color: "red" }}>*</span></label>
                                                        <div className='col-sm-10'>
                                                            <select className='form-select' onChange={(e) => {
                                                                setInnerCategory(e.target.value);
                                                            }}>
                                                                <option value='0' >{allInnercategory.length ? "Choose.." : "No Options"}</option>
                                                                {
                                                                    allInnercategory && allInnercategory.map((item, index) => {
                                                                        return (
                                                                            <>
                                                                                <option value={item} >{item}</option>

                                                                            </>
                                                                        )

                                                                    })
                                                                }

                                                            </select>
                                                        </div>
                                                    </div>
                                                }

                                                <div className='row mb-3'>
                                                    <label for='inputText' className='col-sm-2 col-form-label'>Service Heading <span style={{ color: "red" }}>*</span></label>
                                                    <div className='col-sm-10'>
                                                        <input type='text' placeholder='Enter Service Name' className='form-control' value={heading} onChange={(e) => { setHeading(e.target.value) }} />
                                                    </div>
                                                </div>
                                                <div className='row mb-3'>
                                                    <label for='inputText' className='col-sm-2 col-form-label'>Service Details</label>
                                                    <div className='col-sm-10'>
                                                        <textarea type='text' placeholder='Enter Service Details' className='form-control' value={Details} onChange={(e) => { setDetails(e.target.value) }} />
                                                    </div>
                                                </div>

                                                <div className='row mb-3'>
                                                    <label for='inputNumber' className='col-sm-2 col-form-label'>Background Image<span style={{ color: "red" }}>*</span></label>
                                                    <div className='col-sm-10'>
                                                        <input type='file' className='formFile' onChange={(e) => { setBgImg(e.target.files[0]) }} />
                                                    </div>
                                                </div>
                                                <div className='row mb-3'>
                                                    <label className='col-sm-2 col-form-label'></label>
                                                    <div className='col-sm-10'>
                                                        <button type='submit' className='btn btn-primary' onClick={() => { CreateService() }}>Save</button>
                                                    </div>
                                                </div>

                                            </>
                                        }

                                    </>
                                }
                                {
                                    open && activeTab &&
                                    <>
                                        <ul className="nav nav-pills nav-justified container mt-2 pb-3" style={{ borderBottom: "1px solid #cddfff" }}>
                                            {
                                                tabName && tabName.map((item, index) => {
                                                    return (
                                                        <>
                                                            <li className="nav-item">
                                                                <a className={`nav-link  ${activeTab == item.id ? "active active_tab " : ""}`} aria-current="page" onClick={() => { setActiveTab(item.id) }}>{item.name}</a>
                                                            </li>
                                                        </>
                                                    )
                                                })
                                            }

                                        </ul>
                                    </>
                                }
                                {
                                    activeTab === "1" &&
                                    <Step1 setActiveTab={setActiveTab} selectServicedata={selectServicedata} getById={getById} />

                                }
                                {
                                    activeTab === "2" &&
                                    <Step2 setActiveTab={setActiveTab} selectServicedata={selectServicedata} getById={getById} />

                                }
                                {
                                    activeTab === "3" &&
                                    <Step3 setActiveTab={setActiveTab} selectServicedata={selectServicedata} getById={getById} />

                                }
                                {
                                    activeTab === "4" &&
                                    <Step4 setActiveTab={setActiveTab} selectServicedata={selectServicedata} getById={getById} />

                                }
                                {
                                    activeTab === "5" &&
                                    <Step5 setActiveTab={setActiveTab} selectServicedata={selectServicedata} getById={getById} />

                                }
                                {
                                    activeTab === "6" &&
                                    <Step6 setActiveTab={setActiveTab} selectServicedata={selectServicedata} getById={getById} />

                                }
                                {
                                    activeTab === "7" &&
                                    <Step7 selectServicedata={selectServicedata} getById={getById} setActiveTab={setActiveTab} />

                                }
                                {
                                    activeTab === "8" &&
                                    <Step8 selectServicedata={selectServicedata} getById={getById} setActiveTab={setActiveTab} setOpen={setOpen} />

                                }


                            </div>
                        </div>

                    </div>
                </section>

            </main>
            <Footer />


        </>
    )
}

export default Service