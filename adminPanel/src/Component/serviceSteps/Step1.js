import { useEffect, useState } from "react";
import { toast } from 'react-toastify';


const Step1 = ({ setActiveTab, selectServicedata, getById }) => {
    const [bgImg, setBgImg] = useState();
    const [heading, setHeading] = useState();
    const [Details, setDetails] = useState();

    useEffect(() => {
        setHeading(selectServicedata && selectServicedata.heading)
        setDetails(selectServicedata && selectServicedata.details)
    }, [selectServicedata])

    const SaveData = async () => {
        let url = "http://localhost:5000/admin/service/updateStep1";
        console.log(heading)

        const myForm = new FormData();
        myForm.append('file', bgImg)
        myForm.append('heading', heading === selectServicedata.heading ? selectServicedata.heading : heading)
        myForm.append('dataId', selectServicedata._id)

        myForm.append('details', Details === selectServicedata.details ? selectServicedata.details : Details)
        try {
            const response = await fetch(url, { method: "POST", body: myForm });
            if (response.status === 200) {
                toast.success("Create New service Sucesfully!")
                getById(selectServicedata._id)
                setBgImg()
                setDetails()
                setHeading()
            }
        } catch (e) {
            toast.error(`! ${e}`)
            console.log(e, 'error')
        }


    }

    return (
        <>
            <div className="d-flex justify-content-end mt-3">
                <div className="d-flex align-items-center">

                    <button type='submit' className='btn btn-primary ' onClick={() => {
                        setActiveTab('2')
                    }}>Next</button>
                </div>
            </div>

            <div className='row mb-3 mt-3'>
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
            {
                !bgImg &&

                <div className='row mb-3'>
                    <label for='inputNumber' className='col-sm-2 col-form-label'></label>
                    <div className='col-sm-10'>

                        <img src={`http://localhost:5000/admin/service/file/${selectServicedata && selectServicedata.images}`} style={{ width: "300px" }} alt="" />
                    </div>
                </div>
            }

            <div className='row mb-3'>
                <label for='inputNumber' className='col-sm-2 col-form-label'>Background Image<span style={{ color: "red" }}>*</span></label>
                <div className='col-sm-10'>
                    <input type='file' className='formFile' onChange={(e) => { setBgImg(e.target.files[0]) }} />
                </div>
            </div>

            <div className='row mb-3'>
                <label className='col-sm-2 col-form-label'></label>
                <div className='col-sm-10'>
                    <button type='submit' className='btn btn-primary' onClick={() => { SaveData() }}>Save</button>
                </div>
            </div>


        </>
    )
}

export default Step1