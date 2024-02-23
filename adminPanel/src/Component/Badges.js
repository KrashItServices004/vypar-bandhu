import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

const Badges = () => {
    return (
        <>
            <Header />
            <main id='main' className='main'>
                <div className='pagetitle'>
                    <h1>Badges</h1>

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
                            <li className='breadcrumb-item active'>Badges</li>
                        </ol>
                    </nav>
                </div>
                <section className='section'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='card'>
                                <div className='card-body'>
                                    <h5 className='card-title'>Default Badges</h5>
                                    <span className='badge bg-primary'>Primary</span>
                                    <span className='badge bg-secondary'>secondary</span>
                                    <span className='badge bg-success'>success</span>
                                    <span className='badge bg-danger'>danger</span>
                                    <span className='badge bg-warning text-dark'>Warning</span>
                                    <span className='badge bg-info text-dark'>Info</span>
                                    <span className='badge bg-light text-dark'>Light</span>
                                    <span className='badge bg-dark'>Dark</span>
                                </div>
                            </div>
                            <div className='card'>
                                <div className='card-body'>
                                    <h5 className='card-title'>Pill Badges</h5>
                                    <span className='badge bg-primary'>Primary</span>
                                    <span className='badge bg-secondary'>secondary</span>
                                    <span className='badge bg-success'>success</span>
                                    <span className='badge bg-danger'>danger</span>
                                    <span className='badge bg-warning text-dark'>Warning</span>
                                    <span className='badge bg-info text-dark'>Info</span>
                                    <span className='badge bg-light text-dark'>Light</span>
                                    <span className='badge bg-dark'>Dark</span>
                                </div>
                            </div>
                            <div className='card'>
                                <div className='card-body'>
                                    <h5 className='card-title'>Icon Badges</h5>
                                    <span className='badge bg-primary'>Primary</span>
                                    <span className='badge bg-secondary'>secondary</span>
                                    <span className='badge bg-success'>success</span>
                                    <span className='badge bg-danger'>danger</span>
                                    <span className='badge bg-warning text-dark'>Warning</span>
                                    <span className='badge bg-info text-dark'>Info</span>
                                    <span className='badge bg-light text-dark'>Light</span>
                                    <span className='badge bg-dark'>Dark</span>
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

export default Badges