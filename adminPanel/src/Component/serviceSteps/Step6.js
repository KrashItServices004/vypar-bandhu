import { useEffect, useState } from "react"
import { toast } from 'react-toastify';

const Step6 = ({ setActiveTab, selectServicedata, getById }) => {

    const [data, setData] = useState()


    useEffect(() => {
        setData(selectServicedata.stepSixData)
    }, [selectServicedata.stepSixData])

    const handleDelete = (id) => {
        if (data.length > 1) {

            setData(data.filter(item => item.id !== id));
        }
    };



    const SaveData = (updatedItem) => {
        setData(data.map(item => {
            if (item._id === updatedItem._id) {
                return updatedItem;
            }
            return item;
        }));
    };



    const AddAttribute = async () => {
        let url = `${process.env.REACT_APP_PORT}/admin/service/addstep6`

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
        let url = `${process.env.REACT_APP_PORT}/admin/service/updateStep6`

        console.log(item)
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ mainCategoryid: selectServicedata._id, innerId: item._id, package: item.package, amount: item.amount, description: item.description })
            });
            if (response.status === 200) {
                toast.success("Save Attribute Sucesfully!")

                getById(selectServicedata._id)
            }
        } catch (e) {
            console.log(e, 'error')
        }

    };

    const DeleteAttribute = async (innerId) => {
        let url = `${process.env.REACT_APP_PORT}/admin/service/deletestep6`
        
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


    console.log(data)
    return (
        <>
            <div style={{ display: 'flex', justifyContent: "space-between" }}>

                <h5 className='card-title' style={{ fontWeight: "600" }}>Service Packages <button type="button" className="btn btn-outline-primary" onClick={() => {
                    AddAttribute()
                }}><i className="bi bi-file-plus"></i></button></h5>
                <div className="d-flex align-items-center">

                    <button type='submit' className='btn btn-primary ' onClick={() => {
                        setActiveTab('7')
                    }}>Next</button>
                </div>
            </div>
            <table className='table'>
                <thead>
                    <tr>

                        <th scope='col'>Packages Name</th>
                        <th scope='col'>Amount</th>
                        <th scope='col'>Description</th>
                        <th scope='col'>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        data && data.map((item, index) => {

                            return (
                                <>

                                    <tr key={index}>

                                        <td className="col-3">
                                            <div className="all_div_step2">

                                                <div className="col-10">
                                                    {/* <input type='text' placeholder='Name' value={item.name} className='form-control' onChange={(e) => { SaveData(e.target.value, item.id) }} /> */}
                                                    <input type='text' placeholder='Name' value={item.package} className='form-control' onChange={(e) => {
                                                        const updatedItem = { ...item, package: e.target.value };
                                                        SaveData(updatedItem);
                                                    }} />
                                                </div>
                                            </div>
                                        </td>
                                        <td className="col-3">
                                            <div className="all_div_step2">

                                                <div className="col-12">
                                                    {/* <input type='file' placeholder='Name' className='form-control' /> */}
                                                    <input type='number' placeholder='Amount' className='form-control' value={item.amount} onChange={(e) => {
                                                        const updatedItem = { ...item, amount: e.target.value };
                                                        SaveData(updatedItem);
                                                    }} />
                                                </div>
                                            </div>
                                        </td>



                                        <td className="col-4">

                                            <div className="col-12 ">
                                                <textarea placeholder='Description' className='form-control w-100 textarea_design' value={item.description} onChange={(e) => {
                                                    const updatedItem = { ...item, description: e.target.value };
                                                    SaveData(updatedItem);
                                                }} />
                                                {/* <textarea className="w-100 textarea_design" style={{ border: "1px solid rgb(205, 223, 255)", borderRadius: "5px" }} /> */}
                                            </div>
                                        </td>
                                        <td className="col-1">
                                            <div className="all_div_step2">

                                                <button type="button" className="btn btn-sm btn-primary" style={{ marginRight: "3px" }} onClick={() => SaveAttribute(item)}>Save</button>

                                                <button type="button" className="btn btn-sm btn-danger" onClick={() => DeleteAttribute(item._id)}><i className="bi bi-trash"></i></button>
                                            </div>
                                        </td>


                                    </tr>
                                </>
                            )
                        })

                    }




                </tbody>

            </table>

        </>
    )
}

export default Step6