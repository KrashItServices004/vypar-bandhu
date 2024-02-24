import React, { useEffect, useState } from 'react'
import { Link, json } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer';

const Templates = () => {


    const [documentList, setDocumentList] = useState();
    const [modalOpen, setModalOpen] = useState(false)
    const [file, setFile] = useState()
    const [premium, setPremium] = useState('true')
    const [type, setType] = useState('1')
    const [name, setName] = useState()

    const getList = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_PORT}/admin/templates/list`);
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
        event.preventDefault();
        if (file && premium && type && name) {
            let url = `${process.env.REACT_APP_PORT}/admin/templates/upload`;

            const myForm = new FormData();
            myForm.append('file', file)
            myForm.append('premium', premium)
            myForm.append('type', type)
            myForm.append('name', name)
            try {
                const response = await fetch(url, { method: "POST", body: myForm });
                if (response.status === 200) { getList(); setModalOpen(false); setFile(); setPremium(); setType(); setName(); }
            } catch (e) {
                console.log(e, 'error')
            }
        }
    }
    

    const DeleteData = async (dataId) => {
        console.log(dataId);
        let url = `${process.env.REACT_APP_PORT}/admin/templates/delete`
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ dataId: dataId })
            });
            if (response.status === 200) {
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
                    <h1>Templates</h1>

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
                            <li className='breadcrumb-item active'>Templates</li>
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

                                                <th scope='col'>File Name</th>
                                                <th scope='col'>Premium</th>
                                                <th scope='col'>Type</th>
                                                <th scope='col'>File</th>
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
                                                                <td>{item.premium === false ? "No" : "Yes"}</td>
                                                                <td>{item.type === '1' ? "Resume Templates" : item.type === '2' ? "Cover Letter Templates" : "Cv Letter Templates"}</td>
                                                                <td><button type="button" class="btn btn-sm btn-primary" onClick={() => { window.open(`${process.env.REACT_APP_PORT}/file/${item.fileName}`) }}><i class="bi bi-cloud-download"></i> Download</button></td>
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
                                    <form encType='multipart/form-data'>
                                        <div className='row mb-3'>
                                            <label for='inputText' className='col-sm-2 col-form-label'>Document Name <span style={{ color: "red" }}>*</span></label>
                                            <div className='col-sm-10'>
                                                <input type='text' placeholder='Document Name' className='form-control' value={name} onChange={(e) => { setName(e.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='row mb-3'>
                                            <label for='inputEmail' className='col-sm-2 col-form-label'>Premium <span style={{ color: "red" }}>*</span></label>
                                            <div className='col-sm-10'>
                                                <select className='form-select' value={premium} onChange={(e) => { setPremium(e.target.value) }}>
                                                    <option value='true' selected>True</option>
                                                    <option value='false'>False</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='row mb-3'>
                                            <label for='inputPassword' className='col-sm-2 col-form-label'>Type <span style={{ color: "red" }}>*</span></label>
                                            <div className='col-sm-10'>
                                                <select className='form-select' value={type} onChange={(e) => { setType(e.target.value) }}>
                                                    <option value='1' selected>Resume Templates</option>
                                                    <option value='2'>Cover Letter Templates</option>
                                                    <option value='3'>Cv Letter Templates</option>

                                                </select>
                                            </div>
                                        </div>

                                        <div className='row mb-3'>
                                            <label for='inputNumber' className='col-sm-2 col-form-label'>File Upload <span style={{ color: "red" }}>*</span></label>
                                            <div className='col-sm-10'>
                                                <input type='file' className='formFile' onChange={(e) => { setFile(e.target.files[0]) }} />
                                            </div>
                                        </div>
                                        <div className='row mb-3'>
                                            <label className='col-sm-2 col-form-label'></label>
                                            <div className='col-sm-10'>
                                                <button type='submit' className='btn btn-primary' onClick={(e) => { SubmitData(e) }}>Submit Form</button>
                                            </div>
                                        </div>


                                    </form>
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

export default Templates