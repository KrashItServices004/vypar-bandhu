import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

const Breadcrumbs = () => {
    return (
        <>
            <Header />
            <main id='main' className='main'>
                <div className='pagetitle'>
                    <h1>Breadcrumbs</h1>

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
                            <li className='breadcrumb-item active'>Breadcrumbs</li>
                        </ol>
                    </nav>
                </div>
                <section className='section'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='card'>
                                <div className='card-body'>
                                    <h5 className='card-title'>
                                        Default Breadcrumbs
                                    </h5>
                                    <nav>
                                        <ol className='breadcrumb'>
                                            <li className='breadcrumb-item'>Home</li>
                                            <li className='breadcrumb-item'>Library</li>
                                            <li className='breadcrumb-item active'>Default</li>
                                        </ol>
                                    </nav>

                                </div>
                            </div>
                            <div className='card'>
                                <div className='card-body'>
                                    <h5 className='card-title'>
                                        Centered
                                    </h5>
                                    <nav className='d-flex justify-content-center'>
                                        <ol className='breadcrumb'>
                                            <li className='breadcrumb-item'>Home</li>
                                            <li className='breadcrumb-item'>Library</li>
                                            <li className='breadcrumb-item active'>center</li>
                                        </ol>
                                    </nav>

                                </div>
                            </div>
                            <div className='card'>
                                <div className='card-body'>
                                    <h5 className='card-title'>
                                        Right
                                    </h5>
                                    <nav className='d-flex justify-content-end'>
                                        <ol className='breadcrumb'>
                                            <li className='breadcrumb-item'>Home</li>
                                            <li className='breadcrumb-item'>Library</li>
                                            <li className='breadcrumb-item active'>Right</li>
                                        </ol>
                                    </nav>

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

export default Breadcrumbs