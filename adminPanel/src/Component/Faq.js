import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

const Faq = () => {
    return (
        <>
            <Header />
            <main id='main' className='main'>
                <div className='pagetitle'>
                    <h1>Frequently Asked Questions</h1>

                    <nav>
                        <ol className='breadcrumb'>
                            <li className='breadcrumb-item'>
                                <Link to='/'>

                                    Home
                                </Link>
                            </li>
                            <li className='breadcrumb-item'>

                                Pages
                            </li>
                            <li className='breadcrumb-item active'>Frequently Asked Questions</li>
                        </ol>
                    </nav>
                </div>
                <section className='section'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='card basic'>
                                <div className='card-body'>
                                    <h5 className='card-title'>Basic Questions</h5>

                                    <div >
                                        <h6 className='text-primary'>1. Nisi ut ut exercitationem voluptatem esse sunt rerum?</h6>
                                        <p>Saepe perspiciatis ea. Incidunt blanditiis enim mollitia qui voluptates. Id rem nulla tenetur nihil in unde rerum. Quae consequatur placeat qui cumque earum eius omnis quos.F</p>
                                    </div>
                                    <div className='pt-2'>
                                        <h6 className='text-primary'>2. Reiciendis dolores repudiandae?</h6>
                                        <p>Id ipsam non ut. Placeat doloremque deserunt quia tenetur inventore laboriosam dolores totam odio. Aperiam incidunt et. Totam ut quos sunt atque modi molestiae dolorem.</p>
                                    </div>
                                    <div className='pt-2'>
                                        <h6 className='text-primary'>3. Qui qui reprehenderit ut est illo numquam voluptatem?</h6>
                                        <p>Enim inventore in consequuntur ipsam voluptatem consequatur beatae. Nostrum consequuntur voluptates et blanditiis.</p>
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

export default Faq