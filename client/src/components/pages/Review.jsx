import React from 'react'

const Review = () => {
    return (
        <div>
            <div className='container mt-5 rounded' style={{ background: "#198754" }}>
                <div className='row'>
                    <div className='col-lg-7 py-5 d-flex justify-content-center text-center'>
                        <div className='my-5'>
                            <h2 className='mt-5'>Get Free Video | Call Consultancy</h2>
                            <h1 className='text-white'>Schedule a virtual meeting <br />with an expert</h1>
                            <button className='btn px-3 mt-2 text-white' style={{ background: "#FEB444",fontSize:"20px" }}><b>Book Now</b></button>
                        </div>
                    </div>
                    <div className='col-lg-5'>
                        <div className='card px-5 m-5'>
                            <div className="row my-3 ">
                                <h2>Get Expert Call</h2>

                                <div className="mb-3 row">
                                    {/* <label className='col-sm-2 col-form-label'>Name</label> */}
                                    <div className="col-sm-12">
                                        <input type="text" placeholder="Name" className="form-control" />
                                    </div>
                                </div>
                                <div className="mb-3 row" >
                                    {/* <label classNameName='col-sm-2'> Mobile</label> */}
                                    <div className="col-sm-12">
                                        <input type="number" placeholder="Mobile" className="form-control" />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    {/* <label classNameName='col-sm-2'>Email</label> */}
                                    <div className="col-sm-12">
                                        <input type="email" placeholder="Email" className="form-control" />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    {/* <label classNameName='col-sm-2'>Query</label> */}
                                    <div className="col-sm-12">
                                        <textarea placeholder="Write your Query in Details" className="form-control" rows="2"></textarea>
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <div className="col-sm-12">
                                        <button className="btn px-5 text-white float-end " style={{ background: "#198754" }} ><b>Book</b></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Review
