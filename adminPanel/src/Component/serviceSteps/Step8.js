import { useEffect, useState } from "react";
import { toast } from 'react-toastify';


const Step8 = ({ setActiveTab, selectServicedata, getById, setOpen }) => {

    const [data, setData] = useState()

    useEffect(() => {
        setData(selectServicedata.faqData)
    }, [selectServicedata.faqData])





    const SaveData = (updatedItem) => {
        setData(data.map(item => {
            if (item._id === updatedItem._id) {
                return updatedItem;
            }
            return item;
        }));
    };




    const DeleteAttribute = async (innerId) => {
        let url = `${process.env.REACT_APP_PORT}/admin/service/deleteFaq`
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ mainCategoryid: selectServicedata._id, innerCategoryid: innerId })
            });
            if (response.status === 200) {
                toast.success("Delete Attribute Sucesfully!")

                getById(selectServicedata._id)
            }
        } catch (e) {
            console.log(e, 'error')
        }

    };

    const AddAttribute = async () => {
        let url = `${process.env.REACT_APP_PORT}/admin/service/addFaq`

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ mainCategoryid: selectServicedata._id })
            });
            if (response.status === 200) {
                toast.success("Add Attribute Sucesfully!")

                getById(selectServicedata._id)
            }
        } catch (e) {
            console.log(e, 'error')
        }

    }



    const SaveAttribute = async (item) => {
        let url = `${process.env.REACT_APP_PORT}/admin/service/updateFaq`

        if (item.question && item.answer) {

            try {
                const response = await fetch(url, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ mainCategoryid: selectServicedata._id, innerId: item._id, question: item.question, answer: item.answer })
                });
                if (response.status === 200) {
                    toast.success("Save Attribute Sucesfully!")

                    getById(selectServicedata._id)
                }
            } catch (e) {
                console.log(e, 'error')
            }
        }
        else {
            toast.error('please fill all required filled')
        }

    };


    return (
        <>
            <div style={{ display: 'flex', justifyContent: "space-between" }}>

                <h5 className='card-title' style={{ fontWeight: "600" }}>Service Attributes <button type="button" class="btn btn-outline-primary" onClick={() => {
                    AddAttribute()
                }}><i class="bi bi-file-plus"></i></button></h5>
                <div className="d-flex align-items-center">

                    <button type='submit' className='btn btn-primary ' onClick={() => {
                        setOpen(false); setActiveTab('')
                    }}>Next</button>
                </div>
            </div>
            <table className='table'>
                <thead>
                    <tr>
                        <th scope='col'>Question<span style={{ color: "red" }}>*</span></th>
                        <th scope='col'>Answer<span style={{ color: "red" }}>*</span></th>
                        <th scope='col'>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        data?.length ? data.map((item, index) => {

                            return (
                                <>

                                    <tr key={index}>

                                        <td className="col-3">
                                            <div className="all_div_step2">

                                                <div className="col-10">
                                                    {/* <input type='text' placeholder='Name' value={item.name} className='form-control' onChange={(e) => { SaveData(e.target.value, item.id) }} /> */}
                                                    <input type='text' placeholder='question' value={item.question} className='form-control' onChange={(e) => {
                                                        const updatedItem = { ...item, question: e.target.value };
                                                        SaveData(updatedItem);
                                                    }} />
                                                </div>
                                            </div>
                                        </td>

                                        <td className="col-4">

                                            <div className="col-12 ">
                                                <textarea placeholder='answer' className='form-control w-100 textarea_design' value={item.answer} onChange={(e) => {
                                                    const updatedItem = { ...item, answer: e.target.value };
                                                    SaveData(updatedItem);
                                                }} />
                                                {/* <textarea className="w-100 textarea_design" style={{ border: "1px solid rgb(205, 223, 255)", borderRadius: "5px" }} /> */}
                                            </div>
                                        </td>
                                        <td className="col-1">
                                            <div className="all_div_step2">

                                                <button type="button" className="btn btn-sm btn-primary" style={{ marginRight: "3px" }} onClick={() => { SaveAttribute(item) }}>Save</button>

                                                <button type="button" className="btn btn-sm btn-danger" onClick={() => DeleteAttribute(item._id)}><i class="bi bi-trash"></i></button>
                                            </div>
                                        </td>


                                    </tr>


                                </>
                            )
                        }) :
                            <></>

                    }

                    {
                        data?.length === 0 &&
                        <tr>
                            <td colSpan={3} className="text-center">No Data</td>
                        </tr>
                    }

                </tbody>

            </table>
        </>
    )
}

export default Step8