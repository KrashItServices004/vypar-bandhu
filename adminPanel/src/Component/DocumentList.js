import React, { useEffect, useState } from 'react'
import { Link, json } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer';
import { toast } from 'react-toastify';


const DocumentList = () => {

    const [documentList, setDocumentList] = useState();
    const [modalOpen, setModalOpen] = useState(false)
    const [name, setName] = useState()
    const [image, setImage] = useState()

    const getList = async () => {
        try {
            const response = await fetch('http://localhost:5000/admin/documentlist/list');
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


    const SubmitData = async (event) => {
        if (name && image) {
            let url = "http://localhost:5000/admin/documentlist/create";

            const myForm = new FormData();
            myForm.append('file', image)
            myForm.append('name', name)
            try {
                const response = await fetch(url, { method: "POST", body: myForm });
                if (response.status === 200) {
                    toast.success("data Save Sucesfully!")

                    getList(); setModalOpen(false); setImage(); setName();
                }
            } catch (e) {
                toast.error(e)

                console.log(e, 'error')
            }
        } else {
            toast.error("Please fill all required filed!")


        }
    }




    const DeleteData = async (dataId) => {
        console.log(dataId);
        let url = "http://localhost:5000/admin/documentlist/delete";
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ dataId: dataId })
            });
            if (response.status === 200) {
                toast.success("Delete data Sucesfully!")
                getList();
                setModalOpen(false)
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
                    <h1>Document List</h1>

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
                            <li className='breadcrumb-item active'>Document List</li>
                        </ol>
                    </nav>
                </div>
                <section className='section'>
                    <div className='row'>

                        <div className='card'>
                            <div className='card-body'>
                                <div style={{ display: 'flex', justifyContent: 'end' }}>

                                    <h5 className='card-title'><button type="button" class="btn btn-outline-primary" onClick={() => { setModalOpen(!modalOpen) }}>Add Document</button></h5>
                                </div>
                                {
                                    modalOpen === false &&

                                    <table className='table'>
                                        <thead>
                                            <tr>

                                                <th scope='col'> Name</th>
                                                <th scope='col'> Image</th>
                                                <th scope='col'>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                documentList && documentList.map((item, index) => {
                                                    return (
                                                        <>

                                                            <tr>

                                                                <td>{item.name}</td>
                                                                <td><img src={`http://localhost:5000/admin/service/file/${item.image && item.image}`} /></td>
                                                                <td><button type="button" class="btn btn-sm btn-danger" onClick={() => { DeleteData(item._id) }}><i class="bi bi-trash"></i></button></td>


                                                            </tr>
                                                        </>
                                                    )
                                                })
                                            }

                                        </tbody>

                                    </table>
                                }
                                {
                                    modalOpen &&
                                    <div>
                                        <div className='row mb-3'>
                                            <label for='inputText' className='col-sm-2 col-form-label'>Document Name <span style={{ color: "red" }}>*</span></label>
                                            <div className='col-sm-10'>
                                                <input type='text' placeholder='Document Name' className='form-control' value={name} onChange={(e) => { setName(e.target.value) }} />
                                            </div>
                                        </div>

                                        <div className='row mb-3'>
                                            <label for='inputNumber' className='col-sm-2 col-form-label'>Background Image<span style={{ color: "red" }}>*</span></label>
                                            <div className='col-sm-10'>
                                                <input type='file' className='formFile' onChange={(e) => { setImage(e.target.files[0]) }} />
                                            </div>
                                        </div>
                                        <div className='row mb-3'>
                                            <label className='col-sm-2 col-form-label'></label>
                                            <div className='col-sm-10'>
                                                <button type='submit' className='btn btn-primary' onClick={(e) => { SubmitData(e) }}>Submit </button>
                                            </div>
                                        </div>


                                    </div>
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

export default DocumentList