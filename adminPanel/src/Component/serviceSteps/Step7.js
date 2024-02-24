// import { toast } from 'react-toastify';

import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Step7 = ({ setActiveTab, selectServicedata, getById }) => {

    const [data, setData] = useState()


    useEffect(() => {
        setData(selectServicedata.youtubeLink)
    }, [selectServicedata.youtubeLink])




    const SaveData = (updatedItem) => {

        setData(data.map(item => {
            if (item._id === updatedItem._id) {
                return updatedItem;
            }
            return item;
        }));
    };






    const DeleteAttribute = async (innerId) => {
        let url = `${process.env.REACT_APP_PORT}/admin/service/deleteLink`
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
        let url = `${process.env.REACT_APP_PORT}/admin/service/AddLink`

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
        let url = `${process.env.REACT_APP_PORT}/admin/service/updateLink`

        console.log(item)
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ mainCategoryid: selectServicedata._id, innerId: item._id, link: item.link, heading: item.heading })
            });
            if (response.status === 200) {
                toast.success("Save Attribute Sucesfully!")

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

                <h5 className='card-title' style={{ fontWeight: "600" }}>Link <button type="button" class="btn btn-outline-primary" onClick={() => {
                    AddAttribute()

                }}><i className="bi bi-file-plus"></i></button></h5>
                <div className="d-flex align-items-center">

                    <button type='submit' className='btn btn-primary ' onClick={() => {
                        setActiveTab('8')
                    }}>Next</button>
                </div>

            </div>
            <table className='table'>
                <thead>
                    <tr>

                        <th scope='col'>Heading</th>
                        <th scope='col'>Link</th>
                        <th scope='col'>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        data && data?.map((item, index) => {

                            return (
                                <>

                                    <tr key={index}>

                                        <td className="col-3">

                                            <div className="col-10">
                                                {/* <input type='text' placeholder='Name' value={item.name} className='form-control' onChange={(e) => { SaveData(e.target.value, item.id) }} /> */}
                                                <input type='text' placeholder='question' value={item.heading} className='form-control' onChange={(e) => {
                                                    const updatedItem = { ...item, heading: e.target.value };
                                                    SaveData(updatedItem);
                                                }} />
                                            </div>
                                        </td>

                                        <td className="col-3">
                                            <div className="">

                                                <div className="col-12">
                                                    <input type='text' placeholder='Name' className='form-control' value={item.link} onChange={(e) => {
                                                        const updatedItem = { ...item, link: e.target.value };
                                                        SaveData(updatedItem)
                                                    }} />

                                                </div>
                                            </div>
                                        </td>

                                        <td className="col-1">
                                            <div className="">

                                                <button type="button" className="btn btn-sm btn-primary" style={{ marginRight: "3px" }} onClick={() => SaveAttribute(item)}>Save</button>

                                                <button type="button" className="btn btn-sm btn-danger" onClick={() => DeleteAttribute(item._id)}><i class="bi bi-trash"></i></button>
                                            </div>
                                        </td>


                                    </tr>
                                </>
                            )
                        })

                    }

                    {
                        data?.length === 0 &&
                        <tr>
                            <td colSpan={2} className="text-center">No Data</td>
                        </tr>
                    }




                </tbody>

            </table>

        </>
    )
}

export default Step7