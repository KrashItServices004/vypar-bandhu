import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

const Alert = () => {
  return (
    <>
      <Header />
      <main id='main' className='main'>
        <div className='pagetitle'>
          <h1>Alerts</h1>

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
              <li className='breadcrumb-item active'>Alerts</li>
            </ol>
          </nav>
        </div>
        <section className='section'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='card'>
                <div className='card-body'>
                  <h5 className='card-title'>Default</h5>
                  <div className='alert alert-primary alert-dismissible fade show'>
                    A simple primary alert-check it out
                    <button type='button' className='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>
                  </div>
                  <div className='alert alert-primary alert-dismissible fade show'>
                    A simple primary alert-check it out
                    <button type='button' className='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>
                  </div>
                  <div className='alert alert-primary alert-dismissible fade show'>
                    A simple primary alert-check it out
                    <button type='button' className='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>
                  </div>
                  <div className='alert alert-primary alert-dismissible fade show'>
                    A simple primary alert-check it out
                    <button type='button' className='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>
                  </div>
                  <div className='alert alert-primary alert-dismissible fade show'>
                    A simple primary alert-check it out
                    <button type='button' className='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>
                  </div>
                  <div className='alert alert-primary alert-dismissible fade show'>
                    A simple primary alert-check it out
                    <button type='button' className='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>
                  </div>
                </div>

              </div>
            </div>
            <div className='col-lg-6'>
              <div className='card'>
                <div className='card-body'>
                  <h5 className='card-title'>Default</h5>
                  <div className='alert alert-primary bg-primary text-light border-0 alert-dismissible fade show'>
                    A simple primary alert-check it out
                    <button type='button' className='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>
                  </div>
                  <div className='alert alert-secondary bg-secondary text-light border-0 alert-dismissible fade show'>
                    A simple primary alert-check it out
                    <button type='button' className='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>
                  </div>
                  <div className='alert alert-success bg-success text-light border-0 alert-dismissible fade show'>
                    A simple primary alert-check it out
                    <button type='button' className='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>
                  </div>
                  <div className='alert alert-danger bg-danger text-light border-0 alert-dismissible fade show'>
                    A simple primary alert-check it out
                    <button type='button' className='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>
                  </div>
                  <div className='alert alert-warning bg-warning border-0 alert-dismissible fade show'>
                    A simple primary alert-check it out
                    <button type='button' className='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>
                  </div>
                  <div className='alert alert-info bg-info border-0 alert-dismissible fade show'>
                    A simple primary alert-check it out
                    <button type='button' className='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>
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

export default Alert