import React, { useEffect, useState } from 'react'
import { Link, json } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer';

const Category = () => {

    const [documentList, setDocumentList] = useState();
    const [innerId, setInnerId] = useState()
    const [nameData, setNameData] = useState();


    const getList = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_PORT}/admin/category/alldata`);
            const data = await response.json();
            if (response.status === 200) {
                setDocumentList(data)
            }
            console.log('Data received:', data);

        } catch (e) {
            console.log(e, 'error')
        }

    }
    useEffect(() => {

        getList();

    }, [])


    const addInnerData = async (mainCategoryId, subcategoryId) => {
        if (nameData) {


            let url = `${process.env.REACT_APP_PORT}/admin/category/innercategoriesAdd`;
            try {
                const response = await fetch(url, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ mainCategoryId: mainCategoryId, subcategoryId: subcategoryId, innerCategoryName: nameData })
                });
                if (response.status === 200) {
                    getList();
                    setNameData();
                    setInnerId();
                    // setModalOpen(false)
                }
            } catch (e) {
                console.log(e, 'error')
            }



        }

    }
    const addSubCategory = async (mainCategoryId) => {
        if (nameData) {


            let url = `${process.env.REACT_APP_PORT}/admin/category/subcategoriesAdd`;
            try {
                const response = await fetch(url, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ mainCategoryId: mainCategoryId, name: nameData })
                });
                if (response.status === 200) {
                    getList();
                    setNameData();
                    setInnerId();
                    // setModalOpen(false)
                }
            } catch (e) {
                console.log(e, 'error')
            }



        }

    }

    const DeleteInnerCategory = async (mainCategoryId, subcategoryId, innerCategoryName) => {

        let url = `${process.env.REACT_APP_PORT}/admin/category/innercategoriesDelete`;
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ mainCategoryId: mainCategoryId, subcategoryId: subcategoryId, innerCategoryName: innerCategoryName })
            });
            if (response.status === 200) {
                getList();

            }
        } catch (e) {
            console.log(e, 'error')
        }





    }

    const DeleteCategory = async (mainCategoryId, subcategoryId) => {

        let url = `${process.env.REACT_APP_PORT}/admin/category/subcategoriesDelete`
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ mainCategoryId: mainCategoryId, subcategoryId: subcategoryId })
            });
            if (response.status === 200) {
                getList();

            }
        } catch (e) {
            console.log(e, 'error')
        }





    }




    return (
        <>
            <Header />
            <main id='main' className='main'>
                <div className='pagetitle'>
                    <h1>Category</h1>

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
                            <li className='breadcrumb-item active'>Category</li>
                        </ol>
                    </nav>
                </div>
                <section className='section'>
                    <div className='row'>
                        {
                            documentList && documentList.map((main, index) => {

                                return (
                                    <>

                                        <div style={{ display: "flex", justifyContent: "space-between" }} className='mt-2 mb-2'>
                                            <h4 style={{ fontWeight: "600" }}>{main.name}</h4>
                                            <div>
                                                <button type="button" class="btn btn-outline-primary" onClick={() => { setInnerId(innerId === main._id ? "" : main._id) }}>Add SubCategory</button>
                                            </div>
                                        </div>
                                        {innerId === main._id &&
                                            <div >
                                                <div className='row mb-3 mt-2'>
                                                    <label for='inputText' className='col-sm-2 col-form-label'>Category Name <span style={{ color: "red" }}>*</span></label>
                                                    <div className='col-sm-10'>
                                                        <input type='text' placeholder='Category Name' className='form-control' value={nameData} onChange={(e) => { setNameData(e.target.value) }} />
                                                    </div>
                                                </div>
                                                <div className='row mb-3'>
                                                    <label className='col-sm-2 col-form-label'></label>
                                                    <div className='col-sm-10'>
                                                        <button type='submit' className='btn btn-primary' onClick={() => { addSubCategory(main._id) }}>Add</button>
                                                    </div>
                                                </div>


                                            </div>
                                        }
                                        {
                                            main.subcategories && main.subcategories.map((subitem, index) => {
                                                return (
                                                    <>
                                                    <div className='col-1'></div>
                                                        <div className='card mt-2 col-11'>
                                                            <div className='card-body'>
                                                                <div className='mt-3 d-flex justify-content-end'>

                                                                    <button type="button" class="btn btn-outline-danger btn-sm" style={{ marginLeft: "3px" }} onClick={() => { DeleteCategory(main._id, subitem._id) }}>{`Delete ${subitem.name} Category `}</button>
                                                                </div>
                                                                <div style={{ display: 'flex', justifyContent: 'space-between' }} className='mt-2'>
                                                                    <h5 style={{borderBottom:"2px solid #0d6efd"}}>{subitem.name}</h5>
                                                                    <div>
                                                                        <button type="button" class="btn btn-outline-primary" onClick={() => { setInnerId(innerId === subitem._id ? "" : subitem._id) }}><i class="bi bi-file-plus"></i></button>

                                                                    </div>
                                                                </div>
                                                                {innerId === subitem._id &&
                                                                    <div >
                                                                        <div className='row mb-3 mt-2'>
                                                                            <label for='inputText' className='col-sm-2 col-form-label'>Category Name <span style={{ color: "red" }}>*</span></label>
                                                                            <div className='col-sm-10'>
                                                                                <input type='text' placeholder='Category Name' className='form-control' value={nameData} onChange={(e) => { setNameData(e.target.value) }} />
                                                                            </div>
                                                                        </div>
                                                                        <div className='row mb-3'>
                                                                            <label className='col-sm-2 col-form-label'></label>
                                                                            <div className='col-sm-10'>
                                                                                <button type='submit' className='btn btn-primary' onClick={() => { addInnerData(main._id, subitem._id) }}>Add</button>
                                                                            </div>
                                                                        </div>


                                                                    </div>
                                                                }



                                                                <table className='table'    >
                                                                    {
                                                                        subitem.innerCategories.length ?
                                                                            <thead>
                                                                                <tr>

                                                                                    <th scope='col'>Name</th>

                                                                                    <th scope='col'>Action</th>
                                                                                </tr>
                                                                            </thead>
                                                                            : ''
                                                                    }
                                                                    <tbody>
                                                                        {subitem.innerCategories && subitem.innerCategories.map((item, index) => {
                                                                            return (
                                                                                <>
                                                                                    <tr>
                                                                                        <td>{item}</td>
                                                                                        <td><button type="button" class="btn btn-danger btn-sm" onClick={() => { DeleteInnerCategory(main._id, subitem._id, item) }}><i class="bi bi-trash"></i></button></td>
                                                                                    </tr>

                                                                                </>
                                                                            )
                                                                        })}

                                                                    </tbody>

                                                                </table>



                                                            </div>
                                                        </div>
                                                    </>
                                                )
                                            })
                                        }
                                    </>
                                )


                            })
                        }


                    </div>
                </section>

            </main>
            <Footer />


        </>
    )
}

export default Category