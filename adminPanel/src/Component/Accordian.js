import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

const Accordian = () => {
    return (
        <>
            <Header />
            <main id='main' className='main'>
                <div className='pagetitle'>
                    <h1>Accordion</h1>

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
                            <li className='breadcrumb-item active'>Accordion</li>
                        </ol>
                    </nav>
                </div>
                <section className='section'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='card'>
                                <div className='card-body'>
                                    <h5 className='card-title'>Default Accordian</h5>
                                    <div className='accordion' id='accordionExample'>
                                        <div className='accordion-item'>
                                            <h2 className='accordion-header' id='headingOne'>
                                                <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseone' aria-expanded='false' aria-controls='collapseone' >
                                                    Accordian Item #1
                                                </button>

                                            </h2>

                                        </div>
                                        <div className='accordion-item'>
                                            <h2 className='accordion-header' id='headingOne'>
                                                <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseone' aria-expanded='false' aria-controls='collapseone' >
                                                    Accordian Item #2
                                                </button>

                                            </h2>

                                        </div>
                                        <div className='accordion-item'>
                                            <h2 className='accordion-header' id='headingOne'>
                                                <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseone' aria-expanded='false' aria-controls='collapseone' >
                                                    Accordian Item #3
                                                </button>

                                            </h2>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='card'>
                                <div className='card-body'>
                                    <h5 className='card-title'> Accordian without outline borders</h5>
                                    <div className='accordion' id='accordionExample'>
                                        <div className='accordion-item'>
                                            <h2 className='accordion-header' id='headingOne'>
                                                <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseone' aria-expanded='false' aria-controls='collapseone' >
                                                    Accordian Item #1
                                                </button>

                                            </h2>

                                        </div>
                                        <div className='accordion-item'>
                                            <h2 className='accordion-header' id='headingOne'>
                                                <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseone' aria-expanded='false' aria-controls='collapseone' >
                                                    Accordian Item #2
                                                </button>

                                            </h2>

                                        </div>
                                        <div className='accordion-item'>
                                            <h2 className='accordion-header' id='headingOne'>
                                                <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseone' aria-expanded='false' aria-controls='collapseone' >
                                                    Accordian Item #3
                                                </button>

                                            </h2>

                                        </div>
                                    </div>
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

export default Accordian