import { useEffect, useState } from "react";
import { toast } from 'react-toastify';

const Step4 = ({ setActiveTab, selectServicedata, getById }) => {
    const [data, setData] = useState();

    useEffect(() => {
        setData(selectServicedata.stepFourData)
    }, [selectServicedata.stepFourData])



    const AddSection = async () => {
        let url = `${process.env.REACT_APP_PORT}/admin/service/addstep4`

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ mainCategoryid: selectServicedata._id })
            });
            if (response.status === 200) {
                toast.success("Add Section Sucesfully!")

                getById(selectServicedata._id)
            }
        } catch (e) {
            toast.error(e)

            console.log(e, 'error')
        }
    }
    const AddAttribute = async (innerId) => {
        let url = `${process.env.REACT_APP_PORT}/admin/service/addstep4Attribute`

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ mainCategoryid: selectServicedata._id, innerId: innerId })
            });
            if (response.status === 200) {
                toast.success("Add Attribute Sucesfully!")

                getById(selectServicedata._id)
            }
        } catch (e) {
            toast.error(e)

            console.log(e, 'error')
        }
    }
    const DeleteSection = async (innerCategoryid) => {
        let url = `${process.env.REACT_APP_PORT}/admin/service/deletestep4section`

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ mainCategoryid: selectServicedata._id, innerCategoryid: innerCategoryid })
            });
            if (response.status === 200) {
                toast.success("Delete Section Sucesfully!")

                getById(selectServicedata._id)
            }
        } catch (e) {
            toast.error(e)

            console.log(e, 'error')
        }
    }
    const handleDelete = async (innerId, innerCategoryid) => {
        let url = `${process.env.REACT_APP_PORT}/admin/service/deletestep4Attribute`

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ mainCategoryid: selectServicedata._id, innerId: innerId, innerCategoryid: innerCategoryid })
            });
            if (response.status === 200) {
                toast.success("Delete Attribute Sucesfully!")

                getById(selectServicedata._id)
            }
        } catch (e) {
            toast.error(e)

            console.log(e, 'error')
        }
    }


    const SaveHeadingData = async (sectionData) => {
        let url = `${process.env.REACT_APP_PORT}/admin/service/updateStep4Heading`
        console.log(sectionData)

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ mainCategoryid: selectServicedata._id, innerId: sectionData._id, heading: sectionData.heading, description: sectionData.description })
            });
            if (response.status === 200) {
                toast.success("Delete Attribute Sucesfully!")

                getById(selectServicedata._id)
            }
        } catch (e) {
            toast.error(e)

            console.log(e, 'error')
        }
    }

    const SaveData = (updatedItem) => {
        console.log(updatedItem, 'data')
        console.log(data)
        setData(data.map(item => {
            if (item._id === updatedItem._id) {
                return updatedItem;
            }
            return item;
        }
        ))
    }

    const SaveImages = (updatedItem) => {
        console.log(updatedItem)
        setData(prevData => {
            return prevData.map(item => {
                // Check if item has documentsData and if so, map through it to find the matching _id
                if (item.images) {
                    item.images = item.images.map(data => {
                        if (data._id === updatedItem._id) {
                            return { ...data, filename: updatedItem.filename };
                        }
                        return data;
                    });
                }
                return item;
            });
        });
    };

    const saveImagesApi = async (innerId, item) => {
        let url = `${process.env.REACT_APP_PORT}/admin/service/updateStep4Images`

        const myForm = new FormData();
        myForm.append('file', item.filename)
        myForm.append('mainCategoryid', selectServicedata._id)
        myForm.append('imagesId', item._id)
        myForm.append('innerId', innerId)
        try {
            const response = await fetch(url, { method: "POST", body: myForm });
            if (response.status === 200) {
                toast.success("Save Data Sucesfully!")
                getById(selectServicedata._id)
            }
        } catch (e) {
            console.log(e, 'error')
        }

    }

    console.log(data, 'data')

    return (
        <>
            <div className="d-flex mt-3" style={{ justifyContent: "space-between" }}>
                <h5 className='card-title' style={{ fontWeight: "600" }}>Add section <button type="button" className="btn btn-outline-primary" onClick={() => {
                    AddSection();
                }}><i className="bi bi-file-plus"></i></button></h5>
                <div className="d-flex align-items-center">
                    <button type='submit' className='btn btn-primary ' onClick={() => { setActiveTab('5') }}>Next</button>
                </div>
            </div>
            {data && data.map((sectionData, index) => {
                return (
                    <>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h5 className='card-title'></h5>
                            <h5 className='card-title'><button type="button" className="btn btn-outline-danger" onClick={() => { DeleteSection(sectionData._id) }}>Delete</button></h5>
                        </div>
                        <div className='row mb-3 mt-2'>
                            <label htmlFor='inputText' className='col-sm-2 col-form-label'> Heading <span style={{ color: "red" }}>*</span></label>
                            <div className='col-sm-10'>
                                <input type='text' placeholder='Enter Heading' className='form-control' value={sectionData.heading} onChange={(e) => {
                                    const updatedItem = { ...sectionData, heading: e.target.value };
                                    SaveData(updatedItem);
                                }} />
                            </div>
                        </div>
                        <div className='row mb-3'>
                            <label htmlFor='inputText' className='col-sm-2 col-form-label'> Details</label>
                            <div className='col-sm-10'>
                                <textarea type='text' placeholder='Enter Description' className='form-control' value={sectionData.description} onChange={(e) => {
                                    const updatedItem = { ...sectionData, description: e.target.value };
                                    SaveData(updatedItem);
                                }} />
                            </div>
                        </div>
                        <div className='row mb-3'>
                            <label className='col-sm-2 col-form-label'></label>
                            <div className='col-sm-10'>
                                <button type='submit' className='btn btn-primary' onClick={() => SaveHeadingData(sectionData)} >Save</button>
                            </div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: "space-between" }}>
                            <h5 className='card-title' style={{ fontWeight: "600" }}>Images Add  <button type="button" className="btn btn-outline-primary" onClick={() => { AddAttribute(sectionData._id) }}><i className="bi bi-file-plus"></i></button></h5>
                        </div>
                        <table className='table '>
                            <thead>
                                <tr>
                                    <th scope='col'>Images</th>
                                    <th scope='col'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sectionData?.images?.map((item, index) => {
                                    return (
                                        <>
                                            <tr key={index}>
                                                <td>
                                                    <div className="col-12 ">
                                                        <img src={`${process.env.REACT_APP_PORT}/admin/service/file/${item.filename && item.filename}`} style={{ width: "120px" }} className="mb-1" alt="No Previous Image" />

                                                        <input type='file' placeholder='Icon' className='form-control' onChange={(e) => {
                                                            const updatedQuestion = { ...item, filename: e.target.files[0] };
                                                            SaveImages(updatedQuestion);
                                                        }} />
                                                    </div>
                                                </td>
                                                <td className="col-1">
                                                    <div className="d-flex mt-1">
                                                        <button type="button" className="btn btn-sm btn-primary" style={{ marginRight: "3px" }} onClick={() => saveImagesApi(sectionData._id, item)} >Save</button>
                                                        <button type="button" className="btn btn-sm btn-danger" onClick={() => handleDelete(sectionData._id, item._id)}><i className="bi bi-trash"></i></button>
                                                    </div>
                                                </td>
                                            </tr>
                                        </>
                                    )
                                })}

                                {
                                    sectionData?.images.length === 0 &&
                                    <tr>
                                        <td colSpan={2} className="text-center">No data</td>
                                    </tr>
                                }
                            </tbody>
                        </table>
                    </>
                )
            })}
        </>
    )
}

export default Step4
