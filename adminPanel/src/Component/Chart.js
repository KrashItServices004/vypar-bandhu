import React from 'react'
import ReactChart from './ReactChart'
import { Link } from 'react-router-dom'
import Header from './Header'
import Chart2 from './Chart2'
import Chart3 from './Chart3'

const Chart = () => {
    return (
        <>
            <Header />
            <main id='main' className='main'>
                <div className='pagetitle'>
                    <h1>Chart</h1>

                    <nav>
                        <ol className='breadcrumb'>
                            <li className='breadcrumb-item'>
                                <Link to='/'>

                                    Home
                                </Link>
                            </li>
                            <li className='breadcrumb-item'>

                                Chart
                            </li>
                            <li className='breadcrumb-item active'>Chart.js</li>
                        </ol>
                    </nav>
                </div>
                <p>Chart.JS Examples. You can check the Website</p>
                <ReactChart />
                <Chart2/>
                <div className='container d-flex justify-content-center align-items-center'>
                <Chart3/>
               
                </div>

                    
            </main>
            <footer id="footer" className="footer">
                <div className="copyright">
                    &copy; Copyright <strong><span>AkAdmin</span></strong>. All Rights Reserved
                </div>
           
            </footer>
        </>
    )
}

export default Chart