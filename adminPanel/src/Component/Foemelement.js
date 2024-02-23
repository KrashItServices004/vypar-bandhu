import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

const Foemelement = () => {
    return (
        <>
            <Header />
            <main id='main' className='main'>
                <div className='pagetitle'>
                    <h1>Form Elements</h1>

                    <nav>
                        <ol className='breadcrumb'>
                            <li className='breadcrumb-item'>
                                <Link to='/'>

                                    Home
                                </Link>
                            </li>
                            <li className='breadcrumb-item'>

                                Components
                            </li>
                            <li className='breadcrumb-item active'>Form Elements</li>
                        </ol>
                    </nav>
                </div>
                <section className='section'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='card'>
                                <div className='card-body'>
                                    <h5 className='card-title'>General Form Elements</h5>
                                    <form>
                                        <div className='row mb-3'>
                                            <label for='inputText' className='col-sm-2 col-form-label'>Text</label>
                                            <div className='col-sm-10'>
                                                <input type='text' className='form-control' />
                                            </div>
                                        </div>
                                        <div className='row mb-3'>
                                            <label for='inputEmail' className='col-sm-2 col-form-label'>Email</label>
                                            <div className='col-sm-10'>
                                                <input type='email' className='form-control' />
                                            </div>
                                        </div>
                                        <div className='row mb-3'>
                                            <label for='inputPassword' className='col-sm-2 col-form-label'>Password</label>
                                            <div className='col-sm-10'>
                                                <input type='password' className='form-control' />
                                            </div>
                                        </div>
                                        <div className='row mb-3'>
                                            <label for='inputNumber' className='col-sm-2 col-form-label'>Number</label>
                                            <div className='col-sm-10'>
                                                <input type='Number' className='form-control' />
                                            </div>
                                        </div>
                                        <div className='row mb-3'>
                                            <label for='inputNumber' className='col-sm-2 col-form-label'>File Upload</label>
                                            <div className='col-sm-10'>
                                                <input type='file' className='formFile' />
                                            </div>
                                        </div>
                                        <div className='row mb-3'>
                                            <label for='inputDate' className='col-sm-2 col-form-label'>Date</label>
                                            <div className='col-sm-10'>
                                                <input type='date' className='form-control' />
                                            </div>
                                        </div>
                                        <div className='row mb-3'>
                                            <label className='col-sm-2 col-form-label'>Submit Button</label>
                                            <div className='col-sm-10'>
                                                <button type='submit' className='btn btn-primary' >Submit Form</button>
                                            </div>
                                        </div>


                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer id="footer" className="footer">
                <div className="copyright">
                    &copy; Copyright <strong><span>AkAdmin</span></strong>. All Rights Reserved
                </div>
           
            </footer>
        </>
    )
}

export default Foemelement